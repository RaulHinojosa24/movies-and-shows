import { Link, useRouteLoaderData } from 'react-router-dom'
import TvDetails from '../components/TvGeneral/TvDetails'
import SocialLinks from '../components/UI/SocialLinks'
import Section from '../components/UI/Section'
import TvCast from '../components/TvGeneral/TvCast'
import TvRecommendations from '../components/TvGeneral/TvRecommendations'
import TvLists from '../components/TvGeneral/TvLists'
import TvReviews from '../components/TvGeneral/TvReviews'

export default function TvGeneral () {
  const {
    external_ids: externalIds,
    homepage,
    name,
    original_name: originalName,
    overview
  } = useRouteLoaderData('tv-details')

  return (
    <main className='px-app-space w-full flex gap-8'>
      <div className='w-aside shrink-0'>
        <TvDetails />
      </div>
      <div className='grow min-w-0 space-y-8'>
        <Link to='media' className='font-bold'>TODO: Ver Media</Link>
        <Section title='Sinopsis'>
          {overview && overview}
          {!overview && <p className='italic'>No tenemos una sinopsis en tu idioma.</p>}
        </Section>
        <TvCast />
        <TvReviews />
        <TvLists />
        <TvRecommendations />
      </div>
      <div>
        <SocialLinks externalIDs={externalIds} homepageLink={homepage} name={name || originalName} />
      </div>
    </main>
  )
}
