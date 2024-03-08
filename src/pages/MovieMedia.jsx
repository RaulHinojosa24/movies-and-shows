import Main from '../components/PageUI/Main'
import MediaBackdrops from '../components/MovieMedia/MediaBackdrops'
import MediaPosters from '../components/MovieMedia/MediaPosters'
import MediaVideos from '../components/MovieMedia/MediaVideos'

export default function MovieMediaPage () {
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
