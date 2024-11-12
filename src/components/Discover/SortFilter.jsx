import SortAscIcon from '../../icons/SortAscIcon'
import SortDescIcon from '../../icons/SortDescIcon'
import Select from '../UI/Select'
import FilterItem from './FilterItem'

export default function SortFilter ({ sortBy, setSortBy, sortDirection, setSortDirection, options }) {
  return (
    <FilterItem title='Sort By' className='flex justify-between gap-2'>
      <Select
        name='sort-by'
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        options={options}
      />
      <button type='button' className='shadow shadow-colors rounded aspect-square px-2' onClick={() => setSortDirection(p => p === 'asc' ? 'desc' : 'asc')}>
        {sortDirection === 'asc'
          ? <SortAscIcon />
          : <SortDescIcon />}
      </button>
    </FilterItem>
  )
}
