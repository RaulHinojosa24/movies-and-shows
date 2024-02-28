import { Link, useRouteLoaderData } from 'react-router-dom'
import { formatLongDate, retrieveConfig } from '../../utils/utility'
import { useState } from 'react'
import Select from '../UI/Select'
import SortAscIcon from '../../logos/SortAscIcon'
import SortDescIcon from '../../logos/SortDescIcon'

export default function CollectionList () {
  const { parts } = useRouteLoaderData('collection-details')
  console.log(parts)
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

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
    <section className='m-auto max-w-screen-xl'>
      <div className='inline-grid grid-cols-[auto_auto] divide-x-1 divide-neutral-600'>
        <Select name='collection-movies-sorting' options={options} onChange={e => setSortBy(e.target.value)} />
        <div className='self-stretch grid place-content-center aspect-square cursor-pointer custom-shadow-small' onClick={() => setIsAsc(p => !p)}>
          {isAsc
            ? <SortAscIcon />
            : <SortDescIcon />}
        </div>
      </div>
      <ol className='space-y-4'>
        {sortedParts.map((part) => {
          const {
            id,
            title,
            overview,
            poster_path: posterPath,
            release_date: releaseDate
          } = part

          return (
            <li key={id} className='flex rounded overflow-hidden custom-shadow'>
              <Link to={'/movies/' + id}>
                <img className='aspect-[2/3] object-cover min-w-24 w-24 h-full' src={baseURL + posterSizes[0] + posterPath} alt={'Poster de la película ' + title} />
              </Link>
              <div className='flex flex-col justify-around p-4'>
                <div>
                  <Link to={'/movies/' + id} className='inline-block'>
                    <h3 className='font-semibold text-lg'>{title}</h3>
                  </Link>
                  <p className='text-neutral-300'>{formatLongDate(new Date(releaseDate))}</p>
                </div>
                <p className='line-clamp-2'>{overview}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}