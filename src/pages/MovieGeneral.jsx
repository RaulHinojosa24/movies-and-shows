import { Link, useRouteLoaderData } from 'react-router-dom'
import MovieCast from '../components/MovieGeneral/MovieCast'
import MovieRecommendations from '../components/MovieGeneral/MovieRecommendations'
import SocialLinks from '../components/PageUI/SocialLinks'
import MovieLists from '../components/MovieGeneral/MovieLists'
import MovieCollection from '../components/MovieGeneral/MovieCollection'
import MovieReviews from '../components/MovieGeneral/MovieReviews'
import MovieDetails from '../components/MovieGeneral/MovieDetails'
import MovieOverview from '../components/MovieGeneral/MovieOverview'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function MovieDetailsPage () {
  const {
    external_ids: externalIDs,
    homepage: homepageLink,
    title,
    original_title: originalTitle,
    belongs_to_collection: collection
  } = useRouteLoaderData('movie-details')

  setDocTitle(title || originalTitle)

  return (
    <Main
      left={
        <MovieDetails />
      }
      center={
        <>
          <Link to='media' className='font-bold'>TODO: Ver Media</Link>
          <MovieOverview />
          <MovieCast />
          {collection && <MovieCollection />}
          <MovieReviews />
          <MovieLists />
          <MovieRecommendations />
        </>
      }
      right={
        <SocialLinks externalIDs={externalIDs} homepageLink={homepageLink} name={title} />
      }
    />
  )
}
