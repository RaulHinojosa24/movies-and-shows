export default function HomeNowPlayingSkeleton () {
  return (
    <div className='w-full flex gap-1 mx-auto overflow-hidden pb-8 justify-center'>
      {Array(5).fill().map((_, i) => <div key={i} className={`skeleton h-52 aspect-[21/9] ${i === 2 && 'origin-top scale-110 z-[1]'}`} />)}
    </div>
  )
}
