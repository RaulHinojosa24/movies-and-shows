import { forwardRef } from 'react'

const Section = forwardRef(function Section ({ title, children, className = '' }, ref) {
  return (
    <section className={`${className}`} ref={ref}>
      {title &&
        <h2 className='text-2xl text-accent font-bold mb-4'>{title}</h2>}
      {children}
    </section>
  )
})

export default Section
