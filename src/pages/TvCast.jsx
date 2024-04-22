import { useRouteLoaderData } from 'react-router-dom'
import CastList from '../components/MovieCast/CastList'
import CrewList from '../components/MovieCast/CrewList'

import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function TvCastPage () {
  const {
    name,
    original_name: originalName,
    aggregate_credits: credits
  } = useRouteLoaderData('tv-details')

  setDocTitle(`${name || originalName} - Reparto y equipo`)

  const { cast, crew } = credits

  return (
    <Main
      center={
        <div className='grid md:grid-cols-2 gap-8'>
          <CastList cast={cast} />
          <CrewList crew={crew} />
        </div>
      }
    />
  )
}
