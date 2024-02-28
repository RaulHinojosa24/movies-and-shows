import { Outlet, ScrollRestoration } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { getAPIConfiguration, getMovieGenres } from '../utils/http'

export default function RootLayout () {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <main className='pt-12 w-full'>
        <Outlet />
      </main>
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
