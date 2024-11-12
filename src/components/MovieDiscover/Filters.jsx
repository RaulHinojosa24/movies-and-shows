import { useContext, useEffect, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import SortFilter from '../Discover/SortFilter'
import AvailabilityFilter from '../Discover/AvailabilityFilter'
import DatesFilter from '../Discover/DatesFilter'
import GenresFilter from '../Discover/GenresFilter'
import Colapsible from '../UI/Colapsible'
import DurationFilter from '../Discover/DurationFilter'
import VoteAverageFilter from '../Discover/VoteAverageFilter'
import VoteCountFilter from '../Discover/VoteCountFilter'
import KeywordsFilter from '../Discover/KeywordsFilter'
import WatchProvidersFilter from '../Discover/WatchProvidersFilter'
import { rootContext } from '../../context/root-context'

const VALID_SORT_BY = [
  {
    value: 'popularity',
    label: 'Popularity'
  },
  {
    value: 'vote_average',
    label: 'Average rating'
  },
  {
    value: 'primary_release_date',
    label: 'Release date'
  },
  {
    value: 'title',
    label: 'Title'
  },
  {
    value: 'original_title',
    label: 'Original title'
  },
  {
    value: 'revenue',
    label: 'Revenue'
  },
  {
    value: 'vote_count',
    label: 'Number of ratings'
  }
]
const VALID_SORT_DIRECTION = ['desc', 'asc']
const VALID_WATCH_TYPES = [
  {
    label: 'Stream',
    value: 'flatrate'
  },
  {
    label: 'Free',
    value: 'free'
  },
  {
    label: 'Ads',
    value: 'ads'
  },
  {
    label: 'Rent',
    value: 'rent'
  },
  {
    label: 'Buy',
    value: 'buy'
  }
]
const VOTE_AVERAGE_RANGE = [0, 10]
const VOTE_COUNT_RANGE = [0, 500]
const DURATION_RANGE = [0, 400]

const calculateMinRange = (minSP, maxSP, range) => {
  return minSP && minSP >= range[0] && (maxSP && maxSP <= range[1] ? minSP <= maxSP : minSP <= range[1])
    ? minSP
    : range[0]
}
const calculateMaxRange = (minSP, maxSP, range) => {
  return maxSP && maxSP <= range[1] && (minSP && minSP >= range[0] ? maxSP >= minSP : maxSP >= range[0])
    ? maxSP
    : range[1]
}

export default function Filters () {
  const { movieGenres } = useContext(rootContext)
  const { watchProviders: loaderWatchProviders } = useLoaderData()

  const [watchProvidersList, setWatchProvidersList] = useState(undefined)
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBySP = searchParams.get('sort_by')
  const sortDirectionSP = searchParams.get('sort_direction')
  const watchTypesSP = searchParams.get('watch_types')
    ? searchParams.get('watch_types').split('|').filter(i => VALID_WATCH_TYPES.some(wt => wt.value === i))
    : null
  const voteMinSP = searchParams.get('vote_min')
  const voteMaxSP = searchParams.get('vote_max')
  const voteCountSP = Number(searchParams.get('vote_count'))
  const durationMinSP = Number(searchParams.get('duration_min'))
  const durationMaxSP = Number(searchParams.get('duration_max'))
  const fromDateSP = searchParams.get('from_date')
  const toDateSP = searchParams.get('to_date')
  const genresSP = searchParams.get('genres')
  const keywordsSP = searchParams.get('keywords')
  const watchProvidersSP = searchParams.get('watch_providers')

  const [sortBy, setSortBy] = useState(VALID_SORT_BY.some(sb => sb.value === sortBySP) ? sortBySP : VALID_SORT_BY[0].value)
  const [sortDirection, setSortDirection] = useState(VALID_SORT_DIRECTION.includes(sortDirectionSP) ? sortDirectionSP : 'desc')
  const [watchTypes, setWatchTypes] = useState(watchTypesSP || VALID_WATCH_TYPES.map(wt => wt.value))
  const [voteCount, setVoteCount] = useState(voteCountSP && voteCountSP >= VOTE_COUNT_RANGE[0] && voteCountSP <= VOTE_COUNT_RANGE[1]
    ? voteCountSP
    : 0)
  const [durationMin, setDurationMin] = useState(calculateMinRange(durationMinSP, durationMaxSP, DURATION_RANGE))
  const [durationMax, setDurationMax] = useState(calculateMaxRange(durationMinSP, durationMaxSP, DURATION_RANGE))
  const [voteMin, setVoteMin] = useState(calculateMinRange(voteMinSP, voteMaxSP, VOTE_AVERAGE_RANGE))
  const [voteMax, setVoteMax] = useState(calculateMaxRange(voteMinSP, voteMaxSP, VOTE_AVERAGE_RANGE))
  const [fromDate, setFromDate] = useState(fromDateSP || '')
  const [toDate, setToDate] = useState(toDateSP || '')
  const [genres, setGenres] = useState(genresSP ? genresSP.split('|').map(Number) : [])
  const [keywords, setKeywords] = useState(keywordsSP
    ? keywordsSP.split('|').map(kw => {
      const [id, name] = kw.split('%')
      return { id: Number(id), name }
    })
    : []
  )
  const [watchProviders, setWatchProviders] = useState(watchProvidersSP
    ? watchProvidersSP.split('|').map(Number)
    : [])

  useEffect(() => {
    loaderWatchProviders.then(({ results }) => setWatchProvidersList(results))
  }, [loaderWatchProviders])

  const submitFormHandler = (event) => {
    event.preventDefault()

    const newSearchParams = {}

    if (sortBy !== VALID_SORT_BY[0].value) newSearchParams.sort_by = sortBy
    if (sortDirection !== 'desc') newSearchParams.sort_direction = sortDirection
    if (watchTypes.length > 0 && watchTypes.length < VALID_WATCH_TYPES.length) newSearchParams.watch_types = watchTypes.join('|')
    if (VOTE_AVERAGE_RANGE[0] !== voteMin) newSearchParams.vote_min = voteMin
    if (VOTE_AVERAGE_RANGE[1] !== voteMax) newSearchParams.vote_max = voteMax
    if (DURATION_RANGE[0] !== durationMin) newSearchParams.duration_min = durationMin
    if (DURATION_RANGE[1] !== durationMax) newSearchParams.duration_max = durationMax
    if (fromDate) newSearchParams.from_date = fromDate
    if (toDate) newSearchParams.to_date = toDate
    if (genres.length > 0) newSearchParams.genres = genres.join('|')
    if (keywords.length > 0) newSearchParams.keywords = keywords.map(tag => tag.id + '%' + tag.name).join('|')
    if (voteCount > VOTE_COUNT_RANGE[0]) newSearchParams.vote_count = voteCount
    if (watchProviders.length > 0) newSearchParams.watch_providers = watchProviders.join('|')

    setSearchParams(newSearchParams)
  }

  const resetFilters = () => {
    setSortBy(VALID_SORT_BY[0].value)
    setSortDirection('desc')
    setWatchTypes(VALID_WATCH_TYPES.map(wt => wt.value))
    setVoteCount(VOTE_COUNT_RANGE[0])
    setVoteMin(VOTE_AVERAGE_RANGE[0])
    setVoteMax(VOTE_AVERAGE_RANGE[1])
    setDurationMin(DURATION_RANGE[0])
    setDurationMax(DURATION_RANGE[1])
    setFromDate('')
    setToDate('')
    setGenres([])
    setKeywords([])
    setWatchProviders([])

    setSearchParams({})
  }

  return (
    <form action='/' onSubmit={submitFormHandler} className='space-y-4'>
      <Colapsible title='Sort By'>
        <SortFilter
          options={VALID_SORT_BY}
          sortBy={sortBy} setSortBy={setSortBy}
          sortDirection={sortDirection} setSortDirection={setSortDirection}
        />
      </Colapsible>
      <Colapsible title='Where To Watch'>
        <WatchProvidersFilter
          watchProvidersList={watchProvidersList}
          watchProviders={watchProviders}
          setWatchProviders={setWatchProviders}
        />
        <AvailabilityFilter
          watchTypes={watchTypes}
          setWatchTypes={setWatchTypes}
          options={VALID_WATCH_TYPES}
        />
      </Colapsible>
      <Colapsible title='Details'>
        <DurationFilter
          durationRange={DURATION_RANGE}
          durationMin={durationMin} durationMax={durationMax}
          setDurationMin={setDurationMin} setDurationMax={setDurationMax}
        />
        <DatesFilter
          fromDate={fromDate} toDate={toDate}
          setFromDate={setFromDate} setToDate={setToDate}
        />
        <GenresFilter
          allGenres={movieGenres}
          genres={genres}
          setGenres={setGenres}
        />
        <KeywordsFilter
          keywords={keywords}
          setKeywords={setKeywords}
        />
      </Colapsible>
      <Colapsible title='Users'>
        <VoteCountFilter
          voteCountRange={VOTE_COUNT_RANGE}
          voteCount={voteCount}
          setVoteCount={setVoteCount}
        />
        <VoteAverageFilter
          voteAverageRange={VOTE_AVERAGE_RANGE}
          voteMin={voteMin} voteMax={voteMax}
          setVoteMin={setVoteMin} setVoteMax={setVoteMax}
        />
      </Colapsible>
      <button className='py-1 px-5 w-full rounded whitespace-nowrap font-semibold bg-accent text-black' type='submit'>Search</button>
      <button className='py-1 px-5 w-full rounded whitespace-nowrap font-semibold bg-light-3 text-black' type='button' onClick={resetFilters}>Reset filters</button>
    </form>
  )
}
