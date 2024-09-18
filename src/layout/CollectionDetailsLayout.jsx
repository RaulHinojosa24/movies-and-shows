import { Outlet, defer } from 'react-router-dom'
import { getCollectionDetails } from '../utils/http'

export default function CollectionDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}
export async function loader ({ request, params, language }) {
  const { id } = params

  return defer({ data: getCollectionDetails({ id, language }) })
}
