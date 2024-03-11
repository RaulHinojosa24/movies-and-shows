import { useEffect, useRef, useState } from 'react'

export default function ClampedText ({ text, clampClass = 'line-clamp-[10]', url }) {
  const textRef = useRef()

  const [isClamped, setIsClamped] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleClamp () {
    if (url) {
      window.open(url, '_blank')
    } else {
      setIsExpanded(prev => !prev)
    }
  }

  useEffect(() => {
    if (text) {
      setIsClamped(textRef.current.scrollHeight > textRef.current.clientHeight)
    }
  }, [text])

  return (
    <>
      <p
        ref={textRef}
        className={`whitespace-pre-line text-pretty ${!isExpanded && clampClass} overflow-hidden ${isClamped && !isExpanded ? 'read-shadow' : ''}`}
      >{text}
      </p>
      {isClamped &&
        <button className='mt-4' onClick={toggleClamp}>Leer {isExpanded ? 'menos' : 'más'}</button>}
    </>
  )
}
