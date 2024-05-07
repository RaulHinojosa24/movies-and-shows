export default function FilterItem ({ children, title, className = '' }) {
  return (
    <div>
      {title &&
        <h3 className='font-semibold pb-1 text-lg'>{title}</h3>}
      <div className={className}>{children}</div>
    </div>
  )
}
