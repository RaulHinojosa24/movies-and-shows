import Main from '../components/PageUI/Main'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'
import { setDocTitle } from '../utils/utility'
import { Await, useRouteLoaderData } from 'react-router-dom'
import { Suspense } from 'react'
import MovieHeaderCompact from '../components/MovieGeneral/MovieHeaderCompact'
import MovieMediaSkeleton from '../skeleton-pages/MovieMediaSkeleton'

export default function MovieMediaPage () {
  const { data: loaderMovieDetails } = useRouteLoaderData('movie-details')
  setDocTitle('Cargando...')

  return (
    <Suspense fallback={<MovieMediaSkeleton />}>
      <Await resolve={loaderMovieDetails}>
        {({
          title,
          oringinal_title: originalTitle,
          images: {
            backdrops, posters
          },
          videos: {
            results: videos
          },
          id,
          poster_path: posterPath
        }) => {
          const prettyTitle = title || originalTitle
          setDocTitle(`${prettyTitle} - Fotos y vídeos`)

          return (
            <>
              <MovieHeaderCompact id={id} posterPath={posterPath} title={prettyTitle} />
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
