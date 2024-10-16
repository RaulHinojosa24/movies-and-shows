import { Outlet } from 'react-router-dom'
import { fetchWithDefer, getPersonDetails } from '../utils/http'

export default function PersonDetailsLayout () {
  return (
    <Outlet />
  )
}

export async function loader ({ params, language, includeAdult }) {
  const { id } = params

  return fetchWithDefer({ data: () => getPersonDetails({ id, language, includeAdult }) })
}
