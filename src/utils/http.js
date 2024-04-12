import { TMDB_ACCESS_TOKEN } from '../../config'

const language = 'es-ES'
const region = 'ES'

const GET_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TMDB_ACCESS_TOKEN
  }
}

const POST_OPTIONS = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer ' + TMDB_ACCESS_TOKEN
  }
}

export function getAPIConfiguration () {
  return fetch('https://api.themoviedb.org/3/configuration?append_to_response=countries,jobs,languages', GET_OPTIONS)
}

export function getMovieGenres () {
  return fetch('https://api.themoviedb.org/3/genre/movie/list?language=' + language, GET_OPTIONS)
}

export function getRequestToken () {
  return fetch('https://api.themoviedb.org/3/authentication/token/new', GET_OPTIONS)
}

export function createSessionID (requestToken) {
  const options = {
    ...POST_OPTIONS,
    body: JSON.stringify({
      request_token: requestToken
    })
  }

  return fetch('https://api.themoviedb.org/3/authentication/session/new', options)
}

export function getNowPlayingMovies () {
  const today = new Date()
  const lastMonth = new Date()
  lastMonth.setDate(lastMonth.getDate() - 21)

  const todayDate = today.toISOString().split('T')[0]
  const lastMonthDate = lastMonth.toISOString().split('T')[0]

  return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=1&sort_by=primary_release_date.desc&with_release_type=2|3&release_date.gte=${lastMonthDate}&release_date.lte=${todayDate}&region=${region}`, GET_OPTIONS)
}

export function getMovieDetails (id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=${language}&include_image_language=null&append_to_response=images,videos,keywords,lists,recommendations,reviews,watch/providers,release_dates,external_ids,credits`, GET_OPTIONS)
}

export function getCollectionDetails (id) {
  return fetch(`https://api.themoviedb.org/3/collection/${id}?language=${language}&include_image_language=null&append_to_response=images`, GET_OPTIONS)
}

export function getPersonDetails (id) {
  return fetch(`https://api.themoviedb.org/3/person/${id}?language=${language}&append_to_response=combined_credits,external_ids,images`, GET_OPTIONS)
}

export function getTvDetails (id) {
  return fetch(`https://api.themoviedb.org/3/tv/${id}?language=${language}&append_to_response=aggregate_credits,content_ratings,external_ids,images,keywords,lists,recommendations,reviews,videos,watch/providers&include_image_language=null`, GET_OPTIONS)
}

export function getListDetails (id, page = 1) {
  return fetch(`https://api.themoviedb.org/4/list/${id}?language=${language}&page=${page}`, GET_OPTIONS)
}

export function getMoviesByQuery (query, page = 1) {
  const moviesUrl = new URL('https://api.themoviedb.org/3/search/movie')
  moviesUrl.searchParams.append('query', query)
  moviesUrl.searchParams.append('language', language)
  moviesUrl.searchParams.append('include_adult', false)
  moviesUrl.searchParams.append('page', page)

  return fetch(moviesUrl.href, GET_OPTIONS)
}

export function getTvByQuery (query, page = 1) {
  const seriesUrl = new URL('https://api.themoviedb.org/3/search/tv')
  seriesUrl.searchParams.append('query', query)
  seriesUrl.searchParams.append('language', language)
  seriesUrl.searchParams.append('include_adult', false)
  seriesUrl.searchParams.append('page', page)

  return fetch(seriesUrl.href, GET_OPTIONS)
}
export function getPersonsByQuery (query, page = 1) {
  const personUrl = new URL('https://api.themoviedb.org/3/search/person')
  personUrl.searchParams.append('query', query)
  personUrl.searchParams.append('language', language)
  personUrl.searchParams.append('include_adult', false)
  personUrl.searchParams.append('page', page)

  return fetch(personUrl.href, GET_OPTIONS)
}
