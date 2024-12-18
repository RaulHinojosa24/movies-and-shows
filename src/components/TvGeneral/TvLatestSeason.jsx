import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import SeasonItem from '../TvSeasons/SeasonItem'

export default function TvLatestSeason ({ tvId, seasons }) {
  const lastSeason = seasons.findLast(s => new Date(s.air_date) - new Date() < 0)
  const nextSeason = seasons.findLast(s => new Date(s.air_date) - new Date() > 0)

  if (!lastSeason && !nextSeason) return null

  const {
    air_date: airDate,
    episode_count: episodeCount,
    name,
    overview,
    poster_path: posterPath,
    season_number: seasonNumber,
    vote_average: voteAverage
  } = (lastSeason || nextSeason)

  return (
    <Section title={!lastSeason ? 'Next Season' : 'Last Season'}>
      <SeasonItem airDate={airDate} episodeCount={episodeCount} tvId={tvId} name={name} overview={overview} posterPath={posterPath} seasonNumber={seasonNumber} voteAverage={voteAverage} />
      <Link to='season' className='inline-block mt-2'>Visit all seasons</Link>
    </Section>
  )
}
