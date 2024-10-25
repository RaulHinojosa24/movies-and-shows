import { Await, Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { fetchWithDefer, getPeopleByQuery } from '../../utils/http'
import Pagination from './Pagination'
import DefaultUserImage from '../../assets/default-user.webp'
import { Suspense, useContext } from 'react'
import { rootContext } from '../../context/root-context'
import ElementsList from '../UI/ElementsList'
import ResponsiveCard from '../UI/Cards/ResponsiveCard'
import DiscoverSearchResultsSkeleton from '../../skeleton-pages/DiscoverSearchResultsSkeleton'

export default function PersonResults () {
  const { config } = useContext(rootContext)
  const { data: loaderData } = useLoaderData()
  const baseLoaderData = useRouteLoaderData('search')

  return (
    <Suspense fallback={<DiscoverSearchResultsSkeleton />}>
      <Await resolve={loaderData || baseLoaderData?.persons}>
        {loadedData => {
          const persons = loadedData?.results
          const totalPages = loadedData?.total_pages
          const totalResults = loadedData?.total_results

          return (
            <>
              {persons && persons.length > 0 &&
                <ul className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-8'>
                  {persons.map(person => {
                    const {
                      id,
                      known_for_department: knownForDepartment,
                      name,
                      original_name: originalName,
                      profile_path: profilePath,
                      known_for: knownFor,
                      adult
                    } = person
                    const prettyPosterPath = config && profilePath
                      ? config?.images?.secure_base_url + config?.images?.profile_sizes[2] + profilePath
                      : DefaultUserImage
                    const prettyName = name || originalName
                    const prettyOriginalName = name !== originalName && originalName
                    const prettyLink = `/person/${id}`

                    return (
                      <ResponsiveCard
                        key={id} link={prettyLink} title={prettyName} originalTitle={prettyOriginalName} imageUrl={prettyPosterPath} isAdult={adult}
                        secondary={
                          <ElementsList style='bull'>
                            {knownForDepartment}
                            {knownFor.length > 0 &&
                              <ElementsList style='comma'>
                                {knownFor.map(({ id, media_type: mediaType, name, original_name: originalName, title, original_title: originalTitle }) => {
                                  const prettyTitle = name || originalName || title || originalTitle
                                  return <Link key={id} to={`/${mediaType}/${id}`}>{prettyTitle}</Link>
                                }
                                )}
                              </ElementsList>}
                          </ElementsList>
                        }
                      />
                    )
                  })}
                </ul>}
              {persons && totalResults > 0 && persons.length === 0 &&
                <p>Parece que te has pasado de página, vuelve a la última!</p>}
              {totalResults === 0 &&
                <p>No hemos podido encontrar ninguna persona que se adapte a tu búsqueda...</p>}
              {!persons &&
                <p>Adelante, haga una búsqueda!</p>}
              {persons && totalResults > 0 &&
                <Pagination totalPages={totalPages} />}
            </>
          )
        }}
      </Await>
    </Suspense>
  )
}

export async function loader ({ request, params, language, includeAdult }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const page = Number(url.searchParams.get('page') || '')

  if (query && Boolean(page) && page > 1) {
    return fetchWithDefer({ data: () => getPeopleByQuery({ query, page, language, includeAdult }) })
  }

  return { data: null }
}
