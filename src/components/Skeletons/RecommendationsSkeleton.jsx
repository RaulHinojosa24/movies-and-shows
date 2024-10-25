import RecommendationCardSkeleton from './RecommendationCardSkeleton'

export default function RecommendationsSkeleton () {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className='flex flex-nowrap gap-4 overflow-hidden'>
        {Array(10).fill().map((_, id) => (
          <RecommendationCardSkeleton key={id} />
        ))}
      </div>
    </div>
  )
}
