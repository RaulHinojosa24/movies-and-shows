import { useRouteLoaderData } from 'react-router-dom'
import TvDetails from '../components/TvGeneral/TvDetails'
import SocialLinks from '../components/PageUI/SocialLinks'
import TvCast from '../components/TvGeneral/TvCast'
import TvRecommendations from '../components/TvGeneral/TvRecommendations'
import TvLists from '../components/TvGeneral/TvLists'
import TvReviews from '../components/TvGeneral/TvReviews'
import Main from '../components/PageUI/Main'
import TvOverview from '../components/TvGeneral/TvOverview'
import TvLatestSeason from '../components/TvGeneral/TvLatestSeason'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'

export default function TvGeneral () {
  const {
    external_ids: externalIds,
    homepage,
    name,
    original_name: originalName,
    images: {
      backdrops, posters
    },
    videos: {
      results: videos
    }
  } = useRouteLoaderData('tv-details')

  const prettyName = name || originalName

  setDocTitle(prettyName)

  return (
    <Main
      left={
        <TvDetails />
      }
      center={
        <>
          <TvOverview />
          <GeneralMedia backdrops={backdrops} posters={posters} title={prettyName} videos={videos} pageType='serie de tv' />
          <TvCast />
          <TvLatestSeason />
          <TvReviews />
          <TvLists />
          <TvRecommendations />
        </>
      }
      right={
        <SocialLinks externalIDs={externalIds} homepageLink={homepage} name={name || originalName} />
      }
    />
  )
}
