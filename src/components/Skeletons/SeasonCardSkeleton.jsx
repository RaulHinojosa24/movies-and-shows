export default function SeasonCardSkeleton () {
  return (
    <div className='w-full skeleton__bg overflow-hidden rounded-lg flex items-center'>
      <div className='skeleton aspect-[2/3] w-32 shrink-0' />
      <div className='flex flex-col p-4 gap-2 w-full'>
        <div className='skeleton__title w-1/2' />
        <div className='skeleton__text w-1/3' />
        <div className='skeleton__paragraph' />
      </div>
    </div>
  )
}
