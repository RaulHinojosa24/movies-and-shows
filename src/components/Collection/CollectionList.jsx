import { Link, useRouteLoaderData } from 'react-router-dom'
import { formatLongDate, retrieveConfig } from '../../utils/utility'
import { useState } from 'react'
import Select from '../UI/Select'
import SortAscIcon from '../../icons/SortAscIcon'
import SortDescIcon from '../../icons/SortDescIcon'
import DefaultPosterImg from '../../assets/default-poster.png'

export default function CollectionList () {
  const { parts } = useRouteLoaderData('collection-details')

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
        {sortedParts.map((part) => {
          const {
            id,
            title,
            overview,
            poster_path: posterPath,
            release_date: releaseDate
          } = part

          const prettyPath = posterPath
            ? baseURL + posterSizes[0] + posterPath
            : DefaultPosterImg

          return (
            <li key={id} className='flex rounded overflow-hidden custom-shadow'>
              <Link to={'/movie/' + id} className='contents'>
                <img className='aspect-[2/3] object-cover w-full max-w-24' src={prettyPath} alt={'Poster de la película ' + title} />
              </Link>
              <div className='flex flex-col justify-around p-4'>
                <div>
                  <Link to={'/movie/' + id} className='inline-block'>
                    <h3 className='font-semibold text-lg'>{title}</h3>
                  </Link>
                  <p className='dark:text-neutral-300 text-neutral-600'>{releaseDate ? formatLongDate(releaseDate) : 'Fecha desconocida'}</p>
                </div>
                {overview &&
                  <p className='line-clamp-2'>{overview}</p>}
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
