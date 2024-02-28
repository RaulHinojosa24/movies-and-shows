import MediaBackdrops from '../components/MovieMedia/MediaBackdrops'
import MediaPosters from '../components/MovieMedia/MediaPosters'
import MediaVideos from '../components/MovieMedia/MediaVideos'

export default function MovieMediaPage () {
  return (
    <main className='mx-app-space'>
      <MediaBackdrops />
      <MediaPosters />
      <MediaVideos />
    </main>
  )
}
