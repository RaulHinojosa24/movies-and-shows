import { useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'

export default function SeasonHeader () {
  const {
    poster_path: posterPath,
    name
  } = useRouteLoaderData('season-details')
  const { id } = useRouteLoaderData('tv-details')

  return (
    <HeaderCompact target={'/tv/' + id + '/season'} mediaType='tv' posterPath={posterPath} title={name} />
  )
}
