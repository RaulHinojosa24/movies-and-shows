// const API_URL = 'http://localhost:3000'
const API_URL = 'https://movies-and-shows-backend.vercel.app'

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

      if (!response.ok) {
        const error = new Error('Network response was not ok')
        error.status = response.status
        error.statusText = response.statusText
        throw error
      }

      const data = await response.json()

      return data !== undefined ? data : null
    } catch (error) {
      if (!error.status) {
        error.status = 500 // Default to 500 if no status is provided
      }
      throw error
    }
  })
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
export function getNowPlayingMovies ({ language, region }) {
  return sendRequest('/get-now-playing-movies', {
    language,
    region
  })
}
export function getTrendingAll ({ timeWindow = 'day', page = 1, language }) {
  return sendRequest('/get-trending-all', {
    time_window: timeWindow,
    page,
    language
  })
}
export function getPopularMovies ({ language, region }) {
  return sendRequest('/get-popular-movies', {
    language,
    region
  })
}
export function getPopularTvs ({ language }) {
  return sendRequest('/get-popular-tvs', {
    language
  })
}
export function getPopularPeople ({ language }) {
  return sendRequest('/get-popular-people', {
    language
  })
}

// DISCOVER
export function discoverMovies ({
  language,
  region,
  allowAdultContent,
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
    watch_region: region,
    page,
    include_adult: allowAdultContent,
    sort_by: sortBy,
    sort_direction: sortDirection,
    watch_types: watchTypes,
    vote_count: voteCount,
    vote_min: voteMin,
    vote_max: voteMax,
    duration_min: durationMin,
    duration_max: durationMax,
    from_date: fromDate,
    to_date: toDate,
    genres,
    keywords,
    watch_providers: watchProviders
  })
}
export function discoverTvs ({
  language,
  region,
  allowAdultContent,
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
    watch_region: region,
    include_adult: allowAdultContent,
    page,
    sort_by: sortBy,
    sort_direction: sortDirection,
    watch_types: watchTypes,
    vote_count: voteCount,
    vote_min: voteMin,
    vote_max: voteMax,
    duration_min: durationMin,
    duration_max: durationMax,
    from_date: fromDate,
    to_date: toDate,
    genres,
    keywords,
    watch_providers: watchProviders
  })
}
export function getMovieProviders ({ language, region }) {
  return sendRequest('/get-movie-providers', {
    language,
    watch_region: region
  })
}
export function getTvProviders ({ language, region }) {
  return sendRequest('/get-tv-providers', {
    language,
    watch_region: region
  })
}
export function getKeywordsByQuery ({ query, page = 1 }) {
  const url = new URL(`${API_URL}/search-keywords`)
  url.searchParams.append('query', query)
  url.searchParams.append('page', page)

  return fetch(url.href)
}

// DETAILS
export function getMovieDetails ({ id, language }) {
  return sendRequest('/get-movie-details', {
    id,
    language
  })
}
export function getTvDetails ({ id, language }) {
  return sendRequest('/get-tv-details', {
    id,
    language
  })
}
export function getTvSeasonDetails ({ tv, season, language }) {
  return sendRequest('/get-tv-season-details', {
    tv,
    season,
    language
  })
}
export function getPersonDetails ({ id, language }) {
  return sendRequest('/get-person-details', {
    id,
    language
  })
}
export function getCollectionDetails ({ id, language }) {
  return sendRequest('/get-collection-details', {
    id,
    language
  })
}
export function getListDetails ({ id, page = 1, language }) {
  return sendRequest('/get-list-details', {
    id,
    page,
    language
  })
}

// SEARCH
export function getMoviesByQuery ({ query, page = 1, language, allowAdultContent }) {
  return sendRequest('/search-movies', {
    query,
    page,
    language,
    include_adult: allowAdultContent
  })
}
export function getTvByQuery ({ query, page = 1, language, allowAdultContent }) {
  return sendRequest('/search-tvs', {
    query,
    page,
    language,
    include_adult: allowAdultContent
  })
}
export function getPeopleByQuery ({ query, page = 1, language, allowAdultContent }) {
  return sendRequest('/search-people', {
    query,
    page,
    language,
    include_adult: allowAdultContent
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
