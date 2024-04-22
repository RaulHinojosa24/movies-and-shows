import { useRouteLoaderData } from 'react-router-dom'
import CastList from '../components/MovieCast/CastList'
import CrewList from '../components/MovieCast/CrewList'

import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function MovieCastPage () {
  const {
    credits,
    title,
    oringinal_title: originalTitle
  } = useRouteLoaderData('movie-details')

  setDocTitle(`${title || originalTitle} - Reparto y equipo`)

  const { cast, crew } = credits

  return (
    <Main
      center={
        <div className='grid md:grid-cols-2 gap-8'>
          <CastList cast={cast} needJoin />
          <CrewList crew={crew} needJoin />
        </div>
      }
    />
  )
}
