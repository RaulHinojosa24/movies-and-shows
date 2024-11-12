import FilterItem from './FilterItem'

export default function AvailabilityFilter ({ watchTypes, setWatchTypes, options }) {
  const toggleWatchType = (wt) => {
    setWatchTypes(prev => {
      const index = prev.indexOf(wt)

      if (index === -1) return [...prev, wt]
      else return prev.filter(i => i !== wt)
    })
  }

  return (
    <FilterItem title='Availabilities'>
      {options.map(option => (
        <div key={option.value}>
          <input
            type='checkbox' name='availability' value={option.value} id={option.value} checked={watchTypes.includes(option.value)}
            onChange={() => toggleWatchType(option.value)}
          />
          <label htmlFor={option.value}> {option.label}</label>
        </div>
      ))}
    </FilterItem>
  )
}
