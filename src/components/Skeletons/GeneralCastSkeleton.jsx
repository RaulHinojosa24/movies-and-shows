import VerticalCardSkeleton from './VerticalCardSkeleton'

export default function GeneralCastSkeleton () {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className='overflow-hidden flex flex-nowrap gap-4'>
        {Array(10).fill().map((_, id) => (
          <VerticalCardSkeleton key={id} />
        ))}
      </div>
    </div>
  )
}
