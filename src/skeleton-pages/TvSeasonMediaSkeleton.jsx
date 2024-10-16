import Main from '../components/PageUI/Main'

import MediaVerticalSkeleton from '../components/Skeletons/MediaVerticalSkeleton'
import MediaHorizontalSkeleton from '../components/Skeletons/MediaHorizontalSkeleton'
import HeaderCompactSkeleton from '../components/Skeletons/HeaderCompactSkeleton'

export default function TvSeasonMediaSkeleton () {
  return (
    <>
      <HeaderCompactSkeleton />
      <div className='flex py-2 px-4 justify-between'>
        <div className='skeleton__subtitle w-24' />
        <div className='skeleton__subtitle w-24' />
      </div>
      <Main
        center={
          <>
            <MediaVerticalSkeleton />
            <MediaHorizontalSkeleton />
          </>
        }
      />
    </>

  )
}
