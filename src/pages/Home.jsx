import NowPlaying from '../components/Home/NowPlaying'
import { getNowPlayingMovies } from '../utils/http'

export default function HomePage () {
  return (
    <>
      <NowPlaying />
    </>
  )
}

export async function loader () {
  const res = await getNowPlayingMovies()

  return res
}
