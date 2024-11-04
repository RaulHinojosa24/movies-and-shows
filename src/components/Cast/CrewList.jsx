import { formatNumber } from '../../utils/utility'
import Section from '../UI/Section'
import RenderList from './RenderList'

export default function CrewList ({ crew, needJoin }) {
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
      let cleanMembers = []

      if (needJoin) {
        for (const member of members) {
          const inClean = cleanMembers.find(el => el.id === member.id)

          if (inClean) {
            inClean.jobs.push({
              credit_id: member.credit_id,
              job: member.job
            })
          } else {
            cleanMembers.push({
              ...member,
              jobs: [{
                credit_id: member.credit_id,
                job: member.job
              }]
            })
          }
        }
      } else {
        cleanMembers = members
      }

      return {
        department,
        members: cleanMembers
          .map(member => ({
            ...member,
            jobs: member.jobs.sort((a, b) => a.job.localeCompare(b.job))
          }))
      }
    })

  const crewLength = formatNumber(depsWithMembers.reduce((acc, curr) => acc + curr?.members?.length, 0))

  return (
    <Section title='Equipo' subtitle={crewLength}>
      <ol className='space-y-4'>
        {prettyCrew.map(({ department, members }) => {
          return (
            <li key={department}>
              <RenderList list={members} title={department} />
            </li>
          )
        })}
      </ol>

    </Section>
  )
}
