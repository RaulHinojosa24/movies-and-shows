import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaProfiles from '../components/Media/MediaProfiles'
import { Suspense } from 'react'
import PersonHeaderCompact from '../components/Person/PersonHeaderCompact'
import PersonMediaSkeleton from '../skeleton-pages/PersonMediaSkeleton'

export default function PersonMediaPage () {
  const { data: loaderPersonDetails } = useRouteLoaderData('person-details')
  setDocTitle('Cargando...')

  return (
    <Suspense fallback={<PersonMediaSkeleton />}>
      <Await resolve={loaderPersonDetails}>
        {({
          name,
          images: {
            profiles
          },
          id,
          profile_path: profilePath
        }) => {
          setDocTitle(`${name} - Retratos`)

          return (
            <>
              <PersonHeaderCompact id={id} name={name} profilePath={profilePath} />
              <Main
                center={
                  <>
                    {profiles.length > 0 &&
                      <MediaProfiles images={profiles} />}
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
