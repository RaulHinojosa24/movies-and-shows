import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import { useEffect, useState } from 'react'

export default function PosterCard ({ movie }) {
  const [picturePath, setPicturePath] = useState(undefined)
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))

  const {
    poster_path: posterPath,
    backdrop_path: backdropPath,
    title,
    overview,
    id
  } = movie

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        backdrop_sizes: backdropSizes,
        poster_sizes: posterSizes
      }
    }) => setPicturePath(backdropPath
      ? baseURL + backdropSizes[1] + backdropPath
      : posterPath
        ? baseURL + posterSizes[4] + posterPath
        : ''
    ))
  })

  return (
    <Link to={'/movie/' + id}>
      <article className='group aspect-[21/9] overflow-hidden grid place-content-center h-48 relative hover:cursor-pointer'>
        <main className='w-full'>
          {picturePath &&
            <img loading='lazy' className='w-full object-cover' src={picturePath} alt='' />}
          {picturePath === '' &&
            <p className='text-center italic'>No tenemos póster para "{title}"</p>}
          {picturePath === undefined &&
            <p className='text-center italic'>Cargando imágen...</p>}
        </main>
        <footer className='absolute w-full h-auto bottom-0 p-4 bg-gradient-to-t from-black/100 flex flex-col justify-end gap-2 group-hover:h-full'>
          <h3 className='no-swiping text-2xl font-semibold w-fit'>{title}</h3>
          <p className='no-swiping w-3/4 text-neutral-300 line-clamp-2'>{overview}</p>
        </footer>
      </article>
    </Link>
  )
}
