import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'

import DefaultPosterImage from '../../assets/default-poster.png'

export default function TvHeaderCompact () {
  const {
    id,
    poster_path: posterPath,
    name,
    orinigal_name: originalName
  } = useRouteLoaderData('tv-details')

  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyPosterURL = posterPath
    ? baseURL + posterSizes[0] + posterPath
    : DefaultPosterImage
  const prettyName = name || originalName

  return (
    <>
      <header className='flex p-app-space gap-4 bg-gradient-to-b from-neutral-800 to-transparent'>
        <img loading='lazy' src={prettyPosterURL} alt={'Poster de ' + prettyName} className='aspect-[2/3] object-cover w-16 shrink-0 rounded shadow-xl shadow-neutral-950' />
        <div className='flex flex-col justify-center grow'>
          <Link to={'/movie/' + id} className='w-fit'>
            <h1 className='font-bold text-2xl'>{prettyName}</h1>
          </Link>
          <Link to={'/movie/' + id} className='w-fit'>
            <p>⬅ Volver a la página principal</p>
          </Link>
        </div>
      </header>
    </>
  )
}
