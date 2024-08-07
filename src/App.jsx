import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout, { loader as rootLoader } from './layout/RootLayout'
// import LoginPage, { loader as loginLoader, action as loginAction } from './pages/Login'
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
import PersonMediaPage from './pages/PersonMedia'
import TvDetailsLayout, { loader as tvDetailsLoader } from './layout/TvDetailsLayout'
import TvGeneral from './pages/TvGeneral'
import TvCastPage from './pages/TvCast'
import ListPage, { loader as listLoader } from './pages/List'
import SearchLayout, { loader as searchLoader } from './layout/SearchLayout'
import MovieResults, { loader as movieResultsLoader } from './components/Search/MovieResults'
import TvResults, { loader as tvResultsLoader } from './components/Search/TvResults'
import PersonResults, { loader as personResultsLoader } from './components/Search/PersonResults'
import TvSeasonsPage from './pages/TvSeasons'
import TvSeasonGeneralPage from './pages/TvSeasonGeneral'
import TvSeasonDetailsLayout, { loader as tvSeasonGeneralLoader } from './layout/TvSeasonDetailsLayout'
import TvSeasonMediaPage from './pages/TvSeasonMedia'
import TvMediaPage from './pages/TvMedia'
import MovieDiscoverPage, { loader as movieDiscoverLoader } from './pages/MovieDiscover'
import TvDiscoverPage, { loader as tvDiscoverLoader } from './pages/TvDiscover'
import AboutPage from './pages/About'
import RootContextProvider from './context/root-context'

export default function App () {
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (prefersDark) {
      document.documentElement.className = 'dark'
    }
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
          path: 'about',
          element: <AboutPage />
        },
        // {
        //   path: 'login',
        //   element: <LoginPage />,
        //   action: loginAction,
        //   loader: loginLoader
        // },
        {
          path: 'movie',
          element: <MovieDiscoverPage />,
          loader: movieDiscoverLoader
        },
        {
          path: 'tv',
          element: <TvDiscoverPage />,
          loader: tvDiscoverLoader
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
            },
            {
              path: 'media',
              element: <PersonMediaPage />
            }
          ]
        },
        {
          path: 'tv/:id',
          id: 'tv-details',
          element: <TvDetailsLayout />,
          loader: tvDetailsLoader,
          children: [
            {
              index: true,
              element: <TvGeneral />
            },
            {
              path: 'cast',
              element: <TvCastPage />
            },
            {
              path: 'media',
              element: <TvMediaPage />
            },
            {
              path: 'season',
              element: <TvSeasonsPage />
            },
            {
              path: 'season/:season',
              id: 'season-details',
              element: <TvSeasonDetailsLayout />,
              loader: tvSeasonGeneralLoader,
              children: [
                {
                  index: true,
                  element: <TvSeasonGeneralPage />
                },
                {
                  path: 'media',
                  element: <TvSeasonMediaPage />
                }
              ]
            }
          ]
        },
        {
          path: 'list/:id',
          element: <ListPage />,
          loader: listLoader
        },
        {
          path: 'search',
          id: 'search',
          element: <SearchLayout />,
          loader: searchLoader,
          children: [
            {
              path: 'movie',
              element: <MovieResults />,
              loader: movieResultsLoader
            },
            {
              path: 'tv',
              element: <TvResults />,
              loader: tvResultsLoader
            },
            {
              path: 'person',
              element: <PersonResults />,
              loader: personResultsLoader
            },
            {
              path: '*',
              element: <>Hah</>
            }
          ]
        }
      ]
    }
  ])

  return (
    <RootContextProvider>
      <RouterProvider router={router}>Movies & Shows</RouterProvider>
    </RootContextProvider>
  )
}
