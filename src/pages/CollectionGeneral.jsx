import { Await, useRouteLoaderData } from 'react-router-dom'
import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'
import { Suspense } from 'react'
import CollectionHeader from '../components/Collection/CollectionHeader'
import CollectionGeneralSkeleton from '../skeleton-pages/CollectionGeneralSkeleton'
import ErrorPage from './ErrorPage'

export default function CollectionGeneralPage () {
  const { data: loaderCollectionDetails } = useRouteLoaderData('collection-details')
  setDocTitle('Loading...')

  return (
    <Suspense fallback={<CollectionGeneralSkeleton />}>
      <Await
        resolve={loaderCollectionDetails}
        errorElement={<ErrorPage />}
      >
        {({
          name,
          images: {
            backdrops, posters
          },
          parts,
          overview,
          poster_path: posterPath,
          backdrop_path: backdropPath
        }) => {
          setDocTitle(name)

          return (
            <>
              <CollectionHeader parts={parts} backdropPath={backdropPath} posterPath={posterPath} name={name} overview={overview} />
              <Main
                center={
                  <>
                    <GeneralMedia backdrops={backdrops} posters={posters} title={name} />
                    <CollectionSummary parts={parts} />
                    <CollectionList parts={parts} />
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
