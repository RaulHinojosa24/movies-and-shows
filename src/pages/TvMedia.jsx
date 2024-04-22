import { useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function TvMediaPage () {
  const {
    name,
    original_name: originalName
  } = useRouteLoaderData('tv-details')

  setDocTitle(`${name || originalName} - Fotos y vídeos`)

  return (
    <Main center='Media page' />
  )
}
