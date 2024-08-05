import { useContext, useEffect, useState } from 'react'
import Vibrant from 'node-vibrant'
import { rootContext } from '../context/root-context'

export default function useGenerateImageColors (posterPath, transparency = 1) {
  const { config } = useContext(rootContext)
  const [color, setColor] = useState([30, 30, 30])
  const [isDark, setIsDark] = useState(true)
  const prettyPosterPath = config && posterPath
    ? config?.images?.base_url + config?.images?.poster_sizes[0] + posterPath
    : ''

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
