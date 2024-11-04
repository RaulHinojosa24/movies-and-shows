import { formatNumber } from '../../utils/utility'
import Section from '../UI/Section'
import RenderList from './RenderList'

export default function CastList ({ cast, needJoin }) {
  let cleanCast = []

  if (needJoin) {
    cleanCast = cast
      .map(c => ({
        ...c,
        roles: [{
          credit_id: c.credit_id,
          character: c.character
        }]
      }))
  } else {
    cleanCast = cast
  }

  const castLength = formatNumber(cleanCast.length)

  return (
    <Section title='Reparto' subtitle={castLength}>
      <RenderList list={cleanCast} />
    </Section>
  )
}
