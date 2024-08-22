import { Link } from 'react-router-dom'
import DefaultUserImage from '../../assets/default-user.webp'
import DefaultPosterImage from '../../assets/default-poster.webp'
import useGenerateImageColors from '../../hooks/useGenerateImageColors'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function HeaderCompact ({ posterPath, title, target, mediaType }) {
  const { config } = useContext(rootContext)
  const [[r, g, b], isDark] = useGenerateImageColors(posterPath, 0.4)

  const prettyPosterURL = config && posterPath
    ? config?.images?.secure_base_url + (mediaType === 'person' ? config?.images?.profile_sizes[1] : config?.images?.poster_sizes[0]) + posterPath
    : mediaType !== 'person'
      ? DefaultPosterImage
      : DefaultUserImage

  return (
    <>
      <header
        style={{ backgroundColor: `rgb(${r},${g},${b})` }}
        className={`flex p-app-space py-4 gap-4 ${isDark ? 'text-white' : 'text-black'}`}
      >
        <img loading='lazy' src={prettyPosterURL} alt={'Poster de ' + title} className='aspect-[2/3] object-cover w-16 shrink-0 rounded shadow-md shadow-black/75' />
        <div className='flex flex-col justify-center'>
          <Link to={target}>
            <h1 className='font-bold text-2xl'>{title}</h1>
          </Link>
          <Link to={target}>
            <p>⬅ Volver a la página principal</p>
          </Link>
        </div>
      </header>
    </>
  )
}
