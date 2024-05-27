import { Await, useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'
import { Suspense } from 'react'
import HeaderCompactSkeleton from '../Skeletons/HeaderCompactSkeleton'

export default function CollectionHeaderCompact () {
  const { data: loaderCollectionDetails } = useRouteLoaderData('collection-details')

  return (
    <Suspense fallback={<HeaderCompactSkeleton />}>
      <Await resolve={loaderCollectionDetails}>
        {({
          id,
          name,
          poster_path: posterPath
        }) => <HeaderCompact target={'/collection/' + id} mediaType='collection' posterPath={posterPath} title={name} />}
      </Await>
    </Suspense>

  )
}
