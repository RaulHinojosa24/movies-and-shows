import { useEffect, useState } from 'react'

export default function useIntersectionObserver (element, rootMargin, persistence) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const current = element?.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting && persistence) {
          observer.unobserve(current)
        }
      },
      { rootMargin }
    )
    current && observer?.observe(current)

    return () => current && observer.unobserve(current)
  }, [element, isVisible, persistence, rootMargin])

  return isVisible
}
