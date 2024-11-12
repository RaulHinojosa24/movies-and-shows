import Section from '../UI/Section'
import VoteCard from '../PageUI/VoteCard'
import DefaultLandscapeImage from '../../assets/default-landscape.webp'
import Slider from '../PageUI/Slider'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import RecommendationCard from '../UI/Cards/RecommendationCard'

export default function TvRecommendations ({ id, recommendations }) {
  if (recommendations.length === 0) {
    return (
      <Section title='Recommendations'>
        <p className='italic'>We currently have no recommendations available</p>
      </Section>
    )
  }

  const cleanRecommendations = recommendations.map(el => ({
    id: el.id,
    name: el.name || el.original_name,
    backdropPath: el.backdrop_path,
    mediaType: el.media_type,
    firstAirYear: el.first_air_date ? new Date(el.first_air_date).getFullYear() : null,
    voteAverage: el.vote_average,
    voteCount: el.vote_count,
    adult: el.adult
  }))

  return (
    <Section title='Recommendations'>
      <Slider key={id} slides={cleanRecommendations} SlideComponent={Slide} />
    </Section>
  )
}

const Slide = ({ id, backdropPath, name, firstAirYear, voteAverage, voteCount, mediaType, adult }) => {
  const { config } = useContext(rootContext)

  const prettyBackdropPath = backdropPath && config
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[1] + backdropPath
    : DefaultLandscapeImage
  const voteCardEl = <VoteCard rating={voteAverage} count={voteCount} small />
  const prettyLink = `/${mediaType}/${id}`
  const prettyName = `${name} (${firstAirYear || ''})`

  return (
    <RecommendationCard
      aside={voteCardEl}
      imageUrl={prettyBackdropPath}
      isAdult={adult}
      link={prettyLink}
      primary={prettyName}
      title={name}
    />
  )
}
