import { Await, useRouteLoaderData } from 'react-router-dom'
import CastList from '../components/Cast/CastList'
import CrewList from '../components/Cast/CrewList'

import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import { Suspense } from 'react'
import MovieCastSkeleton from '../skeleton-pages/MovieCastSkeleton'
import MovieHeaderCompact from '../components/MovieGeneral/MovieHeaderCompact'
import ErrorPage from './ErrorPage'

export default function MovieCastPage () {
  const { data: loaderMovieDetails } = useRouteLoaderData('movie-details')
  setDocTitle('Loading...')

  return (
    <Suspense fallback={<MovieCastSkeleton />}>
      <Await
        resolve={loaderMovieDetails}
        errorElement={<ErrorPage />}
      >
        {({
          credits,
          title,
          oringinal_title: originalTitle,
          id,
          poster_path: posterPath
        }) => {
          const prettyTitle = title || originalTitle

          setDocTitle(`${prettyTitle} - Cast & Crew`)
          const { cast, crew } = credits

          return (
            <>
              <MovieHeaderCompact id={id} posterPath={posterPath} title={prettyTitle} />
              <Main
                center={
                  <div className='grid md:grid-cols-2 gap-8'>
                    <CastList cast={cast} needJoin />
                    <CrewList crew={crew} needJoin />
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
