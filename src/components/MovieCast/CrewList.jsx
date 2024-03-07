import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import CastItem from './CastItem'
import SubSection from '../UI/SubSection'
import { retrieveConfig } from '../../utils/utility'

export default function CrewList ({ crew }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const depsWithMembers = []

  for (const member of crew) {
    const { department } = member
    const currDep = depsWithMembers.find(el => el.department === department)

    if (currDep) {
      currDep.members.push(member)
    } else {
      depsWithMembers.push({
        department,
        members: [member]
      })
    }
  }

  depsWithMembers
    .sort((a, b) => a.department.localeCompare(b.department))

  const prettyCrew = depsWithMembers
    .map(({ department, members }) => {
      const cleanMembers = []

      for (const member of members) {
        const inClean = cleanMembers.find(el => el.id === member.id)

        if (inClean) {
          inClean.jobs.push(member.job)
        } else {
          cleanMembers.push({
            ...member,
            jobs: [member.job]
          })
        }
      }

      return {
        department,
        members: cleanMembers
          .map(member => ({
            ...member,
            jobs: member.jobs.sort()
          }))
          .sort((a, b) => (
            a.jobs[0].localeCompare(b.jobs[0]) ||
            a.name.localeCompare(b.name)
          ))
      }
    })

  return (
    <Section title='Equipo'>
      <ol className='space-y-4'>
        {prettyCrew.map(({ department, members }) => {
          return (
            <li key={department}>
              <SubSection title={department} className='space-y-2'>
                <ul className='space-y-3'>
                  {members
                    .map(el => {
                      const imagePath = el.profile_path && baseURL + profileSizes[1] + el.profile_path
                      const jobs = el.jobs.join(', ')

                      return (
                        <li key={el.id}>
                          <CastItem id={el.id} image={imagePath} primary={el.name} secondary={jobs} />
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
