import { useLoaderData } from 'react-router-dom'
import NowPlayingCard from './NowPlayingCard'

export default function NowPlaying () {
  const { nowPlaying } = useLoaderData()

  return (
    <section>
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
        {nowPlaying.results.map(movie => {
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
