import { formatNumber } from '../../utils/utility'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import VideoModal from './VideoModal'

export default function MediaVideos ({ videos }) {
  const prettyAmount = formatNumber(videos.length)

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
    <Section title='Videos' className='space-y-4' subtitle={prettyAmount}>
      {videos.length === 0 &&
        'We have no videos available'}
      {videos.length > 0 && cleanVideos.map(({ type, videos }) => {
        const prettyAmount = formatNumber(videos.length)

        return (
          <SubSection key={type} title={type} subtitle={prettyAmount} className='space-y-2'>
            <div className='flex flex-wrap gap-2'>
              {videos.map(video => {
                return (
                  <VideoModal key={video.id} video={video} className='w-full max-w-96' />
                )
              })}
            </div>
          </SubSection>
        )
      })}
    </Section>
  )
}
