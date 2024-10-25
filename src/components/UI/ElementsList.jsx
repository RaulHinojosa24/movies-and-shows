import React from 'react'

export default function ElementsList ({ children, style, className = '' }) {
  const childrenArray = React.Children.toArray(children)
    .filter(el => el !== '')

  const separation = style === 'comma'
    ? ', '
    : ' • '

  return (
    <ul className={`w-full inline ${className}`}>
      {childrenArray.map((child, index) => (
        <li key={child.key || index} className='inline'>
          {index !== 0 &&
            <span>{separation}</span>}
          {child}
        </li>
      ))}
    </ul>
  )
}
