export default function GeneralCenterSkeleton () {
  return (
    <div className='space-y-4'>
      <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-2'>
        <div className='skeleton__title w-1/4' />
        <div className='skeleton__paragraph w-3/4' />
      </div>
      <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-2'>
        <div className='skeleton__title w-1/4' />
        <div className='skeleton__paragraph w-3/4' />
      </div>
    </div>
  )
}
