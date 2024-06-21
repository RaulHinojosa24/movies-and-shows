import { Await, NavLink, Outlet, defer, useLoaderData, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { getMoviesByQuery, getPersonsByQuery, getTvByQuery } from '../utils/http'
import { Suspense, useEffect } from 'react'
import SearchBar from '../components/Search/SearchBar'
import { setDocTitle } from '../utils/utility'

const activeClasses = ({ isActive }) => 'no-underline flex justify-between w-full px-3 py-2 dark:hover:bg-neutral-800 hover:bg-neutral-200 ' + (isActive ? 'font-bold dark:bg-neutral-800 bg-neutral-200' : '')

const VALID_PATHNAMES = ['/search/movie', '/search/tv', '/search/person']

export default function SearchPage () {
  const loaderData = useLoaderData()
  const params = useLocation()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')
  const navigate = useNavigate()

  setDocTitle(`${query ? `"${query}" - ` : ''}Búsqueda`)

  useEffect(() => {
    if (!VALID_PATHNAMES.some(pathname => pathname === params.pathname)) {
      navigate('/search/movie' + params.search, { replace: true })
    }
  }, [navigate, params.pathname, params.search])

  return (
    <>
      <SearchBar className='w-full px-app-space' />
      <hr className='m-0' />
      <Main
        left={
          <div className='custom-shadow-small rounded sticky top-20'>
            <h1 className='px-3 py-4 font-bold text-lg'>Resultados de la búsqueda</h1>
            <ul className='py-2'>
              <li>
                <NavLink to={'/search/movie' + (query ? `?query=${query}` : '')} className={activeClasses}>
                  Películas
                  <Badge>
                    <Suspense fallback='...'>
                      <Await resolve={loaderData?.movies}>
                        {(loadedMovies) => {
                          return loadedMovies?.total_results || 0
                        }}
                      </Await>
                    </Suspense>
                  </Badge>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/search/tv' + (query ? `?query=${query}` : '')} className={activeClasses}>
                  Series de TV
                  <Badge>
                    <Suspense fallback='...'>
                      <Await resolve={loaderData?.tvs}>
                        {(loadedTvs) => {
                          return loadedTvs?.total_results || 0
                        }}
                      </Await>
                    </Suspense>
                  </Badge>
                </NavLink>
              </li>
              <li>
                <NavLink to={'/search/person' + (query ? `?query=${query}` : '')} className={activeClasses}>
                  Gente
                  <Badge>
                    <Suspense fallback='...'>
                      <Await resolve={loaderData?.persons}>
                        {(loadedPersons) => {
                          return loadedPersons?.total_results || 0
                        }}
                      </Await>
                    </Suspense>
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        }
        center={
          <Outlet />
        }
      />
    </>
  )
}

function Badge ({ children }) {
  return <span className='dark:bg-neutral-700 bg-neutral-300 px-2 rounded text-sm font-normal'>{children}</span>
}

export async function loader ({ request, params }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''

  if (!query.trim()) return null

  return defer({
    movies: getMoviesByQuery(query),
    tvs: getTvByQuery(query),
    persons: getPersonsByQuery(query)
  })
}
