import { Outlet } from 'react-router-dom'
import { getPersonDetails } from '../utils/http'

export default function PersonDetailsLayout () {
  return (
    <>
      <Outlet />
    </>
  )
}

export async function loader ({ params }) {
  const { id } = params
  return await getPersonDetails(id)
}
