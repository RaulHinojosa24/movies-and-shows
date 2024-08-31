import Main from '../components/PageUI/Main'
import HeaderCompactSkeleton from '../components/Skeletons/HeaderCompactSkeleton'
import CastItemSkeleton from '../components/Skeletons/CastItemSkeleton'

export default function TvCastSkeleton () {
  return (
    <>
      <HeaderCompactSkeleton />
      <Main
        center={<CastSkeleton />}
      />
    </>
  )
}

function CastSkeleton () {
  return (
    <div className='grid md:grid-cols-2 gap-8'>
      <div>
        <div className='skeleton__title w-1/4 mb-4' />
        <div className='space-y-3'>{Array(5).fill().map((_, i) => <CastItemSkeleton key={i} />)}</div>
      </div>
      <div>
        <div className='skeleton__title w-1/4 mb-4' />
        <div className='space-y-3'>{Array(5).fill().map((_, i) => <CastItemSkeleton key={i} />)}</div>
      </div>
    </div>
  )
}
