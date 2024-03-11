import { Link, useRouteLoaderData } from 'react-router-dom'
import TvDetails from '../components/TvGeneral/TvDetails'
import SocialLinks from '../components/PageUI/SocialLinks'
import TvCast from '../components/TvGeneral/TvCast'
import TvRecommendations from '../components/TvGeneral/TvRecommendations'
import TvLists from '../components/TvGeneral/TvLists'
import TvReviews from '../components/TvGeneral/TvReviews'
import Main from '../components/PageUI/Main'
import TvOverview from '../components/TvGeneral/TvOverview'

export default function TvGeneral () {
  const {
    external_ids: externalIds,
    homepage,
    name,
    original_name: originalName
  } = useRouteLoaderData('tv-details')

  return (
    <Main
      left={
        <TvDetails />
      }
      center={
        <>
          <Link to='media' className='font-bold'>TODO: Ver Media</Link>
          {/* <Section title='Sinopsis'>
            {overview && overview}
            {!overview && <p className='italic'>No tenemos una sinopsis en tu idioma.</p>}
          </Section> */}
          <TvOverview />
          <TvCast />
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
