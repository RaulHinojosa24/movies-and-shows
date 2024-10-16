import NowPlaying from '../components/Home/NowPlaying'
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
