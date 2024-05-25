import { Await, useRouteLoaderData } from 'react-router-dom'
import CastList from '../components/Cast/CastList'
import CrewList from '../components/Cast/CrewList'

import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import { Suspense } from 'react'
import CastItemSkeleton from '../components/Skeletons/CastItemSkeleton'

export default function TvCastPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')

  return (
    <Main
      center={
        <Suspense fallback={<Fallback />}>
          <Await resolve={loaderTvDetails}>
            {({
              name,
              original_name: originalName,
              aggregate_credits: { cast, crew }
            }) => {
              setDocTitle(`${name || originalName} - Reparto y equipo`)

              return (
                <div className='grid md:grid-cols-2 gap-8'>
                  <CastList cast={cast} />
                  <CrewList crew={crew} />
                </div>
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
    <div className='grid md:grid-cols-2 gap-8'>
      <div className='space-y-3'>
        <div className='skeleton__title w-1/4' />
        {Array(5).fill().map((_, i) => <CastItemSkeleton key={i} />)}
      </div>
      <div className='space-y-3'>
        <div className='skeleton__title w-1/4' />
        {Array(5).fill().map((_, i) => <CastItemSkeleton key={i} />)}
      </div>
    </div>
  )
}
