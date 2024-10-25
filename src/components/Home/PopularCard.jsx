import { useContext } from 'react'
import DefaultPosterImage from '../../assets/default-poster.webp'
import DefaultProfileImage from '../../assets/default-user.webp'
import VoteCard from '../PageUI/VoteCard'
import { rootContext } from '../../context/root-context'
import VerticalCard from '../UI/Cards/VerticalCard'

export default function PopularCard ({
  id,
  name,
  original_name: originalName,
  title,
  original_title: originalTitle,
  profile_path: profilePath,
  poster_path: posterPath,
  mediaType,
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
  const prettyTitle = name || originalName || title || originalTitle
  const prettyLink = `/${mediaType}/${id}`
  const voteElement = mediaType !== 'person'
    ? <VoteCard small rating={voteAverage} count={voteCount} />
    : null

  return (
    <VerticalCard
      fetching={fetching}
      imageUrl={prettyPath}
      isAdult={adult}
      link={prettyLink}
      title={prettyTitle}
      bottomLeft={voteElement}
    />
  )
}
