import Modal from '../UI/Modal'

export default function VideoModal ({ video, onClose }) {
  return (
    <Modal className='aspect-video max-h-[80vh] w-full max-w-screen-2xl' onClose={onClose}>
      <iframe
        className='h-full object-contain aspect-video mx-auto shadow-xl shadow-neutral-950 animate-fade-up'
        src={'https://www.youtube-nocookie.com/embed/' + video.key}
        title={video.name}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </Modal>
  )
}
