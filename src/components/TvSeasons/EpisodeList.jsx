import EpisodeItem from './EpisodeItem'
import Section from '../UI/Section'
import { formatNumber } from '../../utils/utility'
import InfiniteScroll from '../UI/InfiniteScroll'

export default function EpisodeList ({ episodes, tvName, tvOriginalName }) {
  const seasonLength = episodes.length
  const prettyCount = formatNumber(seasonLength)

  return (
    <Section title='Episodes' subtitle={prettyCount}>
      <InfiniteScroll
        list={episodes}
        Element={
          ({ air_date: airDate, episode_number: episodeNumber, name, overview, runtime, season_number: seasonNumber, show_id: showId, still_path: stillPath, vote_average: voteAverage, vote_count: voteCount, crew, guest_stars: guestStars }) =>
            <EpisodeItem airDate={airDate} crew={crew} episodeNumber={episodeNumber} guestStars={guestStars} name={name} overview={overview} runtime={runtime} seasonNumber={seasonNumber} showId={showId} stillPath={stillPath} voteAverage={voteAverage} voteCount={voteCount} tvName={tvName} tvOriginalName={tvOriginalName} />
        }
      />
    </Section>
  )
}
