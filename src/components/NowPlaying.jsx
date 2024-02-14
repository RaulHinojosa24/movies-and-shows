import { useLoaderData } from 'react-router-dom'
import PosterCard from './UI/PosterCard'

export default function NowPlaying () {
  const data = useLoaderData()

  return (
    <section>
      <h2>Now playing on cinemas</h2>
      <swiper-container
        slides-per-view='auto'
        space-between={30}
        mousewheel
      >
        {data.results.map(movie => {
          return (
            <swiper-slide key={movie.id}>
              <PosterCard movie={movie} />
            </swiper-slide>
          )
        })}
      </swiper-container>
    </section>
  )
}
