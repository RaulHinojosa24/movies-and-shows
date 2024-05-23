import { useEffect, useState } from 'react'

import Vibrant from 'node-vibrant'
import { retrieveConfig } from '../utils/utility'
import { useRouteLoaderData } from 'react-router-dom'

export default function useGenerateImageColors (posterPath, transparency = 1) {
  const [color, setColor] = useState([30, 30, 30])
  const [isDark, setIsDark] = useState(true)
  const [prettyPosterPath, setPrettyPosterPath] = useState('')

  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))

  useEffect(() => {
    loaderConfig.then(({
      images: {
        base_url: URL,
        poster_sizes: posterSizes
      }
    }) => {
      if (posterPath) setPrettyPosterPath(URL + posterSizes[0] + posterPath)
    })
  }, [loaderConfig, posterPath])

  useEffect(() => {
    if (!prettyPosterPath) return

    Vibrant.from(prettyPosterPath).getPalette()
      .then((palette) => {
        const swatch = palette.Vibrant

        setColor(swatch.getRgb())
        setIsDark(swatch.getBodyTextColor() === '#fff')
      })
  }, [prettyPosterPath])

  return [color, isDark]
}
