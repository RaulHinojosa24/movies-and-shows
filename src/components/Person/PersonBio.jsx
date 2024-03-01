import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'

export default function PersonBio () {
  const { biography } = useRouteLoaderData('person-details')
  return (
    <Section title='Biografía'>
      <p className='whitespace-pre-line text-pretty'>{biography}</p>
    </Section>
  )
}
