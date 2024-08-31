export default function RecommendationsSkeleton () {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className='flex flex-nowrap gap-4 overflow-hidden'>
        {Array(10).fill().map((_, id) => (
          <div key={id} className='w-72 shrink-0 rounded space-y-2'>
            <div className='skeleton w-full aspect-video rounded-lg' />
            <div className='flex gap-4'>
              <div className='skeleton__subtitle w-full' />
              <div className='skeleton aspect-square rounded-full w-11' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
