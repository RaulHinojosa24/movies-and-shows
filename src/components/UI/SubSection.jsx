export default function SubSection ({ title, subtitle, children, className = '' }) {
  return (
    <div className={className}>
      {title &&
        <h3 className='font-semibold text-lg'>{title}
          {subtitle &&
            <span className='text-medium'> &bull; {subtitle}</span>}
        </h3>}
      {children}
    </div>
  )
}
