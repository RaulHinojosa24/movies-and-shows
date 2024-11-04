import { useEffect, useState } from 'react'

const isDarkColor = (rgb) => {
  const [r, g, b] = rgb
  const luminosity = 0.299 * r + 0.587 * g + 0.114 * b
  return luminosity < 128
}

const getPixelStep = (width, height) => {
  const pixelCount = width * height

  let quality

  if (pixelCount <= 10000) quality = 1
  else if (pixelCount <= 640000) quality = 4
  else if (pixelCount <= 2000000) quality = 10
  else quality = 20

  return quality * 4
}

const getDominantColor = (imageElement) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  canvas.width = imageElement.width
  canvas.height = imageElement.height

  context.drawImage(imageElement, 0, 0, canvas.width, canvas.height)

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data
  const step = getPixelStep(canvas.width, canvas.height)

  let r = 0; let g = 0; let b = 0; let count = 0

  const grayThreshold = 5 // Decrease to avoid grey
  const saturationThreshold = 60 // Increase to avoid low saturation

  for (let i = 0; i < imageData.length; i += step) {
    const red = imageData[i]
    const green = imageData[i + 1]
    const blue = imageData[i + 2]

    const max = Math.max(red, green, blue)
    const min = Math.min(red, green, blue)
    const saturation = max - min

    if (
      saturation > saturationThreshold &&
      Math.abs(red - green) > grayThreshold &&
      Math.abs(red - blue) > grayThreshold &&
      Math.abs(green - blue) > grayThreshold
    ) {
      r += red
      g += green
      b += blue
      count++
    }
  }

  if (count === 0) return [0, 0, 0]

  r = Math.floor(r / count)
  g = Math.floor(g / count)
  b = Math.floor(b / count)

  return [r, g, b]
}

export default function useImageColors (imgRef) {
  const [dominantColor, setDominantColor] = useState([0, 0, 0])
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const imgElement = imgRef?.current
    if (imgElement?.complete) {
      const newDominantColor = getDominantColor(imgElement)

      setDominantColor(newDominantColor)
      setIsDark(isDarkColor(newDominantColor))
    } else {
      imgElement.addEventListener('load', () => {
        const newDominantColor = getDominantColor(imgElement)

        setDominantColor(newDominantColor)
        setIsDark(isDarkColor(newDominantColor))
      })
    }
  }, [imgRef])

  return {
    dominant: dominantColor,
    isDark
  }
}
