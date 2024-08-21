import { countDecimals } from '../../utils/utility'

export default function RangeInput ({ min, max, step, symbol = '', value, setValue }) {
  const width = (value - min) * 100 / (max - min)
  const nDecimals = countDecimals(step)

  return (
    <div>
      <div className='relative h-6'>
        <div
          className='h-1 dark:bg-neutral-700 bg-neutral-200 absolute left-0 top-1/2 -translate-y-1/2 w-full rounded'
        />
        <div
          className='h-1 bg-yellow-400 absolute left-0 top-1/2 -translate-y-1/2 w-full rounded'
          style={{
            width: width + '%'
          }}
        />
        <input
          type='range' name='low-range' id='low-range' step={step} max={max} min={min} value={value} onChange={(e) => setValue((+e.target.value).toFixed(nDecimals))}
          className='absolute top-1/2 left-0 -translate-y-1/2 !w-full'
        />
      </div>
      <div
        className='w-full flex justify-between'
      >
        <span>{value} {symbol}</span>
      </div>
    </div>
  )
}
