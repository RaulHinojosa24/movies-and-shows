export default function DiscoverResultsSkeleton () {
  return (
    <>
      <div className='md:hidden custom-shadow-small rounded w-full text-sm flex overflow-hidden'>
        <div className='w-24 shrink-0 aspect-[2/3] skeleton' />
        <div className='p-3 flex flex-col justify-center gap-2 w-full'>
          <div className='h-5 w-1/2 rounded-lg skeleton' />
          <div className='h-3 w-1/3 rounded-lg skeleton' />
          <div className='h-8 w-3/4 rounded-lg skeleton' />
        </div>
      </div>
      <div className='hidden md:block custom-shadow-small rounded overflow-hidden max-w-56 w-full text-sm'>
        <div className='relative'>
          <div className='w-full aspect-[2/3] skeleton' src='' alt='' loading='lazy' />
        </div>
        <div className='p-3 space-y-2'>
          <div className='skeleton h-5 rounded-lg' />
          <div className='skeleton w-3/4 rounded-lg h-3' />
        </div>
      </div>
    </>
  )
}
