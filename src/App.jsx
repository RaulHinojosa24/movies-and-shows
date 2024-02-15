import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout, { loader as rootLoader } from './components/RootLayout'
import LoginPage, { loader as loginLoader, action as loginAction } from './pages/Login'
import HomePage, { loader as homeLoader } from './pages/Home'
import MovieDetailsPage, { loader as movieDetailsLoader } from './pages/MovieDetails'

export default function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      element: <RootLayout />,
      loader: rootLoader,
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
        },
        {
          path: 'movies/:id',
          id: 'movie-details',
          element: <MovieDetailsPage />,
          loader: movieDetailsLoader
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
