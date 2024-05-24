import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { retrieveConfig } from '../../utils/utility'
import VoteCard from '../PageUI/VoteCard'
import DefaultLandscapeImage from '../../assets/default-landscape.png'
import Slider from '../PageUI/Slider'
import { useEffect, useState } from 'react'

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
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyBackdropPath, setPrettyBackdropPath] = useState('')

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        backdrop_sizes: backdropSizes
      }
    }) => {
      setPrettyBackdropPath(backdropPath ? (baseURL + backdropSizes[1] + backdropPath) : DefaultLandscapeImage)
    })
  }, [backdropPath, loaderConfig])

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
