import { useRef } from 'react'
import { formatNumberSymbols, generateVoteColor, roundDecimals } from '../../utils/utility'

export default function VoteCard ({ rating, count, small, minimal, width, className, ...props }) {
  const svgRef = useRef()

  if (minimal) {
    return <span className='font-bold px-2 rounded mr-2 custom-shadow-small' {...props}>{roundDecimals(rating, 0)} &#9733;</span>
  }

  const prettyAvarage = count ? roundDecimals(rating * 10, 0) : 'NR'
  const prettyCount = formatNumberSymbols(count, 1)
  const avarageColor = generateVoteColor(rating / 10)

  return (
    <div className={className}>
      <div className={`bg-black text-white rounded-full relative w-fit aspect-square grid place-content-center shadow-md shadow-black/50 ${small ? 'px-2 text-base font-semibold' : 'px-3 text-2xl font-bold'}`} title={count > 0 && `Media basada en ${count} votos`}>
        <svg
          style={{
            strokeWidth: 4,
            strokeLinecap: 'round'
          }}
          className='round -rotate-90 w-full absolute'
          ref={svgRef}
          viewBox='0 0 100 100' width='100%' height='100%' fill='none'
        >
          <circle cx='50' cy='50' r='42' stroke='#222' />
          {count &&
            <circle
              cx='50' cy='50' r='42'
              style={{
                strokeDasharray: count ? 42 * 2 * Math.PI * rating * 10 / 100 + ', 999' : ''
              }}
              stroke={avarageColor}
            />}
        </svg>
        <div className='flex items-start'>
          {prettyAvarage}
          {count > 0 &&
            <span className={small ? 'text-[0.6rem] -mt-[0.1rem]' : 'text-sm mt-1'}>%</span>}
        </div>
      </div>
    </div>
  )
}
