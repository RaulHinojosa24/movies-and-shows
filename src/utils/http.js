const language = 'es-ES'
const region = 'ES'
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

// const API_URL = 'http://localhost:3000'
const API_URL = 'https://movies-and-shows-backend.vercel.app'

const POST_OPTIONS = {
  method: 'POST'
}

async function sendRequest (url, delay) {
  return new Promise(resolve => setTimeout(resolve, delay)).then(async () => {
    try {
      const response = await fetch(url)

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
  return sendRequest(API_URL + '/3/configuration?append_to_response=countries,jobs,languages,timezones')
}

export function getMovieGenres () {
  return sendRequest(API_URL + '/3/genre/movie/list?language=' + language)
}

export function getTvGenres () {
  return sendRequest(API_URL + '/3/genre/tv/list?language=' + language)
}

export function getMovieProviders () {
  return sendRequest(`${API_URL}/3/watch/providers/movie?language=${language}&watch_region=${region}`)
}

export function getTvProviders () {
  return sendRequest(`${API_URL}/3/watch/providers/tv?language=${language}&watch_region=${region}`)
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
  return sendRequest(`${API_URL}/3/movie/${id}?language=${language}&include_image_language=null&append_to_response=images,videos,keywords,lists,recommendations,reviews,watch/providers,release_dates,external_ids,credits`)
}

export function getCollectionDetails (id) {
  return sendRequest(`${API_URL}/3/collection/${id}?language=${language}&include_image_language=null&append_to_response=images`)
}

export function getPersonDetails (id) {
  return sendRequest(`${API_URL}/3/person/${id}?language=${language}&append_to_response=combined_credits,external_ids,images`)
}

export function getTvDetails (id) {
  return sendRequest(`${API_URL}/3/tv/${id}?language=${language}&append_to_response=aggregate_credits,content_ratings,external_ids,images,keywords,lists,recommendations,reviews,videos,watch/providers&include_image_language=null`)
}

export async function getListDetails (id, page = 1) {
  return sendRequest(`${API_URL}/4/list/${id}?language=${language}&page=${page}`)
}

export function getMoviesByQuery (query, page = 1) {
  const moviesUrl = new URL(API_URL + '/3/search/movie')
  moviesUrl.searchParams.append('query', query)
  moviesUrl.searchParams.append('language', language)
  moviesUrl.searchParams.append('include_adult', false)
  moviesUrl.searchParams.append('page', page)

  return sendRequest(moviesUrl.href)
}

export function getTvByQuery (query, page = 1) {
  const seriesUrl = new URL(API_URL + '/3/search/tv')
  seriesUrl.searchParams.append('query', query)
  seriesUrl.searchParams.append('language', language)
  seriesUrl.searchParams.append('include_adult', false)
  seriesUrl.searchParams.append('page', page)

  return sendRequest(seriesUrl.href)
}

export function getPersonsByQuery (query, page = 1) {
  const personUrl = new URL(API_URL + '/3/search/person')
  personUrl.searchParams.append('query', query)
  personUrl.searchParams.append('language', language)
  personUrl.searchParams.append('include_adult', false)
  personUrl.searchParams.append('page', page)

  return sendRequest(personUrl.href)
}

export function getTvSeasonDetails (tvID, season) {
  return sendRequest(`${API_URL}/3/tv/${tvID}/season/${season}?language=${language}&include_image_language=en,null&include_video_language=en,null&append_to_response=account_states,aggregate_credits,images,videos`)
}

export function getKeywordsByQuery (query, page = 1) {
  const url = new URL(API_URL + '/3/search/keyword')
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
  const url = new URL(API_URL + '/3/discover/movie')
  url.searchParams.append('page', page || 1)
  url.searchParams.append('include_video', true)
  url.searchParams.append('language', language)
  url.searchParams.append('watch_region', region)
  url.searchParams.append('include_adult', includeAdult || false)
  url.searchParams.append('sort_by', `${sortBy || 'popularity'}.${sortDirection || 'desc'}`)
  url.searchParams.append('with_watch_monetization_types', watchTypes || '')
  url.searchParams.append('vote_count.gte', voteCount || '')
  url.searchParams.append('vote_average.gte', voteMin || '')
  url.searchParams.append('vote_average.lte', voteMax || '')
  url.searchParams.append('with_runtime.gte', durationMin || '')
  url.searchParams.append('with_runtime.lte', durationMax || '')
  url.searchParams.append('release_date.gte', fromDate || '')
  url.searchParams.append('release_date.lte', toDate || '')
  url.searchParams.append('with_genres', genres || '')
  url.searchParams.append('with_keywords', keywords ? keywords.split('|').map(kw => kw.split('%')[0]).join('|') : '')
  url.searchParams.append('with_watch_providers', watchProviders || '')

  return sendRequest(url.href)
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
  const url = new URL(API_URL + '/3/discover/tv')
  url.searchParams.append('page', page || 1)
  url.searchParams.append('language', language)
  url.searchParams.append('watch_region', region)
  url.searchParams.append('include_adult', includeAdult || false)
  url.searchParams.append('sort_by', `${sortBy || 'popularity'}.${sortDirection || 'desc'}`)
  url.searchParams.append('with_watch_monetization_types', watchTypes || '')
  url.searchParams.append('vote_count.gte', voteCount || '')
  url.searchParams.append('vote_average.gte', voteMin || '')
  url.searchParams.append('vote_average.lte', voteMax || '')
  url.searchParams.append('with_runtime.gte', durationMin || '')
  url.searchParams.append('with_runtime.lte', durationMax || '')
  url.searchParams.append('first_air_date.gte', fromDate || '')
  url.searchParams.append('first_air_date.lte', toDate || '')
  url.searchParams.append('with_genres', genres || '')
  url.searchParams.append('with_keywords', keywords ? keywords.split('|').map(kw => kw.split('%')[0]).join('|') : '')
  url.searchParams.append('with_watch_providers', watchProviders || '')

  return sendRequest(url.href)
}

export function getNowPlayingMovies () {
  return sendRequest(`${API_URL}/3/movie/now_playing?language=${language}page=1&region=${region}`)
}

export function getTrendingAll (timeWindow = 'day', page = 1) {
  return sendRequest(`${API_URL}/3/trending/all/${timeWindow}?language=${language}&page=${page}`)
}

export function getPopularMovies () {
  return sendRequest(`${API_URL}/3/movie/popular?language=${language}&page=1&region=${region}`)
}

export function getPopularTvs () {
  return sendRequest(`${API_URL}/3/tv/popular?language=${language}&page=1`)
}

export function getPopularPersons () {
  return sendRequest(`${API_URL}/3/person/popular?language=${language}&page=1`)
}
