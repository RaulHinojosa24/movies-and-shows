export default function ResponsiveCardSkeleton () {
  return (
    <div className='flex md:flex-col'>
      <div className='skeleton rounded-lg w-24 md:w-full object-cover aspect-[2/3] shrink-0' />
      <div className='flex flex-col gap-2 justify-center py-2 px-3 md:px-0 w-full'>
        <div className='w-2/3 rounded-lg skeleton__subtitle' />
        <div className='w-1/2 rounded-lg skeleton__text' />
        <div className='w-full rounded-lg skeleton__paragraph md:hidden' />
      </div>
    </div>
  )
}
