import { createPortal } from 'react-dom'
import CrossIcon from '../../icons/CrossIcon'
import { useEffect, useState } from 'react'

export default function Modal ({ className = '', children, onClose, crossInside, noCross, allBlack }) {
  const [isClosing, setIsClosing] = useState(false)
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

  function handleClose () {
    if (!isClosing) {
      onClose()
      setIsClosing(true)
    }
  }

  return (
    <>
      {createPortal(
        <div className={`fixed top-0 left-0 w-screen h-screen z-[95] dark:bg-black bg-white ${allBlack ? '' : '!bg-opacity-80'} backdrop-blur-sm animate-fade`} />,
        document.getElementById('backdrop'))}
      {createPortal(
        <>
          <div className={`fixed max-h-screen overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] ${className}`}>
            {children}
            {crossInside && !noCross &&
              <button className='absolute h-4 aspect-square top-4 right-4' onClick={handleClose}>
                <CrossIcon />
              </button>}
          </div>
          {!crossInside && !noCross &&
            <button className='fixed top-[5vh] right-[5vh] h-6 aspect-square translate-x-1/2 -translate-y-1/2 z-[105]' onClick={handleClose}>
              <CrossIcon />
            </button>}
        </>, document.getElementById('overlay'))}
    </>
  )
}
