import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'
import { Suspense } from 'react'

export default function CollectionMediaPage () {
  const { data: loaderCollectionDetails } = useRouteLoaderData('collection-details')

  return (
    <Main
      center={
        <Suspense>
          <Await resolve={loaderCollectionDetails}>
            {({
              name,
              images: {
                backdrops, posters
              }
            }) => {
              setDocTitle(`${name} - Fotos`)

              return (
                <>
                  {backdrops.length > 0 &&
                    <MediaBackdrops images={backdrops} />}
                  {posters.length > 0 &&
                    <MediaPosters images={posters} />}
                </>
              )
            }}
          </Await>
        </Suspense>

      }
    />
  )
}
