import { Await, useRouteLoaderData } from 'react-router-dom'
import Header from '../PageUI/Header'
import { Suspense, useContext } from 'react'
import CollectionHeaderSkeleton from '../Skeletons/CollectionHeaderSkeleton'
import { rootContext } from '../../context/root-context'

export default function CollectionHeader () {
  const { movieGenres } = useContext(rootContext)
  const { data: loaderCollectionDetails } = useRouteLoaderData('collection-details')

  return (
    <Suspense fallback={<CollectionHeaderSkeleton />}>
      <Await resolve={loaderCollectionDetails}>
        {({
          name,
          overview,
          poster_path: posterPath,
          backdrop_path: backdropPath,
          parts
        }) => {
          const prettyGenres = movieGenres
            ? [...new Set(parts.reduce((acc, curr) => [...acc, ...curr.genre_ids], []))]
                .map(id => movieGenres?.genres.find(genre => genre.id === id))
                .sort((a, b) => a.name.localeCompare(b.name))
            : []

          return (
            <Header
              backdropPath={backdropPath}
              posterPath={posterPath}
              title={name}
              genres={prettyGenres}
              overview={overview}
              mediaType='movie'
            />
          )
        }}
      </Await>
    </Suspense>

  )
}
