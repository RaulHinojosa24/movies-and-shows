export default function AvailabilityFilter ({ watchTypes, setWatchTypes }) {
  const toggleWatchType = (wt) => {
    setWatchTypes(prev => {
      const index = prev.indexOf(wt)

      if (index === -1) return [...prev, wt]
      else return prev.filter(i => i !== wt)
    })
  }

  return (
    <div>
      <h3>Disponibilidad</h3>
      <div>
        <input
          type='checkbox' name='availability' value='flatrate' id='flatrate' checked={watchTypes.includes('flatrate')}
          onChange={() => toggleWatchType('flatrate')}
        />
        <label htmlFor='flatrate'> Streaming</label>
      </div>
      <div>
        <input
          type='checkbox' name='availability' value='free' id='free' checked={watchTypes.includes('free')}
          onChange={() => toggleWatchType('free')}
        />
        <label htmlFor='free'> Gratis</label>
      </div>
      <div>
        <input
          type='checkbox' name='availability' value='ads' id='ads' checked={watchTypes.includes('ads')}
          onChange={() => toggleWatchType('ads')}
        />
        <label htmlFor='ads'> Anuncios</label>
      </div>
      <div>
        <input
          type='checkbox' name='availability' value='rent' id='rent' checked={watchTypes.includes('rent')}
          onChange={() => toggleWatchType('rent')}
        />
        <label htmlFor='rent'> Alquiler</label>
      </div>
      <div>
        <input
          type='checkbox' name='availability' value='buy' id='buy' checked={watchTypes.includes('buy')}
          onChange={() => toggleWatchType('buy')}
        />
        <label htmlFor='buy'> Compra</label>
      </div>
    </div>
  )
}
