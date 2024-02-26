/* eslint-disable no-unused-vars */
import { Outlet, useLoaderData } from 'react-router-dom'
import { getMovieDetails } from '../utils/http'
import MovieHeader from '../components/MovieGeneral/MovieHeader'

export default function MovieDetailsLayout () {
  const data = useLoaderData()

  const {
    adult,
    id,
    popularity,
    production_companies: productionCompanies,
    production_countries: productionCountries,
    spoken_languages: spokenLanguages,
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
