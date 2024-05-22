import { Outlet, defer, useMatch } from 'react-router-dom'
import { getTvDetails } from '../utils/http'
import TvHeader from '../components/TvGeneral/TvHeader'
import TvHeaderCompact from '../components/TvGeneral/TvHeaderCompact'

export default function TvDetailsLayout () {
  const isRootPage = useMatch('/tv/:id')
  const isSeasonPage = useMatch('/tv/:id/season/:season/*')

  return (
    <section>
      {isRootPage && <TvHeader />}
      {!isRootPage && !isSeasonPage && <TvHeaderCompact />}
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params }) {
  const { id } = params

  return defer(await getTvDetails(id))
}
