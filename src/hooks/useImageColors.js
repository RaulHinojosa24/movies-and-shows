/* eslint-disable prefer-promise-reject-errors */
import ColorThief from 'colorthief'
import { useEffect, useRef, useState } from 'react'

const isDarkColor = (rgb) => {
  const [r, g, b] = rgb
  const luminosity = 0.299 * r + 0.587 * g + 0.114 * b
  return luminosity < 128
}

export default function useImageColors (changing) {
  const imgRef = useRef(null)
  const [dominantColor, setDominantColor] = useState([])
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const img = imgRef.current

    new Promise((resolve, reject) => {
      const colorThief = new ColorThief()

      if (!img.complete) {
        img.addEventListener('load', () => {
          try {
            const dominantColor = colorThief.getColor(img)
            const isDark = isDarkColor(dominantColor)
            resolve({ dominantColor, isDark })
          } catch (error) {
            reject('Error al extraer colores de la imagen')
          }
        })
      } else {
        try {
          const dominantColor = colorThief.getColor(img)
          const isDark = isDarkColor(dominantColor)
          resolve({ dominantColor, isDark })
        } catch (error) {
          reject('Error al extraer colores de la imagen')
        }
      }
    })
      .then(({ dominantColor, isDark }) => {
        setDominantColor(dominantColor)
        setIsDark(isDark)
      })

    return () => {
      setDominantColor([])
      setIsDark(false)
    }
  }, [changing])

  return {
    ref: imgRef,
    dominant: dominantColor,
    isDark
  }
}
