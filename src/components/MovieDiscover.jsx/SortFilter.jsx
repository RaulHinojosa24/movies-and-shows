import SortAscIcon from '../../icons/SortAscIcon'
import SortDescIcon from '../../icons/SortDescIcon'
import Select from '../UI/Select'
import FilterItem from './FilterItem'

export default function SortFilter ({ sortBy, setSortBy, sortDirection, setSortDirection }) {
  return (
    <FilterItem title='Ordenar por' className='flex gap-4 justify-center'>
      <Select
        name='sort-by'
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        options={[
          {
            value: 'popularity',
            label: 'Popularidad'
          },
          {
            value: 'vote_average',
            label: 'Valoración media'
          },
          {
            value: 'primary_release_date',
            label: 'Fecha de estreno'
          },
          {
            value: 'title',
            label: 'Título'
          },
          {
            value: 'original_title',
            label: 'Título original'
          },
          {
            value: 'revenue',
            label: 'Ingresos'
          },
          {
            value: 'vote_count',
            label: 'Número de votos'
          }
        ]}
      />
      <button type='button' className='rounded custom-shadow-small px-2' onClick={() => setSortDirection(p => p === 'asc' ? 'desc' : 'asc')}>
        {sortDirection === 'asc'
          ? <SortAscIcon />
          : <SortDescIcon />}
      </button>
    </FilterItem>
  )
}
