import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'

import DefaultUserImage from '../../assets/default-user.png'
import DefaultPosterImage from '../../assets/default-poster.png'
import useGenerateImageColors from '../../hooks/useGenerateImageColors'

export default function HeaderCompact ({ posterPath, title, id, mediaType }) {
  const [[r, g, b], isDark] = useGenerateImageColors(posterPath, 0.4)

  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyPosterURL = posterPath
    ? baseURL + posterSizes[0] + posterPath
    : mediaType !== 'person' ? DefaultPosterImage : DefaultUserImage

  return (
    <>
      <header
        style={{ backgroundColor: `rgb(${r},${g},${b})` }}
        className={`flex p-app-space py-4 gap-4 ${isDark ? 'text-white' : 'text-black'}`}
      >
        <img loading='lazy' src={prettyPosterURL} alt={'Poster de ' + title} className='aspect-[2/3] object-cover w-16 shrink-0 rounded shadow-md shadow-black/75' />
        <div className='flex flex-col justify-center '>
          <Link to={`/${mediaType}/${id}`}>
            <h1 className='font-bold text-2xl'>{title}</h1>
          </Link>
          <Link to={`/${mediaType}/${id}`}>
            <p>⬅ Volver a la página principal</p>
          </Link>
        </div>
      </header>
    </>
  )
}
