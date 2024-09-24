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
const DEFAULT_ALLOW_ADULT_CONTENT = false

const INITIAL_VALUES = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  country: DEFAULT_COUNTRY,
  setCountry: () => {},
  allowAdultContent: DEFAULT_ALLOW_ADULT_CONTENT,
  setAllowAdultContent: () => {},
  isSettingsContextLoaded: false
}

export const settingsContext = createContext(INITIAL_VALUES)

export default function SettingsContextProvider ({ children }) {
  const [isSettingsContextLoaded, setIsSettingsContextLoaded] = useState(false)
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  const [country, setCountry] = useState(DEFAULT_COUNTRY)
  const [allowAdultContent, setAllowAdultContent] = useState(DEFAULT_ALLOW_ADULT_CONTENT)

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    const storedCountry = localStorage.getItem('country')
    const storedAllowAdultContentLanguage = localStorage.getItem('allow-adult-content')

    if (storedLanguage) {
      setLanguage(JSON.parse(storedLanguage))
    }
    if (storedCountry) {
      setCountry(JSON.parse(storedCountry))
    }
    if (storedAllowAdultContentLanguage) {
      setAllowAdultContent(storedAllowAdultContentLanguage === 'true')
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
  function changeAllowAdultContentLanguage (newAllowAdultContent) {
    setAllowAdultContent(newAllowAdultContent)
    localStorage.setItem('allow-adult-content', newAllowAdultContent)
  }

  return (
    <settingsContext.Provider value={{
      language,
      setLanguage: changeLanguage,
      country,
      setCountry: changeCountry,
      allowAdultContent,
      setAllowAdultContent: changeAllowAdultContentLanguage,
      isSettingsContextLoaded
    }}
    >
      {children}
    </settingsContext.Provider>
  )
}
