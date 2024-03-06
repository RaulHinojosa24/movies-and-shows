import { Outlet, useMatch } from 'react-router-dom'
import { getPersonDetails } from '../utils/http'
import PersonHeaderCompact from '../components/Person/PersonHeaderCompact'

export default function PersonDetailsLayout () {
  const isRootPage = useMatch('/person/:id')

  return (
    <>
      {!isRootPage && <PersonHeaderCompact />}
      <Outlet />
    </>
  )
}

export async function loader ({ params }) {
  const { id } = params
  return await getPersonDetails(id)
}
