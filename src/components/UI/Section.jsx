export default function Section ({ title, children, className = '' }) {
  return (
    <section className={`${className}`}>
      {title &&
        <h2 className='text-2xl text-yellow-400 font-bold mb-4'>{title}</h2>}
      {children}
    </section>
  )
}
