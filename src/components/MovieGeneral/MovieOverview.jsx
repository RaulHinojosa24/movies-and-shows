import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'

export default function MovieOverview () {
  const {
    overview
  } = useRouteLoaderData('movie-details')

  return (
    <Section title='Sinopsis'>
      {overview &&
        <p className='whitespace-pre-line text-pretty'>{overview}</p>}
      {!overview &&
        <p className='italic'>No tenemos una sinopsis en tu idioma.</p>}
    </Section>
  )
}
