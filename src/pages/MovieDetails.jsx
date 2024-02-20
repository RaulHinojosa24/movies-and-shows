/* eslint-disable no-unused-vars */
import { useLoaderData, useLocation } from 'react-router-dom'
import { getMovieDetails } from '../utils/http'
import MovieHeader from '../components/MovieDetails/MovieHeader'
import MovieMain from '../components/MovieDetails/MovieMain'
import { useEffect } from 'react'

export default function MovieDetailsPage () {
  const data = useLoaderData()
  const {
    adult,
    belongs_to_collection: belongsToCollection,
    id,
    images,
    imdb_id: imdbID,
    lists,
    popularity,
    production_companies: productionCompanies,
    production_countries: productionCountries,
    reviews,
    spoken_languages: spokenLanguages,
    video,
    videos,
    'watch/providers': watchProviders
  } = data

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <section>
      <MovieHeader />
      <MovieMain />
    </section>
  )
}

export function loader ({ request, params }) {
  const { id } = params

  return getMovieDetails(id)
}
