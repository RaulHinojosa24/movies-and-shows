export function calculateImageSize (sizes, width, ratio) {
  const maxWidth = width * ratio

  for (let i = 0; i < sizes.length - 1; i++) {
    const current = sizes[i]
    const n = current.match(/\d+/g)

    if (n > maxWidth) return current
  }

  return 'original'
}

export function formatShortDate (date) {
  return date
    ? new Date(date).toLocaleDateString('es-ES')
    : ''
}

export function formatLongDate (date) {
  return date
    ? new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    : ''
}

export function formatCurrency (amount) {
  const USDollar = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD'
  })

  return USDollar.format(amount)
}

export function formatNumber (number) {
  return number.toLocaleString()
}

export function formatNumberSymbols (number, digits) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'm' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'mM' },
    { value: 1e12, symbol: 'B' },
    { value: 1e15, symbol: 'mB' },
    { value: 1e18, symbol: 'T' }
  ]
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/
  const item = lookup.findLast(item => number >= item.value)
  return item ? (number / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol) : '0'
}

export function formatRuntime (runtime) {
  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return (hours > 0 ? hours + 'h ' : '') + minutes + 'min'
}

export function roundDecimals (number, decimals = 0) {
  const n = 10 ** decimals
  return Math.round(number * n) / n
}

export function generateVoteColor (value) {
  const hue = (value * 120).toString(10)
  return ['hsl(', hue, ',100%,40%)'].join('')
}

export function getPersonGender (type) {
  return ['Desconocido / Indefinido', 'Femenino', 'Masculino', 'No binario'][type]
}

export function getReleaseType (type) {
  return ['Not set / not specified', 'Premiere', 'Theatrical (limited)', 'Theatrical', 'Digital', 'Physical', 'TV'][type]
}

export function calculateAge (birthday, deathday) {
  const today = deathday ? new Date(deathday) : new Date()
  const birthDate = new Date(birthday)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export function setDocTitle (title) {
  document.title = `${title} - Movies & Shows`
}

export function countDecimals (value) {
  if (Math.floor(value) === value) return 0
  return value.toString().split('.')[1].length || 0
}
