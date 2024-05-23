import { Await, useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'
import { Suspense } from 'react'
import HeaderCompactSkeleton from '../Skeletons/HeaderCompactSkeleton'

export default function MovieHeaderCompact () {
  const { data: loaderMovieDetails } = useRouteLoaderData('movie-details')

  return (
    <Suspense fallback={<HeaderCompactSkeleton />}>
      <Await resolve={loaderMovieDetails}>
        {({
          id,
          poster_path: posterPath,
          title,
          original_title: originalTitle
        }) => {
          const prettyTitle = title || originalTitle

          return <HeaderCompact target={'/movie/' + id} mediaType='movie' posterPath={posterPath} title={prettyTitle} />
        }}
      </Await>
    </Suspense>
  )
}
