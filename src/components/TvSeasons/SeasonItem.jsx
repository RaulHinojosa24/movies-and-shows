import { Link } from 'react-router-dom'
import { formatLongDate } from '../../utils/utility'
import DefaultPosterImage from '../../assets/default-poster.webp'
import VoteCard from '../PageUI/VoteCard'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function SeasonItem ({ airDate, episodeCount, tvId, name, overview, posterPath, seasonNumber, voteAverage }) {
  const { config } = useContext(rootContext)

  const prettyPosterPath = posterPath && config
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[2] + posterPath
    : DefaultPosterImage

  const prettyAirDate = formatLongDate(airDate)

  return (
    <div className='rounded overflow-hidden custom-shadow-small flex items-center'>
      <Link to={'/tv/' + tvId + '/season/' + seasonNumber} className='contents'>
        <img src={prettyPosterPath} className='aspect-[2/3] object-cover w-32' alt={'Poster de la serie de tv ' + name} loading='lazy' />
      </Link>
      <div className='flex flex-col p-4 gap-2'>
        <Link to={'/tv/' + tvId + '/season/' + seasonNumber}>
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
