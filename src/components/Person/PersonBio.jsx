import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'

export default function PersonBio () {
  const { biography } = useRouteLoaderData('person-details')
  return (
    <Section title='Biografía'>
      {biography &&
        <p className='whitespace-pre-line text-pretty'>{biography}</p>}
      {!biography &&
        <p className='italic'>No tenemos una biografía en tu idioma.</p>}
    </Section>
  )
}
