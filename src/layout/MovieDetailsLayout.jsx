import { Outlet, defer } from 'react-router-dom'
import { getMovieDetails } from '../utils/http'

export default function MovieDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params }) {
  const { id } = params

  return defer({ data: getMovieDetails(id) })
}
