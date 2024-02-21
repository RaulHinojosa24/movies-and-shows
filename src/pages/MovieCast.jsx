import { useRouteLoaderData } from 'react-router-dom'
import CastList from '../components/MovieCast/CastList'
import CrewList from '../components/MovieCast/CrewList'

export default function MovieCastPage () {
  const {
    credits
  } = useRouteLoaderData('movie-details')

  const { cast, crew } = credits

  return (
    <main className='mx-app-space grid grid-cols-2'>
      <CastList cast={cast} />
      <CrewList crew={crew} />
    </main>
  )
}
