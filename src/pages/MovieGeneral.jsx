import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../components/UI/Section'
import MovieCast from '../components/MovieGeneral/MovieCast'
import MovieRecommendations from '../components/MovieGeneral/MovieRecommendations'
import SocialLinks from '../components/UI/SocialLinks'
import MovieLists from '../components/MovieGeneral/MovieLists'
import MovieCollection from '../components/MovieGeneral/MovieCollection'
import MovieReviews from '../components/MovieGeneral/MovieReviews'
import MovieDetails from '../components/MovieGeneral/MovieDetails'

export default function MovieDetailsPage () {
  const {
    external_ids: externalIDs,
    homepage: homepageLink,
    overview,
    title,
    belongs_to_collection: collection
  } = useRouteLoaderData('movie-details')

  return (
    <main className='px-app-space w-full flex gap-8'>
      <div className='shrink-0 w-aside'>
        <MovieDetails />
      </div>
      <div className='grow space-y-8 min-w-0'>
        <Link to='media' className='font-bold'>TODO: Ver Media</Link>
        <Section title='Sinopsis'>
          {overview && overview}
          {!overview && <p className='italic'>No tenemos una sinopsis en tu idioma.</p>}
        </Section>
        <MovieCast />
        {collection && <MovieCollection />}
        <MovieReviews />
        <MovieLists />
        <MovieRecommendations />
      </div>
      <SocialLinks externalIDs={externalIDs} homepageLink={homepageLink} name={title} />
    </main>
  )
}
