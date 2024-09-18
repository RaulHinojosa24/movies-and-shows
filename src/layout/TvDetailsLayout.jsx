import { Outlet, defer } from 'react-router-dom'
import { getTvDetails } from '../utils/http'

export default function TvDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params, language }) {
  const { id } = params

  return defer({ data: getTvDetails({ id, language }) })
}
