import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SortFilter from './SortFilter'
import AdultFilter from './AdultFilter'
import AvailabilityFilter from './AvailabilityFilter'
import DatesFilter from './DatesFilter'
import GenresFilter from './GenresFilter'
import FilterGroup from './FilterGroup'
import DurationFilter from './DurationFilter'
import VoteAverageFilter from './VoteAverageFilter'
import VoteCountFilter from './VoteCountFilter'
import KeywordsFilter from './KeywordsFilter'

const VALID_SORT_BY = ['popularity', 'vote_average', 'primary_release_date', 'title', 'original_title', 'revenue', 'vote_count']
const VALID_SORT_DIRECTION = ['desc', 'asc']
const VALID_INCLUDE_ADULT = [false, true]
const VALID_WATCH_TYPES = ['flatrate', 'free', 'ads', 'rent', 'buy']
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
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBySP = searchParams.get('sort_by')
  const sortDirectionSP = searchParams.get('sort_direction')
  const includeAdultSP = searchParams.get('include_adult') === 'true'
  const watchTypesSP = searchParams.get('watch_types')
    ? searchParams.get('watch_types').split('|').filter(i => VALID_WATCH_TYPES.includes(i))
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

  const [sortBy, setSortBy] = useState(VALID_SORT_BY.includes(sortBySP) ? sortBySP : 'popularity')
  const [sortDirection, setSortDirection] = useState(VALID_SORT_DIRECTION.includes(sortDirectionSP) ? sortDirectionSP : 'desc')
  const [includeAdult, setIncludeAdult] = useState(VALID_INCLUDE_ADULT.includes(includeAdultSP) ? includeAdultSP : false)
  const [watchTypes, setWatchTypes] = useState(watchTypesSP || VALID_WATCH_TYPES)
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

  const submitFormHandler = (event) => {
    event.preventDefault()

    const newSearchParams = {}

    if (includeAdult !== false) newSearchParams.include_adult = includeAdult
    if (sortBy !== 'popularity') newSearchParams.sort_by = sortBy
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

    setSearchParams(newSearchParams)
  }

  const resetFilters = () => {
    setSortBy('popularity')
    setSortDirection('desc')
    setIncludeAdult(false)
    setWatchTypes(VALID_WATCH_TYPES)
    setVoteCount(VOTE_COUNT_RANGE[0])
    setVoteMin(VOTE_AVERAGE_RANGE[0])
    setVoteMax(VOTE_AVERAGE_RANGE[1])
    setDurationMin(DURATION_RANGE[0])
    setDurationMax(DURATION_RANGE[1])
    setFromDate('')
    setToDate('')
    setGenres([])
    setKeywords([])

    setSearchParams({})
  }

  return (
    <form action='/' onSubmit={submitFormHandler} className='space-y-4'>
      <FilterGroup title='Ordenar'>
        <SortFilter
          sortBy={sortBy} setSortBy={setSortBy}
          sortDirection={sortDirection} setSortDirection={setSortDirection}
        />
        <AdultFilter
          includeAdult={includeAdult}
          setIncludeAdult={setIncludeAdult}
        />
      </FilterGroup>
      <FilterGroup title='Proveedores'>
        <AvailabilityFilter
          watchTypes={watchTypes}
          setWatchTypes={setWatchTypes}
        />
      </FilterGroup>
      <FilterGroup title='Detalles'>
        <DurationFilter
          durationMin={durationMin} durationMax={durationMax}
          setDurationMin={setDurationMin} setDurationMax={setDurationMax}
        />
        <DatesFilter
          fromDate={fromDate} toDate={toDate}
          setFromDate={setFromDate} setToDate={setToDate}
        />
        <GenresFilter
          genres={genres}
          setGenres={setGenres}
        />
        <KeywordsFilter
          keywords={keywords}
          setKeywords={setKeywords}
        />
      </FilterGroup>
      <FilterGroup title='Usuarios'>
        <VoteCountFilter
          voteCount={voteCount}
          setVoteCount={setVoteCount}
        />
        <VoteAverageFilter
          voteMin={voteMin} voteMax={voteMax}
          setVoteMin={setVoteMin} setVoteMax={setVoteMax}
        />
      </FilterGroup>
      <button className='py-1 px-5 w-full rounded whitespace-nowrap font-semibold bg-yellow-400 text-black' type='submit'>Buscar</button>
      <button className='py-1 px-5 w-full rounded whitespace-nowrap font-semibold bg-neutral-200 text-black' type='button' onClick={resetFilters}>Limpiar filtros</button>
    </form>
  )
}
