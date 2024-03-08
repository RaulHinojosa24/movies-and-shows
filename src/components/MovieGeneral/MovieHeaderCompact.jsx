import { useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'

export default function MovieHeaderCompact () {
  const {
    id,
    poster_path: posterPath,
    title,
    original_title: originalTitle
  } = useRouteLoaderData('movie-details')

  const prettyTitle = title || originalTitle

  return (
    <HeaderCompact id={id} mediaType='movie' posterPath={posterPath} title={prettyTitle} />

  )
}
