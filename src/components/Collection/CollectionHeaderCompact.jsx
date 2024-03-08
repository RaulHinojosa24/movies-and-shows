import { useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'

export default function CollectionHeaderCompact () {
  const {
    id,
    name,
    poster_path: posterPath
  } = useRouteLoaderData('collection-details')

  return (
    <HeaderCompact id={id} mediaType='collection' posterPath={posterPath} title={name} />
  )
}
