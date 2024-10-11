import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import useImageColors from '../../hooks/useImageColors'
import DefaultPoster from '../../assets/default-poster.webp'

export default function PosterCard ({
  poster_path: posterPath,
  backdrop_path: backdropPath,
  title,
  id,
  isActive
}) {
  const { config } = useContext(rootContext)
  const { dominant: [r, g, b], isDark, ref: imgRef } = useImageColors(posterPath)

  const picturePath = config && backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[1] + backdropPath
    : config && posterPath
      ? config?.images?.secure_base_url + config?.images?.poster_sizes[4] + posterPath
      : ''

  return (
    <Link to={'/movie/' + id}>
      <article className='aspect-[21/9] overflow-hidden grid place-content-center h-52 max-w-[100vw] relative'>
        <main className='w-full'>
          <img loading='lazy' crossOrigin='anonymous' className='w-full object-cover' src={config && picturePath ? picturePath : DefaultPoster} alt={posterPath ? `Portada de la película ${title}` : `No hemos podido cargar una portada para la película ${title}`} ref={imgRef} />
        </main>
        {isActive &&
          <footer
            style={{
              backgroundImage: `linear-gradient(transparent, rgb(${r},${g},${b}))`,
              backgroundPosition: '0% 0%',
              backgroundSize: '200% 200%'
            }} className='absolute top-0 left-0 hover:cursor-pointer w-full h-full p-4 flex flex-col justify-end gap-2 hover:!bg-pos-100 transition-all duration-100 ease-in-out'
          >
            <h3 className={`no-swiping text-2xl font-semibold w-fit ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
          </footer>}
      </article>
    </Link>
  )
}
