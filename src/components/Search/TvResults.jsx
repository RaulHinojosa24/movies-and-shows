import { Await, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { fetchWithDefer, getTvByQuery } from '../../utils/http'
import { formatLongDate } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultPosterImage from '../../assets/default-poster.webp'
import { Suspense, useContext } from 'react'
import { rootContext } from '../../context/root-context'
import ResponsiveCard from '../UI/Cards/ResponsiveCard'
import VoteCard from '../PageUI/VoteCard'
import DiscoverSearchResultsSkeleton from '../../skeleton-pages/DiscoverSearchResultsSkeleton'

export default function TvResults () {
  const { config } = useContext(rootContext)
  const { data: loaderData } = useLoaderData()
  const baseLoaderData = useRouteLoaderData('search')

  return (
    <Suspense fallback={<DiscoverSearchResultsSkeleton />}>
      <Await resolve={loaderData || baseLoaderData?.tvs}>
        {loadedData => {
          const tvs = loadedData?.results
          const totalPages = loadedData?.total_pages
          const totalResults = loadedData?.total_results

          return (
            <>
              {tvs && tvs.length > 0 &&
                <ul className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
                  {tvs.map(tv => {
                    const {
                      id,
                      name,
                      original_name: originalName,
                      poster_path: posterPath,
                      overview,
                      first_air_date: firstAirDate,
                      vote_average: voteAverage,
                      vote_count: voteCount,
                      adult
                    } = tv

                    const prettyPosterPath = config && posterPath
                      ? config?.images?.secure_base_url + config?.images?.poster_sizes[2] + posterPath
                      : DefaultPosterImage
                    const prettyName = name || originalName
                    const prettyOriginalName = name !== originalName && originalName
                    const prettyDate = formatLongDate(firstAirDate)
                    const prettyLink = `/tv/${id}`
                    const voteCard = <VoteCard small rating={voteAverage} count={voteCount} />

                    return <ResponsiveCard key={id} link={prettyLink} imageUrl={prettyPosterPath} title={prettyName} originalTitle={prettyOriginalName} bottomLeft={voteCard} overview={overview} isAdult={adult} tertiary={prettyDate} />
                  })}
                </ul>}
              {tvs && totalResults > 0 && tvs.length === 0 &&
                <p>Parece que te has pasado de página, vuelve a la última!</p>}
              {totalResults === 0 &&
                <p>No hemos podido encontrar ninguna serie de tv que se adapte a tu búsqueda...</p>}
              {!tvs &&
                <p>Adelante, haga una búsqueda!</p>}
              {tvs && totalResults > 0 &&
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
    return fetchWithDefer({ data: () => getTvByQuery({ query, page, language, includeAdult }) })
  }

  return { data: null }
}
