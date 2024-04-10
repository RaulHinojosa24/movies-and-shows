import { useEffect, useState, useRef } from 'react'

export default function useIntersectionObserver (element, rootMargin) {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const current = element?.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )
    current && observer?.observe(current)

    return () => current && observer.unobserve(current)
  }, [])

  return isVisible
}
