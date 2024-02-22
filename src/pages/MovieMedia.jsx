import { useRouteLoaderData } from 'react-router-dom'
import MediaBackdrops from '../components/MovieMedia/MediaBackdrops'
import MediaPosters from '../components/MovieMedia/MediaPosters'
import MediaVideos from '../components/MovieMedia/MediaVideos'

export default function MovieMediaPage () {
  const {
    images,
    videos
  } = useRouteLoaderData('movie-details')

  console.log(videos.results)

  return (
    <main className='mx-app-space'>
      {/* <MediaBackdrops /> */}
      {/* <MediaPosters /> */}
      <MediaVideos />
    </main>
  )
}
