import Main from '../components/PageUI/Main'
import HeaderCompactSkeleton from '../components/Skeletons/HeaderCompactSkeleton'
import MediaVerticalSkeleton from '../components/Skeletons/MediaVerticalSkeleton'

export default function PersonMediaSkeleton () {
  return (
    <>
      <HeaderCompactSkeleton />
      <Main
        center={
          <>
            <MediaVerticalSkeleton />
          </>
        }
      />
    </>
  )
}
