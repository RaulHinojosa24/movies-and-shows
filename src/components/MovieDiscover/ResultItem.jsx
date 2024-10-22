import DefaultPoster from '../../assets/default-poster.webp'
import { formatLongDate } from '../../utils/utility'
import { Link } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import AdultTag from '../PageUI/AdultTag'

export default function ResultItem ({ id, originalTitle, posterPath, releaseDate, title, voteAverage, voteCount, overview, adult }) {
  const { config } = useContext(rootContext)

  const prettyPosterPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[2] + posterPath
    : DefaultPoster
  const prettyTitle = title || originalTitle
  const showOriginalName = prettyTitle !== originalTitle

  return (
    <>
      <div className='md:hidden shadow shadow-colors rounded w-full text-sm flex'>
        <Link to={`/movie/${id}`} className='shrink-0'>
          <img crossOrigin='anonymous' className='w-24 object-cover aspect-[2/3]' src={prettyPosterPath} alt={`Poster de la pelicula ${prettyTitle}`} loading='lazy' />
        </Link>
        <div className='p-3 flex flex-col justify-center'>
          <div>
            <h3 className='inline-block mr-2'>
              <Link to={`/movie/${id}`} className='font-semibold text-base'>
                {prettyTitle}
              </Link>
            </h3>
            {adult &&
              <AdultTag />}
          </div>
          {showOriginalName &&
            <p className='text-medium font-semibold'>{originalTitle}</p>}
          <ReleaseDate date={releaseDate} />
          <p className='line-clamp-2'>{overview}</p>
        </div>
      </div>
      <div className='hidden md:block shadow shadow-colors rounded overflow-hidden max-w-56 w-full text-sm'>
        <Link to={`/movie/${id}`}>
          <div className='relative'>
            <img crossOrigin='anonymous' className='w-full object-cover aspect-[2/3]' src={prettyPosterPath} alt={`Poster de la pelicula ${prettyTitle}`} loading='lazy' />
            <div className='absolute bottom-2 left-2'>
              <VoteCard small rating={voteAverage} count={voteCount} />
            </div>
          </div>
        </Link>
        <div className='p-3 flex flex-wrap gap-y-1 gap-x-2'>
          <div>
            <h3 className='inline-block mr-2'>
              <Link to={`/movie/${id}`} className='font-semibold text-base'>
                {prettyTitle}
              </Link>
            </h3>
            {adult &&
              <AdultTag />}
          </div>
          <ReleaseDate date={releaseDate} />
        </div>
      </div>
    </>
  )
}

function ReleaseDate ({ date }) {
  const longDate = formatLongDate(date)

  return <p className='text-medium'>{longDate}</p>
}
