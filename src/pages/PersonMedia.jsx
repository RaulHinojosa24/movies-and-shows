import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaProfiles from '../components/Media/MediaProfiles'
import { Suspense } from 'react'

export default function PersonMediaPage () {
  const { data: loaderPersonDetails } = useRouteLoaderData('person-details')

  return (
    <Main center={
      <Suspense>
        <Await resolve={loaderPersonDetails}>
          {({
            name,
            images: {
              profiles
            }
          }) => {
            setDocTitle(`${name} - Retratos`)

            return (
              <>
                {profiles.length > 0 &&
                  <MediaProfiles images={profiles} />}
              </>
            )
          }}
        </Await>
      </Suspense>

    }
    />
  )
}
