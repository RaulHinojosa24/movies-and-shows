import DefaultPoster from '../../assets/default-poster.webp'
import { formatLongDate } from '../../utils/utility'
import { Link } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function ResultItem ({ id, originalTitle, posterPath, releaseDate, title, voteAverage, voteCount, overview }) {
  const { config } = useContext(rootContext)

  const prettyPosterPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[2] + posterPath
    : DefaultPoster
  const prettyTitle = title || originalTitle
  const showOriginalName = prettyTitle !== originalTitle

  return (
    <>
      <div className='md:hidden custom-shadow-small rounded w-full text-sm flex'>
        <Link to={`/movie/${id}`} className='shrink-0'>
          <img className='w-24 object-cover aspect-[2/3]' src={prettyPosterPath} alt={`Poster de la pelicula ${prettyTitle}`} loading='lazy' />
        </Link>
        <div className='p-3 flex flex-col justify-center'>
          <Link to={`/movie/${id}`} className='font-semibold text-base'>
            <h3 className='inline'>{prettyTitle}</h3>
          </Link>
          {showOriginalName &&
            <p className='text-neutral-500 font-semibold'>{originalTitle}</p>}
          <ReleaseDate date={releaseDate} />
          <p className='line-clamp-2'>{overview}</p>
        </div>
      </div>
      <div className='hidden md:block custom-shadow-small rounded overflow-hidden max-w-56 w-full text-sm'>
        <Link to={`/movie/${id}`}>
          <div className='relative'>
            <img className='w-full object-cover aspect-[2/3]' src={prettyPosterPath} alt={`Poster de la pelicula ${prettyTitle}`} loading='lazy' />
            <VoteCard small rating={voteAverage} count={voteCount} className='absolute bottom-2 left-2' />
          </div>
        </Link>
        <div className='p-3 space-y-1'>
          <Link to={`/movie/${id}`} className='font-semibold text-base'>
            <h3 className='inline'>{prettyTitle} </h3>
          </Link>
          <ReleaseDate date={releaseDate} />
        </div>
      </div>
    </>
  )
}

function ReleaseDate ({ date }) {
  const longDate = formatLongDate(date)

  return <p className='text-neutral-500'>{longDate}</p>
}
