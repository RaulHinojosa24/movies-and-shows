import { Link, useNavigate, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'

import DefaultPosterImage from '../../assets/default-poster.png'

export default function MovieHeaderCompact () {
  const {
    poster_path: posterPath,
    title
  } = useRouteLoaderData('movie-details')

  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const navigate = useNavigate()

  const goBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const prettyPosterPath = posterPath
    ? baseURL + posterSizes[0] + posterPath
    : DefaultPosterImage

  return (
    <>
      <header className='flex p-app-space gap-4 bg-gradient-to-b from-neutral-800 to-transparent'>
        <img loading='lazy' src={prettyPosterPath} alt={title} className='aspect-[2/3] object-cover w-16 rounded shadow-xl shadow-neutral-950' />
        <div className='flex flex-col justify-center '>
          <Link to='..' onClick={goBack}>
            <h1 className='font-bold text-2xl'>{title}</h1>
          </Link>
          <Link to='..' onClick={goBack}>
            <p>⬅ Volver a la página principal</p>
          </Link>
        </div>
      </header>
    </>
  )
}
