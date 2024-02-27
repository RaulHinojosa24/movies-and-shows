import { Outlet } from 'react-router-dom'
import { getCollectionDetails } from '../utils/http'
import CollectionHeader from '../components/Collection/CollectionHeader'

export default function CollectionDetailsLayout () {
  return (
    <section>
      <CollectionHeader />
      <Outlet />
    </section>
  )
}
export function loader ({ request, params }) {
  const id = params.id
  if (!id) return null

  return getCollectionDetails(id)
}
