import Section from '../UI/Section'
import CastItem from './CastItem'
import SubSection from '../UI/SubSection'

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
          .sort((a, b) => (
            a.jobs[0].job.localeCompare(b.jobs[0].job) ||
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
                    .map(el => (
                      <li key={el.id}>
                        <CastItem id={el.id} image={el.profile_path} primary={el.name} secondary={el.jobs} adult={el.adult} />
                      </li>
                    )
                    )}
                </ul>
              </SubSection>
            </li>
          )
        })}
      </ol>

    </Section>
  )
}
