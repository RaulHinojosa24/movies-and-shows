import { Await, useMatch, useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'
import { Suspense } from 'react'
import HeaderCompactSkeleton from '../Skeletons/HeaderCompactSkeleton'

export default function SeasonHeader () {
  const isRootPage = useMatch('/tv/:id/season/:season')
  const { data: loaderSeasonDetails } = useRouteLoaderData('season-details')
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')

  return (
    <Suspense fallback={<HeaderCompactSkeleton />}>
      <Await resolve={Promise.all([loaderTvDetails, loaderSeasonDetails])}>
        {(data) => {
          const [
            { id },
            {
              poster_path: posterPath,
              name,
              season_number: seasonNumber
            }] = data
          return <HeaderCompact target={'/tv/' + id + '/season' + (!isRootPage ? '/' + seasonNumber : '')} mediaType='tv' posterPath={posterPath} title={name} />
        }}
      </Await>
    </Suspense>

  )
}
