import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function PosterCard ({
  movie: {
    poster_path: posterPath,
    backdrop_path: backdropPath,
    title,
    overview,
    id
  }
}) {
  const { config } = useContext(rootContext)

  const picturePath = config && backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[1] + backdropPath
    : config && posterPath
      ? config?.images?.secure_base_url + config?.images?.poster_sizes[4] + posterPath
      : ''

  return (
    <Link to={'/movie/' + id}>
      <article className='aspect-[21/9] overflow-hidden grid place-content-center h-52 max-w-[100vw] relative'>
        <main className='w-full'>
          {config && picturePath &&
            <img loading='lazy' className='w-full object-cover' src={picturePath} alt={`Portada de la película ${title}`} />}
          {config && !picturePath &&
            <p className='text-center italic'>No tenemos póster para "{title}"</p>}
          {!config &&
            <p className='text-center italic'>Cargando imágen...</p>}
        </main>
        <footer className='absolute top-0 left-0 hover:cursor-pointer w-full h-full p-4 flex flex-col justify-end gap-2 bg-gradient-to-t from-black/90 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-100 ease-in-out'>
          <h3 className='no-swiping text-2xl font-semibold w-fit'>{title}</h3>
        </footer>
      </article>
    </Link>
  )
}
