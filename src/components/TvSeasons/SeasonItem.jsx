import { Link, useRouteLoaderData } from 'react-router-dom'
import { formatLongDate, retrieveConfig } from '../../utils/utility'
import DefaultPosterImage from '../../assets/default-poster.png'
import VoteCard from '../PageUI/VoteCard'

export default function SeasonItem ({ airDate, episodeCount, id, name, overview, posterPath, seasonNumber, voteAverage }) {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyAirDate = formatLongDate(airDate)
  const prettyPosterPath = posterPath ? baseURL + posterSizes[2] + posterPath : DefaultPosterImage

  return (
    <div className='rounded overflow-hidden custom-shadow-small flex items-center'>
      <Link to={`season/${id}`} className='contents'>
        <img src={prettyPosterPath} className='aspect-[2/3] object-cover w-32' alt={'Poster de la serie de tv ' + name} loading='lazy' />
      </Link>
      <div className='flex flex-col p-4 gap-2'>
        <Link to={`season/${id}`}>
          <h3 className='text-2xl font-semibold'>
            {name} &bull; <span className='text-xl text-neutral-500'>{episodeCount} episodios</span>
          </h3>
        </Link>
        <div className='flex items-center gap-2'>
          <VoteCard minimal rating={voteAverage} noCount />
          <span>{prettyAirDate}</span>
        </div>
        <p className='line-clamp-3'>{overview}</p>
      </div>
    </div>
  )
}
