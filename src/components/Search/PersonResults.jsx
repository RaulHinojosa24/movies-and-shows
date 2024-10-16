import { Await, Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { fetchWithDefer, getPeopleByQuery } from '../../utils/http'
import Pagination from './Pagination'
import DefaultUserImage from '../../assets/default-user.webp'
import { Suspense, useContext } from 'react'
import SearchResultsSkeleton from '../Skeletons/SearchResultsSkeleton'
import { rootContext } from '../../context/root-context'

export default function PersonResults () {
  const { data: loaderData } = useLoaderData()
  const baseLoaderData = useRouteLoaderData('search')

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={loaderData || baseLoaderData?.persons}>
        {loadedData => {
          const persons = loadedData?.results
          const totalPages = loadedData?.total_pages
          const totalResults = loadedData?.total_results

          return (
            <>
              {persons && persons.length > 0 &&
                <ul className='space-y-2'>
                  {persons.map(person => {
                    const {
                      id,
                      known_for_department: knownForDepartment,
                      name,
                      original_name: originalName,
                      profile_path: profilePath,
                      known_for: knownFor
                    } = person

                    return (
                      <PersonCard key={id} id={id} name={name} originalName={originalName} profilePath={profilePath} knownForDepartment={knownForDepartment} knownFor={knownFor} />
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

function PersonCard ({ id, name, originalName, profilePath, knownForDepartment, knownFor }) {
  const { config } = useContext(rootContext)

  const prettyProfilePath = profilePath && config
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[1] + profilePath
    : DefaultUserImage
  const prettyKnownFor = knownFor.map(({ id, media_type: mediaType, name, original_name: originalName, title, original_title: originalTitle }) => ({
    id,
    title: name || originalName || title || originalTitle,
    mediaType
  }))
  const prettyName = name || originalName

  const sameName = prettyName === originalName

  return (
    <li className='rounded shadow shadow-colors flex overflow-hidden'>
      <img
        crossOrigin='anonymous' className='aspect-[5/6] w-24 object-cover' src={prettyProfilePath} alt={'Foto de perfil de ' + prettyName} loading='lazy'
      />
      <div className='px-4 py-2 flex flex-col justify-center'>
        <Link to={`/person/${id}`} className='w-fit inline-block'>
          <h3 className='font-semibold text-lg'>{prettyName} {!sameName && <span className='text-medium font-normal'>{originalName}</span>}</h3>
        </Link>
        <div className='flex font-semibold [&>*+*]:before:content-["·"] [&>*+*]:before:mx-1'>
          <span>{knownForDepartment}</span>
          {knownFor.length > 0 &&
            <p className='[&>*+*]:before:content-[","] [&>*+*]:before:mr-1 font-normal'>
              {prettyKnownFor.map(({ id, mediaType, title }) =>
                <Link key={id} to={`/${mediaType}/${id}`}>{title}</Link>)}
            </p>}
        </div>
      </div>
    </li>
  )
}

function Fallback () {
  return (
    <div className='space-y-2'>
      {Array(10).fill().map((_, i) => <SearchResultsSkeleton key={i} person />)}
    </div>
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
