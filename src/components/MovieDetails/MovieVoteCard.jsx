import { formatNumberSymbols, generateVoteColor, roundDecimals } from '../../utils/utility'

export default function MovieVoteCard ({ avarage, count, small }) {
  const prettyAvarage = roundDecimals(avarage, 1)
  const prettyCount = formatNumberSymbols(count, 1)
  const avarageColor = generateVoteColor(avarage / 10)

  return (
    <div className='bg-neutral-950 rounded w-fit h-fit py-1 px-4 flex flex-col items-center font-semibold custom-shadow-small'>
      <div className='flex items-end gap-1'>
        <span style={{ color: avarageColor }} className={`font-bold ${!small ? 'text-xl' : ''}`}>{prettyAvarage}</span>
        /
        <span>10</span>
      </div>
      {!small && <p>{prettyCount} votos</p>}
    </div>
  )
}
