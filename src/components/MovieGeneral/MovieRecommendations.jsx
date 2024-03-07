import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { retrieveConfig } from '../../utils/utility'
import VoteCard from '../UI/VoteCard'
import DefaultLandscapeImage from '../../assets/default-landscape.png'
import Slider from '../UI/Slider'

export default function MovieRecommendations () {
  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const {
    recommendations: {
      results: recommendations
    }
  } = useRouteLoaderData('movie-details')

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
    backdropPath: movie.backdrop_path ? (baseURL + backdropSizes[1] + movie.backdrop_path) : DefaultLandscapeImage,
    mediaType: movie.media_type,
    releaseYear: movie.release_date ? new Date(movie.release_date).getFullYear() : null,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count
  }))

  const slide = ({ id, backdropPath, title, releaseYear, voteAverage, voteCount, mediaType }) => (
    <div className='rounded overflow-hidden w-80 h-full custom-shadow'>
      <Link to={`/${mediaType}/${id}`}>
        <img loading='lazy' src={backdropPath} alt={`Imagen de ${title}`} className='w-full aspect-video object-cover' />
      </Link>
      <div className='p-2 flex justify-between gap-2'>
        <Link to={`/${mediaType}/${id}`}>
          <p className='no-swiping font-semibold'>{title} {releaseYear && <>({releaseYear})</>}</p>
        </Link>
        <VoteCard rating={voteAverage} count={voteCount} small />
      </div>
    </div>

  )

  return (
    <Section title='Recomendaciones'>
      <Slider slides={cleanRecommendations} SlideComponent={slide} />
    </Section>
  )
}
