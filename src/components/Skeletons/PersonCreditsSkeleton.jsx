export default function PersonCreditsSkeleton () {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className='flex gap-3'>
        <div className='skeleton__subtitle w-24' />
        <div className='skeleton__subtitle w-36' />
        <div className='skeleton__subtitle w-6 shrink-0' />
      </div>
      <div className='skeleton__title w-full' />
      <div className='skeleton__title w-full' />
    </div>
  )
}
