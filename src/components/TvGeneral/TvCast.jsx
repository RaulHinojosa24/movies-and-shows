import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import DefaultProfileImage from '../../assets/default-user.webp'
import Slider from '../PageUI/Slider'
import React, { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import ElementsList from '../UI/ElementsList'
import VerticalCard from '../UI/Cards/VerticalCard'
import { formatNumber } from '../../utils/utility'

export default function TvCast ({ id, cast }) {
  if (cast.length === 0) {
    return (
      <Section title='Top Billed Cast'>
        <p className='italic'>We currently have no top billed cast available</p>
        <Link to='cast' className='mt-2 inline-block'>Visit full cast and crew</Link>
      </Section>
    )
  }

  const cleanCast = cast
    .filter((_, i) => i < 9)
    .map(person => {
      const shortCharactersSize = 4
      const remainingCharacters = person.roles.length - shortCharactersSize

      const shortCharacters = person.roles
        .filter((_, i) => i < shortCharactersSize)

      return {
        id: person.id,
        name: person.name || person.original_name,
        picturePath: person.profile_path,
        characters: shortCharacters,
        remainingCharacters,
        episodeCount: person.total_episode_count,
        adult: person.adult
      }
    })

  const lastSlide = () => (
    <div className='w-36 h-full grid place-items-center'>
      <Link to='cast'>See more &rarr;</Link>
    </div>
  )
  return (
    <Section title='Top Billed Cast'>
      <Slider key={id} slides={cleanCast} SlideComponent={Slide} LastSlide={lastSlide} />
      <Link to='cast' className='mt-2'>Visit full cast and crew</Link>
    </Section>
  )
}

const Slide = ({ id, name, picturePath, characters, remainingCharacters, episodeCount, adult }) => {
  const { config } = useContext(rootContext)

  const prettyPath = picturePath && config
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[1] + picturePath
    : DefaultProfileImage
  const prettyLink = '/person/' + id
  const prettyCount = formatNumber(episodeCount)
  const secondary = characters &&
    <>
      <ElementsList style='comma'>
        {characters.map(({ character, credit_id: creditId }) => (
          <React.Fragment key={creditId}>
            {character}
          </React.Fragment>
        ))}
      </ElementsList>
      {remainingCharacters > 0 &&
        <span> and {remainingCharacters} more...</span>}
    </>
  const tertiary = episodeCount > 0 &&
    `${prettyCount} episode${episodeCount > 1 ? 's' : ''}`

  return (
    <VerticalCard
      imageUrl={prettyPath}
      isAdult={adult}
      link={prettyLink}
      secondary={secondary}
      tertiary={tertiary}
      title={name}
    />
  )
}
