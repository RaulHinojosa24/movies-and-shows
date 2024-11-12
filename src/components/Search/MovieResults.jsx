import { Await, useLoaderData, useRouteLoaderData, useSearchParams } from 'react-router-dom'
import { fetchWithDefer, getMoviesByQuery } from '../../utils/http'
import { formatLongDate } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultPosterImage from '../../assets/default-poster.webp'
import { Suspense, useContext } from 'react'
import { rootContext } from '../../context/root-context'
import ResponsiveCard from '../UI/Cards/ResponsiveCard'
import VoteCard from '../PageUI/VoteCard'
import DiscoverSearchResultsSkeleton from '../../skeleton-pages/DiscoverSearchResultsSkeleton'
import { settingsContext } from '../../context/settings-context'

export default function MovieResults () {
  const { config } = useContext(rootContext)
  const { country, language } = useContext(settingsContext)
  const { data: loaderData } = useLoaderData()
  const baseLoaderData = useRouteLoaderData('search')
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')

  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`

  return (
    <Suspense fallback={<DiscoverSearchResultsSkeleton />}>
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
                    const prettyDate = formatLongDate(releaseDate, appLanguage)
                    const prettyLink = `/movie/${id}`
                    const voteCard = <VoteCard small rating={voteAverage} count={voteCount} />

                    return <ResponsiveCard key={id} imageUrl={prettyPosterPath} title={prettyTitle} originalTitle={prettyOriginalTitle} bottomLeft={voteCard} overview={overview} isAdult={adult} tertiary={prettyDate} link={prettyLink} />
                  })}
                </ul>}
              {movies && totalResults > 0 && movies.length === 0 &&
                <p>Seems like you are far far away from your place, go back some pages!</p>}
              {totalResults === 0 &&
                <p>We couldn't find no movies{query ? ` with "${query}"` : ''}.</p>}
              {!movies &&
                <p>Come on, do a search!</p>}
              {movies && totalResults > 0 &&
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
    return fetchWithDefer({ data: () => getMoviesByQuery({ query, page, language, includeAdult }) })
  }

  return { data: null }
}
