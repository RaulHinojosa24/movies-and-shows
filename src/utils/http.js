import { json } from 'react-router-dom'
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

async function sendRequest (url, options, time = 0) {
  return new Promise(resolve => setTimeout(resolve, time)).then(async () => {
    const response = await fetch(url, options)

    if (!response.ok) {
      return json(
        { message: 'Something went wrong.' },
        { status: response.status }
      )
    } else {
      const data = await response.json()
      return data
    }
  })
}

export function getAPIConfiguration () {
  return sendRequest('https://api.themoviedb.org/3/configuration?append_to_response=countries,jobs,languages', GET_OPTIONS)
}

export function getMovieGenres () {
  return sendRequest('https://api.themoviedb.org/3/genre/movie/list?language=' + language, GET_OPTIONS)
}

export function getTvGenres () {
  return sendRequest('https://api.themoviedb.org/3/genre/tv/list?language=' + language, GET_OPTIONS)
}

export function getMovieProviders () {
  return sendRequest(`https://api.themoviedb.org/3/watch/providers/movie?language=${language}&watch_region=${region}`, GET_OPTIONS)
}

export function getTvProviders () {
  return sendRequest(`https://api.themoviedb.org/3/watch/providers/tv?language=${language}&watch_region=${region}`, GET_OPTIONS)
}

export function getRequestToken () {
  return sendRequest('https://api.themoviedb.org/3/authentication/token/new', GET_OPTIONS)
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
  return sendRequest(`https://api.themoviedb.org/3/movie/now_playing?language=${language}&page=1`, GET_OPTIONS)
}

export function getTrendingAll (timeWindow = 'day', page = 1) {
  return sendRequest(`https://api.themoviedb.org/3/trending/all/${timeWindow}?language=${language}&page=${page}`, GET_OPTIONS)
}

export function getMovieDetails (id) {
  return sendRequest(`https://api.themoviedb.org/3/movie/${id}?language=${language}&include_image_language=null&append_to_response=images,videos,keywords,lists,recommendations,reviews,watch/providers,release_dates,external_ids,credits`, GET_OPTIONS)
}

export function getCollectionDetails (id) {
  return sendRequest(`https://api.themoviedb.org/3/collection/${id}?language=${language}&include_image_language=null&append_to_response=images`, GET_OPTIONS)
}

export function getPersonDetails (id) {
  return sendRequest(`https://api.themoviedb.org/3/person/${id}?language=${language}&append_to_response=combined_credits,external_ids,images`, GET_OPTIONS)
}

export function getTvDetails (id) {
  return sendRequest(`https://api.themoviedb.org/3/tv/${id}?language=${language}&append_to_response=aggregate_credits,content_ratings,external_ids,images,keywords,lists,recommendations,reviews,videos,watch/providers&include_image_language=null`, GET_OPTIONS)
}

export async function getListDetails (id, page = 1) {
  const response = await fetch(`https://api.themoviedb.org/4/list/${id}?language=${language}&page=${page}`, GET_OPTIONS)

  if (!response.ok) {
    return json(
      { message: 'Something went wrong.' },
      { status: response.status }
    )
  } else {
    const data = await response.json()

    if (!data.public) {
      throw json(
        { message: 'Parece que la lista a la que intentas acceder es privada.' },
        { status: 401 }
      )
    } else {
      return data
    }
  }
}

export function getMoviesByQuery (query, page = 1) {
  const moviesUrl = new URL('https://api.themoviedb.org/3/search/movie')
  moviesUrl.searchParams.append('query', query)
  moviesUrl.searchParams.append('language', language)
  moviesUrl.searchParams.append('include_adult', false)
  moviesUrl.searchParams.append('page', page)

  return sendRequest(moviesUrl.href, GET_OPTIONS)
}

export function getTvByQuery (query, page = 1) {
  const seriesUrl = new URL('https://api.themoviedb.org/3/search/tv')
  seriesUrl.searchParams.append('query', query)
  seriesUrl.searchParams.append('language', language)
  seriesUrl.searchParams.append('include_adult', false)
  seriesUrl.searchParams.append('page', page)

  return sendRequest(seriesUrl.href, GET_OPTIONS)
}

export function getPersonsByQuery (query, page = 1) {
  const personUrl = new URL('https://api.themoviedb.org/3/search/person')
  personUrl.searchParams.append('query', query)
  personUrl.searchParams.append('language', language)
  personUrl.searchParams.append('include_adult', false)
  personUrl.searchParams.append('page', page)

  return sendRequest(personUrl.href, GET_OPTIONS)
}

export function getTvSeasonDetails (tvID, season) {
  return sendRequest(`https://api.themoviedb.org/3/tv/${tvID}/season/${season}?language=${language}&include_image_language=en,null&include_video_language=en,null&append_to_response=account_states,aggregate_credits,images,videos`, GET_OPTIONS)
}

export function getKeywordsByQuery (query, page = 1) {
  const url = new URL('https://api.themoviedb.org/3/search/keyword')
  url.searchParams.append('query', query)
  url.searchParams.append('page', page)

  return fetch(url.href, GET_OPTIONS)
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
  const url = new URL('https://api.themoviedb.org/3/discover/movie')
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

  return sendRequest(url.href, GET_OPTIONS)
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
  const url = new URL('https://api.themoviedb.org/3/discover/tv')
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

  return sendRequest(url.href, GET_OPTIONS)
}
