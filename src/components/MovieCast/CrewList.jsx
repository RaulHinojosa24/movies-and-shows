import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import CastItem from './CastItem'
import SubSection from '../UI/SubSection'

export default function CrewList ({ crew }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = useRouteLoaderData('root')

  const prettyCrew = []

  for (const member of crew) {
    const { department } = member
    const currDep = prettyCrew.find(dep => dep.name === department)

    if (currDep) {
      currDep.members.push(member)
    } else {
      prettyCrew.push({
        name: department,
        members: [member]
      })
    }
  }
  prettyCrew
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <Section title='Equipo'>
      <ol>
        {prettyCrew.map(({ name, members }) => {
          const sortedMembers = [...members]
            .sort((a, b) => (
              a.job.localeCompare(b.job) ||
              a.name.localeCompare(b.name)
            ))
          return (
            <li key={name}>
              <SubSection title={name}>
                <ul className='flex flex-col gap-3'>
                  {sortedMembers
                    .map(el => {
                      const imagePath = el.profile_path && baseURL + profileSizes[1] + el.profile_path

                      return (
                        <li key={el.id + el.job}>
                          <CastItem image={imagePath} primary={el.name} secondary={el.job} />
                        </li>
                      )
                    })}
                </ul>
              </SubSection>
            </li>
          )
        })}
      </ol>

    </Section>
  )
}
