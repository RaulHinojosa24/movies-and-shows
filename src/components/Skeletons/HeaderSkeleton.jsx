export default function HeaderSkeleton () {
  return (
    <>
      <div className='gap-8 p-8 flex flex-col md:flex-row items-center md:items-end skeleton__bg'>
        <div className='w-aside rounded overflow-hidden shrink-0 skeleton'>
          <div className='aspect-[2/3] w-full' />
          <div className='h-8 w-full' />
        </div>
        <div className='flex flex-col gap-2 grow md:items-start items-center'>
          <div className='skeleton__title w-1/2' />
          <div className='skeleton__text w-1/3' />
          <div className='skeleton w-14 aspect-square rounded-full' />
          <div className='flex justify-center md:justify-start flex-wrap gap-x-8 gap-y-2 max-w-3xl'>
            {Array(3).fill().map((_, i) => <div className='w-24 h-12 skeleton rounded-lg' key={i} />)}
          </div>
        </div>
      </div>
    </>
  )
}
