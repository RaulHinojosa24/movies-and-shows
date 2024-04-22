import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import CastItem from './CastItem'
import { retrieveConfig } from '../../utils/utility'

export default function CastList ({ cast, needJoin }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

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
        {cleanCast.map(el => {
          const imagePath = el.profile_path && baseURL + profileSizes[1] + el.profile_path

          return (
            <li key={el.id}>
              <CastItem id={el.id} image={imagePath} primary={el.name} secondary={el.roles} />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
