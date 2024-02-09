import { TMDB_ACCESS_TOKEN } from '../../config'

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
