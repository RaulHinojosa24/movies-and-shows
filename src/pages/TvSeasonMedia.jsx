import { useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function TvSeasonMediaPage () {
  const {
    name
  } = useRouteLoaderData('season-details')
  const {
    name: sName,
    original_name: sOriginalName
  } = useRouteLoaderData('tv-details')

  setDocTitle(`${sName || sOriginalName} - ${name} - Fotos y vídeos`)

  return (
    <Main center='Media page' />
  )
}
