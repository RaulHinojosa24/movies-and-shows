import { Outlet, ScrollRestoration } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { getAPIConfiguration, getMovieGenres } from '../utils/http'
import GoToTopButton from '../components/UI/GoToTopButton'

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
  const [config, movieGenres] = await Promise.all([
    getAPIConfiguration().then(res => res.json()),
    getMovieGenres().then(res => res.json())
  ])
  return { config, movieGenres }
}
