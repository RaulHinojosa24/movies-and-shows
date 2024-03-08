import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'

import DefaultProfileImage from '../../assets/default-user.png'
import Slider from '../PageUI/Slider'

export default function TvCast () {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const {
    aggregate_credits: {
      cast
    }
  } = useRouteLoaderData('tv-details')

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
        picturePath: person.profile_path
          ? baseURL + profileSizes[1] + person.profile_path
          : DefaultProfileImage,
        characters: shortCharacters,
        episodeCount: person.total_episode_count
      }
    })

  const slide = ({ id, name, picturePath, characters, episodeCount }) => (
    <div className='h-full w-36 rounded overflow-hidden custom-shadow'>
      <Link to={'/person/' + id}>
        <img loading='lazy' className='aspect-[4/5] object-cover object-top' src={picturePath} alt={`Foto de perfil de ${name}`} />
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

  const lastSlide = () => (
    <div className='w-36 h-full grid place-items-center'>
      <Link to='cast'>Ver más ➡</Link>
    </div>
  )
  return (
    <Section title='Reparto principal'>
      <Slider slides={cleanCast} SlideComponent={slide} LastSlide={lastSlide} />
      <Link to='cast' className='mt-2'>Ver reparto y equipo completo</Link>
    </Section>
  )
}
