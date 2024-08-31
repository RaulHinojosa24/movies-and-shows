export default function GeneralMediaSkeleton () {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className='skeleton rounded-lg aspect-[2] sm:aspect-[4] md:aspect-[2] lg:aspect-[4] w-full' />
    </div>
  )
}
