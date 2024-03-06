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

  const { recommendations } = useRouteLoaderData('movie-details')

  const cleanRecommendations = recommendations.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    backdropPath: movie.backdrop_path ? (baseURL + backdropSizes[1] + movie.backdrop_path) : DefaultLandscapeImage,
    mediaType: movie.media_type,
    releaseYear: movie.release_date ? new Date(movie.release_date).getFullYear() : null,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count
  }))

  const slide = ({ id, backdropPath, title, releaseYear, voteAverage, voteCount }) => (
    <div className='rounded overflow-hidden w-80 h-full custom-shadow'>
      <Link to={`/movie/${id}`}>
        <img loading='lazy' src={backdropPath} alt={`Picture from the film ${title}`} className='w-full aspect-video object-cover' />
      </Link>
      <div className='py-2 flex justify-between px-2'>
        <Link to={`/movie/${id}`} className=''>
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
