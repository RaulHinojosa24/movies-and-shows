import { useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaPosters from '../components/Media/MediaPosters'
import MediaVideos from '../components/Media/MediaVideos'

export default function TvSeasonMediaPage () {
  const {
    name,
    images: {
      posters
    },
    videos: {
      results: videos
    }
  } = useRouteLoaderData('season-details')
  const {
    name: sName,
    original_name: sOriginalName
  } = useRouteLoaderData('tv-details')

  setDocTitle(`${sName || sOriginalName} - ${name} - Fotos y vídeos`)

  return (
    <Main center={
      <>
        {posters.length > 0 &&
          <MediaPosters images={posters} />}
        {videos.length > 0 &&
          <MediaVideos videos={videos} />}
      </>
    }
    />
  )
}
