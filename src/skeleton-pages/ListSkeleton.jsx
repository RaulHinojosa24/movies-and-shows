import Main from '../components/PageUI/Main'
import ListHeaderSkeleton from '../components/Skeletons/ListHeaderSkeleton'

export default function ListSkeleton () {
  return (
    <>
      <ListHeaderSkeleton />
      <Main
        center={
          <>
            <div className='flex gap-4 flex-wrap justify-center'>
              <div className='skeleton__title aspect-square shrink-0' />
              <div className='skeleton__title grow min-w-40' />
              <div className='skeleton__title min-w-40' />
              <div className='skeleton__title min-w-40' />
            </div>
            <div className='space-y-2'>
              <div className='skeleton__paragraph rounded-lg w-full h-16' />
              <div className='skeleton__paragraph rounded-lg w-full h-16' />
              <div className='skeleton__paragraph rounded-lg w-full h-16' />
              <div className='skeleton__paragraph rounded-lg w-full h-16' />
            </div>
          </>
        }
      />
    </>
  )
}
