import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'

import DefaultProfileImage from '../../assets/default-user.png'
import Slider from '../PageUI/Slider'
import { useEffect, useState } from 'react'

export default function TvCast ({ id, cast }) {
  if (cast.length === 0) {
    return (
      <Section title='Reparto principal'>
        <p className='italic'>No disponemos de una lista del reparto actualmente.</p>
        <Link to='cast' className='mt-2 inline-block'>Ver reparto y equipo completo</Link>
      </Section>
    )
  }

  const cleanCast = cast
    .filter((_, i) => i < 9)
    .map(person => {
      const shortCharactersSize = 4
      const remainingCharacters = person.roles.length - shortCharactersSize

      let shortCharacters = person.roles
        .filter((_, i) => i < shortCharactersSize)
        .map(r => r.character)
        .join(' / ')

      if (remainingCharacters > 0) shortCharacters += ` y ${remainingCharacters} más...`

      return {
        id: person.id,
        name: person.name || person.original_name,
        picturePath: person.profile_path,
        characters: shortCharacters,
        episodeCount: person.total_episode_count
      }
    })

  const lastSlide = () => (
    <div className='w-36 h-full grid place-items-center'>
      <Link to='cast'>Ver más ➡</Link>
    </div>
  )
  return (
    <Section title='Reparto principal'>
      <Slider key={id} slides={cleanCast} SlideComponent={Slide} LastSlide={lastSlide} />
      <Link to='cast' className='mt-2'>Ver reparto y equipo completo</Link>
    </Section>
  )
}

const Slide = ({ id, name, picturePath, characters, episodeCount }) => {
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
    <div className='h-full w-36 rounded overflow-hidden custom-shadow'>
      <Link to={'/person/' + id}>
        <img loading='lazy' className='aspect-[4/5] object-cover object-top' src={prettyPath} alt={`Foto de perfil de ${name}`} />
      </Link>
      <div className='p-2'>
        <Link to={'/person/' + id}>
          <p className='no-swiping font-semibold inline'>{name}</p>
        </Link>
        {characters &&
          <p className='no-swiping w-fit text-sm'>{characters}</p>}
        {episodeCount > 0 &&
          <p className='text-sm text-neutral-400'>{episodeCount} episodios</p>}
      </div>
    </div>
  )
}
