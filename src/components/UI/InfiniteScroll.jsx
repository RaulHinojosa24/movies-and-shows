import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { useState } from 'react'

export default function InfiniteScroll ({ list, loadStep = 10, Element }) {
  const { ref } = useIntersectionObserver({ callback: loadMoreItems })
  const [amountRendered, setAmountRendered] = useState(loadStep)
  const listLength = list.length

  function loadMoreItems () {
    if (amountRendered >= listLength) return
    setAmountRendered(p => p + loadStep)
  }

  return (
    <>
      <ul className='space-y-3'>
        {list.slice(0, amountRendered)
          .map(el => <Element key={el.id} {...el} />)}
      </ul>
      {amountRendered < listLength &&
        <span ref={ref} aria-hidden />}
    </>
  )
}
