import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { retrieveConfig } from '../../utils/utility'

import DefaultProfileImage from '../../assets/default-user.png'
import Slider from '../PageUI/Slider'
import { useEffect, useState } from 'react'

const sortingLogic = (cc) => cc.vote_count ** 2 * cc.vote_average

export default function PersonKnownFor ({ id, cast, crew }) {
  const combinedCredits = [...cast, ...crew]
    .filter((el, i, array) => array.findIndex(a => a.id === el.id) === i)
    .sort((a, b) => sortingLogic(b) - sortingLogic(a))
    .filter((_, i) => i < 9)
    .map(cc => ({
      id: cc.id,
      name: cc.name,
      title: cc.title,
      posterPath: cc.poster_path,
      type: cc.media_type
    }))

  return (
    <>
      <Section title='Conocida por'>
        <Slider key={id} slides={combinedCredits} SlideComponent={Slide} />
      </Section>
    </>
  )
}

const Slide = ({ id, name, title, posterPath, type }) => {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyPosterPath, setPrettyPosterPath] = useState('')

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        poster_sizes: posterSizes
      }
    }) => setPrettyPosterPath(posterPath
      ? baseURL + posterSizes[1] + posterPath
      : DefaultProfileImage))
  })

  return (
    <div className='h-full w-32 rounded overflow-hidden custom-shadow'>
      <Link to={`/${type}/${id}`}>
        <img loading='lazy' className='aspect-[2/3] w-full object-cover object-top' src={prettyPosterPath} alt={`Póster de ${title || name}`} />
      </Link>
      <div className='p-2 h-full'>
        <Link to={`/${type}/${id}`} className='inline-block'>
          <p className='no-swiping font-semibold w-fit'>{title || name}</p>
        </Link>
      </div>
    </div>
  )
}
