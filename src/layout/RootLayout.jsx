import { Outlet, ScrollRestoration, defer } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { getAPIConfiguration, getMovieGenres, getTvGenres } from '../utils/http'
import GoToTopButton from '../components/PageUI/GoToTopButton'

export default function RootLayout () {
  return (
    <>
      <GoToTopButton />
      <ScrollRestoration />
      <MainNavigation />
      <Outlet />
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
