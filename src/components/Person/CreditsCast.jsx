import { useRouteLoaderData } from 'react-router-dom'
import SubSection from '../UI/SubSection'
import GroupedCreditsDisplay from './GroupedCreditsDisplay'

export default function CreditsCast ({ groupBy, sorting }) {
  const { combined_credits: { cast } } = useRouteLoaderData('person-details')

  const cleanCastCredits = [...cast]
    .map(c => ({
      id: c.id,
      title: c.title || c.original_title,
      characters: c.character ? [c.character] : [],
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

  return (
    <SubSection title='Reparto' className='space-y-2'>
      <GroupedCreditsDisplay credits={cleanCastCredits} groupBy={groupBy} sorting={sorting} />
    </SubSection>
  )
}
