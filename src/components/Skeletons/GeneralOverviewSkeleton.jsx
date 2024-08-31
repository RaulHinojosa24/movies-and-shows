export default function GeneralOverviewSkeleton ({ person }) {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className={`skeleton__paragraph ${person ? 'w-full' : 'w-3/4'}`} />
    </div>
  )
}
