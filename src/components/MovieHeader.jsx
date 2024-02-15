import { useRouteLoaderData } from 'react-router-dom'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { calculateImageSize } from '../utils/image-sizes'

export default function MovieHeader () {
  const {
    backdrop_path: backdropPath,
    genres,
    poster_path: posterPath,
    release_date: releaseDate,
    release_dates: releaseDates,
    runtime,
    tagline,
    title,
    vote_average: voteAvarage,
    vote_count: voteCount
  } = useRouteLoaderData('movie-details')

  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes,
      poster_sizes: posterSizes
    }
  } = useRouteLoaderData('root')

  const { width } = useWindowDimensions()
  const backdropSize = calculateImageSize(backdropSizes, width, 1)
  const posterSize = calculateImageSize(posterSizes, width, width < 512 ? 1 : 1 / 4)

  return (
    <header
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0)),url(${baseURL + backdropSize + backdropPath})` }}
      className='bg-cover bg-center bg-no-repeat flex items-end bg-gradient-to-t from-black/100'
    >
      <img src={baseURL + posterSize + posterPath} alt={title} />
      <div>
        <p className='flex items-end gap-2'>
          <h1 className='text-4xl font-semibold'>{title}</h1>
          <span className='text-'>{runtime}</span>
        </p>
        <p>{tagline}</p>
      </div>
    </header>
  )
}
