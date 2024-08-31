import { Await, useLoaderData } from 'react-router-dom'
import NowPlayingCard from './NowPlayingCard'
import { Suspense } from 'react'
import HomeNowPlayingSkeleton from '../Skeletons/HomeNowPlayingSkeleton'

export default function NowPlaying () {
  const { nowPlaying } = useLoaderData()

  return (
    <section>
      <Suspense fallback={<HomeNowPlayingSkeleton />}>
        <Await resolve={nowPlaying}>
          {(loadedNowPlaying) => (
            <swiper-container
              slides-per-view='auto'
              space-between={30}
              navigation
              loop
              centered-slides
              autoplay-delay={5000}
              autoplay-pause-on-mouse-enter
              keyboard-enabled
              no-swiping-class='no-swiping'
            >
              {loadedNowPlaying.results.map(movie => {
                return (
                  <swiper-slide key={movie.id}>
                    <NowPlayingCard movie={movie} />
                  </swiper-slide>
                )
              })}
            </swiper-container>
          )}
        </Await>
      </Suspense>
    </section>
  )
}
