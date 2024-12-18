import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import { rootContext } from '../../context/root-context'
import useImageColors from '../../hooks/useImageColors'
import DefaultPoster from '../../assets/default-poster.webp'
import AdultTag from '../PageUI/AdultTag'

export default function PosterCard ({
  poster_path: posterPath,
  backdrop_path: backdropPath,
  title,
  id,
  isActive,
  adult
}) {
  const imgRef = useRef(null)
  const { config } = useContext(rootContext)
  const { dominant: [r, g, b], isDark } = useImageColors(imgRef)

  const picturePath = config && backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[1] + backdropPath
    : config && posterPath
      ? config?.images?.secure_base_url + config?.images?.poster_sizes[4] + posterPath
      : ''

  return (
    <Link to={'/movie/' + id}>
      <article className='aspect-[21/9] overflow-hidden grid place-content-center h-52 max-w-[100vw] relative'>
        <main className='w-full'>
          <img loading='lazy' crossOrigin='anonymous' className='w-full object-cover' src={config && picturePath ? picturePath : DefaultPoster} alt={`${title}'s poster`} ref={imgRef} />
        </main>
        {isActive &&
          <footer
            style={{
              backgroundImage: `linear-gradient(transparent, rgb(${r},${g},${b}))`,
              backgroundPosition: '0% 0%',
              backgroundSize: '200% 200%'
            }} className='absolute top-0 left-0 hover:cursor-pointer w-full h-full p-4 flex justify-between items-end gap-x-2 hover:!bg-pos-100 transition-all duration-100 ease-in-out'
          >
            <h3 className={`no-swiping text-2xl font-semibold w-fit ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
            {adult &&
              <AdultTag />}
          </footer>}
      </article>
    </Link>
  )
}
