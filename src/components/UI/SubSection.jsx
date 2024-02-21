export default function SubSection ({ title, children, className = '' }) {
  return (
    <div className={`flex flex-col${className}`}>
      {title &&
        <h3 className='font-bold text-lg'>{title}</h3>}
      {children}
    </div>
  )
}
