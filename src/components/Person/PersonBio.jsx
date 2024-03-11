import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import ClampedText from '../UI/ClampedText'

export default function PersonBio () {
  const { biography } = useRouteLoaderData('person-details')

  return (
    <Section title='Biografía'>
      {biography &&
        <ClampedText text={biography} />}
      {!biography &&
        <p className='italic'>No tenemos una biografía en tu idioma.</p>}
    </Section>
  )
}
