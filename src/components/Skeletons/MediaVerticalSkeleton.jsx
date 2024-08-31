export default function MediaVerticalSkeleton () {
  return (
    <div>
      <div className='skeleton__title w-1/5 mb-4' />
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {Array(5).fill().map((_, id) => (
          <div key={id} className='skeleton w-full aspect-[2/3] rounded-lg' />
        ))}
      </div>
    </div>
  )
}
