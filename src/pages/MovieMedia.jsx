import Main from '../components/PageUI/Main'
import MediaBackdrops from '../components/MovieMedia/MediaBackdrops'
import MediaPosters from '../components/MovieMedia/MediaPosters'
import MediaVideos from '../components/MovieMedia/MediaVideos'
import { setDocTitle } from '../utils/utility'
import { useRouteLoaderData } from 'react-router-dom'

export default function MovieMediaPage () {
  const {
    title,
    oringinal_title: originalTitle
  } = useRouteLoaderData('movie-details')

  setDocTitle(`${title || originalTitle} - Fotos y vídeos`)

  return (
    <Main
      center={
        <>
          <MediaBackdrops />
          <MediaPosters />
          <MediaVideos />
        </>
      }
    />
  )
}
