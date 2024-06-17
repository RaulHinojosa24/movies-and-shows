import { Suspense, useEffect, useRef, useState } from 'react'
import Section from '../UI/Section'
import { Await } from 'react-router-dom'
import { getPopularMovies, getPopularPersons, getPopularTvs } from '../../utils/http'
import Slider from '../PageUI/Slider'
import PopularCard from './PopularCard'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

export default function Popular () {
  const [media, setMedia] = useState('movie')
  const [promise, setPromise] = useState(null)
  const sectionRef = useRef()
  const isVisible = useIntersectionObserver(sectionRef, '', true)

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
        setPromise(getPopularPersons())
        break
    }
  }, [isVisible, media])

  return (
    <Section
      title={
        <>
          Lo más popular
          <div className='inline-flex text-base font-normal gap-2 mx-4'>
            <a className={media === 'movie' ? 'underline' : ''} onClick={() => setMedia('movie')}>Películas</a>
            <a className={media === 'tv' ? 'underline' : ''} onClick={() => setMedia('tv')}>Series de TV</a>
            <a className={media === 'person' ? 'underline' : ''} onClick={() => setMedia('person')}>Personas</a>
          </div>
        </>
      } className='m-app-space' ref={sectionRef}
    >
      {promise && isVisible &&
        <Suspense fallback={<Fallback />}>
          <Await resolve={promise}>
            {({ results }) => {
              const prettyResults = results.map(r => ({ ...r, media_type: media }))
              return <Slider key={media} slides={prettyResults} SlideComponent={PopularCard} />
            }}
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
