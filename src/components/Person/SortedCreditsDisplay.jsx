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

const SORTING_DICT = {
  year: yearSorting,
  name: nameSorting,
  default: yearSorting
}

export default function SortedCreditsDisplay ({ title, credits, sorting }) {
  const sortedCredits = credits
    .sort((SORTING_DICT[sorting] || SORTING_DICT.default))

  return (
    <Colapsible title={title} subtitle={sortedCredits.length} className='custom-shadow-small'>
      <ol className='divide-y-1 divide-neutral-700'>
        {sortedCredits.map(cast =>
          <li key={cast.creditId}>
            <CreditItem {...cast} />
          </li>)}
      </ol>
    </Colapsible>
  )
}
