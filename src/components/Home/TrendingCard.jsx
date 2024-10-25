import { useContext } from 'react'
import DefaultPosterImage from '../../assets/default-poster.webp'
import DefaultProfileImage from '../../assets/default-user.webp'
import MediaType from '../PageUI/MediaType'
import VoteCard from '../PageUI/VoteCard'
import { rootContext } from '../../context/root-context'
import VerticalCard from '../UI/Cards/VerticalCard'

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
  const prettyLink = `/${mediaType}/${id}`
  const voteElement = mediaType !== 'person'
    ? <VoteCard small rating={voteAverage} count={voteCount} />
    : null
  const mediaElement = <MediaType mediaType={mediaType} isPoster />

  return (
    <VerticalCard
      fetching={fetching}
      imageUrl={prettyPath}
      isAdult={adult}
      link={prettyLink}
      bottomRight={mediaElement}
      title={prettyName}
      bottomLeft={voteElement}
    />
  )
}
