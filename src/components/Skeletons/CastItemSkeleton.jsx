export default function CastItemSkeleton () {
  return (
    <div className='skeleton__bg flex gap-4'>
      <div className='aspect-[5/6] h-20 rounded skeleton' />
      <div className='flex flex-col gap-2 justify-center w-full'>
        <div className='skeleton__text w-1/4' />
        <div className='skeleton__text w-1/2' />
      </div>
    </div>
  )
}
