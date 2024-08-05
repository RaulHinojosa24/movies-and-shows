import { createContext, useState } from 'react'

const INITIAL_VALUES = {
  config: {
    images: {
      base_url: '',
      secure_base_url: '',
      backdrop_sizes: [],
      logo_sizes: [],
      poster_sizes: [],
      profile_sizes: [],
      still_sizes: []
    },
    countries: [],
    jobs: [],
    languages: [],
    change_keys: []
  },
  setConfig: () => {},
  movieGenres: {},
  setMovieGenres: () => {},
  tvGenres: {},
  setTvGenres: () => {}
}

export const rootContext = createContext(INITIAL_VALUES)

export default function RootContextProvider ({ children }) {
  const [config, setConfig] = useState()
  const [movieGenres, setMovieGenres] = useState()
  const [tvGenres, setTvGenres] = useState()

  return (
    <rootContext.Provider value={{
      config,
      setConfig,
      movieGenres,
      setMovieGenres,
      tvGenres,
      setTvGenres
    }}
    >
      {children}
    </rootContext.Provider>
  )
}
