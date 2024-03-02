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
      jobs: c.job ? [c.job] : [],
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
    const time = crew.sortDate - new Date() < 0 ? 'Anterior' : 'Próximamente'
    const department = crewPerDepartment[crewDep]
    const depTime = department?.[time]
    const alrCrew = department?.[time]?.find(c => (c.releaseDate || c.firstAirDate) === (crew.releaseDate || crew.firstAirDate) && (c.id === crew.id))

    if (alrCrew) {
      alrCrew.jobs.push(crew.jobs[0])
    } else if (depTime) {
      depTime.push(crew)
    } else if (department) {
      department[time] = [crew]
    } else {
      crewPerDepartment[crewDep] = {
        [time]: [crew]
      }
    }
  }

  return (
    <>
      {departments.map(dep => (
        <SubSection key={dep} title={dep} className='space-y-2'>
          {Object.keys(crewPerDepartment[dep]).sort().reverse().map(t => {
            const sortedArr = [...crewPerDepartment[dep][t]]
              .sort((a, b) => (
                (a.releaseDate || a.firstAirDate) && (b.releaseDate || b.firstAirDate)
                  ? b.sortDate - a.sortDate
                  : (a.releaseDate || a.firstAirDate)
                      ? 1
                      : (b.releaseDate || b.firstAirDate)
                          ? -1
                          : (a.title || a.name).localeCompare((b.title || b.name))
              ))
            return (
              <Colapsible key={t} title={t} subtitle={sortedArr.length} className='custom-shadow-small'>
                <ol>
                  {sortedArr.map(cast =>
                    <li key={cast.creditId}>
                      <CreditItem {...cast} />
                    </li>)}
                </ol>
              </Colapsible>
            )
          })}
        </SubSection>
      ))}
    </>
  )
}
