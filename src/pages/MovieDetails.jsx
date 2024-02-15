/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom'
import { getMovieDetails } from '../utils/http'
import MovieHeader from '../components/MovieHeader'

export default function MovieDetailsPage () {
  const data = useLoaderData()
  const {
    adult,
    belongs_to_collection: belongsToCollection,
    budget,
    external_ids: externalIDs,
    homepage,
    id,
    images,
    imdb_id: imdbID,
    keywords,
    lists,
    original_language: originalLanguage,
    original_title: originalTitle,
    overview,
    popularity,
    production_companies: productionCompanies,
    production_countries: productionCountries,
    recommendations,
    revenue,
    reviews,
    spoken_languages: spokenLanguages,
    status,
    video,
    videos,
    'watch/providers': watchProviders
  } = data
  console.log(data)

  return (
    <section>
      <MovieHeader />
    </section>
  )
}

export function loader ({ request, params }) {
  const { id } = params

  return getMovieDetails(id)
}
