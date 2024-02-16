export default function SubSection ({ title, children, className = '' }) {
  return (
    <div className={`${className}`}>
      {title &&
        <h3 className='font-semibold text-lg'>{title}</h3>}
      {children}
    </div>
  )
}
