import { useRouteLoaderData } from 'react-router-dom'

export default function PosterCard ({ movie }) {
  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes,
      poster_sizes: posterSizes
    }
  } = useRouteLoaderData('root')

  const {
    poster_path: posterPath,
    backdrop_path: backdropPath,
    title,
    overview
  } = movie

  const backdropSize = backdropSizes[backdropSizes.length - 2]
  const posterSize = posterSizes[posterSizes.length - 1]

  return (
    <article className='group aspect-[21/9] overflow-hidden grid place-content-center h-full relative'>
      <main>
        {backdropPath &&
          <img src={baseURL + backdropSize + backdropPath} alt='' />}
        {posterPath && !backdropPath &&
          <img src={baseURL + posterSize + posterPath} alt='' />}
        {!backdropPath && !posterPath &&
          <p className='text-center italic'>No poster available for "{title}"</p>}
      </main>
      <footer className='group absolute w-full h-auto bottom-0 p-4 bg-gradient-to-t from-black/100 flex flex-col justify-end gap-2 group-hover:h-full'>
        <h3 className='no-swiping text-2xl font-semibold w-fit'>{title}</h3>
        <p className='no-swiping w-3/4 text-neutral-300 line-clamp-2 group-hover:line-clamp-none'>{overview}</p>
      </footer>
    </article>
  )
}
