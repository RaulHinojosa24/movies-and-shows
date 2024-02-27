import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout, { loader as rootLoader } from './layout/RootLayout'
import LoginPage, { loader as loginLoader, action as loginAction } from './pages/Login'
import HomePage, { loader as homeLoader } from './pages/Home'
import MovieDetailsLayout, { loader as movieDetailsLoader } from './layout/MovieDetailsLayout'
import MovieDetailsPage from './pages/MovieGeneral'
import MovieCastPage from './pages/MovieCast'
import MovieMediaPage from './pages/MovieMedia'
import CollectionDetailsLayout, { loader as collectionDetailsLoader } from './layout/CollectionDetailsLayout'

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
          element: <MovieDetailsLayout />,
          loader: movieDetailsLoader,
          children: [
            {
              index: true,
              element: <MovieDetailsPage />
            },
            {
              path: 'cast',
              element: <MovieCastPage />
            },
            {
              path: 'media',
              element: <MovieMediaPage />
            }
          ]
        },
        {
          path: 'collection/:id',
          id: 'collection-details',
          element: <CollectionDetailsLayout />,
          loader: collectionDetailsLoader
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
