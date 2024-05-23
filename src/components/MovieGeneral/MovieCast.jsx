import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'

import DefaultProfileImage from '../../assets/default-user.png'
import Slider from '../PageUI/Slider'
import { useEffect, useState } from 'react'

export default function MovieCast ({ id, cast }) {
  if (cast.length === 0) {
    return (
      <Section title='Reparto principal'>
        <p className='italic'>No disponemos de una lista del reparto principal actualmente.</p>
        <Link to='cast' className='mt-2 inline-block'>Ver reparto y equipo completo</Link>
      </Section>
    )
  }

  const cleanCast = cast
    .filter((_, id) => id < 9)
    .map(person => ({
      id: person.id,
      name: person.name || person.original_name,
      picturePath: person.profile_path,
      character: person.character
    }))

  const lastSlide = () => (
    <div className='w-36 h-full grid place-items-center'>
      <Link to='cast'>Ver más ➡</Link>
    </div>
  )
  return (
    <Section title='Reparto principal'>
      <Slider key={id} slides={cleanCast} SlideComponent={Slide} LastSlide={lastSlide} />
      <Link to='cast' className='mt-2 inline-block'>Ver reparto y equipo completo</Link>
    </Section>
  )
}

const Slide = ({ id, name, picturePath, character }) => {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyPath, setPrettyPath] = useState('')

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        profile_sizes: profileSizes
      }
    }) => {
      setPrettyPath(picturePath
        ? baseURL + profileSizes[1] + picturePath
        : DefaultProfileImage)
    })
  }, [loaderConfig, picturePath])

  return (
    <div className='h-full w-32 rounded overflow-hidden custom-shadow'>
      <Link to={'/person/' + id}>
        <img loading='lazy' className='aspect-[4/5] object-cover object-top' src={prettyPath} alt={`Foto de perfil de ${name}`} />
      </Link>
      <div className='p-2'>
        <Link to={'/person/' + id}>
          <p className='no-swiping font-semibold inline'>{name}</p>
        </Link>
        {character &&
          <p className='no-swiping w-fit text-sm'>{character}</p>}
      </div>
    </div>
  )
}
