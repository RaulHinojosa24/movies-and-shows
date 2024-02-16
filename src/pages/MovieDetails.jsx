/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom'
import { getMovieDetails } from '../utils/http'
import MovieHeader from '../components/MovieHeader'
import MovieMain from '../components/MovieMain'

export default function MovieDetailsPage () {
  const data = useLoaderData()
  const {
    adult,
    belongs_to_collection: belongsToCollection,
    external_ids: externalIDs,
    homepage,
    id,
    images,
    imdb_id: imdbID,
    lists,
    overview,
    popularity,
    production_companies: productionCompanies,
    production_countries: productionCountries,
    recommendations,
    reviews,
    spoken_languages: spokenLanguages,
    video,
    videos,
    'watch/providers': watchProviders
  } = data
  console.log(data)

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
