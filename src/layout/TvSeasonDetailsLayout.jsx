import { Outlet, useMatch } from 'react-router-dom'
import { getTvSeasonDetails } from '../utils/http'
import SeasonHeaderCompact from '../components/TvSeasons/SeasonHeaderCompact'

export default function TvSeasonDetailsLayout () {
  const isRootPage = useMatch('/tv/:id/season/:season')

  return (
    <section>
      {isRootPage && <SeasonHeaderCompact />}
      {!isRootPage && <SeasonHeaderCompact />}
      <Outlet />
    </section>
  )
}

export function loader ({ request, params }) {
  const { id, season } = params

  return getTvSeasonDetails(id, season)
}
