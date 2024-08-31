import { Await, defer, useLoaderData } from 'react-router-dom'
import Filters from '../components/MovieDiscover/Filters'
import Results from '../components/MovieDiscover/Results'
import Main from '../components/PageUI/Main'
import { discoverMovies, getMovieProviders } from '../utils/http'
import { setDocTitle } from '../utils/utility'
import Pagination from '../components/Search/Pagination'
import { Suspense } from 'react'
import DiscoverResultsSkeleton from '../skeleton-pages/DiscoverResultsSkeleton'

export default function MovieDiscoverPage () {
  const {
    data: loaderDiscoverMovies
  } = useLoaderData()

  setDocTitle('Descubrir películas')

  return (
    <Main
      left={
        <Filters />
      }
      center={
        <Suspense fallback={<DiscoverResultsSkeleton />}>
          <Await resolve={loaderDiscoverMovies}>
            {({
              total_pages: totalPages,
              results
            }) => (
              <>
                <Results results={results} />
                <Pagination totalPages={totalPages} />
              </>
            )}
          </Await>
        </Suspense>
      }
    />
  )
}

export async function loader ({ request, params }) {
  const sortBy = new URL(request.url).searchParams.get('sort_by')
  const sortDirection = new URL(request.url).searchParams.get('sort_direction')
  const includeAdult = new URL(request.url).searchParams.get('include_adult')
  const watchTypes = new URL(request.url).searchParams.get('watch_types')
  const voteCount = new URL(request.url).searchParams.get('vote_count')
  const voteMin = new URL(request.url).searchParams.get('vote_min')
  const voteMax = new URL(request.url).searchParams.get('vote_max')
  const durationMin = new URL(request.url).searchParams.get('duration_min')
  const durationMax = new URL(request.url).searchParams.get('duration_max')
  const fromDate = new URL(request.url).searchParams.get('from_date')
  const toDate = new URL(request.url).searchParams.get('to_date')
  const genres = new URL(request.url).searchParams.get('genres')
  const keywords = new URL(request.url).searchParams.get('keywords')
  const watchProvs = new URL(request.url).searchParams.get('watch_providers')
  const page = new URL(request.url).searchParams.get('page')

  return defer({
    data: discoverMovies({
      sortBy,
      sortDirection,
      includeAdult,
      watchTypes,
      voteCount,
      voteMin,
      voteMax,
      durationMin,
      durationMax,
      fromDate,
      toDate,
      genres,
      keywords,
      watchProviders: watchProvs,
      page
    }),
    watchProviders: getMovieProviders()
  })
}
