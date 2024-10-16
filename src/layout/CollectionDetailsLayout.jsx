import { Outlet } from 'react-router-dom'
import { fetchWithDefer, getCollectionDetails } from '../utils/http'

export default function CollectionDetailsLayout () {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params, language, includeAdult }) {
  const { id } = params

  return fetchWithDefer({
    data: () => getCollectionDetails({ id, language, includeAdult })
  })
}
