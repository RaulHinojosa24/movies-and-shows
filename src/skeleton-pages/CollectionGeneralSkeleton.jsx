import Main from '../components/PageUI/Main'
import CollectionHeaderSkeleton from '../components/Skeletons/CollectionHeaderSkeleton'
import HorizontalCardSkeleton from '../components/Skeletons/HorizontalCardSkeleton'

export default function CollectionGeneralSkeleton () {
  return (
    <>
      <CollectionHeaderSkeleton />
      <Main
        center={
          <div className='space-y-8'>
            <div className='skeleton rounded-lg w-full h-40' />
            <div className='flex justify-around items-center flex-wrap'>
              {Array(3).fill().map((_, i) =>
                <div key={i} className='skeleton aspect-square rounded-lg w-28' />)}
            </div>
            <div className='space-y-2'>
              <div className='flex gap-2'>
                <div className='skeleton__title w-36' />
                <div className='skeleton__title aspect-square' />
              </div>
              <HorizontalCardSkeleton />
            </div>
          </div>
        }
      />
    </>
  )
}
