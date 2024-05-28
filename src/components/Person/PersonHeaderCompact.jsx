import { Await, useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'
import { Suspense } from 'react'
import HeaderCompactSkeleton from '../Skeletons/HeaderCompactSkeleton'

export default function PersonHeaderCompact () {
  const { data: loaderPersonDetails } = useRouteLoaderData('person-details')

  return (
    <Suspense fallback={<HeaderCompactSkeleton />}>
      <Await resolve={loaderPersonDetails}>
        {({
          id,
          profile_path: profilePath,
          name
        }) => <HeaderCompact target={'/person/' + id} mediaType='person' posterPath={profilePath} title={name} />}
      </Await>
    </Suspense>
  )
}
