import Main from '../components/PageUI/Main'
import { Await, useRouteLoaderData } from 'react-router-dom'
import Section from '../components/UI/Section'
import SeasonItem from '../components/TvSeasons/SeasonItem'
import { setDocTitle } from '../utils/utility'
import SeasonCardSkeleton from '../components/Skeletons/SeasonCardSkeleton'
import { Suspense } from 'react'

export default function TvSeasonsPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')

  return (
    <Main
      center={
        <Suspense fallback={<Fallback />}>
          <Await resolve={loaderTvDetails}>
            {({
              seasons,
              name,
              original_name: originalName
            }) => {
              setDocTitle(`${name || originalName} - Temporadas`)

              return (
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
              )
            }}
          </Await>
        </Suspense>
      }
    />
  )
}

function Fallback () {
  return (
    <div>
      <div className='skeleton__title w-1/4 mb-4' />
      <div className='space-y-2'>{Array(2).fill().map((_, i) => <SeasonCardSkeleton key={i} />)}</div>
    </div>
  )
}
