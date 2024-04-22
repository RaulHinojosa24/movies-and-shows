import NowPlaying from '../components/Home/NowPlaying'
import { getNowPlayingMovies } from '../utils/http'
import { setDocTitle } from '../utils/utility'

export default function HomePage () {
  setDocTitle('Inicio')
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
