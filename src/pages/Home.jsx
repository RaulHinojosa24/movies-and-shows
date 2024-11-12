import NowPlaying from '../components/Home/NowPlaying'
import { setDocTitle } from '../utils/utility'
import Trending from '../components/Home/Trending'
import Popular from '../components/Home/Popular'

export default function HomePage () {
  setDocTitle('Home')

  return (
    <>
      <NowPlaying />
      <Trending />
      <Popular />
    </>
  )
}
