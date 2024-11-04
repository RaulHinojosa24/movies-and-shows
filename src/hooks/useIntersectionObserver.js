import { useCallback, useEffect, useState } from 'react'

export default function useIntersectionObserver ({ callback = () => {}, persistence = false, rootMargin = '0px' }) {
  const [element, setElement] = useState(null)

  const ref = useCallback((node) => {
    setElement(node || null)
  }, [])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          callback()

          if (persistence) {
            observer.unobserve(element)
          }
        } else {
          setIsVisible(false)
        }
      },
      { rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [callback, element, persistence, rootMargin])

  return { ref, isVisible }
}
