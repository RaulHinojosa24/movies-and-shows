import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DefaultPosterImage from '../../assets/default-poster.webp'
import DefaultProfileImage from '../../assets/default-user.webp'
import MediaType from '../PageUI/MediaType'
import VoteCard from '../PageUI/VoteCard'
import { rootContext } from '../../context/root-context'

export default function TrendingCard ({
  id,
  name,
  original_name: originalName,
  title,
  original_title: originalTitle,
  profile_path: profilePath,
  poster_path: posterPath,
  media_type: mediaType,
  vote_average: voteAverage,
  vote_count: voteCount,
  fetching
}) {
  const { config } = useContext(rootContext)

  const prettyPath = mediaType === 'person'
    ? config && profilePath
      ? config?.images?.secure_base_url + config?.images?.profile_sizes[1] + profilePath
      : DefaultProfileImage
    : config && posterPath
      ? config?.images?.secure_base_url + config?.images?.poster_sizes[1] + posterPath
      : DefaultPosterImage
  const prettyName = name || originalName || title || originalTitle

  return (
    <div className='w-36 h-full rounded overflow-hidden custom-shadow'>
      {!fetching &&
        <>
          <Link to={`/${mediaType}/${id}`}>
            <div className='relative'>
              <img className='w-full object-cover aspect-[2/3]' src={prettyPath} alt={`Imágen de ${prettyName}`} loading='lazy' />
              <MediaType mediaType={mediaType} isPoster className='absolute bottom-2 right-2' />
              {mediaType !== 'person' &&
                <VoteCard small rating={voteAverage} count={voteCount} className='absolute bottom-2 left-2' />}
            </div>
          </Link>
          <Link to={`/${mediaType}/${id}`} className='m-2 inline-block no-swiping font-semibold'>
            {prettyName}
          </Link>
        </>}
      {fetching &&
        <>
          <div className='skeleton aspect-[2/3] shrink-0' />
          <div className='m-3 mb-4'>
            <div className='skeleton__subtitle w-5/6' />
          </div>
        </>}
    </div>
  )
}
