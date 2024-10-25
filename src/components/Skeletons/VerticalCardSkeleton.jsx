export default function VerticalCardSkeleton () {
  return (
    <div className='w-32 md:w-36 shrink-0'>
      <div className='skeleton aspect-[2/3] w-full object-cover rounded-lg' />
      <div className='py-3'>
        <div className='skeleton__title w-5/6 mb-2' />
        <div className='skeleton__text w-2/3' />
      </div>
    </div>
  )
}
