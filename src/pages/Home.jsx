import { defer } from 'react-router-dom'
import NowPlaying from '../components/Home/NowPlaying'
import { getNowPlayingMovies } from '../utils/http'
import { setDocTitle } from '../utils/utility'
import Trending from '../components/Home/Trending'
import Popular from '../components/Home/Popular'

export default function HomePage () {
  setDocTitle('Inicio')

  return (
    <>
      <NowPlaying />
      <Trending />
      <Popular />
    </>
  )
}

export async function loader ({ language, region }) {
  return defer({
    nowPlaying: getNowPlayingMovies({ language, region })
  })
}
