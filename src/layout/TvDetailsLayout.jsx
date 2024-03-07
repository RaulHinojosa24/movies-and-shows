import { Outlet, useMatch } from 'react-router-dom'
import { getTvDetails } from '../utils/http'
import TvHeader from '../components/TvGeneral/TvHeader'
import TvHeaderCompact from '../components/TvGeneral/TvHeaderCompact'

export default function TvDetailsLayout () {
  const isRootPage = useMatch('/tv/:id')

  return (
    <section>
      {isRootPage && <TvHeader />}
      {!isRootPage && <TvHeaderCompact />}
      <Outlet />
    </section>
  )
}

export function loader ({ request, params }) {
  const { id } = params

  return getTvDetails(id)
}
