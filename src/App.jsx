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
import { useContext, useEffect } from 'react'
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
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/About'
import RootContextProvider from './context/root-context'
import SettingsContextProvider, { settingsContext } from './context/settings-context'

export default function App () {
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (prefersDark) {
      document.documentElement.className = 'dark'
    }
  }, [])

  return (
    <RootContextProvider>
      <SettingsContextProvider>
        <RouterSetup />
      </SettingsContextProvider>
    </RootContextProvider>
  )
}

function RouterSetup () {
  const { language, country, allowAdultContent, isSettingsContextLoaded } = useContext(settingsContext)
  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const region = country.iso_3166_1

  if (!isSettingsContextLoaded) {
    return
  }

  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: (args) => rootLoader({ ...args, language: appLanguage }),
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: (args) => homeLoader({ ...args, language: appLanguage, region })
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
          loader: (args) => movieDiscoverLoader({ ...args, language: appLanguage, region, allowAdultContent })
        },
        {
          path: 'tv',
          element: <TvDiscoverPage />,
          loader: (args) => tvDiscoverLoader({ ...args, language: appLanguage, region, allowAdultContent })
        },
        {
          path: 'movie/:id',
          id: 'movie-details',
          element: <MovieDetailsLayout />,
          loader: (args) => movieDetailsLoader({ ...args, language: appLanguage }),
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
          loader: (args) => collectionDetailsLoader({ ...args, language: appLanguage }),
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
          loader: (args) => personDetailsLoader({ ...args, language: appLanguage }),
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
          loader: (args) => tvDetailsLoader({ ...args, language: appLanguage }),
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
              loader: (args) => tvSeasonGeneralLoader({ ...args, language: appLanguage }),
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
          loader: (args) => listLoader({ ...args, language: appLanguage })
        },
        {
          path: 'search',
          id: 'search',
          element: <SearchLayout />,
          loader: (args) => searchLoader({ ...args, language: appLanguage, allowAdultContent }),
          children: [
            {
              path: 'movie',
              element: <MovieResults />,
              loader: (args) => movieResultsLoader({ ...args, language: appLanguage, allowAdultContent })
            },
            {
              path: 'tv',
              element: <TvResults />,
              loader: (args) => tvResultsLoader({ ...args, language: appLanguage, allowAdultContent })
            },
            {
              path: 'person',
              element: <PersonResults />,
              loader: (args) => personResultsLoader({ ...args, language: appLanguage, allowAdultContent })
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={router}>Movies & Shows</RouterProvider>
}
