/* eslint-disable no-unused-vars */
import { Outlet, useLoaderData } from 'react-router-dom'
import { getMovieDetails } from '../utils/http'
import MovieHeader from '../components/MovieDetails/MovieHeader'

export default function MovieDetailsLayout () {
  const data = useLoaderData()

  const {
    adult,
    belongs_to_collection: belongsToCollection,
    id,
    imdb_id: imdbID,
    lists,
    popularity,
    production_companies: productionCompanies,
    production_countries: productionCountries,
    reviews,
    spoken_languages: spokenLanguages,
    video,
    'watch/providers': watchProviders
  } = data

  return (
    <section>
      <MovieHeader />
      <Outlet />
    </section>
  )
}

export function loader ({ request, params }) {
  const { id } = params

  return getMovieDetails(id)
}
