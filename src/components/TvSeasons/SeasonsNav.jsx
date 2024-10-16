import { Link } from 'react-router-dom'
import ChevronIcon from '../../icons/ChevronIcon'

export default function SeasonsNav ({ seasons, currentSeasonNumber, tvId }) {
  const currentSeasonIndex = seasons.findIndex(s => s.season_number === currentSeasonNumber)
  const prevSeason = seasons[currentSeasonIndex - 1]
  const nextSeason = seasons[currentSeasonIndex + 1]

  return (
    <section className='flex py-2 px-4'>
      {prevSeason &&
        <Link className='font-semibold flex items-center gap-1' to={`/tv/${tvId}/season/${prevSeason.season_number}`}>
          <ChevronIcon />
          {prevSeason.name}
        </Link>}
      {nextSeason &&
        <Link className='font-semibold flex items-center gap-1 ml-auto' to={`/tv/${tvId}/season/${nextSeason.season_number}`}>
          {nextSeason.name}
          <ChevronIcon className='rotate-180' />
        </Link>}
    </section>
  )
}
