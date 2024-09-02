const language = 'es-ES'
const region = 'ES'
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

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

export function getAPIConfiguration () {
  return sendRequest('/get-api-configuration')
}

export function getMovieGenres () {
  return sendRequest('/get-movie-genres')
}

export function getTvGenres () {
  return sendRequest('/get-tv-genres')
}

export function getMovieProviders () {
  return sendRequest('/get-movie-providers')
}

export function getTvProviders () {
  return sendRequest('/get-tv-providers')
}

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

export function getMovieDetails (id) {
  return sendRequest('/get-movie-details', {
    id
  })
}

export function getCollectionDetails (id) {
  return sendRequest('/get-collection-details', {
    id
  })
}

export function getPersonDetails (id) {
  return sendRequest('/get-person-details', {
    id
  })
}

export function getTvDetails (id) {
  return sendRequest('/get-tv-details', {
    id
  })
}

export async function getListDetails (id, page = 1) {
  return sendRequest('/get-list-details', {
    id,
    page
  })
}

export function getMoviesByQuery (query, page = 1) {
  return sendRequest('/search-movies', {
    query,
    page
  })
}

export function getTvByQuery (query, page = 1) {
  return sendRequest('/search-tvs', {
    query,
    page
  })
}

export function getPeopleByQuery (query, page = 1) {
  return sendRequest('/search-people', {
    query,
    page
  })
}

export function getTvSeasonDetails (tv, season) {
  return sendRequest('/get-tv-season-details', {
    tv,
    season
  })
}

export function getKeywordsByQuery (query, page = 1) {
  const url = new URL(`${API_URL}/search-keywords`)
  url.searchParams.append('query', query)
  url.searchParams.append('page', page)

  return fetch(url.href)
}

export function discoverMovies ({
  page = 1,
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
}) {
  return sendRequest('/discover-movies', {
    page,
    include_adult: includeAdult,
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
  page = 1,
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
}) {
  return sendRequest('/discover-tvs', {
    page,
    include_adult: includeAdult,
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

export function getNowPlayingMovies () {
  return sendRequest('/get-now-playing-movies')
}

export function getTrendingAll (timeWindow = 'day', page = 1) {
  return sendRequest('/get-trending-all', {
    time_window: timeWindow,
    page
  })
}

export function getPopularMovies () {
  return sendRequest('/get-popular-movies')
}

export function getPopularTvs () {
  return sendRequest('/get-popular-tvs')
}

export function getPopularPeople () {
  return sendRequest('/get-popular-people')
}
