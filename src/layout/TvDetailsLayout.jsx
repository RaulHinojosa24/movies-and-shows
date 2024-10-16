import { Outlet } from 'react-router-dom'
import { fetchWithDefer, getTvDetails } from '../utils/http'

export default function TvDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params, language, includeAdult }) {
  const { id } = params

  return fetchWithDefer({ data: () => getTvDetails({ id, language, includeAdult }) })
}
