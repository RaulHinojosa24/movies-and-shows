import { Outlet } from 'react-router-dom'
import { fetchWithDefer, getTvSeasonDetails } from '../utils/http'

export default function TvSeasonDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params, language }) {
  const { id, season } = params

  return fetchWithDefer({ data: () => getTvSeasonDetails({ tv: id, season, language }) })
}
