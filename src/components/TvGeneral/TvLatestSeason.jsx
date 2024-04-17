import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import SeasonItem from '../TvSeasons/SeasonItem'

export default function TvLatestSeason () {
  const { seasons } = useRouteLoaderData('tv-details')
  const lastSeason = seasons.findLast(s => Boolean(s.air_date))
  const {
    air_date: airDate,
    episode_count: episodeCount,
    id,
    name,
    overview,
    poster_path: posterPath,
    season_number: seasonNumber,
    vote_average: voteAverage
  } = lastSeason

  return (
    <Section title='Temporada actual'>
      <SeasonItem airDate={airDate} episodeCount={episodeCount} id={id} name={name} overview={overview} posterPath={posterPath} seasonNumber={seasonNumber} voteAverage={voteAverage} />
      <Link to='season' className='inline-block mt-2'>Ver todas las temporadas</Link>
    </Section>
  )
}
