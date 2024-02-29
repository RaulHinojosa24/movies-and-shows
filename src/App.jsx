import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout, { loader as rootLoader } from './layout/RootLayout'
import LoginPage, { loader as loginLoader, action as loginAction } from './pages/Login'
import HomePage, { loader as homeLoader } from './pages/Home'
import MovieDetailsLayout, { loader as movieDetailsLoader } from './layout/MovieDetailsLayout'
import CollectionDetailsLayout, { loader as collectionDetailsLoader } from './layout/CollectionDetailsLayout'
import PersonDetailsLayout, { loader as personDetailsLoader } from './layout/PersonDetailsLayout'
import MovieDetailsPage from './pages/MovieGeneral'
import MovieCastPage from './pages/MovieCast'
import MovieMediaPage from './pages/MovieMedia'
import CollectionGeneralPage from './pages/CollectionGeneral'
import { useEffect } from 'react'
import CollectionMediaPage from './pages/CollectionMedia'
import PersonGeneralPage from './pages/PersonGeneral'

export default function App () {
  useEffect(() => {
    window.addEventListener('popstate', e => {
      window.scrollTo(0, 0)
    })
  }, [])

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
          path: 'movie/:id',
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
          loader: collectionDetailsLoader,
          children: [
            {
              index: true,
              element: <CollectionGeneralPage />
            },
            {
              path: 'media',
              element: <CollectionMediaPage />
            }
          ]
        },
        {
          path: 'person/:id',
          id: 'person-details',
          element: <PersonDetailsLayout />,
          loader: personDetailsLoader,
          children: [
            {
              index: true,
              element: <PersonGeneralPage />
            }
          ]
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
