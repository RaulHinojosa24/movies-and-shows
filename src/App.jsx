import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './components/RootLayout'
import LoginPage, { loader as loginLoader, action as loginAction } from './pages/Login'
import HomePage, { loader as homeLoader } from './pages/Home'

export default function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: homeLoader
        },
        {
          path: 'login',
          element: <LoginPage />,
          action: loginAction,
          loader: loginLoader
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>Movies & Shows</RouterProvider>
    </>
  )
}
