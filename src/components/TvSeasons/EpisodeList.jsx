import { useLoaderData } from 'react-router-dom'
import EpisodeItem from './EpisodeItem'
import Section from '../UI/Section'

export default function EpisodeList () {
  const { episodes } = useLoaderData()

  return (
    <Section title='Episodios'>
      <ol className='space-y-2'>
        {episodes.map(episode => {
          const { air_date: airDate, episode_number: episodeNumber, name, overview, runtime, season_number: seasonNumber, show_id: showId, still_path: stillPath, vote_average: voteAverage, vote_count: voteCount, crew, guest_stars: guestStars } = episode

          return <EpisodeItem key={episodeNumber} airDate={airDate} crew={crew} episodeNumber={episodeNumber} guestStars={guestStars} name={name} overview={overview} runtime={runtime} seasonNumber={seasonNumber} showId={showId} stillPath={stillPath} voteAverage={voteAverage} voteCount={voteCount} />
        })}
      </ol>
    </Section>
  )
}
