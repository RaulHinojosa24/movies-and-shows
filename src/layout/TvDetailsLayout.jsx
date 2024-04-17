import { Outlet, useMatch } from 'react-router-dom'
import { getTvDetails } from '../utils/http'
import TvHeader from '../components/TvGeneral/TvHeader'
import TvHeaderCompact from '../components/TvGeneral/TvHeaderCompact'
import SeasonHeaderCompact from '../components/TvSeasons/SeasonHeaderCompact'

export default function TvDetailsLayout () {
  const isRootPage = useMatch('/tv/:id')
  const isSeasonPage = useMatch('/tv/:id/season/:season')

  return (
    <section>
      {isRootPage && <TvHeader />}
      {!isRootPage && !isSeasonPage && <TvHeaderCompact />}
      {!isRootPage && isSeasonPage && <SeasonHeaderCompact />}
      <Outlet />
    </section>
  )
}

export function loader ({ request, params }) {
  const { id } = params

  return getTvDetails(id)
}
