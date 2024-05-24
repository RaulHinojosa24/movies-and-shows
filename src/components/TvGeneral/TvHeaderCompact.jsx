import { Await, useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'
import HeaderCompactSkeleton from '../Skeletons/HeaderCompactSkeleton'
import { Suspense } from 'react'

export default function TvHeaderCompact () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')

  return (
    <Suspense fallback={<HeaderCompactSkeleton />}>
      <Await resolve={loaderTvDetails}>
        {({
          id,
          poster_path: posterPath,
          name,
          orinigal_name: originalName
        }) => {
          const prettyName = name || originalName

          return <HeaderCompact target={'/tv/' + id} mediaType='tv' posterPath={posterPath} title={prettyName} />
        }}
      </Await>
    </Suspense>
  )
}
