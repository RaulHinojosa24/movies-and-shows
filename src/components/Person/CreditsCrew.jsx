import { useRouteLoaderData } from 'react-router-dom'
import SubSection from '../UI/SubSection'
import GroupedCreditsDisplay from './GroupedCreditsDisplay'

export default function CreditsCrew ({ groupBy, sorting }) {
  const { combined_credits: { crew } } = useRouteLoaderData('person-details')

  const cleanCrewCredits = [...crew]
    .map(c => ({
      id: c.id,
      title: c.title || c.original_title,
      popularity: c.popularity,
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

  const creditsPerDepartment = {}

  for (const credit of cleanCrewCredits) {
    const creditDep = credit.department
    const department = creditsPerDepartment[creditDep]
    const alr = department?.find(c => (c.releaseDate || c.firstAirDate) === (credit.releaseDate || credit.firstAirDate) && (c.id === credit.id))

    if (alr) {
      alr.jobs.push(credit.jobs[0])
    } else if (department) {
      department.push(credit)
    } else {
      creditsPerDepartment[creditDep] = [credit]
    }
  }

  return (
    <>
      {Object.keys(creditsPerDepartment).sort().map(dep => (
        <SubSection key={dep} title={dep} className='space-y-2'>
          <GroupedCreditsDisplay credits={creditsPerDepartment[dep]} groupBy={groupBy} sorting={sorting} />
        </SubSection>
      ))}
    </>
  )
}
