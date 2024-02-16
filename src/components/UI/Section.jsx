export default function Section ({ title, children, className = '' }) {
  return (
    <section className={`${className}`}>
      {title &&
        <h2 className='text-2xl text-yellow-400 font-bold'>{title}</h2>}
      {children}
    </section>
  )
}
