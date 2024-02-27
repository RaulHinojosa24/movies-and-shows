import { createPortal } from 'react-dom'
import Cross from './Cross'
import { useEffect } from 'react'

export default function Modal ({ className = '', children, onClose, crossInside }) {
  useEffect(() => {
    const handler = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.setProperty('overflow', 'hidden')
    document.addEventListener('keydown', handler)

    return () => {
      document.body.style.removeProperty('overflow')
      document.removeEventListener('keydown', handler)
    }
  }, [onClose])

  return (
    <>
      {createPortal(
        <div className='fixed top-0 left-0 w-screen h-screen z-30 bg-neutral-900 bg-opacity-80 backdrop-blur-sm backdrop-grayscale animate-fade' />,
        document.getElementById('backdrop'))}
      {createPortal(
        <>
          <div className={`fixed max-h-screen overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 ${className}`}>
            {children}
            {crossInside &&
              <button className='absolute h-4 aspect-square top-4 right-4 z-50' onClick={onClose}>
                <Cross />
              </button>}
          </div>
          {!crossInside &&
            <button className='fixed top-[5vh] right-[5vh] h-6 aspect-square translate-x-1/2 -translate-y-1/2 z-50' onClick={onClose}>
              <Cross />
            </button>}
        </>, document.getElementById('modal'))}
    </>
  )
}
