import { useRouteLoaderData } from 'react-router-dom'
import { retrieveMovieGenres } from '../../utils/utility'

import Header from '../PageUI/Header'

export default function CollectionHeader () {
  const {
    name,
    overview,
    poster_path: posterPath,
    backdrop_path: backdropPath,
    parts
  } = useRouteLoaderData('collection-details')

  const { genres: movieGenres } = retrieveMovieGenres(useRouteLoaderData('root'))

  const genres = [...new Set(parts.reduce((acc, curr) => [...acc, ...curr.genre_ids], []))]
    .map(id => movieGenres.find(genre => genre.id === id))
    .sort((a, b) => a.name.localeCompare(b.name))

  const prettyGenres = [...genres]
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
}
