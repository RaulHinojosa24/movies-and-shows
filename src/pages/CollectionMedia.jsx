import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'
import { Suspense } from 'react'
import CollectionHeaderCompact from '../components/Collection/CollectionHeaderCompact'
import CollectionMediaSkeleton from '../skeleton-pages/CollectionMediaSkeleton'

export default function CollectionMediaPage () {
  const { data: loaderCollectionDetails } = useRouteLoaderData('collection-details')
  setDocTitle('Cargando...')

  return (
    <Suspense fallback={<CollectionMediaSkeleton />}>
      <Await resolve={loaderCollectionDetails}>
        {({
          name,
          images: {
            backdrops, posters
          },
          id,
          poster_path: posterPath
        }) => {
          setDocTitle(`${name} - Fotos`)

          return (
            <>
              <CollectionHeaderCompact id={id} posterPath={posterPath} name={name} />
              <Main
                center={
                  <>
                    {backdrops.length > 0 &&
                      <MediaBackdrops images={backdrops} />}
                    {posters.length > 0 &&
                      <MediaPosters images={posters} />}
                  </>
              }
              />
            </>
          )
        }}
      </Await>
    </Suspense>

  )
}
