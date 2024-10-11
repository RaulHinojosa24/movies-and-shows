import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import VoteCard from '../PageUI/VoteCard'
import DefaultLandscapeImage from '../../assets/default-landscape.webp'
import Slider from '../PageUI/Slider'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

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
    voteCount: movie.vote_count
  }))

  return (
    <Section title='Recomendaciones'>
      <Slider key={id} slides={cleanRecommendations} SlideComponent={Slide} />
    </Section>
  )
}

const Slide = ({ id, backdropPath, title, releaseYear, voteAverage, voteCount, mediaType }) => {
  const { config } = useContext(rootContext)

  const prettyBackdropPath = config && backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[1] + backdropPath
    : DefaultLandscapeImage

  return (
    <div className='rounded overflow-hidden w-72 md:w-80 h-full shadow shadow-colors'>
      <Link to={`/${mediaType}/${id}`}>
        <img crossOrigin='anonymous' loading='lazy' src={prettyBackdropPath} alt={`Imagen de ${title}`} className='w-full aspect-video object-cover' />
      </Link>
      <div className='p-2 flex justify-between gap-2'>
        <Link to={`/${mediaType}/${id}`}>
          <p className='no-swiping font-semibold'>{title} {releaseYear && <>({releaseYear})</>}</p>
        </Link>
        <VoteCard rating={voteAverage} count={voteCount} small />
      </div>
    </div>
  )
}
