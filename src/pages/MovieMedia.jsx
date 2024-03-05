import MediaBackdrops from '../components/MovieMedia/MediaBackdrops'
import MediaPosters from '../components/MovieMedia/MediaPosters'
import MediaVideos from '../components/MovieMedia/MediaVideos'

export default function MovieMediaPage () {
  return (
    <main className='px-app-space mx-auto w-full max-w-small-content'>
      <MediaBackdrops />
      <MediaPosters />
      <MediaVideos />
    </main>
  )
}
