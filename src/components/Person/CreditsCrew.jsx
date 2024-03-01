import { useRouteLoaderData } from 'react-router-dom'
import SubSection from '../UI/SubSection'
import CreditItem from './CreditItem'
import Colapsible from '../UI/Colapsible'

export default function CreditsCrew () {
  const { combined_credits: { crew } } = useRouteLoaderData('person-details')

  const departments = [...new Set(crew
    .map(c => c.department))]
    .sort()

  const cleanCrew = [...crew]
    .map(c => ({
      id: c.id,
      title: c.title || c.original_title,
      job: c.job,
      department: c.department,
      releaseDate: c.release_date,
      voteAverage: c.vote_average,
      voteCount: c.vote_count,
      mediaType: c.media_type,
      posterPath: c.poster_path,
      video: c.video,
      creditId: c.credit_id,
      name: c.name || c.original_name,
      firstAirDate: c.first_air_date,
      episodeCount: c.episode_count,
      sortDate: new Date(c.release_date || c.first_air_date)
    }))

  const crewPerDepartment = {}

  for (const crew of cleanCrew) {
    const crewDep = crew.department
    const department = crewPerDepartment[crewDep]

    if (department) {
      department.push(crew)
    } else {
      crewPerDepartment[crewDep] = [crew]
    }
  }

  return (
    <>
      {departments.map(dep => (
        <SubSection key={dep} title={dep} className='space-y-2'>
          <Colapsible title='Todo' subtitle={crewPerDepartment[dep].length} className='custom-shadow-small'>
            <ol>
              {crewPerDepartment[dep].map(cast =>
                <li key={cast.creditId}>
                  <CreditItem {...cast} />
                </li>)}
            </ol>
          </Colapsible>
        </SubSection>
      ))}
    </>
  )
}
