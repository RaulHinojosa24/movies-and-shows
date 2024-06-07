import Modal from '../UI/Modal'
import PlayButton from '../UI/PlayButton'
import { useSearchParams } from 'react-router-dom'

export default function VideoModal ({ video, className = '' }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const isOpen = searchParams.get('play') === video.key

  const toggle = () => {
    setSearchParams(isOpen ? {} : { play: video.key })
  }

  return (
    <>
      {isOpen &&
        <Modal className='aspect-video max-h-[80vh] w-full max-w-screen-2xl' onClose={toggle}>
          <iframe
            className='h-full object-contain aspect-video mx-auto shadow-xl shadow-neutral-950 animate-fade-up'
            src={'https://www.youtube-nocookie.com/embed/' + video.key}
            title={video.name}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </Modal>}
      <div
        style={{
          backgroundImage: `url(https://i3.ytimg.com/vi/${video.key}/hqdefault.jpg)`
        }}
        className={'aspect-video bg-cover bg-center bg-no-repeat grid place-content-center cursor-pointer ' + className}
        onClick={toggle}
      >
        <PlayButton />
      </div>
    </>
  )
}
