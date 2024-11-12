import { useState } from 'react'
import FilterItem from './FilterItem'

export default function DatesFilter ({ fromDate, setFromDate, toDate, setToDate }) {
  const [showDates, setShowDates] = useState(fromDate !== '' && toDate !== '')

  return (
    <FilterItem title='Release Date'>
      <div>
        <input type='checkbox' name='show-dates' id='show-dates' checked={showDates} onChange={() => setShowDates(p => !p)} />
        <label htmlFor='show-dates'> Filter by release date</label>
      </div>
      {showDates &&
        <>
          <div className='flex justify-between'>
            <label htmlFor='from-date'>From </label>
            <input className='bg-transparent cursor-pointer' type='date' name='from-date' id='from-date' max={toDate || ''} value={fromDate} onChange={e => setFromDate(e.target.value)} />
          </div>
          <div className='flex justify-between'>
            <label htmlFor='to-date'>To </label>
            <input className='bg-transparent cursor-pointer' type='date' name='to-date' id='to-date' min={fromDate || ''} value={toDate} onChange={e => setToDate(e.target.value)} />
          </div>
        </>}
    </FilterItem>
  )
}
