import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import VoteCard from '../PageUI/VoteCard'
import DefaultLandscapeImage from '../../assets/default-landscape.png'
import Slider from '../PageUI/Slider'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function TvRecommendations ({ id, recommendations }) {
  if (recommendations.length === 0) {
    return (
      <Section title='Recomendaciones'>
        <p className='italic'>Actualmente no podemos ofrecerte ninguna recomendación.</p>
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
    voteCount: el.vote_count
  }))

  return (
    <Section title='Recomendaciones'>
      <Slider key={id} slides={cleanRecommendations} SlideComponent={Slide} />
    </Section>
  )
}

const Slide = ({ id, backdropPath, name, firstAirYear, voteAverage, voteCount, mediaType }) => {
  const { config } = useContext(rootContext)

  const prettyBackdropPath = backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[1] + backdropPath
    : DefaultLandscapeImage

  return (
    <Link to={`/${mediaType}/${id}`}>
      <div className='rounded overflow-hidden w-80 h-full custom-shadow'>
        <img loading='lazy' src={prettyBackdropPath} alt={`Imagen de ${name}`} className='w-full aspect-video object-cover' />
        <div className='p-2 flex justify-between gap-2'>
          <p className='no-swiping font-semibold'>{name} {firstAirYear && <>({firstAirYear})</>}</p>
          <VoteCard rating={voteAverage} count={voteCount} small />
        </div>
      </div>
    </Link>
  )
}
