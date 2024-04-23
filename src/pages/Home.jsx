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
  const [nowPlaying, trendingAll] = await Promise.all([
    getNowPlayingMovies().then(res => res.json()),
    getTrendingAll('week', 14).then(res => res.json())
  ])

  return { nowPlaying, trendingAll }
}
