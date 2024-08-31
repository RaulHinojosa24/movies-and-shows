export default function HomeNowPlayingSkeleton () {
  return (
    <div className='w-full flex gap-8 mx-auto overflow-hidden justify-center'>
      {Array(5).fill().map((_, i) => <div key={i} className='skeleton h-52 aspect-[21/9]' />)}
    </div>
  )
}
