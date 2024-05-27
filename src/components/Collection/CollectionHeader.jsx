import { Await, useRouteLoaderData } from 'react-router-dom'
import { retrieveMovieGenres } from '../../utils/utility'

import Header from '../PageUI/Header'
import { Suspense } from 'react'
import CollectionHeaderSkeleton from '../Skeletons/CollectionHeaderSkeleton'

export default function CollectionHeader () {
  const { data: loaderCollectionDetails } = useRouteLoaderData('collection-details')
  const loaderConfig = retrieveMovieGenres(useRouteLoaderData('root'))

  return (
    <Suspense fallback={<CollectionHeaderSkeleton />}>
      <Await resolve={Promise.all([loaderCollectionDetails, loaderConfig])}>
        {(data) => {
          const [{
            name,
            overview,
            poster_path: posterPath,
            backdrop_path: backdropPath,
            parts
          }, { genres: movieGenres }] = data

          const prettyGenres = [...new Set(parts.reduce((acc, curr) => [...acc, ...curr.genre_ids], []))]
            .map(id => movieGenres.find(genre => genre.id === id))
            .sort((a, b) => a.name.localeCompare(b.name))

          return (
            <Header
              backdropPath={backdropPath}
              posterPath={posterPath}
              title={name}
              genres={prettyGenres}
              overview={overview}
            />
          )
        }}
      </Await>
    </Suspense>

  )
}
