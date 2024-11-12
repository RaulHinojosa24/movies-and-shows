import Section from '../UI/Section'
import ClampedText from '../UI/ClampedText'

export default function TvOverview ({ overview }) {
  return (
    <Section title='Overview'>
      {overview &&
        <ClampedText text={overview} />}
      {!overview &&
        <p className='italic'>We currently have no overview available</p>}
    </Section>
  )
}
