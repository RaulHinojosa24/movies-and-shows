import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import EpisodeList from '../components/TvSeasons/EpisodeList'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'
import { Suspense } from 'react'
import TvSeasonGeneralSkeleton from '../skeleton-pages/TvSeasonGeneralSkeleton'
import SeasonHeader from '../components/TvSeasons/SeasonHeader'
import SeasonsNav from '../components/TvSeasons/SeasonsNav'
import ErrorPage from './ErrorPage'

export default function TvSeasonGeneralPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  const { data: loaderSeasonDetails } = useRouteLoaderData('season-details')
  setDocTitle('Loading...')

  return (
    <Suspense fallback={<TvSeasonGeneralSkeleton />}>
      <Await
        resolve={Promise.all([loaderTvDetails, loaderSeasonDetails])}
        errorElement={<ErrorPage />}
      >
        {(data) => {
          const [{
            name: tvName,
            original_name: tvOriginalName,
            id: tvId,
            seasons
          }, {
            images: { posters },
            videos: { results },
            episodes,
            name: sName,
            orinigal_name: originalName,
            poster_path: posterPath,
            season_number: seasonNumber
          }] = data
          const prettyTvName = tvName || tvOriginalName

          setDocTitle(`${prettyTvName} - ${sName}`)

          return (
            <>
              <SeasonHeader name={sName} posterPath={posterPath} tvId={tvId} />
              <SeasonsNav seasons={seasons} currentSeasonNumber={seasonNumber} tvId={tvId} />
              <Main
                center={
                  <>
                    <GeneralMedia posters={posters} videos={results} title={sName || originalName} />
                    <EpisodeList episodes={episodes} tvName={sName} tvOriginalName={originalName} />
                  </>
            }
              />
            </>
          )
        }}
      </Await>
    </Suspense>

  )
}
