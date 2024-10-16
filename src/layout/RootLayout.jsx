import { Outlet, ScrollRestoration, matchPath, useLoaderData } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { fetchWithDefer, getAPIConfiguration, getMovieGenres, getTvGenres } from '../utils/http'
import GoToTopButton from '../components/PageUI/GoToTopButton'
import Footer from './Footer'
import { useContext, useEffect } from 'react'
import { rootContext } from '../context/root-context'

export default function RootLayout () {
  const { config, tvGenres, movieGenres } = useLoaderData()
  const { setConfig, setMovieGenres, setTvGenres } = useContext(rootContext)

  useEffect(() => {
    config.then(setConfig)
    movieGenres.then(setMovieGenres)
    tvGenres.then(setTvGenres)
  }, [config, movieGenres, setConfig, setMovieGenres, setTvGenres, tvGenres])

  return (
    <>
      <GoToTopButton />
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ['/movie/:id', '/movie/:id/media', '/tv/:id', '/tv/:id/media', '/tv/:id/season/:season/media']

          return paths.some((path) => matchPath(path, location.pathname))
            ? location.pathname
            : location.key
        }}
      />
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  )
}

export async function loader ({ language }) {
  return fetchWithDefer({
    config: () => getAPIConfiguration(),
    movieGenres: () => getMovieGenres({ language }),
    tvGenres: () => getTvGenres({ language })
  })
}
