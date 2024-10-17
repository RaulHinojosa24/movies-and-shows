import React from 'react'

export default function BullsBetween ({ children }) {
  const childrenArray = React.Children.toArray(children)
    .filter(el => el !== '')

  return (
    <div className='flex items-center justify-center flex-wrap md:justify-start'>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <span className='mx-2'>&bull;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
