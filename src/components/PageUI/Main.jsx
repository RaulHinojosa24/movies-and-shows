export default function Main ({ left, center, right }) {
  const onlyCenter = !left && center && !right

  return (
    <main className={`flex p-app-space gap-8 mx-auto ${onlyCenter ? 'max-w-small-content' : ''}`}>
      {left &&
        <div className='shrink-0 w-aside space-y-8'>{left}</div>}
      {center &&
        <div className='grow min-w-0 space-y-8'>{center}</div>}
      {right &&
        <div className='space-y-8'>{right}</div>}
    </main>
  )
}
