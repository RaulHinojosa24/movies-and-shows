export default function HeaderCompactSkeleton () {
  return (
    <>
      <div className='flex p-app-space py-4 gap-4 skeleton__bg'>
        <div className='w-16 shrink-0 aspect-[2/3] skeleton rounded-lg' />
        <div className='flex flex-col justify-center w-full gap-2'>
          <div className='skeleton__title w-1/2' />
          <div className='skeleton__text w-1/3' />
        </div>
      </div>
    </>
  )
}
