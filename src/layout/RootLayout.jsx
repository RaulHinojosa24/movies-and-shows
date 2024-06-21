import { Outlet, ScrollRestoration, defer, matchPath } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { getAPIConfiguration, getMovieGenres, getTvGenres } from '../utils/http'
import GoToTopButton from '../components/PageUI/GoToTopButton'
import Footer from './Footer'

export default function RootLayout () {
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

export async function loader () {
  return defer({
    config: getAPIConfiguration(),
    movieGenres: getMovieGenres(),
    tvGenres: getTvGenres()
  })
}
