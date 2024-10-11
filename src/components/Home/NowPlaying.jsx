import { Await, useLoaderData } from 'react-router-dom'
import NowPlayingCard from './NowPlayingCard'
import { Suspense } from 'react'
import HomeNowPlayingSkeleton from '../Skeletons/HomeNowPlayingSkeleton'
import Slider from '../PageUI/Slider'

export default function NowPlaying () {
  const { nowPlaying } = useLoaderData()

  return (
    <section className='overflow-hidden pb-8'>
      <Suspense fallback={<HomeNowPlayingSkeleton />}>
        <Await resolve={nowPlaying}>
          {(loadedNowPlaying) => (
            <Slider isLanding slides={loadedNowPlaying.results} SlideComponent={NowPlayingCard} />
          )}
        </Await>
      </Suspense>
    </section>
  )
}
