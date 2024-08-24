import { createPortal } from 'react-dom'
import ArrowUp from '../../icons/ArrowUpIcon'

export default function GoToTopButton () {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {createPortal(
        <button
          id='scroll-to-top'
          className='fixed bottom-8 right-8 w-12 bg-yellow-400 aspect-square rounded-full grid place-items-center z-20'
          onClick={scrollToTop}
        >
          <ArrowUp className='h-1/2' />
        </button>
        , document.getElementById('overlay'))}
    </>

  )
}
