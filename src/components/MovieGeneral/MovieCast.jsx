import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import DefaultProfileImage from '../../assets/default-user.webp'
import Slider from '../PageUI/Slider'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import VerticalCard from '../UI/Cards/VerticalCard'

export default function MovieCast ({ id, cast }) {
  if (cast.length === 0) {
    return (
      <Section title='Top Billed Cast'>
        <p className='italic'>We currently have no top billed cast available</p>
        <Link to='cast' className='mt-2 inline-block'>Visit full cast and crew</Link>
      </Section>
    )
  }

  const cleanCast = cast
    .filter((_, id) => id < 9)
    .map(person => ({
      id: person.id,
      name: person.name || person.original_name,
      picturePath: person.profile_path,
      character: person.character,
      adult: person.adult
    }))

  const lastSlide = () => (
    <div className='w-36 h-full grid place-items-center'>
      <Link to='cast'>See more &rarr;</Link>
    </div>
  )
  return (
    <Section title='Top Billed Cast'>
      <Slider key={id} slides={cleanCast} SlideComponent={Slide} LastSlide={lastSlide} />
      <Link to='cast' className='mt-2 inline-block'>Visit full cast and crew</Link>
    </Section>
  )
}

const Slide = ({ id, name, picturePath, character, adult }) => {
  const { config } = useContext(rootContext)

  const prettyPath = picturePath && config
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[1] + picturePath
    : DefaultProfileImage
  const prettyLink = '/person/' + id

  return (
    <VerticalCard
      imageUrl={prettyPath}
      isAdult={adult}
      link={prettyLink}
      secondary={character}
      title={name}
    />
  )
}
