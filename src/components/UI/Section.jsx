export default function Section ({ title, children, className = '' }) {
  return (
    <section>
      {title &&
        <h2 className='text-2xl text-yellow-400 font-bold mb-2'>{title}</h2>}
      <div className={`${className}`}>{children}</div>
    </section>
  )
}
