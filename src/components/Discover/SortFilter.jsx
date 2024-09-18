import SortAscIcon from '../../icons/SortAscIcon'
import SortDescIcon from '../../icons/SortDescIcon'
import Select from '../UI/Select'
import FilterItem from './FilterItem'

export default function SortFilter ({ sortBy, setSortBy, sortDirection, setSortDirection, options }) {
  return (
    <FilterItem title='Ordenar por' className='flex justify-between gap-2'>
      <Select
        compact
        name='sort-by'
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        options={options}
      />
      <button type='button' className='rounded custom-shadow-small px-2' onClick={() => setSortDirection(p => p === 'asc' ? 'desc' : 'asc')}>
        {sortDirection === 'asc'
          ? <SortAscIcon />
          : <SortDescIcon />}
      </button>
    </FilterItem>
  )
}
