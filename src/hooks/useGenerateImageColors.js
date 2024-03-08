import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color'
import { retrieveConfig } from '../utils/utility'
import { useRouteLoaderData } from 'react-router-dom'

export default function useGenerateImageColors (posterPath, transparency = 1) {
  const [color, setColor] = useState('rgba(30,30,30,' + transparency + ')')
  const [isDark, setIsDark] = useState(true)

  const {
    images: {
      base_url: URL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  useEffect(() => {
    const fac = new FastAverageColor()

    if (!posterPath) return

    fac.getColorAsync(URL + posterSizes[0] + posterPath, {
      algorithm: 'dominant',
      ignoredColor: []
    })
      .then(color => {
        const [r, g, b] = color.value
        setColor(`rgba(${r},${g},${b},${transparency})`)
        setIsDark(color.isDark)
      })
      .catch(e => {
        console.log(e)
      })

    return () => fac.destroy()
  }, [URL, posterPath, posterSizes, transparency])

  return [color, isDark]
}
