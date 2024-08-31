import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'
import { Suspense, useEffect } from 'react'
import TvSeasonMediaSkeleton from '../skeleton-pages/TvSeasonMediaSkeleton'

export default function TvSeasonMediaPage () {
  const { data: loaderSeasonDetails } = useRouteLoaderData('season-details')
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  setDocTitle('Cargando...')

  useEffect(() => {
    Promise.all([loaderTvDetails, loaderSeasonDetails]).then(data => {
      const [{
        name: sName,
        original_name: sOriginalName
      }, { name }] = data
      setDocTitle(`${sName || sOriginalName} - ${name} - Fotos y vídeos`)
    })
  }, [loaderSeasonDetails, loaderTvDetails])

  return (
    <Suspense fallback={<TvSeasonMediaSkeleton />}>
      <Await resolve={loaderSeasonDetails}>
        {({
          name,
          images: {
            posters
          },
          videos: {
            results: videos
          }
        }) =>
          <Main
            center={
              <>
                {posters.length > 0 &&
                  <MediaPosters images={posters} />}
                {videos.length > 0 &&
                  <MediaVideos videos={videos} />}
              </>
            }
          />}
      </Await>
    </Suspense>
  )
}
