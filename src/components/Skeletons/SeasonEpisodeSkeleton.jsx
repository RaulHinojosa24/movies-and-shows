export default function SeasonEpisodeSkeleton () {
  return (
    <div className='skeleton__bg rounded-lg overflow-hidden'>
      <div className='flex sm:flex-row flex-col'>
        <div className='skeleton rounded-lg h-full aspect-video sm:max-w-72 w-full' />
        <div className='flex flex-col justify-center gap-2 p-4 grow'>
          <div className='skeleton__subtitle max-w-24' />
          <div className='skeleton__text max-w-36' />
          <div className='skeleton__paragraph w-full' />
        </div>
      </div>
      <div className='h-6 w-full' />
    </div>
  )
}
