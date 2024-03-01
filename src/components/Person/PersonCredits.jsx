import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import CreditItem from './CreditItem'
import Colapsible from '../UI/Colapsible'

export default function PersonCredits () {
  const { combined_credits: combinedCredits } = useRouteLoaderData('person-details')

  const { cast, crew } = combinedCredits

  const cleanCast = [...cast]
    .map(c => ({
      id: c.id,
      title: c.title || c.original_title,
      character: c.character,
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

  const upcomingCast = cleanCast
    .filter(c => c.releaseDate === '' || c.firstAirDate === '')
    .sort((a, b) => (a.title || a.name).localeCompare((b.title || b.name)))
  const pastCast = cleanCast
    .filter(c => c.releaseDate || c.firstAirDate)
    .sort((a, b) => b.sortDate - a.sortDate)

  return (
    <Section title='Créditos'>
      <SubSection title='Reparto' className='space-y-2'>
        <Colapsible title='Próximamente' subtitle={upcomingCast.length} className='custom-shadow-small'>
          <ol className='divide-y-1 divide-neutral-700'>
            {upcomingCast.map(cast =>
              <li key={cast.creditId}>
                <CreditItem {...cast} />
              </li>)}
          </ol>
        </Colapsible>
        <Colapsible title='Anterior' subtitle={pastCast.length} className='custom-shadow-small'>
          <ol className='divide-y-1 divide-neutral-700'>
            {pastCast.map(cast =>
              <li key={cast.creditId}>
                <CreditItem {...cast} />
              </li>)}
          </ol>
        </Colapsible>
      </SubSection>
    </Section>
  )
}

/*
Movie =>
  id, title, character, release_date, vote_average, media_type, poster_path, video?, credit_id
Tv =>
  id, name, character, first_air_date, vote_average, media_type, poster_path, episode_count, credit_id
*/
