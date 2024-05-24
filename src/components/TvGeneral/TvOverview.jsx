import Section from '../UI/Section'
import ClampedText from '../UI/ClampedText'

export default function TvOverview ({ overview }) {
  return (
    <Section title='Sinopsis'>
      {overview &&
        <ClampedText text={overview} />}
      {!overview &&
        <p className='italic'>No tenemos una sinopsis en tu idioma.</p>}
    </Section>
  )
}
