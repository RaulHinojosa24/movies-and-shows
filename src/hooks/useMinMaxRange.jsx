import { useState } from 'react'
import { countDecimals } from '../utils/utility'

export default function useMinMaxRange (min, max, step, symbol = '', minDefault, maxDefault) {
  const [low, setLow] = useState(
    minDefault && minDefault >= min && (maxDefault && maxDefault <= max ? minDefault <= maxDefault : minDefault <= max)
      ? minDefault
      : min
  )
  const [high, setHigh] = useState(
    maxDefault && maxDefault <= max && (minDefault && minDefault >= min ? maxDefault >= minDefault : maxDefault >= min)
      ? maxDefault
      : max
  )
  const width = (high - low) * 100 / (max - min)
  const nDecimals = countDecimals(step)

  const highWidth = (max - low) * 100 / (max - min)
  const lowWidth = (high - min) * 100 / (max - min)

  const component = (
    <>
      <div className='relative h-6'>
        <div
          className='h-1 bg-yellow-400 absolute left-0 top-1/2 -translate-y-1/2 w-full rounded'
          style={{
            left: 100 - highWidth + '%',
            width: width + '%'
          }}
        />
        <input
          type='range' name='low-range' id='low-range' step={step} max={high} min={min} value={high - low} onChange={(e) => setLow((high - e.target.value).toFixed(nDecimals))}
          className='absolute top-1/2 left-0 -translate-y-1/2'
          style={{
            direction: 'rtl',
            width: lowWidth + '%'
          }}
        />
        <input
          type='range' name='high-range' id='high-range' step={step} min={low} max={max} value={high} onChange={(e) => setHigh((+e.target.value).toFixed(nDecimals))}
          className='absolute top-1/2 right-0 -translate-y-1/2'
          style={{
            width: highWidth + '%'
          }}
        />
      </div>
      <div
        className='w-full flex justify-between'
        // style={{
        //   marginLeft: 100 - highWidth + '%',
        //   width: width + '%'
        // }}
      >
        <span>{low} {symbol}</span>
        <span>{high} {symbol}</span>
      </div>
      {/* <div className='w-full flex justify-between'>
        <input
          className='text-black rounded' type='number' name='low-input' id='low-input' step={step} value={low} onChange={(e) => {
            setLow((+e.target.value).toFixed(nDecimals))
            console.log(e.target.value.length)
            e.target.style.width = e.target.value.length + 2 + 'ch'
          }}
        /><span>{symbol}</span>
        <input className='text-black w-fit rounded' type='number' name='low-input' id='low-input' defaultValue={high} /><span>{symbol}</span>
      </div> */}
    </>
  )

  return [low, high, component, setLow, setHigh]
}
