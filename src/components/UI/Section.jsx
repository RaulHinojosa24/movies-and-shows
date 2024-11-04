import { forwardRef } from 'react'

const Section = forwardRef(function Section ({ title, subtitle, children, className = '' }, ref) {
  return (
    <section className={`${className}`} ref={ref}>
      {title &&
        <h2 className='text-2xl text-accent font-bold mb-4'>
          {title}
          {subtitle &&
            <span className='font-semibold text-medium text-xl'> &bull; {subtitle}</span>}
        </h2>}
      {children}
    </section>
  )
})

export default Section
