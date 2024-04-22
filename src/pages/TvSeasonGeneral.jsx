import { Link, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import EpisodeList from '../components/TvSeasons/EpisodeList'
import { setDocTitle } from '../utils/utility'

export default function TvSeasonGeneralPage () {
  const {
    name,
    original_name: originalName
  } = useRouteLoaderData('tv-details')

  const { name: seasonName } = useRouteLoaderData('season-details')

  setDocTitle(`${name || originalName} - ${seasonName}`)

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
