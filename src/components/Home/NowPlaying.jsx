import { Await, useLoaderData } from 'react-router-dom'
import NowPlayingCard from './NowPlayingCard'
import { Suspense } from 'react'

export default function NowPlaying () {
  const { nowPlaying } = useLoaderData()

  return (
    <section>
      <Suspense fallback={<Fallback />}>
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

function Fallback () {
  return (
    <div className='w-full flex gap-8 mx-auto overflow-hidden justify-center'>
      {Array(5).fill().map((_, i) => <div key={i} className='skeleton h-48 aspect-[21/9]' />)}
    </div>
  )
}
