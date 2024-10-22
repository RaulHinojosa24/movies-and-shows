import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DefaultPosterImage from '../../assets/default-poster.webp'
import DefaultProfileImage from '../../assets/default-user.webp'
import MediaType from '../PageUI/MediaType'
import VoteCard from '../PageUI/VoteCard'
import { rootContext } from '../../context/root-context'
import AdultTag from '../PageUI/AdultTag'

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
  fetching,
  adult
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
    <div className='w-36 h-full rounded overflow-hidden shadow shadow-colors'>
      {!fetching &&
        <>
          <Link to={`/${mediaType}/${id}`}>
            <div className='relative'>
              <img crossOrigin='anonymous' className='w-full object-cover aspect-[2/3]' src={prettyPath} alt={`Imágen de ${prettyName}`} loading='lazy' />
              <div className='absolute w-full bottom-2 px-2 flex justify-between'>
                {mediaType !== 'person' &&
                  <VoteCard small rating={voteAverage} count={voteCount} />}
                <MediaType mediaType={mediaType} isPoster />
              </div>
            </div>
          </Link>
          <div className='p-2'>
            <Link to={`/${mediaType}/${id}`} className='no-swiping font-semibold inline-block mr-2'>
              {prettyName}
            </Link>
            {adult &&
              <AdultTag />}
          </div>
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
