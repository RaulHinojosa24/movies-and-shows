import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { retrieveConfig } from '../../utils/utility'
import VoteCard from '../PageUI/VoteCard'
import DefaultLandscapeImage from '../../assets/default-landscape.png'
import Slider from '../PageUI/Slider'
import { useEffect, useState } from 'react'

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
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyBackdropPath, setPrettyBackdropPath] = useState(DefaultLandscapeImage)

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        backdrop_sizes: backdropSizes
      }
    }) => {
      if (backdropPath) setPrettyBackdropPath(baseURL + backdropSizes[1] + backdropPath)
    })
  }, [backdropPath, loaderConfig])

  return (
    <div className='rounded overflow-hidden w-72 md:w-80 h-full custom-shadow'>
      <Link to={`/${mediaType}/${id}`}>
        <img loading='lazy' src={prettyBackdropPath} alt={`Imagen de ${title}`} className='w-full aspect-video object-cover' />
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
