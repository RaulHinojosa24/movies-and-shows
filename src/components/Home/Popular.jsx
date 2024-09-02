import { useEffect, useRef, useState } from 'react'
import Section from '../UI/Section'
import { getPopularMovies, getPopularPeople, getPopularTvs } from '../../utils/http'
import Slider from '../PageUI/Slider'
import PopularCard from './PopularCard'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const EMPTY_RESULTS = Array(20).fill().map((_, i) => ({ id: i, fetching: true }))

export default function Popular () {
  const [media, setMedia] = useState('movie')
  const [promise, setPromise] = useState(null)
  const sectionRef = useRef()
  const isVisible = useIntersectionObserver(sectionRef, '', true)
  const [results, setResults] = useState(EMPTY_RESULTS)

  useEffect(() => {
    if (!isVisible) return
    switch (media) {
      case 'movie':
        setPromise(getPopularMovies())
        break
      case 'tv':
        setPromise(getPopularTvs())
        break
      case 'person':
        setPromise(getPopularPeople())
        break
    }
  }, [isVisible, media])

  useEffect(() => {
    if (!promise) return

    setResults(EMPTY_RESULTS)
    promise
      .then(data => setResults(data.results.map(r => ({ ...r, mediaType: media }))))
  }, [promise])

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
