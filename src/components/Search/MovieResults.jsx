import { Await, Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { fetchWithDefer, getMoviesByQuery } from '../../utils/http'
import { formatLongDate } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultPosterImage from '../../assets/default-poster.webp'
import { Suspense, useContext } from 'react'
import SearchResultsSkeleton from '../Skeletons/SearchResultsSkeleton'
import { rootContext } from '../../context/root-context'
import AdultTag from '../PageUI/AdultTag'

export default function MovieResults () {
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
                <ul className='space-y-2'>
                  {movies.map(movie => {
                    const {
                      id,
                      title,
                      original_title: originalTitle,
                      poster_path: posterPath,
                      overview,
                      release_date: releaseDate,
                      adult
                    } = movie
                    return (
                      <MovieCard key={id} id={id} title={title} originalTitle={originalTitle} posterPath={posterPath} overview={overview} releaseDate={releaseDate} adult={adult} />
                    )
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

function MovieCard ({ id, title, originalTitle, posterPath, overview, releaseDate, adult }) {
  const { config } = useContext(rootContext)

  const prettyPosterPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[1] + posterPath
    : DefaultPosterImage
  const prettyReleaseDate = formatLongDate(releaseDate)
  const prettyTitle = title || originalTitle

  const sameTitle = title === originalTitle

  return (
    <li className='rounded shadow shadow-colors flex overflow-hidden'>
      <Link to={`/movie/${id}`} className='aspect-[2/3] w-24 max-w-24 shrink-0'>
        <img
          loading='lazy' crossOrigin='anonymous' className='object-cover w-full h-full'
          src={prettyPosterPath} alt={'Poster de la película ' + prettyTitle}
        />
      </Link>
      <div className='px-4 py-2 space-y-2 flex flex-col justify-center'>
        <div>
          <div>
            <h3 className='font-semibold text-lg inline-block mr-2'>
              <Link to={`/movie/${id}`}>
                {prettyTitle} {!sameTitle && <span className='text-medium font-normal'>{originalTitle}</span>}
              </Link>
            </h3>
            {adult &&
              <AdultTag />}
          </div>
          <p className='text-medium'>{prettyReleaseDate}</p>
        </div>
        <p className='line-clamp-2'>{overview}</p>
      </div>
    </li>
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
