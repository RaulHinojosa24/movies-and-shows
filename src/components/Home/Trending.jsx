import { Await } from 'react-router-dom'
import { Suspense, useEffect, useRef, useState } from 'react'
import Section from '../UI/Section'
import Slider from '../PageUI/Slider'
import TrendingCard from './TrendingCard'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { getTrendingAll } from '../../utils/http'

export default function Trending () {
  const [timeWindow, setTimeWindow] = useState('day')
  const [promise, setPromise] = useState(null)
  const sectionRef = useRef()
  const isVisible = useIntersectionObserver(sectionRef, '', true)

  useEffect(() => {
    if (!isVisible) return
    switch (timeWindow) {
      case 'day':
        setPromise(getTrendingAll('day'))
        break
      case 'week':
        setPromise(getTrendingAll('week'))
        break
    }
  }, [isVisible, timeWindow])

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
      {promise && isVisible &&
        <Suspense fallback={<Fallback />}>
          <Await resolve={promise}>
            {({ results }) => (
              <Slider key={timeWindow} slides={results} SlideComponent={TrendingCard} />
            )}
          </Await>
        </Suspense>}
    </Section>
  )
}

function Fallback () {
  return (
    <div className='w-full flex gap-8 mx-auto overflow-hidden justify-center'>
      {Array(5).fill().map((_, i) => <div key={i} className='skeleton h-48 aspect-[21/9]' />)}
    </div>
  )
}
