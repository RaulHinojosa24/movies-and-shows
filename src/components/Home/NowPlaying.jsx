import { useLoaderData } from 'react-router-dom'
import NowPlayingCard from './NowPlayingCard'

export default function NowPlaying () {
  const data = useLoaderData()

  return (
    <section className='h-96'>
      <swiper-container
        slides-per-view='auto'
        space-between={30}
        navigation
        loop
        centered-slides
        autoplay-delay={5000}
        autoplay-pause-on-mouse-enter
        keyboard-enabled
        no-swiping
        no-swiping-class='no-swiping'
      >
        {data.results.map(movie => {
          return (
            <swiper-slide key={movie.id}>
              <NowPlayingCard movie={movie} />
            </swiper-slide>
          )
        })}
      </swiper-container>
    </section>
  )
}
