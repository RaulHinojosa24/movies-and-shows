import { Await, useRouteLoaderData } from 'react-router-dom'
import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'
import { Suspense } from 'react'

export default function CollectionGeneralPage () {
  const { data: loaderCollectionDetails } = useRouteLoaderData('collection-details')

  return (
    <Main
      center={
        <Suspense fallback={<Fallback />}>
          <Await resolve={loaderCollectionDetails}>
            {({
              name,
              images: {
                backdrops, posters
              },
              parts
            }) => {
              setDocTitle(name)

              return (
                <>
                  <GeneralMedia backdrops={backdrops} posters={posters} title={name} pageType='colección' />
                  <CollectionSummary parts={parts} />
                  <CollectionList parts={parts} />
                </>
              )
            }}
          </Await>
        </Suspense>

    }
    />
  )
}

function Fallback () {
  return (
    <div className='space-y-8'>
      <div className='skeleton rounded w-full h-40' />
      <div className='flex justify-around items-center flex-wrap'>
        {Array(3).fill().map((_, i) =>
          <div key={i} className='skeleton aspect-square rounded w-28' />)}
      </div>
      <div className='flex rounded overflow-hidden skeleton__bg'>
        <div className='aspect-[2/3] w-full max-w-24 skeleton' />
        <div className='flex flex-col justify-around p-4 w-full'>
          <div className='skeleton__title w-1/3' />
          <div className='skeleton__text w-1/4' />
          <div className='skeleton__paragraph w-full' />
        </div>
      </div>
    </div>
  )
}
