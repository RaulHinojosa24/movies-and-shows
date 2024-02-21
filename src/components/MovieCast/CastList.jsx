import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import CastItem from './CastItem'

export default function CastList ({ cast }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = useRouteLoaderData('root')

  return (
    <Section title='Reparto'>
      <ul className='flex flex-col gap-3'>
        {cast.map(el => {
          const imagePath = el.profile_path && baseURL + profileSizes[1] + el.profile_path

          return (
            <li key={el.id}>
              <CastItem image={imagePath} primary={el.name} secondary={el.character} />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
