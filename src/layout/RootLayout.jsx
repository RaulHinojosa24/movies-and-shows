import { Outlet, ScrollRestoration } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { getAPIConfiguration, getMovieGenres, getTvGenres } from '../utils/http'
import GoToTopButton from '../components/PageUI/GoToTopButton'

export default function RootLayout () {
  return (
    <>
      <GoToTopButton />
      <ScrollRestoration />
      <MainNavigation />
      {/* <main> */}
      <Outlet />
      {/* </main> */}
    </>
  )
}

export async function loader () {
  const [config, movieGenres, tvGenres] = await Promise.all([
    getAPIConfiguration().then(res => res.json()),
    getMovieGenres().then(res => res.json()),
    getTvGenres().then(res => res.json())
  ])
  return { config, movieGenres, tvGenres }
}
