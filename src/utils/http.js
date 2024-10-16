import { defer } from 'react-router-dom'

const API_URL = 'http://localhost:3000'
// const API_URL = 'https://movies-and-shows-backend.vercel.app'

const POST_OPTIONS = {
  method: 'POST'
}

async function sendRequest (path, params = {}, delay = 0) {
  const url = new URL(`${API_URL}${path}`)

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key]
      if (element !== null) {
        url.searchParams.append(key, element)
      }
    }
  }

  return new Promise(resolve => setTimeout(resolve, delay)).then(async () => {
    try {
      const response = await fetch(url.href)
      const data = await response.json()

      if (!response.ok) {
        const error = new Error(data?.error || 'Something went wrong.')
        error.status = response?.status
        error.statusText = response?.statusText
        throw error
      }

      return data !== undefined ? data : null
    } catch (error) {
      if (!error.status) {
        error.status = 500 // Default to 500 if no status is provided
      }
      throw error
    }
  })
}

export function fetchWithDefer (dataFetchingFunctions) {
  try {
    const data = {}

    Object.keys(dataFetchingFunctions).forEach(key => {
      data[key] = dataFetchingFunctions[key]()
    })

    return defer(data)
  } catch (error) {
    throw new Response(
      error.message || 'Error al cargar los datos.',
      {
        status: error.status || 500,
        statusText: error.statusText || 'Internal Server Error'
      }
    )
  }
}

// GENERAL
export function getAPIConfiguration () {
  return sendRequest('/get-api-configuration')
}
export function getMovieGenres ({ language }) {
  return sendRequest('/get-movie-genres', {
    language
  })
}
export function getTvGenres ({ language }) {
  return sendRequest('/get-tv-genres', {
    language
  })
}

// HOME
export function getNowPlayingMovies ({ language, region, includeAdult }) {
  return sendRequest('/get-now-playing-movies', {
    language,
    region,
    includeAdult
  })
}
export function getTrendingAll ({ timeWindow = 'day', page = 1, language, includeAdult }) {
  return sendRequest('/get-trending-all', {
    time_window: timeWindow,
    page,
    language,
    includeAdult
  })
}
export function getPopularMovies ({ language, region, page = 1, includeAdult }) {
  return sendRequest('/get-popular-movies', {
    language,
    page,
    region,
    includeAdult
  })
}
export function getPopularTvs ({ language, page = 1, includeAdult }) {
  return sendRequest('/get-popular-tvs', {
    language,
    page,
    includeAdult
  })
}
export function getPopularPeople ({ language, page = 1, includeAdult }) {
  return sendRequest('/get-popular-people', {
    language,
    page,
    includeAdult
  })
}

// DISCOVER
export function discoverMovies ({
  language,
  region,
  includeAdult,
  page = 1,
  sortBy,
  sortDirection,
  watchTypes,
  voteCount,
  voteMin,
  voteMax,
  durationMin,
  durationMax,
  fromDate,
  toDate,
  genres,
  keywords,
  watchProviders
}) {
  return sendRequest('/discover-movies', {
    language,
    region,
    page,
    includeAdult,
    sortBy,
    sortDirection,
    watchTypes,
    voteCount,
    voteMin,
    voteMax,
    durationMin,
    durationMax,
    fromDate,
    toDate,
    genres,
    keywords,
    watchProviders
  })
}
export function discoverTvs ({
  language,
  region,
  includeAdult,
  page = 1,
  sortBy,
  sortDirection,
  watchTypes,
  voteCount,
  voteMin,
  voteMax,
  durationMin,
  durationMax,
  fromDate,
  toDate,
  genres,
  keywords,
  watchProviders
}) {
  return sendRequest('/discover-tvs', {
    language,
    region,
    includeAdult,
    page,
    sortBy,
    sortDirection,
    watchTypes,
    voteCount,
    voteMin,
    voteMax,
    durationMin,
    durationMax,
    fromDate,
    toDate,
    genres,
    keywords,
    watchProviders
  })
}
export function getMovieProviders ({ language, region }) {
  return sendRequest('/get-movie-providers', {
    language,
    region
  })
}
export function getTvProviders ({ language, region }) {
  return sendRequest('/get-tv-providers', {
    language,
    region
  })
}
export function getKeywordsByQuery ({ query, page = 1 }) {
  const url = new URL(`${API_URL}/search-keywords`)
  url.searchParams.append('query', query)
  url.searchParams.append('page', page)

  return fetch(url.href)
}

// DETAILS
export function getMovieDetails ({ id, language, includeAdult }) {
  return sendRequest('/get-movie-details', {
    id,
    language,
    includeAdult
  })
}
export function getTvDetails ({ id, language, includeAdult }) {
  return sendRequest('/get-tv-details', {
    id,
    language,
    includeAdult
  })
}
export function getTvSeasonDetails ({ tv, season, language }) {
  return sendRequest('/get-tv-season-details', {
    tv,
    season,
    language
  })
}
export function getPersonDetails ({ id, language, includeAdult }) {
  return sendRequest('/get-person-details', {
    id,
    language,
    includeAdult
  })
}
export function getCollectionDetails ({ id, language, includeAdult }) {
  return sendRequest('/get-collection-details', {
    id,
    language,
    includeAdult
  })
}
export function getListDetails ({ id, page = 1, language, includeAdult }) {
  return sendRequest('/get-list-details', {
    id,
    page,
    language,
    includeAdult
  })
}

// SEARCH
export function getMoviesByQuery ({ query, page = 1, language, includeAdult }) {
  return sendRequest('/search-movies', {
    query,
    page,
    language,
    includeAdult
  })
}
export function getTvByQuery ({ query, page = 1, language, includeAdult }) {
  return sendRequest('/search-tvs', {
    query,
    page,
    language,
    includeAdult
  })
}
export function getPeopleByQuery ({ query, page = 1, language, includeAdult }) {
  return sendRequest('/search-people', {
    query,
    page,
    language,
    includeAdult
  })
}

// LOGIN *not implemented yet*
export function getRequestToken () {
  return sendRequest(API_URL + '/3/authentication/token/new')
}
export function createSessionID (requestToken) {
  const options = {
    ...POST_OPTIONS,
    body: JSON.stringify({
      request_token: requestToken
    })
  }

  return fetch(API_URL + '/3/authentication/session/new', options)
}
