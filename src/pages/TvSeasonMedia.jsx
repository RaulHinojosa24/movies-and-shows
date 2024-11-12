import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'
import { Suspense } from 'react'
import TvSeasonMediaSkeleton from '../skeleton-pages/TvSeasonMediaSkeleton'
import SeasonHeader from '../components/TvSeasons/SeasonHeader'
import SeasonsNav from '../components/TvSeasons/SeasonsNav'
import ErrorPage from './ErrorPage'

export default function TvSeasonMediaPage () {
  const { data: loaderSeasonDetails } = useRouteLoaderData('season-details')
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  setDocTitle('Loading...')

  return (
    <Suspense fallback={<TvSeasonMediaSkeleton />}>
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
            name: sName,
            poster_path: posterPath,
            images: { posters },
            videos: { results: videos },
            season_number: seasonNumber
          }] = data
          const prettyTvName = tvName || tvOriginalName
          setDocTitle(`${prettyTvName} - ${sName} - Media`)

          return (
            <>
              <SeasonHeader name={sName} posterPath={posterPath} tvId={tvId} seasonNumber={seasonNumber} />
              <SeasonsNav seasons={seasons} currentSeasonNumber={seasonNumber} tvId={tvId} />
              <Main
                center={
                  <>
                    {posters.length > 0 &&
                      <MediaPosters images={posters} />}
                    {videos.length > 0 &&
                      <MediaVideos videos={videos} />}
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
