import Main from '../components/PageUI/Main'
import HeaderCompactSkeleton from '../components/Skeletons/HeaderCompactSkeleton'
import MediaHorizontalSkeleton from '../components/Skeletons/MediaHorizontalSkeleton'
import MediaVerticalSkeleton from '../components/Skeletons/MediaVerticalSkeleton'

export default function TvMediaSkeleton () {
  return (
    <>
      <HeaderCompactSkeleton />
      <Main
        center={
          <>
            <MediaHorizontalSkeleton />
            <MediaVerticalSkeleton />
            <MediaHorizontalSkeleton />
          </>
        }
      />
    </>
  )
}
