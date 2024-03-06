import { Outlet, useMatch } from 'react-router-dom'
import { getTvDetails } from '../utils/http'
import TvHeader from '../components/TvGeneral/TvHeader'

const keys = [
  'adult',
  'aggregate_credits',
  'external_ids',
  'homepage',
  'id',
  'images',
  'in_production',
  'keywords',
  'languages',
  'last_air_date',
  'last_episode_to_air',
  'lists',
  'networks',
  'next_episode_to_air',
  'number_of_episodes',
  'number_of_seasons',
  'origin_country',
  'original_language',
  'overview',
  'popularity',
  'production_companies',
  'production_countries',
  'recommendations',
  'reviews',
  'seasons',
  'spoken_languages',
  'status',
  'type',
  'videos'
]

export default function TvDetailsLayout () {
  const isRootPage = useMatch('/tv/:id')

  return (
    <section>
      {isRootPage && <TvHeader />}
      {/* {!isRootPage && <MovieHeaderCompact />} */}
      <Outlet />
    </section>
  )
}

export function loader ({ request, params }) {
  const { id } = params

  return getTvDetails(id)
}
