export default function SubSection ({ title, children, className = '' }) {
  return (
    <div className={`${className}`}>
      {title &&
        <h3>{title}</h3>}
      {children}
    </div>
  )
}
