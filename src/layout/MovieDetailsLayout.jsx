import { Outlet, defer, useMatch } from 'react-router-dom'
import { getMovieDetails } from '../utils/http'
import MovieHeader from '../components/MovieGeneral/MovieHeader'
import MovieHeaderCompact from '../components/MovieGeneral/MovieHeaderCompact'

export default function MovieDetailsLayout () {
  const isRootPage = useMatch('/movie/:id')

  return (
    <section>
      {isRootPage && <MovieHeader />}
      {!isRootPage && <MovieHeaderCompact />}
      <Outlet />
    </section>
  )
}

export async function loader ({ request, params }) {
  const { id } = params

  return defer({ data: getMovieDetails(id) })
}
