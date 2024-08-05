import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DefaultPosterImage from '../../assets/default-poster.png'
import DefaultProfileImage from '../../assets/default-user.png'
import VoteCard from '../PageUI/VoteCard'
import { rootContext } from '../../context/root-context'

export default function PopularCard ({
  id,
  name,
  original_name: originalName,
  title,
  original_title: originalTitle,
  profile_path: profilePath,
  poster_path: posterPath,
  media_type: mediaType,
  vote_average: voteAverage,
  vote_count: voteCount
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
      <Link to={`/${mediaType}/${id}`}>
        <div className='relative'>
          <img className='w-full object-cover aspect-[2/3]' src={prettyPath} alt={`Imágen de ${prettyName}`} loading='lazy' />
          {mediaType !== 'person' &&
            <VoteCard small rating={voteAverage} count={voteCount} className='absolute bottom-2 left-2' />}
        </div>
      </Link>
      <Link to={`/${mediaType}/${id}`} className='m-2 inline-block no-swiping font-semibold'>
        {prettyName}
      </Link>
    </div>
  )
  // return (
  //   <div className='h-full w-44 rounded overflow-hidden custom-shadow'>
  //     <Link to={`/${mediaType}/${id}`}>
  //       <img loading='lazy' className='aspect-[2/3] object-cover w-full' src={prettyPath} alt={`Imágen de ${prettyName}`} />
  //     </Link>
  //     <Link to={`/${mediaType}/${id}`} className='m-2 inline-block no-swiping font-semibold'>
  //       {prettyName}
  //     </Link>
  //   </div>
  // )
}
