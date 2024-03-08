import { useRouteLoaderData } from 'react-router-dom'

import HeaderCompact from '../PageUI/HeaderCompact'

export default function PersonHeaderCompact () {
  const {
    id,
    profile_path: profilePath,
    name
  } = useRouteLoaderData('person-details')

  return (
    <HeaderCompact id={id} mediaType='person' posterPath={profilePath} title={name} />
  )
}
