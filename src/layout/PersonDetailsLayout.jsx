import { Outlet, defer } from 'react-router-dom'
import { getPersonDetails } from '../utils/http'

export default function PersonDetailsLayout () {
  return (
    <Outlet />
  )
}

export async function loader ({ params, language }) {
  const { id } = params

  return defer({ data: getPersonDetails({ id, language }) })
}
