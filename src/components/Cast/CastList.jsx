import { formatNumber } from '../../utils/utility'
import InfiniteScroll from '../UI/InfiniteScroll'
import Section from '../UI/Section'
import CastItem from './CastItem'

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
      <InfiniteScroll
        list={cleanCast}
        Element={({ id, profile_path: profilePath, name, adult, roles }) =>
          <CastItem key={id} id={id} image={profilePath} primary={name} secondary={roles} adult={adult} />}
      />
    </Section>
  )
}
