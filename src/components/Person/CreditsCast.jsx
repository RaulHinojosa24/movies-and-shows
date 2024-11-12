import SubSection from '../UI/SubSection'
import GroupedCreditsDisplay from './GroupedCreditsDisplay'

export default function CreditsCast ({ groupBy, sorting, direction, cast }) {
  const cleanCastCredits = [...cast]
    .map(c => ({
      id: c.id,
      title: c.title || c.original_title,
      popularity: c.popularity,
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
      sortDate: new Date(c.release_date || c.first_air_date),
      adult: c.adult
    }))

  return (
    <SubSection title='Cast' className='space-y-2'>
      <GroupedCreditsDisplay credits={cleanCastCredits} groupBy={groupBy} sorting={sorting} direction={direction} />
    </SubSection>
  )
}
