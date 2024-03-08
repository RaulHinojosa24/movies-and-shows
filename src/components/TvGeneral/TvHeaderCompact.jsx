import { useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'

export default function TvHeaderCompact () {
  const {
    id,
    poster_path: posterPath,
    name,
    orinigal_name: originalName
  } = useRouteLoaderData('tv-details')

  const prettyName = name || originalName

  return (
    <HeaderCompact id={id} mediaType='tv' posterPath={posterPath} title={prettyName} />
  )
}
