import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'

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
