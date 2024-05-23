import { defer } from 'react-router-dom'
import NowPlaying from '../components/Home/NowPlaying'
import { getNowPlayingMovies, getTrendingAll } from '../utils/http'
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
  return defer({
    nowPlaying: getNowPlayingMovies()
  })
}
