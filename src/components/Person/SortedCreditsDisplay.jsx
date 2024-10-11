import Colapsible from '../UI/Colapsible'
import CreditItem from './CreditItem'

const yearSorting = (a, b) => (
  (a.releaseDate || a.firstAirDate) && (b.releaseDate || b.firstAirDate)
    ? b.sortDate - a.sortDate
    : (a.releaseDate || a.firstAirDate)
        ? 1
        : (b.releaseDate || b.firstAirDate)
            ? -1
            : (a.title || a.name).localeCompare((b.title || b.name))
)

const nameSorting = (a, b) => (
  (a.title || a.name).localeCompare((b.title || b.name))
)
const popularitySorting = (a, b) => (
  b.popularity - a.popularity ||
  (a.title || a.name).localeCompare((b.title || b.name))
)
const ratingSorting = (a, b) => (
  b.voteAverage - a.voteAverage ||
  (a.title || a.name).localeCompare((b.title || b.name))
)

const SORTING_DICT = {
  year: yearSorting,
  name: nameSorting,
  popularity: popularitySorting,
  rating: ratingSorting,
  default: yearSorting
}

export default function SortedCreditsDisplay ({ title, credits, sorting, direction }) {
  const sortedCredits = credits
    .sort((SORTING_DICT[sorting] || SORTING_DICT.default))

  if (direction !== 'desc') sortedCredits.reverse()

  return (
    <Colapsible title={title} subtitle={sortedCredits.length}>
      <ol className='divide-y-1 dark:divide-dark-3 divide-light-4'>
        {sortedCredits.map(cast =>
          <li key={cast.creditId}>
            <CreditItem {...cast} />
          </li>)}
      </ol>
    </Colapsible>
  )
}
