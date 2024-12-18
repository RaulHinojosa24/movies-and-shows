import Main from '../components/PageUI/Main'
import { Await, useRouteLoaderData } from 'react-router-dom'
import Section from '../components/UI/Section'
import SeasonItem from '../components/TvSeasons/SeasonItem'
import { setDocTitle } from '../utils/utility'
import { Suspense } from 'react'
import TvSeasonsSkeleton from '../skeleton-pages/TvSeasonsSkeleton'
import TvHeaderCompact from '../components/TvGeneral/TvHeaderCompact'
import ErrorPage from './ErrorPage'

export default function TvSeasonsPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  setDocTitle('Loading...')

  return (
    <Suspense fallback={<TvSeasonsSkeleton />}>
      <Await
        resolve={loaderTvDetails}
        errorElement={<ErrorPage />}
      >
        {({
          seasons,
          name,
          original_name: originalName,
          id: tvId,
          poster_path: posterPath
        }) => {
          const prettyName = name || originalName
          setDocTitle(`${prettyName} - Seasons`)

          return (
            <>
              <TvHeaderCompact id={tvId} posterPath={posterPath} name={prettyName} />
              <Main
                center={
                  <Section title={`${prettyName} Seasons`}>
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

                        return <SeasonItem key={id} airDate={airDate} episodeCount={episodeCount} id={id} name={name} overview={overview} posterPath={posterPath} seasonNumber={seasonNumber} voteAverage={voteAverage} tvId={tvId} />
                      })}
                    </ol>
                  </Section>
              }
              />
            </>
          )
        }}
      </Await>
    </Suspense>
  )
}
