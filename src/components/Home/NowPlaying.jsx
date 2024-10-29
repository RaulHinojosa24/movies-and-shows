import { Await } from 'react-router-dom'
import NowPlayingCard from './NowPlayingCard'
import { Suspense, useContext, useMemo } from 'react'
import HomeNowPlayingSkeleton from '../Skeletons/HomeNowPlayingSkeleton'
import Slider from '../PageUI/Slider'
import { settingsContext } from '../../context/settings-context'
import { getNowPlayingMovies } from '../../utils/http'

export default function NowPlaying () {
  const { language, country, includeAdult } = useContext(settingsContext)
  const region = country.iso_3166_1
  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`

  const promise = useMemo(() => (
    getNowPlayingMovies({ language: appLanguage, region, includeAdult })
  ), [appLanguage, includeAdult, region])

  return (
    <section>
      <Suspense fallback={<HomeNowPlayingSkeleton />}>
        <Await resolve={promise} errorElement={<HomeNowPlayingSkeleton />}>
          {(loadedNowPlaying) => (
            <Slider type='landing' slides={loadedNowPlaying.results} SlideComponent={NowPlayingCard} />
          )}
        </Await>
      </Suspense>
    </section>
  )
}
