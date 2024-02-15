import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { getAPIConfiguration } from '../utils/http'

export default function RootLayout () {
  return (
    <>
      <MainNavigation />
      <main className='pt-12'>
        <Outlet />
      </main>
    </>
  )
}

export async function loader () {
  return await getAPIConfiguration()
}
