import Section from '../UI/Section'
import VoteCard from '../PageUI/VoteCard'
import DefaultLandscapeImage from '../../assets/default-landscape.webp'
import Slider from '../PageUI/Slider'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import RecommendationCard from '../UI/Cards/RecommendationCard'

export default function MovieRecommendations ({ id, recommendations }) {
  if (recommendations.length === 0) {
    return (
      <Section title='Recomendaciones'>
        <p className='italic'>Actualmente no podemos ofrecerte ninguna recomendación.</p>
      </Section>
    )
  }

  const cleanRecommendations = recommendations.map(movie => ({
    id: movie.id,
    title: movie.title || movie.original_title,
    backdropPath: movie.backdrop_path,
    mediaType: movie.media_type,
    releaseYear: movie.release_date ? new Date(movie.release_date).getFullYear() : null,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    adult: movie.adult
  }))

  return (
    <Section title='Recomendaciones'>
      <Slider key={id} slides={cleanRecommendations} SlideComponent={Slide} />
    </Section>
  )
}

const Slide = ({ id, backdropPath, title, releaseYear, voteAverage, voteCount, mediaType, adult }) => {
  const { config } = useContext(rootContext)

  const prettyBackdropPath = config && backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[1] + backdropPath
    : DefaultLandscapeImage
  const voteCardEl = <VoteCard rating={voteAverage} count={voteCount} small />
  const prettyLink = `/${mediaType}/${id}`
  const prettyTitle = `${title} (${releaseYear || ''})`

  return (
    <RecommendationCard
      aside={voteCardEl}
      imageUrl={prettyBackdropPath}
      isAdult={adult}
      link={prettyLink}
      primary={prettyTitle}
      title={title}
    />
  )
}
