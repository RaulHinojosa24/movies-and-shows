import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import ClampedText from '../UI/ClampedText'

export default function TvOverview () {
  const {
    overview
  } = useRouteLoaderData('tv-details')

  return (
    <Section title='Sinopsis'>
      {overview &&
        <ClampedText text={overview} />}
      {!overview &&
        <p className='italic'>No tenemos una sinopsis en tu idioma.</p>}
    </Section>
  )
}
