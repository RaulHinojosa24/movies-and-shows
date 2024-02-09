import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './components/RootLayout'
import LoginPage, { loader as loginLoader, action as loginAction } from './pages/Login'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
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

export default App
