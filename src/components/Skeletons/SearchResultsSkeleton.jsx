export default function SearchResultsSkeleton ({ person }) {
  return (
    <>
      <div className='flex skeleton__bg rounded-lg overflow-hidden w-full text-sm'>
        <div className={`aspect-${person ? '[5/6]' : '[2/3]'} w-24 skeleton rounded-lg shrink-0`} />
        <div className='p-3 space-y-2 w-full place-content-center'>
          <div className='skeleton h-5 rounded-lg w-1/2' />
          <div className='skeleton w-1/3 rounded-lg h-3' />
          <div className='skeleton w-4/5 rounded-lg h-8' />
        </div>
      </div>
    </>
  )
}
