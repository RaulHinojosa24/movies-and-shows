import { useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'

export default function SeasonHeaderMedia () {
  const {
    poster_path: posterPath,
    name,
    season_number: seasonNumber
  } = useRouteLoaderData('season-details')
  const { id } = useRouteLoaderData('tv-details')

  return (
    <HeaderCompact target={'/tv/' + id + '/season/' + seasonNumber} mediaType='tv' posterPath={posterPath} title={name} />
  )
}
