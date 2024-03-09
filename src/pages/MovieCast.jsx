import { useRouteLoaderData } from 'react-router-dom'
import CastList from '../components/MovieCast/CastList'
import CrewList from '../components/MovieCast/CrewList'

import Main from '../components/PageUI/Main'

export default function MovieCastPage () {
  const {
    credits
  } = useRouteLoaderData('movie-details')

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
