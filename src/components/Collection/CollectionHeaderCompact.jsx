import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'

import DefaultPosterImage from '../../assets/default-poster.png'

export default function CollectionHeaderCompact () {
  const {
    id,
    name,
    poster_path: posterPath
  } = useRouteLoaderData('collection-details')

  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyPosterPath = posterPath
    ? baseURL + posterSizes[0] + posterPath
    : DefaultPosterImage

  return (
    <>
      <header className='flex p-app-space gap-4 bg-gradient-to-b from-neutral-800 to-transparent'>
        <Link to={'/collection/' + id}>
          <img className='aspect-[2/3] w-16 rounded shadow-xl shadow-neutral-950' src={prettyPosterPath} alt={'Foto de ' + name} />
        </Link>
        <div className='flex flex-col justify-center '>
          <Link to={'/collection/' + id}>
            <h1 className='font-bold text-2xl'>{name}</h1>
          </Link>
          <Link to={'/collection/' + id}>
            <p>⬅ Volver a la página principal</p>
          </Link>
        </div>
      </header>

    </>
  )
}
