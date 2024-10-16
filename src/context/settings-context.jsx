import { createContext, useEffect, useState } from 'react'

const DEFAULT_LANGUAGE = {
  iso_639_1: 'en',
  english_name: 'English',
  name: 'English'
}
const DEFAULT_COUNTRY = {
  iso_3166_1: 'US',
  english_name: 'United States of America',
  native_name: 'United States'
}
const DEFAULT_INCLUDE_ADULT = false

const INITIAL_VALUES = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  country: DEFAULT_COUNTRY,
  setCountry: () => {},
  includeAdult: DEFAULT_INCLUDE_ADULT,
  setIncludeAdult: () => {},
  isSettingsContextLoaded: false
}

export const settingsContext = createContext(INITIAL_VALUES)

export default function SettingsContextProvider ({ children }) {
  const [isSettingsContextLoaded, setIsSettingsContextLoaded] = useState(false)
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  const [country, setCountry] = useState(DEFAULT_COUNTRY)
  const [includeAdult, setIncludeAdult] = useState(DEFAULT_INCLUDE_ADULT)

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    const storedCountry = localStorage.getItem('country')
    const storedIncludeAdult = localStorage.getItem('include-adult')

    if (storedLanguage) {
      setLanguage(JSON.parse(storedLanguage))
    }
    if (storedCountry) {
      setCountry(JSON.parse(storedCountry))
    }
    if (storedIncludeAdult) {
      setIncludeAdult(storedIncludeAdult === 'true')
    }

    setIsSettingsContextLoaded(true)
  }, [])

  function changeLanguage (newLanguage) {
    setLanguage(newLanguage)
    localStorage.setItem('language', JSON.stringify(newLanguage))
  }
  function changeCountry (newCountry) {
    setCountry(newCountry)
    localStorage.setItem('country', JSON.stringify(newCountry))
  }
  function changeIncludeAdult (newIncludeAdult) {
    setIncludeAdult(newIncludeAdult)
    localStorage.setItem('include-adult', newIncludeAdult)
  }

  return (
    <settingsContext.Provider value={{
      language,
      setLanguage: changeLanguage,
      country,
      setCountry: changeCountry,
      includeAdult,
      setIncludeAdult: changeIncludeAdult,
      isSettingsContextLoaded
    }}
    >
      {children}
    </settingsContext.Provider>
  )
}
