import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { useEffect, useRef, useState } from 'react'

export default function PersonBio () {
  const { biography } = useRouteLoaderData('person-details')

  const clampedContent = useRef()
  const [isClamped, setIsClamped] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleBio () {
    setIsExpanded(prev => !prev)
  }

  useEffect(() => {
    if (biography) setIsClamped(clampedContent.current.scrollHeight > clampedContent.current.clientHeight)
  }, [biography])

  return (
    <Section title='Biografía'>
      {biography &&
        <>
          <p ref={clampedContent} className={`whitespace-pre-line text-pretty ${!isExpanded && 'line-clamp-6'} overflow-hidden ${isClamped && !isExpanded ? 'read-shadow after:to-neutral-950' : ''}`}>{biography}</p>
          {isClamped && <button className='mt-4' onClick={toggleBio}>Leer {isExpanded ? 'menos' : 'más'}</button>}
        </>}
      {!biography &&
        <p className='italic'>No tenemos una biografía en tu idioma.</p>}
    </Section>
  )
}
