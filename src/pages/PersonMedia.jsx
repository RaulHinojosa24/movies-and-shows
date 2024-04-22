import { useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import PersonImages from '../components/PersonMedia/PersonImages'
import { setDocTitle } from '../utils/utility'

export default function PersonMediaPage () {
  const {
    name
  } = useRouteLoaderData('person-details')

  setDocTitle(`${name} - Retratos`)

  return (
    <Main center={<PersonImages />} />
  )
}
