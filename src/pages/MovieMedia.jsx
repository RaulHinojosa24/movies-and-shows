import Main from '../components/PageUI/Main'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'
import { setDocTitle } from '../utils/utility'
import { useRouteLoaderData } from 'react-router-dom'

export default function MovieMediaPage () {
  const {
    title,
    oringinal_title: originalTitle,
    images: {
      backdrops, posters
    },
    videos: {
      results: videos
    }
  } = useRouteLoaderData('movie-details')

  setDocTitle(`${title || originalTitle} - Fotos y vídeos`)

  return (
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
  )
}
