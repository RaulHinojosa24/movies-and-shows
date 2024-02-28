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
          inClean.job.push(member.job)
        } else {
          cleanMembers.push({
            ...member,
            job: [member.job]
          })
        }
      }

      return {
        department,
        members: cleanMembers
          .map(member => ({
            ...member,
            job: member.job.sort()
          }))
          .sort((a, b) => (
            a.job[0].localeCompare(b.job[0]) ||
            a.name.localeCompare(b.name)
          ))
      }
    })

  return (
    <Section title='Equipo'>
      <ol className='flex flex-col gap-4'>
        {prettyCrew.map(({ department, members }) => {
          return (
            <li key={department}>
              <SubSection title={department} className='gap-2'>
                <ul className='flex flex-col gap-3'>
                  {members
                    .map(el => {
                      const imagePath = el.profile_path && baseURL + profileSizes[1] + el.profile_path
                      const jobs = el.job.join(', ')

                      return (
                        <li key={el.id + el.job}>
                          <CastItem image={imagePath} primary={el.name} secondary={jobs} />
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
