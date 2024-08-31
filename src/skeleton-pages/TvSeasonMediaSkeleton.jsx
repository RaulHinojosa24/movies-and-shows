import Main from '../components/PageUI/Main'

import MediaVerticalSkeleton from '../components/Skeletons/MediaVerticalSkeleton'
import MediaHorizontalSkeleton from '../components/Skeletons/MediaHorizontalSkeleton'

export default function TvSeasonMediaSkeleton () {
  return (
    <Main
      center={
        <>
          <MediaVerticalSkeleton />
          <MediaHorizontalSkeleton />
        </>
        }
    />
  )
}
