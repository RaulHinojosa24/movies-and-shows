import { Outlet, defer, useMatch } from 'react-router-dom'
import { getTvSeasonDetails } from '../utils/http'
import SeasonHeader from '../components/TvSeasons/SeasonHeader'
import SeasonsNav from '../components/TvSeasons/SeasonsNav'
import SeasonHeaderMedia from '../components/TvSeasons/SeasonHeaderMedia'

export default function TvSeasonDetailsLayout () {
  const isRootPage = useMatch('/tv/:id/season/:season')

  return (
    <section>
      {isRootPage && <SeasonHeader />}
      {!isRootPage && <SeasonHeaderMedia />}
      <SeasonsNav />
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params }) {
  const { id, season } = params

  return defer(await getTvSeasonDetails(id, season))
}
