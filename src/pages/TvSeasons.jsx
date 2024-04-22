import Main from '../components/PageUI/Main'
import { useRouteLoaderData } from 'react-router-dom'
import Section from '../components/UI/Section'
import SeasonItem from '../components/TvSeasons/SeasonItem'
import { setDocTitle } from '../utils/utility'

export default function TvSeasonsPage () {
  const {
    seasons,
    name,
    original_name: originalName
  } = useRouteLoaderData('tv-details')

  setDocTitle(`${name || originalName} - Temporadas`)

  return (
    <Main
      center={
        <Section title={'Todas las temporadas de ' + (name || originalName)}>
          <ol className='flex flex-col gap-2'>
            {seasons.map(season => {
              const {
                air_date: airDate,
                episode_count: episodeCount,
                id,
                name,
                overview,
                poster_path: posterPath,
                season_number: seasonNumber,
                vote_average: voteAverage
              } = season

              return <SeasonItem key={id} airDate={airDate} episodeCount={episodeCount} id={id} name={name} overview={overview} posterPath={posterPath} seasonNumber={seasonNumber} voteAverage={voteAverage} />
            })}
          </ol>
        </Section>
      }
    />
  )
}
