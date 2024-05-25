import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'
import { Suspense } from 'react'

export default function TvMediaPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')

  return (
    <Main
      center={
        <Suspense>
          <Await resolve={loaderTvDetails}>
            {({
              name,
              original_name: originalName,
              images: {
                backdrops,
                posters
              },
              videos: {
                results: videos
              }
            }) => {
              setDocTitle(`${name || originalName} - Fotos y vídeos`)

              return (
                <>
                  {backdrops.length > 0 &&
                    <MediaBackdrops images={backdrops} />}
                  {posters.length > 0 &&
                    <MediaPosters images={posters} />}
                  {videos.length > 0 &&
                    <MediaVideos videos={videos} />}
                </>
              )
            }}
          </Await>
        </Suspense>
      }
    />
  )
}
