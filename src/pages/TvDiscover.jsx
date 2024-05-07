import Filters from '../components/TvDiscover/Filters'
import Results from '../components/TvDiscover/Results'
import Main from '../components/PageUI/Main'
import { discoverTvs, getTvProviders } from '../utils/http'
import { setDocTitle } from '../utils/utility'

export default function TvDiscoverPage () {
  setDocTitle('Descubrir series de tv')

  return (
    <Main
      left={
        <Filters />
      }
      center={
        <Results />
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

  const [data, watchProviders] = await Promise.all([
    discoverTvs({
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
      watchProviders: watchProvs
    }).then(res => res.json()),
    getTvProviders().then(res => res.json())
  ])

  return { data, watchProviders }
}
