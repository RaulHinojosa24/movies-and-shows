import { Link, useRouteLoaderData } from 'react-router-dom'
import { formatLongDate, retrieveConfig } from '../../utils/utility'
import DefaultPosterImg from '../../assets/default-poster.png'
import { useEffect, useState } from 'react'

export default function CollectionListItem ({ id, title, posterPath, releaseDate, overview }) {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyPath, setPrettyPath] = useState('')

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        poster_sizes: posterSizes
      }
    }) => setPrettyPath(posterPath
      ? baseURL + posterSizes[0] + posterPath
      : DefaultPosterImg))
  }, [loaderConfig, posterPath])

  return (
    <li className='flex rounded overflow-hidden custom-shadow'>
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
}
