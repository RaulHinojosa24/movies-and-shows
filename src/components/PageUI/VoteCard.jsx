import { formatNumberSymbols, generateVoteColor, roundDecimals } from '../../utils/utility'

export default function VoteCard ({ rating, count, precission = 1, small, minimal, ...props }) {
  if (minimal) {
    return <span className='font-bold px-2 rounded mr-2 custom-shadow-small' {...props}>{roundDecimals(rating, precission)} &#9733;</span>
  }

  const prettyAvarage = roundDecimals(rating, precission)
  const prettyCount = formatNumberSymbols(count, 1)
  const avarageColor = generateVoteColor(rating / 10)

  return (
    <div className='rounded w-fit h-fit py-1 px-4 flex flex-col items-center font-semibold custom-shadow-small  dark:bg-neutral-900 dark:text-white bg-white text-black' {...props}>
      <div className='flex items-end gap-1'>
        <span style={{ color: avarageColor }} className={`font-bold ${!small ? 'text-xl' : ''}`}>{prettyAvarage}</span>
        /
        <span>10</span>
      </div>
      {!small && <p className='text-sm'>{prettyCount} votos</p>}
    </div>
  )
}
