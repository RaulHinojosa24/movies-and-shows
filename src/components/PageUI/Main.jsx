export default function Main ({ left, center, right }) {
  const onlyCenter = !left && center && !right

  return (
    <main className={`flex flex-col md:flex-row p-app-space gap-8 w-full mx-auto grow ${onlyCenter ? 'max-w-small-content' : ''}`}>
      {left &&
        <div className='md:order-1 md:shrink-0 md:w-aside space-y-8'>{left}</div>}
      {center &&
        <div className='md:order-2 grow min-w-0 space-y-8'>{center}</div>}
      {right &&
        <div className='md:order-3 space-y-8'>{right}</div>}
    </main>
  )
}
