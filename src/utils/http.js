import { TMDB_ACCESS_TOKEN } from '../../config'

const GET_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TMDB_ACCESS_TOKEN
  }
}

const language = 'es-ES'
const region = 'ES'

const POST_OPTIONS = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer ' + TMDB_ACCESS_TOKEN
  }
}

export function getRequestToken () {
  return fetch('https://api.themoviedb.org/3/authentication/token/new', GET_OPTIONS)
}

export function createSessionID (requestToken) {
  const options = structuredClone(POST_OPTIONS)

  options.body = JSON.stringify({
    request_token: requestToken
  })

  return fetch('https://api.themoviedb.org/3/authentication/session/new', options)
}

export function getNowPlayingMovies () {
  const today = new Date()
  const lastMonth = new Date()
  lastMonth.setDate(lastMonth.getDate() - 21)

  const todayDate = today.toISOString().split('T')[0]
  const lastMonthDate = lastMonth.toISOString().split('T')[0]
  console.log(todayDate, lastMonthDate)

  return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=${language}&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${lastMonthDate}&release_date.lte=${todayDate}&region=${region}`, GET_OPTIONS)
}
