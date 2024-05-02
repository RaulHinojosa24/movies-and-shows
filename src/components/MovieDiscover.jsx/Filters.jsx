import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useMinMaxRange from '../../hooks/useMinMaxRange'
import SortFilter from './SortFilter'
import AdultFilter from './AdultFilter'
import AvailabilityFilter from './AvailabilityFilter'
import DatesFilter from './DatesFilter'
import Tags from '../UI/Tags'
import GenresFilter from './GenresFilter'

const VALID_SORT_BY = ['popularity', 'vote_average', 'primary_release_date', 'title', 'original_title', 'revenue', 'vote_count']
const VALID_SORT_DIRECTION = ['desc', 'asc']
const VALID_INCLUDE_ADULT = [false, true]
const WATCH_TYPES = ['flatrate', 'free', 'ads', 'rent', 'buy']
const VOTE_RANGE = ['0.0', '10.0']
const DURATION_RANGE = ['0', '400']

export default function Filters () {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBySP = searchParams.get('sort_by')
  const sortDirectionSP = searchParams.get('sort_direction')
  const includeAdultSP = searchParams.get('include_adult') === 'true'
  const watchTypesSP = searchParams.get('watch_types')
    ? searchParams.get('watch_types').split('|').filter(i => WATCH_TYPES.includes(i))
    : null
  const voteMinSP = searchParams.get('vote_min')
  const voteMaxSP = searchParams.get('vote_max')
  const durationMinSP = searchParams.get('duration_min')
  const durationMaxSP = searchParams.get('duration_max')
  const fromDateSP = searchParams.get('from_date')
  const toDateSP = searchParams.get('to_date')
  const genresSP = searchParams.get('genres')
  const tagsSP = searchParams.get('tags')

  const [sortBy, setSortBy] = useState(VALID_SORT_BY.includes(sortBySP) ? sortBySP : 'popularity')
  const [sortDirection, setSortDirection] = useState(VALID_SORT_DIRECTION.includes(sortDirectionSP) ? sortDirectionSP : 'desc')
  const [includeAdult, setIncludeAdult] = useState(VALID_INCLUDE_ADULT.includes(includeAdultSP) ? includeAdultSP : false)
  const [watchTypes, setWatchTypes] = useState(watchTypesSP || WATCH_TYPES)
  const [voteMin, voteMax, voteAvgRange, setVoteMin, setVoteMax] = useMinMaxRange(VOTE_RANGE[0], VOTE_RANGE[1], 0.1, '', Number(voteMinSP), Number(voteMaxSP))
  const [durationMin, durationMax, durationRange, setDurationMin, setDurationMax] = useMinMaxRange(DURATION_RANGE[0], DURATION_RANGE[1], 1, '', Number(durationMinSP), Number(durationMaxSP))
  const [fromDate, setFromDate] = useState(fromDateSP || '')
  const [toDate, setToDate] = useState(toDateSP || '')
  const [genres, setGenres] = useState(genresSP ? genresSP.split('|').map(Number) : [])
  const [tags, setTags] = useState(tagsSP
    ? tagsSP.split('|').map(w => {
      const [id, name] = w.split('%')
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
    if (watchTypes.length > 0 && watchTypes.length < WATCH_TYPES.length) newSearchParams.watch_types = watchTypes.join('|')
    if (VOTE_RANGE[0] !== voteMin) newSearchParams.vote_min = voteMin
    if (VOTE_RANGE[1] !== voteMax) newSearchParams.vote_max = voteMax
    if (DURATION_RANGE[0] !== durationMin) newSearchParams.duration_min = durationMin
    if (DURATION_RANGE[1] !== durationMax) newSearchParams.duration_max = durationMax
    if (fromDate) newSearchParams.from_date = fromDate
    if (toDate) newSearchParams.to_date = toDate
    if (genres.length > 0) newSearchParams.genres = genres.join('|')
    if (tags.length > 0) newSearchParams.tags = tags.map(tag => tag.id + '%' + tag.name).join('|')

    setSearchParams(newSearchParams)
  }

  const resetFilters = () => {
    setSortBy('popularity')
    setSortDirection('desc')
    setIncludeAdult(false)
    setWatchTypes(WATCH_TYPES)
    setVoteMin(VOTE_RANGE[0])
    setVoteMax(VOTE_RANGE[1])
    setDurationMin(DURATION_RANGE[0])
    setDurationMax(DURATION_RANGE[1])
    setFromDate('')
    setToDate('')
    setGenres([])
    setTags([])

    setSearchParams({})
  }

  return (
    <form action='/' onSubmit={submitFormHandler}>
      <SortFilter sortBy={sortBy} setSortBy={setSortBy} sortDirection={sortDirection} setSortDirection={setSortDirection} />
      <AdultFilter includeAdult={includeAdult} setIncludeAdult={setIncludeAdult} />
      <AvailabilityFilter watchTypes={watchTypes} setWatchTypes={setWatchTypes} />
      <div>
        <h3>Valoración media</h3>
        {voteAvgRange}
      </div>
      <div>
        <h3>Duración (minutos)</h3>
        {durationRange}
      </div>
      <DatesFilter fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate} />
      <GenresFilter genres={genres} setGenres={setGenres} />
      <Tags tags={tags} setTags={setTags} />
      <button className='py-1 px-5 w-full rounded whitespace-nowrap font-semibold bg-yellow-400 text-black' type='submit'>Buscar</button>
      <button className='py-1 px-5 w-full rounded whitespace-nowrap font-semibold bg-neutral-200 text-black' type='button' onClick={resetFilters}>Limpiar filtros</button>
    </form>
  )
}
