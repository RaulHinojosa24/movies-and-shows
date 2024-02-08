import { TMDB_ACCESS_TOKEN } from '../../config'

const GET_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TMDB_ACCESS_TOKEN
  }
}

export function getRequestToken () {
  return fetch('https://api.themoviedb.org/3/authentication/token/new', GET_OPTIONS)
}
