import { useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import EpisodeList from '../components/TvSeasons/EpisodeList'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'

export default function TvSeasonGeneralPage () {
  const {
    name,
    original_name: originalName
  } = useRouteLoaderData('tv-details')

  const {
    name: seasonName,
    images: { posters },
    videos: { results }
  } = useRouteLoaderData('season-details')

  setDocTitle(`${name || originalName} - ${seasonName}`)

  return (
    <Main
      center={
        <>
          <GeneralMedia posters={posters} videos={results} pageType='temporada' title={name} />
          <EpisodeList />
        </>
      }
    />
  )
}
