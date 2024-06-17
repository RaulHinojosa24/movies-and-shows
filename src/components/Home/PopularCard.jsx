import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import { useEffect, useState } from 'react'
import DefaultPosterImage from '../../assets/default-poster.png'
import DefaultProfileImage from '../../assets/default-user.png'
import VoteCard from '../PageUI/VoteCard'

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
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyPath, setPrettyPath] = useState('')

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        profile_sizes: profileSizes,
        poster_sizes: posterSizes
      }
    }) => {
      setPrettyPath(mediaType === 'person'
        ? profilePath
          ? baseURL + profileSizes[1] + profilePath
          : DefaultProfileImage
        : posterPath
          ? baseURL + posterSizes[1] + posterPath
          : DefaultPosterImage)
    })
  }, [loaderConfig, mediaType, posterPath, profilePath])

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
