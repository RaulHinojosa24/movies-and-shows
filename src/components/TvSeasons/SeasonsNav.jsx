import { Await, Link, useParams, useRouteLoaderData } from 'react-router-dom'
import ChevronIcon from '../../icons/ChevronIcon'
import { Suspense } from 'react'

export default function SeasonsNav () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  const { season: currentSeasonNumber, id: tvID } = useParams()

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={loaderTvDetails}>
        {({ seasons }) => {
          const currentSeasonIndex = seasons.findIndex(s => String(s.season_number) === currentSeasonNumber)
          const prevSeason = seasons[currentSeasonIndex - 1]
          const nextSeason = seasons[currentSeasonIndex + 1]

          return (
            <section className='flex py-2 px-4'>
              {prevSeason &&
                <Link className='font-semibold flex items-center gap-1' to={`/tv/${tvID}/season/${prevSeason.season_number}`}>
                  <ChevronIcon />
                  {prevSeason.name}
                </Link>}
              {nextSeason &&
                <Link className='font-semibold flex items-center gap-1 ml-auto' to={`/tv/${tvID}/season/${nextSeason.season_number}`}>
                  {nextSeason.name}
                  <ChevronIcon className='rotate-180' />
                </Link>}
            </section>
          )
        }}
      </Await>
    </Suspense>

  )
}

const Fallback = () => {
  return (
    <div className='flex py-2 px-4 justify-between'>
      <div className='skeleton__subtitle w-24' />
      <div className='skeleton__subtitle w-24' />
    </div>
  )
}
