import Filters from '../components/TvDiscover/Filters'
import Results from '../components/TvDiscover/Results'
import Main from '../components/PageUI/Main'
import { discoverTvs, getTvProviders } from '../utils/http'
import { setDocTitle } from '../utils/utility'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'
import Pagination from '../components/Search/Pagination'
import DiscoverResultsSkeleton from '../skeleton-pages/DiscoverResultsSkeleton'

export default function TvDiscoverPage () {
  const {
    data: loaderDiscoverTvs
  } = useLoaderData()

  setDocTitle('Descubrir series de tv')

  return (
    <Main
      left={
        <Filters />
      }
      center={
        <Suspense fallback={<DiscoverResultsSkeleton />}>
          <Await resolve={loaderDiscoverTvs}>
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

export async function loader ({ request, params, language, region, allowAdultContent }) {
  const url = new URL(request.url)
  const sortBy = url.searchParams.get('sort_by')
  const sortDirection = url.searchParams.get('sort_direction')
  const watchTypes = url.searchParams.get('watch_types')
  const voteCount = url.searchParams.get('vote_count')
  const voteMin = url.searchParams.get('vote_min')
  const voteMax = url.searchParams.get('vote_max')
  const durationMin = url.searchParams.get('duration_min')
  const durationMax = url.searchParams.get('duration_max')
  const fromDate = url.searchParams.get('from_date')
  const toDate = url.searchParams.get('to_date')
  const genres = url.searchParams.get('genres')
  const keywords = url.searchParams.get('keywords')
  const watchProvs = url.searchParams.get('watch_providers')
  const page = url.searchParams.get('page')

  return defer({
    data: discoverTvs({
      language,
      region,
      allowAdultContent,
      sortBy,
      sortDirection,
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
    watchProviders: getTvProviders({ language, region })
  })
}
