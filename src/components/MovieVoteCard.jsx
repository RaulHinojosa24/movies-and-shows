import { formatNumberLetters, generateVoteColor, roundDecimals } from '../utils/utility'

export default function MovieVoteCard ({ avarage, count }) {
  const prettyAvarage = roundDecimals(avarage, 1)
  const prettyCount = formatNumberLetters(count, 1)
  const avarageColor = generateVoteColor(avarage / 10)

  return (
    <div className='bg-neutral-950 rounded w-fit py-1 px-4 flex flex-col items-center font-semibold'>
      <div className='flex items-end gap-1'>
        <span style={{ color: avarageColor }} className='font-bold text-xl'>{prettyAvarage}</span>
        /
        <span>10</span>
      </div>
      <p>{prettyCount} votos</p>
    </div>
  )
}
