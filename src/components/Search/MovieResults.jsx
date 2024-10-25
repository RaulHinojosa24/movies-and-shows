import { Await, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { fetchWithDefer, getMoviesByQuery } from '../../utils/http'
import { formatLongDate } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultPosterImage from '../../assets/default-poster.webp'
import { Suspense, useContext } from 'react'
import SearchResultsSkeleton from '../Skeletons/SearchResultsSkeleton'
import { rootContext } from '../../context/root-context'
import ResponsiveCard from '../UI/Cards/ResponsiveCard'
import VoteCard from '../PageUI/VoteCard'

export default function MovieResults () {
  const { config } = useContext(rootContext)
  const { data: loaderData } = useLoaderData()
  const baseLoaderData = useRouteLoaderData('search')

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={loaderData || baseLoaderData?.movies}>
        {loadedData => {
          const movies = loadedData?.results
          const totalPages = loadedData?.total_pages
          const totalResults = loadedData?.total_results

          return (
            <>
              {movies && movies.length > 0 &&
                <ul className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
                  {movies.map(movie => {
                    const {
                      id,
                      title,
                      original_title: originalTitle,
                      poster_path: posterPath,
                      overview,
                      release_date: releaseDate,
                      vote_average: voteAverage,
                      vote_count: voteCount,
                      adult
                    } = movie
                    const prettyPosterPath = config && posterPath
                      ? config?.images?.secure_base_url + config?.images?.poster_sizes[2] + posterPath
                      : DefaultPosterImage
                    const prettyTitle = title || originalTitle
                    const prettyOriginalTitle = title !== originalTitle && originalTitle
                    const prettyDate = formatLongDate(releaseDate)
                    const prettyLink = `/movie/${id}`
                    const voteCard = <VoteCard small rating={voteAverage} count={voteCount} />

                    return <ResponsiveCard key={id} imageUrl={prettyPosterPath} title={prettyTitle} originalTitle={prettyOriginalTitle} bottomLeft={voteCard} overview={overview} isAdult={adult} tertiary={prettyDate} link={prettyLink} />
                  })}
                </ul>}
              {movies && totalResults > 0 && movies.length === 0 &&
                <p>Parece que te has pasado de página, vuelve a la última!</p>}
              {totalResults === 0 &&
                <p>No hemos podido encontrar ninguna película que se adapte a tu búsqueda...</p>}
              {!movies &&
                <p>Adelante, haga una búsqueda!</p>}
              {movies && totalResults > 0 &&
                <Pagination totalPages={totalPages} />}
            </>
          )
        }}
      </Await>
    </Suspense>
  )
}

function Fallback () {
  return (
    <div className='space-y-2'>
      {Array(10).fill().map((_, i) => <SearchResultsSkeleton key={i} />)}
    </div>
  )
}

export async function loader ({ request, params, language, includeAdult }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const page = Number(url.searchParams.get('page') || '')

  if (query && Boolean(page) && page > 1) {
    return fetchWithDefer({ data: () => getMoviesByQuery({ query, page, language, includeAdult }) })
  }

  return { data: null }
}
