import SubSection from '../UI/SubSection'
import CastItem from './CastItem'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { useState } from 'react'

const loadStep = 10

export default function RenderList ({ list, title }) {
  const { ref } = useIntersectionObserver({ callback: loadMoreItems })
  const [amountRendered, setAmountRendered] = useState(loadStep)
  const listLength = list.length

  function loadMoreItems () {
    if (amountRendered >= listLength) return
    setAmountRendered(p => p + loadStep)
  }

  return (
    <SubSection title={title} subtitle={listLength}>
      <ul className='space-y-3'>
        {list.slice(0, amountRendered).map(el => (
          <CastItem key={el.id} id={el.id} image={el.profile_path} primary={el.name} secondary={el.roles || el.jobs} adult={el.adult} />
        )
        )}
      </ul>
      {amountRendered < listLength &&
        <span ref={ref} aria-hidden />}
    </SubSection>
  )
}
