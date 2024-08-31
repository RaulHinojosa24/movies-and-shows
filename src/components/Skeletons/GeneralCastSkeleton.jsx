export default function GeneralCastSkeleton ({ person }) {
  return (
    <div className='w-full skeleton__bg rounded-lg p-4 py-8 space-y-4'>
      <div className='skeleton__title w-1/4' />
      <div className='overflow-hidden flex flex-nowrap gap-4'>
        {Array(10).fill().map((_, id) => (
          <div key={id} className='w-32 overflow-hidden shrink-0 space-y-4'>
            <div className={`w-full ${person ? 'aspect-[2/3]' : 'aspect-[4/5]'} skeleton rounded-lg`} />
            <div className='skeleton__subtitle w-4/5' />
            {!person &&
              <div className='skeleton__text' />}
          </div>
        ))}
      </div>
    </div>
  )
}
