import { useEffect } from 'react'
import Cross from '../UI/Cross'

export default function VideoModal ({ video, onClose }) {
  useEffect(() => {
    document.body.style.setProperty('overflow', 'hidden')

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [])

  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen z-30 bg-neutral-900 bg-opacity-80 backdrop-blur-sm backdrop-grayscale animate-fade' />
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 aspect-video max-h-[80vh] w-full max-w-screen-2xl'>
        <iframe
          key={video.id}
          className='h-full object-contain aspect-video mx-auto shadow-xl shadow-neutral-950 animate-fade-up'
          src={'https://www.youtube-nocookie.com/embed/' + video.key}
          title={video.name}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
      <button className='fixed top-[5vh] right-[10vh] h-6 aspect-square translate-x-1/2 -translate-y-1/2 z-50' onClick={onClose}>
        <Cross />
      </button>
    </>
  )
}
