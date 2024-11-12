import Section from '../UI/Section'
import ClampedText from '../UI/ClampedText'

export default function PersonBio ({ biography }) {
  return (
    <Section title='Biography'>
      {biography &&
        <ClampedText text={biography} />}
      {!biography &&
        <p className='italic'>We currently have no biography available</p>}
    </Section>
  )
}
