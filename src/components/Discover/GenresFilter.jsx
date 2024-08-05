import FilterItem from './FilterItem'

export default function GenresFilter ({ allGenres, genres, setGenres }) {
  return (
    <FilterItem title='Géneros'>
      <div>
        {!allGenres && 'Cargando géneros...'}
        {allGenres &&
          <ul className='flex flex-wrap gap-2 text-sm'>
            {allGenres.genres
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(genre => {
                const isSelected = genres.includes(genre.id)
                const selected = isSelected
                  ? 'bg-yellow-400 text-black border-yellow-400'
                  : 'border-neutral-400'
                const action = isSelected
                  ? () => setGenres(p => p.filter(g => g !== genre.id))
                  : () => setGenres(p => [...p, genre.id])
                return <li key={genre.id} className={'rounded-full border-1 px-3 cursor-pointer leading-6 ' + selected} onClick={action}>{genre.name}</li>
              })}
          </ul>}
      </div>
    </FilterItem>
  )
}
