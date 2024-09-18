import { useContext, useEffect, useRef, useState } from 'react'
import Section from '../UI/Section'
import Slider from '../PageUI/Slider'
import TrendingCard from './TrendingCard'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { getTrendingAll } from '../../utils/http'
import { settingsContext } from '../../context/settings-context'

const EMPTY_RESULTS = Array(20).fill().map((_, i) => ({ id: i, fetching: true }))

export default function Trending () {
  const [timeWindow, setTimeWindow] = useState('day')
  const [promise, setPromise] = useState(null)
  const { language, country } = useContext(settingsContext)
  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const sectionRef = useRef()
  const isVisible = useIntersectionObserver(sectionRef, '', true)

  const [results, setResults] = useState(EMPTY_RESULTS)

  useEffect(() => {
    if (!isVisible) return
    switch (timeWindow) {
      case 'day':
        setPromise(getTrendingAll({
          timeWindow: 'day',
          page: 1,
          language: appLanguage
        }))
        break
      case 'week':
        setPromise(getTrendingAll({
          timeWindow: 'week',
          page: 1,
          language: appLanguage
        }))
        break
    }
  }, [appLanguage, isVisible, timeWindow])

  useEffect(() => {
    if (!promise) return

    setResults(EMPTY_RESULTS)
    promise
      .then(data => setResults(data.results))
  }, [promise])

  return (
    <Section
      title={
        <>
          Tendencia
          <div className='inline-flex text-base font-normal gap-2 mx-4'>
            <button className={timeWindow === 'day' ? 'underline underline-offset-4' : ''} onClick={() => setTimeWindow('day')}>Dia</button>
            <button className={timeWindow === 'week' ? 'underline underline-offset-4' : ''} onClick={() => setTimeWindow('week')}>Semana</button>
          </div>
        </>
    } className='m-app-space' ref={sectionRef}
    >
      <Slider key={timeWindow} slides={results} SlideComponent={TrendingCard} />
    </Section>
  )
}
