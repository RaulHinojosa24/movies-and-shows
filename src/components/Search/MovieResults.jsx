import { Await, Link, defer, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { getMoviesByQuery } from '../../utils/http'
import { formatLongDate, retrieveConfig } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultPosterImage from '../../assets/default-poster.png'
import { Suspense, useEffect, useState } from 'react'
import SearchResultsSkeleton from '../Skeletons/SearchResultsSkeleton'

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
                      release_date: releaseDate
                    } = movie
                    return (
                      <MovieCard key={id} id={id} title={title} originalTitle={originalTitle} posterPath={posterPath} overview={overview} releaseDate={releaseDate} />
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

function MovieCard ({ id, title, originalTitle, posterPath, overview, releaseDate }) {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyPosterPath, setPrettyPosterPath] = useState(DefaultPosterImage)

  useEffect(() => {
    if (posterPath) {
      loaderConfig.then(({
        images: {
          secure_base_url: baseURL,
          poster_sizes: posterSizes
        }
      }) => {
        setPrettyPosterPath(baseURL + posterSizes[1] + posterPath)
      })
    }
  }, [loaderConfig, posterPath])

  const prettyReleaseDate = formatLongDate(releaseDate)
  const sameTitle = title === originalTitle

  return (
    <li className='rounded custom-shadow-small flex overflow-hidden'>
      <img
        className='aspect-[2/3] w-24 object-cover'
        src={prettyPosterPath} alt={'Poster de la película ' + (title || originalTitle)}
      />
      <div className='px-4 py-2 space-y-2 flex flex-col justify-center'>
        <div>
          <Link to={`/movie/${id}`} className='w-fit inline-block'>
            <h3 className='font-semibold text-lg'>{title || originalTitle} {!sameTitle && <span className='text-neutral-500 font-normal'>{originalTitle}</span>}</h3>
          </Link>
          <p className='text-neutral-500'>{prettyReleaseDate}</p>
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

export async function loader ({ request, params }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const page = Number(url.searchParams.get('page') || '')

  if (query && Boolean(page) && page > 1) {
    return defer({ data: getMoviesByQuery(query, page) })
  }

  return { data: null }
}
