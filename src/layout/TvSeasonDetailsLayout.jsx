import { Outlet, defer } from 'react-router-dom'
import { getTvSeasonDetails } from '../utils/http'
import SeasonHeader from '../components/TvSeasons/SeasonHeader'
import SeasonsNav from '../components/TvSeasons/SeasonsNav'

export default function TvSeasonDetailsLayout () {
  return (
    <section>
      <SeasonHeader />
      <SeasonsNav />
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params }) {
  const { id, season } = params

  return defer({ data: getTvSeasonDetails(id, season) })
}
