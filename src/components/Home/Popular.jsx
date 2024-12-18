import { useCallback, useContext, useEffect, useState } from 'react'
import Section from '../UI/Section'
import { getPopularMovies, getPopularPeople, getPopularTvs } from '../../utils/http'
import Slider from '../PageUI/Slider'
import PopularCard from './PopularCard'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { settingsContext } from '../../context/settings-context'

const EMPTY_RESULTS = Array(20).fill().map((_, i) => ({ id: i, fetching: true }))

export default function Popular () {
  const [media, setMedia] = useState('movie')
  const [promise, setPromise] = useState(null)
  const [results, setResults] = useState(EMPTY_RESULTS)

  const { language, country, includeAdult } = useContext(settingsContext)
  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const region = country.iso_3166_1

  const updatePromise = useCallback(() => {
    switch (media) {
      case 'movie':
        setPromise(getPopularMovies({
          language: appLanguage,
          region,
          includeAdult
        }))
        break
      case 'tv':
        setPromise(getPopularTvs({
          language: appLanguage,
          includeAdult
        }))
        break
      case 'person':
        setPromise(getPopularPeople({
          language: appLanguage,
          includeAdult
        }))
        break
    }
  }, [appLanguage, includeAdult, media, region])

  const { ref: sectionRef } = useIntersectionObserver({ persistence: true, callback: updatePromise })

  useEffect(() => {
    if (!promise) return

    setResults(EMPTY_RESULTS)
    promise
      .then(data => setResults(data.results.map(r => ({ ...r, mediaType: media }))))
  }, [media, promise])

  return (
    <Section
      title={
        <>
          Popular Content!
          <div className='inline-flex text-base font-normal gap-2 mx-4'>
            <button className={media === 'movie' ? 'underline underline-offset-4' : ''} onClick={() => setMedia('movie')}>Movies</button>
            <button className={media === 'tv' ? 'underline underline-offset-4' : ''} onClick={() => setMedia('tv')}>TV Shows</button>
            <button className={media === 'person' ? 'underline underline-offset-4' : ''} onClick={() => setMedia('person')}>People</button>
          </div>
        </>
      } className='m-app-space' ref={sectionRef}
    >
      <Slider key={media} slides={results} SlideComponent={PopularCard} />
    </Section>
  )
}
