import { Await, useRouteLoaderData } from 'react-router-dom'
import CastList from '../components/Cast/CastList'
import CrewList from '../components/Cast/CrewList'

import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import { Suspense } from 'react'
import TvHeaderCompact from '../components/TvGeneral/TvHeaderCompact'
import TvCastSkeleton from '../skeleton-pages/TvCastSkeleton'

export default function TvCastPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  setDocTitle('Cargando...')

  return (
    <Suspense fallback={<TvCastSkeleton />}>
      <Await resolve={loaderTvDetails}>
        {({
          name,
          original_name: originalName,
          aggregate_credits: { cast, crew },
          id,
          poster_path: posterPath
        }) => {
          const prettyName = name || originalName
          setDocTitle(`${name || originalName} - Reparto y equipo`)

          return (
            <>
              <TvHeaderCompact id={id} posterPath={posterPath} name={prettyName} />
              <Main
                center={
                  <div className='grid md:grid-cols-2 gap-8'>
                    <CastList cast={cast} />
                    <CrewList crew={crew} />
                  </div>
                }
              />
            </>
          )
        }}
      </Await>
    </Suspense>

  )
}
