import { useContext, useEffect, useRef, useState } from 'react'
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
  const sectionRef = useRef()
  const isVisible = useIntersectionObserver(sectionRef, '', true)
  const [results, setResults] = useState(EMPTY_RESULTS)

  const { language, country } = useContext(settingsContext)
  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const region = country.iso_3166_1

  useEffect(() => {
    if (!isVisible) return
    switch (media) {
      case 'movie':
        setPromise(getPopularMovies({
          language: appLanguage,
          region
        }))
        break
      case 'tv':
        setPromise(getPopularTvs({
          language: appLanguage
        }))
        break
      case 'person':
        setPromise(getPopularPeople({
          language: appLanguage
        }))
        break
    }
  }, [appLanguage, isVisible, media, region])

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
          Lo más popular
          <div className='inline-flex text-base font-normal gap-2 mx-4'>
            <button className={media === 'movie' ? 'underline underline-offset-4' : ''} onClick={() => setMedia('movie')}>Películas</button>
            <button className={media === 'tv' ? 'underline underline-offset-4' : ''} onClick={() => setMedia('tv')}>Series de TV</button>
            <button className={media === 'person' ? 'underline underline-offset-4' : ''} onClick={() => setMedia('person')}>Personas</button>
          </div>
        </>
      } className='m-app-space' ref={sectionRef}
    >
      <Slider key={media} slides={results} SlideComponent={PopularCard} />
    </Section>
  )
}
