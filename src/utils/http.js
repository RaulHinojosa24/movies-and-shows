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
