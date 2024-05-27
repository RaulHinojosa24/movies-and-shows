import { useState } from 'react'
import Select from '../UI/Select'
import SortAscIcon from '../../icons/SortAscIcon'
import SortDescIcon from '../../icons/SortDescIcon'
import CollectionListItem from './CollectionListItem'

export default function CollectionList ({ parts }) {
  const options = [
    {
      value: 'release-date',
      label: 'Fecha de estreno'
    },
    {
      value: 'popularity',
      label: 'Popularidad'
    },
    {
      value: 'rating',
      label: 'Valoración'
    }
  ]

  const [sortBy, setSortBy] = useState('release-date')
  const [isAsc, setIsAsc] = useState(true)

  const sortedParts = [...parts]
    .sort((a, b) => {
      const [l, r] = isAsc ? [a, b] : [b, a]

      if (sortBy === 'release-date') {
        return new Date(l.release_date) - new Date(r.release_date)
      }
      if (sortBy === 'popularity') {
        return l.popularity - r.popularity
      }
      if (sortBy === 'rating') {
        return l.vote_average - r.vote_average
      }

      return 0
    })

  if (parts.length === 0) {
    return (
      <p>Ésta colección no contiene ninguna película.</p>
    )
  }

  return (
    <section className='mt-8'>
      <div className='grid grid-flow-col auto-cols-max gap-4 my-4'>
        <Select name='collection-movies-sorting' options={options} onChange={e => setSortBy(e.target.value)} label='Ordenar por' />
        <button className='custom-shadow-small aspect-square grid place-items-center self-stretch' onClick={() => setIsAsc(p => !p)}>
          {isAsc
            ? <SortAscIcon />
            : <SortDescIcon />}
        </button>
      </div>
      <ol className='space-y-4'>
        {sortedParts.map(({
          id,
          title,
          overview,
          poster_path: posterPath,
          release_date: releaseDate
        }) => <CollectionListItem key={id} title={title} overview={overview} posterPath={posterPath} releaseDate={releaseDate} />)}
      </ol>
    </section>
  )
}
