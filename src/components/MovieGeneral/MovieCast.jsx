import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'

import DefaultProfileImage from '../../assets/default-user.png'
import Slider from '../UI/Slider'

export default function MovieCast ({ cast }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const {
    credits
  } = useRouteLoaderData('movie-details')

  const cleanCast = credits.cast
    .filter((_, id) => id < 9)
    .map(person => ({
      id: person.id,
      name: person.name || person.original_name,
      picturePath: person.profile_path
        ? baseURL + profileSizes[1] + person.profile_path
        : DefaultProfileImage,
      character: person.character
    }))

  const slide = ({ id, name, picturePath, character }) => (
    <div className='h-full w-36 rounded overflow-hidden custom-shadow'>
      <Link to={'/person/' + id}>
        <img loading='lazy' className='aspect-[4/5] object-cover object-top' src={picturePath} alt={`Picture of ${name}`} />
      </Link>
      <div className='p-2 h-full'>
        <Link to={'/person/' + id} className='inline-block'>
          <p className='no-swiping font-semibold w-fit'>{name}</p>
        </Link>
        <p className='no-swiping w-fit text-sm'>{character}</p>
      </div>
    </div>
  )

  const lastSlide = () => (
    <div className='w-32 h-full grid place-items-center'>
      <Link to='cast'>Ver más ➡</Link>
    </div>
  )
  return (
    <Section title='Reparto principal'>
      <Slider slides={cleanCast} SlideComponent={slide} LastSlide={lastSlide} />
      <Link to='cast' className='mt-2 inline-block'>Ver reparto y equipo completo</Link>
    </Section>
  )
}
