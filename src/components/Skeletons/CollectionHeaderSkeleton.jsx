export default function CollectionHeaderSkeleton () {
  return (
    <div className='gap-8 p-8 flex flex-col md:flex-row items-center md:items-end skeleton__bg'>
      <div className='aspect-[2/3] w-aside shrink-0 skeleton rounded-lg' />
      <div className='flex flex-col gap-2 grow md:items-start items-center w-full'>
        <div className='skeleton__title w-1/2' />
        <div className='skeleton__text w-1/3' />
        <div className='skeleton__paragraph w-full' />
      </div>
    </div>
  )
}
