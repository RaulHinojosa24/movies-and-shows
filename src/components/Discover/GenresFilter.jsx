import FilterItem from './FilterItem'

export default function GenresFilter ({ allGenres, genres, setGenres }) {
  return (
    <FilterItem title='Genres'>
      <div>
        {!allGenres && 'Loading genres...'}
        {allGenres &&
          <ul className='flex flex-wrap gap-2 text-sm'>
            {allGenres.genres
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(genre => {
                const isSelected = genres.includes(genre.id)
                const selected = isSelected
                  ? 'bg-accent text-black border-accent'
                  : 'border-medium'
                const action = isSelected
                  ? () => setGenres(p => p.filter(g => g !== genre.id))
                  : () => setGenres(p => [...p, genre.id])
                return <li key={genre.id} className={'rounded transition-all border-1 px-3 cursor-pointer leading-6 hover:border-accent ' + selected} onClick={action}>{genre.name}</li>
              })}
          </ul>}
      </div>
    </FilterItem>
  )
}
