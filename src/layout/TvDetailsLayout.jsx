import { Outlet, defer } from 'react-router-dom'
import { getTvDetails } from '../utils/http'

export default function TvDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params }) {
  const { id } = params

  return defer({ data: getTvDetails(id) })
}
