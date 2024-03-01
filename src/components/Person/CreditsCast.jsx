import { useRouteLoaderData } from 'react-router-dom'
import SubSection from '../UI/SubSection'
import CreditItem from './CreditItem'
import Colapsible from '../UI/Colapsible'

export default function CreditsCast () {
  const { combined_credits: { cast } } = useRouteLoaderData('person-details')

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
    .filter(c => (!c.releaseDate && !c.firstAirDate) || new Date(c.releaseDate || c.firstAirDate) - new Date() > 0)
    .sort((a, b) => (
      (a.releaseDate || a.firstAirDate)
        ? 1
        : (b.releaseDate || b.firstAirDate)
            ? -1
            : 0 ||
      (a.title || a.name).localeCompare((b.title || b.name))
    ))
  const pastCast = cleanCast
    .filter(c => (c.releaseDate || c.firstAirDate) && new Date(c.releaseDate || c.firstAirDate) - new Date() < 0)
    .sort((a, b) =>
      b.sortDate - a.sortDate ||
      (a.title || a.name).localeCompare((b.title || b.name))
    )

  return (
    <SubSection title='Reparto' className='space-y-2'>
      {upcomingCast.length > 0 &&
        <Colapsible title='Próximamente' subtitle={upcomingCast.length} className='custom-shadow-small'>
          <ol className='divide-y-1 divide-neutral-700'>
            {upcomingCast.map(cast =>
              <li key={cast.creditId}>
                <CreditItem {...cast} />
              </li>)}
          </ol>
        </Colapsible>}
      {pastCast.length > 0 &&
        <Colapsible title='Anterior' subtitle={pastCast.length} className='custom-shadow-small'>
          <ol className='divide-y-1 divide-neutral-700'>
            {pastCast.map(cast =>
              <li key={cast.creditId}>
                <CreditItem {...cast} />
              </li>)}
          </ol>
        </Colapsible>}
    </SubSection>
  )
}
