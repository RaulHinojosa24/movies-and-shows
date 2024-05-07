import DefaultPoster from '../../assets/default-poster.png'
import { formatLongDate, retrieveConfig } from '../../utils/utility'
import { Link, useRouteLoaderData } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'

export default function ResultItem ({ id, originalName, posterPath, firstAirDate, title: name, voteAverage, voteCount, posterMode }) {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyPosterPath = posterPath ? baseURL + posterSizes[2] + posterPath : DefaultPoster
  const prettyTitle = name || originalName

  return (
    <>
      {posterMode &&
        <div className='custom-shadow-small rounded overflow-hidden max-w-56 w-full text-sm'>
          <Link to={`/tv/${id}`}>
            <div className='relative'>
              <img className='w-full object-cover aspect-[2/3]' src={prettyPosterPath} alt='' loading='lazy' />
              <VoteCard small rating={voteAverage} count={voteCount} className='absolute bottom-2 left-2' />
            </div>
          </Link>
          <div className='p-3 space-y-1'>
            <Link to={`/tv/${id}`} className='font-semibold text-base'>
              <h3 className='inline'>{prettyTitle} </h3>
            </Link>
            <ReleaseDate date={firstAirDate} />
          </div>
        </div>}
    </>
  )
}

function ReleaseDate ({ date }) {
  const longDate = formatLongDate(date)

  return <p className='text-neutral-500'>{longDate}</p>
}
