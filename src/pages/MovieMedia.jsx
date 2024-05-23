import Main from '../components/PageUI/Main'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'
import { setDocTitle } from '../utils/utility'
import { Await, useRouteLoaderData } from 'react-router-dom'
import { Suspense } from 'react'

export default function MovieMediaPage () {
  const { data: loaderMovieDetails } = useRouteLoaderData('movie-details')

  return (
    <Main
      center={
        <Suspense>
          <Await resolve={loaderMovieDetails}>
            {({
              title,
              oringinal_title: originalTitle,
              images: {
                backdrops, posters
              },
              videos: {
                results: videos
              }
            }) => {
              setDocTitle(`${title || originalTitle} - Fotos y vídeos`)

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
