export default function ListHeaderSkeleton () {
  return (
    <div className='skeleton__bg'>
      <div className='flex flex-col px-app-space pt-app-space pb-4 gap-6 grow items-start w-full'>
        <div className='skeleton__title w-full max-w-40' />
        <div className='skeleton__text w-full' />
        <div className='flex items-center gap-2 w-full'>
          <div className='skeleton w-12 aspect-square rounded-full shrink-0' />
          <div className='skeleton__text w-full max-w-40' />
        </div>
      </div>
      <div className='skeleton__bg md:flex md:justify-start grid grid-cols-2 px-app-space py-2 gap-x-8 gap-y-2'>
        <div className='skeleton__paragraph w-full max-w-40' />
        <div className='skeleton__paragraph w-full max-w-40' />
        <div className='skeleton__paragraph w-full max-w-40' />
        <div className='skeleton__paragraph w-full max-w-40' />
      </div>
    </div>
  )
}
