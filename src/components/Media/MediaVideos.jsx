import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import PlayButton from '../UI/PlayButton'
import VideoModal from './VideoModal'
import { useState } from 'react'

export default function MediaVideos ({ videos }) {
  const [modalVideo, setModalVideo] = useState(null)

  const groupedVideos = {}
  const cleanVideos = []

  for (const video of videos) {
    const { type } = video
    const group = groupedVideos[type]

    if (group) {
      group.push(video)
    } else {
      groupedVideos[type] = [video]
    }
  }

  for (const key in groupedVideos) {
    const grVids = groupedVideos[key]
    grVids
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))

    cleanVideos.push({
      type: key,
      videos: grVids
    })
  }

  cleanVideos
    .sort((a, b) => a.type.localeCompare(b.type))

  return (
    <>
      {modalVideo && <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />}
      <Section title='Vídeos' className='space-y-4'>
        {cleanVideos.map(({ type, videos }) => (
          <SubSection key={type} title={<>{type} <span className='text-neutral-500'>{videos.length}</span></>} className='space-y-2'>
            <div className='flex flex-wrap gap-2'>
              {videos.map(video => {
                return (
                  <div
                    key={video.id} style={{ backgroundImage: `url(https://i3.ytimg.com/vi/${video.key}/hqdefault.jpg)` }} className='w-full max-w-96 aspect-video bg-cover bg-center grid place-content-center cursor-pointer'
                    onClick={() => setModalVideo(video)}
                  >
                    <PlayButton />
                  </div>
                )
              })}
            </div>
          </SubSection>
        ))}
      </Section>
    </>
  )
}
