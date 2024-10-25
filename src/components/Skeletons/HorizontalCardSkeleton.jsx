export default function HorizontalCardSkeleton () {
  return (
    <div className='flex'>
      <div className='skeleton rounded-lg w-24 object-cover aspect-[2/3] shrink-0' />
      <div className='flex flex-col gap-2 justify-center py-2 px-3 w-full'>
        <div className='w-1/2 rounded-lg skeleton__subtitle' />
        <div className='w-1/3 rounded-lg skeleton__text' />
        <div className='w-full rounded-lg skeleton__paragraph' />
      </div>
    </div>
  )
}
