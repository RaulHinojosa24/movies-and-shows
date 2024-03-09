import { useEffect, useState } from 'react'
import { retrieveConfig } from '../utils/utility'
import { useRouteLoaderData } from 'react-router-dom'

import Vibrant from 'node-vibrant'

export default function useGenerateImageColors (posterPath, transparency = 1) {
  const [color, setColor] = useState([30, 30, 30])
  const [isDark, setIsDark] = useState(true)

  const {
    images: {
      base_url: URL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  useEffect(() => {
    if (!posterPath) return

    Vibrant.from(URL + posterSizes[0] + posterPath).getPalette()
      .then((palette) => {
        const swatch = palette.Vibrant

        setColor(swatch.getRgb())
        setIsDark(swatch.getBodyTextColor() === '#fff')
      })
  }, [URL, posterPath, posterSizes, transparency])

  return [color, isDark]
}
