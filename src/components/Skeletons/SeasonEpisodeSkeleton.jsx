export default function SeasonEpisodeSkeleton () {
  return (
    <section className='flex sm:flex-row flex-col rounded overflow-hidden skeleton__bg'>
      <div className='aspect-video object-cover sm:block hidden w-72 skeleton shrink-0' />
      <div className='aspect-video object-cover sm:hidden block skeleton' />
      <div className='p-4 content-center space-y-1 w-full'>
        <div className='skeleton__title w-1/4' />
        <div className='skeleton__text w-1/2' />
        <div className='skeleton__paragraph w-full' />
      </div>
    </section>
  )
}
