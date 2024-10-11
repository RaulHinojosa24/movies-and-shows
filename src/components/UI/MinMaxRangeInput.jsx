import { countDecimals } from '../../utils/utility'

export default function MinMaxRangeInput ({ min, max, step = 0.1, symbol = '', low, high, setLow, setHigh }) {
  const width = (high - low) * 100 / (max - min)
  const nDecimals = countDecimals(step)

  const highWidth = (max - low) * 100 / (max - min)
  const lowWidth = (high - min) * 100 / (max - min)

  return (
    <div>
      <div className='relative h-6'>
        <div
          className='h-1 dark:bg-neutral-700 bg-neutral-200 absolute left-0 top-1/2 -translate-y-1/2 w-full rounded'
        />
        <div
          className='h-1 bg-accent absolute left-0 top-1/2 -translate-y-1/2 w-full rounded'
          style={{
            left: 100 - highWidth + '%',
            width: width + '%'
          }}
        />
        <input
          type='range' name='low-range' id='low-range' dir='rtl' step={step} max={high} min={min} value={high - low} onChange={(e) => setLow((high - e.target.value).toFixed(nDecimals))}
          className='absolute top-1/2 left-0 -translate-y-1/2'
          style={{
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
      >
        <span>{Number(low)} {symbol}</span>
        <span>{Number(high)} {symbol}</span>
      </div>
    </div>
  )
}
