import { Link } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { getTvSeasonDetails } from '../utils/http'
import EpisodeList from '../components/TvSeasons/EpisodeList'

export default function TvSeasonGeneralPage () {
  return (
    <Main
      center={
        <>
          <Link to='media' className='font-bold'>TODO: Ver Media</Link>
          <EpisodeList />
        </>
      }
    />
  )
}

export function loader ({ request, params }) {
  const { id, season } = params

  return getTvSeasonDetails(id, season)
}
