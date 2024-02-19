import { Link, useRouteLoaderData } from 'react-router-dom'

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
    overview,
    id
  } = movie

  const backdropSize = backdropSizes[backdropSizes.length - 2]
  const posterSize = posterSizes[posterSizes.length - 1]

  return (
    <Link to={'/movies/' + id}>
      <article className='group aspect-[21/9] overflow-hidden grid place-content-center h-48 relative hover:cursor-pointer'>
        <main>
          {backdropPath &&
            <img loading='lazy' src={baseURL + backdropSize + backdropPath} alt='' />}
          {posterPath && !backdropPath &&
            <img loading='lazy' src={baseURL + posterSize + posterPath} alt='' />}
          {!backdropPath && !posterPath &&
            <p className='text-center italic'>No poster available for "{title}"</p>}
        </main>
        <footer className='absolute w-full h-auto bottom-0 p-4 bg-gradient-to-t from-black/100 flex flex-col justify-end gap-2 group-hover:h-full'>
          <h3 className='no-swiping text-2xl font-semibold w-fit'>{title}</h3>
          <p className='no-swiping w-3/4 text-neutral-300 line-clamp-2'>{overview}</p>
        </footer>
      </article>
    </Link>
  )
}
