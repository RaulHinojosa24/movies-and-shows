export default function DiscoverResultsItemSkeleton () {
  return (
    <>
      <div className='md:hidden w-full text-sm flex overflow-hidden skeleton__bg rounded-lg'>
        <div className='w-24 shrink-0 aspect-[2/3] skeleton rounded-lg' />
        <div className='p-3 flex flex-col justify-center gap-2 w-full'>
          <div className='h-5 w-1/2 rounded-lg skeleton' />
          <div className='h-3 w-1/3 rounded-lg skeleton' />
          <div className='h-8 w-3/4 rounded-lg skeleton' />
        </div>
      </div>
      <div className='hidden md:block skeleton__bg rounded-lg overflow-hidden max-w-56 w-full text-sm'>
        <div className='relative'>
          <div className='w-full aspect-[2/3] skeleton rounded-lg' src='' alt='' loading='lazy' />
        </div>
        <div className='p-3 space-y-2'>
          <div className='skeleton__subtitle' />
          <div className='skeleton__text w-3/4' />
        </div>
      </div>
    </>
  )
}
