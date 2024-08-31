import Main from '../components/PageUI/Main'
import CollectionHeaderSkeleton from '../components/Skeletons/CollectionHeaderSkeleton'

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
              <div className='flex rounded-lg overflow-hidden skeleton__bg'>
                <div className='aspect-[2/3] w-full max-w-24 skeleton rounded-lg' />
                <div className='flex flex-col justify-around p-4 w-full'>
                  <div className='skeleton__title w-1/3' />
                  <div className='skeleton__text w-1/4' />
                  <div className='skeleton__paragraph w-full' />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  )
}
