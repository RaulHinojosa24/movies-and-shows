export function calculateImageSize (sizes, width, ratio) {
  const maxWidth = width * ratio

  for (let i = 0; i < sizes.length - 1; i++) {
    const current = sizes[i]
    const n = current.match(/\d+/g)[0]

    if (n > maxWidth) return current
  }

  return 'original'
}
