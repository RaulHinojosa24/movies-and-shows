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

  return (
    <Section title='Reparto'>
      <ul className='space-y-3'>
        {cleanCast.map(el => (
          <li key={el.id}>
            <CastItem id={el.id} image={el.profile_path} primary={el.name} secondary={el.roles} />
          </li>
        )
        )}
      </ul>
    </Section>
  )
}
