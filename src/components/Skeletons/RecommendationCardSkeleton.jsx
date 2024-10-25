export default function RecommendationCardSkeleton () {
  return (
    <div className='w-72 md:w-80 shrink-0 rounded space-y-2'>
      <div className='skeleton w-full aspect-video rounded-lg' />
      <div className='flex justify-between gap-4'>
        <div className='skeleton__subtitle w-full' />
        <div className='skeleton aspect-square rounded-full w-10 shrink-0' />
      </div>
    </div>
  )
}
