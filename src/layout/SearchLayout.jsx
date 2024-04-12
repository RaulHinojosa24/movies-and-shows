import { NavLink, Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { getMoviesByQuery, getPersonsByQuery, getTvByQuery } from '../utils/http'
import { useEffect } from 'react'

const activeClasses = ({ isActive }) => 'flex justify-between w-full px-3 py-2 dark:hover:bg-neutral-800 hover:bg-neutral-200 ' + (isActive ? 'font-bold dark:bg-neutral-800 bg-neutral-200' : '')

export default function SearchPage () {
  const data = useLoaderData()
  const params = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.pathname === '/search') {
      navigate('/search/movie' + params.search)
    }
  }, [navigate, params.pathname, params.search])

  return (
    <Main
      left={
        <div className='custom-shadow-small rounded'>
          <h1 className='px-3 py-4 font-bold text-lg'>Resultados de la búsqueda</h1>
          <ul className='py-2'>
            <li>
              <NavLink to={'/search/movie' + params.search} className={activeClasses}>
                Películas <Badge>{data.movies.total_results}</Badge>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/search/tv' + params.search} className={activeClasses}>
                Series de TV <Badge>{data.tvs.total_results}</Badge>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/search/person' + params.search} className={activeClasses}>
                Gente <Badge>{data.persons.total_results}</Badge>
              </NavLink>
            </li>
          </ul>
        </div>
    }
      center={
        <Outlet />
      }
    />
  )
}

function Badge ({ children }) {
  return <span className='dark:bg-neutral-700 bg-neutral-300 px-2 rounded text-sm font-normal'>{children}</span>
}

export async function loader ({ request, params }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  console.log(query)

  const [movies, tvs, persons] = await Promise.all([
    getMoviesByQuery(query).then(res => res.json()),
    getTvByQuery(query).then(res => res.json()),
    getPersonsByQuery(query).then(res => res.json())
  ])

  return { movies, tvs, persons }
}
