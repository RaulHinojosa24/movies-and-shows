import { generateVoteColor, roundDecimals } from '../../utils/utility'
import Popover from '../UI/Popover'

export default function VoteCard ({ rating, count, small, minimal, className, hidePopover }) {
  const displayPopover = !hidePopover && count > 0
  const prettyAvarage = rating ? roundDecimals(rating * (minimal ? 1 : 10), 0) : 'NR'

  if (minimal) {
    const minimalVoteElement = <span className='font-bold px-2 rounded shadow shadow-colors text-nowrap'>{prettyAvarage} &#9733;</span>

    return (
      <>
        {displayPopover &&
          <Popover compact noDelay popoverTarget={minimalVoteElement}>
            Media basada en {count} votos
          </Popover>}
        {!displayPopover &&
          minimalVoteElement}
      </>
    )
  }

  const avarageColor = generateVoteColor(rating / 10)

  const voteElement = (
    <div className={`bg-black text-white rounded-full relative aspect-square inline-grid place-content-center shadow-sm shadow-black/50 ${small ? 'w-10 text-base font-semibold' : 'w-16 text-2xl font-bold'}`}>
      <svg
        style={{
          strokeWidth: 4,
          strokeLinecap: 'round'
        }}
        className='round -rotate-90 w-full absolute'
        viewBox='0 0 100 100' width='100%' height='100%' fill='none'
      >
        <circle cx='50' cy='50' r='42' stroke='#222' />
        {rating > 0 &&
          <circle
            cx='50' cy='50' r='42'
            style={{
              strokeDasharray: 42 * 2 * Math.PI * rating * 10 / 100 + ', 999'
            }}
            stroke={avarageColor}
          />}
      </svg>
      <div className='flex items-start'>
        {prettyAvarage}
        {rating > 0 &&
          <span className={small ? 'text-[0.6rem] -mt-[0.11rem]' : 'text-sm mt-[0.2rem]'}>%</span>}
      </div>
    </div>
  )

  return (
    <>
      {displayPopover &&
        <Popover noDelay compact={small} popoverTarget={voteElement}>
          Media basada en {count} votos
        </Popover>}
      {!displayPopover &&
        voteElement}
    </>
  )
}
