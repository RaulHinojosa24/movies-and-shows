import { Outlet, useMatch } from 'react-router-dom'
import { getCollectionDetails } from '../utils/http'
import CollectionHeader from '../components/Collection/CollectionHeader'
import CollectionHeaderCompact from '../components/Collection/CollectionHeaderCompact'

export default function CollectionDetailsLayout () {
  const isRootPage = useMatch('/collection/:id')

  return (
    <section>
      {isRootPage && <CollectionHeader />}
      {!isRootPage && <CollectionHeaderCompact />}
      <Outlet />
    </section>
  )
}
export function loader ({ request, params }) {
  const id = params.id
  if (!id) return null

  return getCollectionDetails(id)
}
