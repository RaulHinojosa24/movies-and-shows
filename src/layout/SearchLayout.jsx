import { Await, NavLink, Outlet, useLoaderData, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { fetchWithDefer, getMoviesByQuery, getPeopleByQuery, getTvByQuery } from '../utils/http'
import { Suspense, useEffect } from 'react'
import SearchBar from '../components/Search/SearchBar'
import { setDocTitle } from '../utils/utility'

const activeClasses = ({ isActive }) => `no-underline flex justify-between w-full px-3 py-2 ${isActive ? 'font-bold bg-accent text-dark' : 'dark:hover:bg-dark-3 hover:bg-light-3'}`

const VALID_PATHNAMES = ['/search/movie', '/search/tv', '/search/person']

export default function SearchPage () {
  const loaderData = useLoaderData()
  const params = useLocation()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')
  const navigate = useNavigate()

  setDocTitle(`${query ? `"${query}" - ` : ''}Search`)

  useEffect(() => {
    if (!VALID_PATHNAMES.some(pathname => pathname === params.pathname)) {
      navigate('/search/movie' + params.search, { replace: true })
    }
  }, [navigate, params.pathname, params.search])

  return (
    <>
      <SearchBar className='w-full px-app-space' />
      <hr />
      <Main
        left={
          <div className='shadow shadow-colors rounded sticky top-20 overflow-hidden'>
            <h1 className='px-3 py-4 font-bold text-lg'>Search results</h1>
            <hr />
            <ul>
              <li>
                <NavLink to={'/search/movie' + (query ? `?query=${query}` : '')} className={activeClasses}>
                  Movies
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
                  TV Shows
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
                  People
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
  return <span className='px-2 rounded text-sm text-center shadow shadow-colors bg-light-1 dark:bg-dark-1 dark:text-light'>{children}</span>
}

export async function loader ({ request, params, language, includeAdult }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''

  if (!query.trim()) return null

  return fetchWithDefer({
    movies: () => getMoviesByQuery({ query, language, includeAdult }),
    tvs: () => getTvByQuery({ query, language, includeAdult }),
    persons: () => getPeopleByQuery({ query, language, includeAdult })
  })
}
