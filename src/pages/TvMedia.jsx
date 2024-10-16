import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'
import { Suspense } from 'react'
import TvMediaSkeleton from '../skeleton-pages/TvMediaSkeleton'
import TvHeaderCompact from '../components/TvGeneral/TvHeaderCompact'
import ErrorPage from './ErrorPage'

export default function TvMediaPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  setDocTitle('Cargando...')

  return (
    <Suspense fallback={<TvMediaSkeleton />}>
      <Await
        resolve={loaderTvDetails}
        errorElement={<ErrorPage />}
      >
        {({
          name,
          original_name: originalName,
          images: {
            backdrops,
            posters
          },
          videos: {
            results: videos
          },
          id,
          poster_path: posterPath
        }) => {
          const prettyName = name || originalName
          setDocTitle(`${prettyName} - Fotos y vídeos`)

          return (
            <>
              <TvHeaderCompact id={id} posterPath={posterPath} name={prettyName} />
              <Main
                center={
                  <>
                    {backdrops.length > 0 &&
                      <MediaBackdrops images={backdrops} />}
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
