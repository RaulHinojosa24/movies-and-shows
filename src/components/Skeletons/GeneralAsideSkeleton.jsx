const sizes = ['w-1/4', 'w-1/2', 'w-1/3', 'w-2/3', 'w-3/4', 'w-full']

export default function GeneralAsideSkeleton () {
  return (
    <>
      <div className='skeleton__bg w-full space-y-5 py-8 p-4 rounded-lg'>
        <div className='skeleton__title' />
        {Array(6).fill().map((_, i) => (
          <div key={i}>
            <div className='skeleton__subtitle w-1/2 mb-2' />
            <div className={'skeleton__text ' + sizes[Math.floor(Math.random() * sizes.length)]} />
          </div>
        ))}
      </div>
    </>
  )
}
