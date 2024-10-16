import { Outlet } from 'react-router-dom'
import { getMovieDetails, fetchWithDefer } from '../utils/http'

export default function MovieDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params, language, includeAdult }) {
  const { id } = params

  return fetchWithDefer({
    data: () => getMovieDetails({ id, language, includeAdult })
  })
}
