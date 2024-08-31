export default function GeneralSeasonSkeleton () {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className='w-full skeleton__bg overflow-hidden rounded flex items-center'>
        <div className='skeleton rounded-lg aspect-[2/3] w-32 shrink-0' />
        <div className='flex flex-col p-4 gap-2 w-full'>
          <div className='skeleton__title w-1/2' />
          <div className='skeleton__text w-1/3' />
          <div className='skeleton__paragraph' />
        </div>
      </div>
    </div>
  )
}
