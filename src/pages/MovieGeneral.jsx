import { Await, useRouteLoaderData } from 'react-router-dom'
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
import GeneralMedia from '../components/Media/GeneralMedia'
import { Suspense, useEffect } from 'react'
import GeneralAsideSkeleton from '../components/Skeletons/GeneralAsideSkeleton'
import SocialLinksSkeleton from '../components/Skeletons/SocialLinksSkeleton'
import GeneralCenterSkeleton from '../components/Skeletons/GeneralCenterSkeleton'

export default function MovieDetailsPage () {
  const { data: loaderMovieDetails } = useRouteLoaderData('movie-details')

  useEffect(() => {
    loaderMovieDetails.then(({ title, original_title: originalTitle }) => setDocTitle(title || originalTitle))
  }, [loaderMovieDetails])

  return (
    <Main
      left={
        <Suspense fallback={<GeneralAsideSkeleton />}>
          <Await resolve={loaderMovieDetails}>
            {({
              budget,
              keywords,
              original_language: originalLanguage,
              original_title: originalTitle,
              revenue,
              status
            }) => <MovieDetails budget={budget} keywords={keywords} originalLanguage={originalLanguage} originalTitle={originalTitle} revenue={revenue} status={status} />}
          </Await>
        </Suspense>
      }
      center={
        <Suspense fallback={<GeneralCenterSkeleton />}>
          <Await resolve={loaderMovieDetails}>
            {({
              belongs_to_collection: collection,
              credits: {
                cast
              },
              overview,
              id,
              lists: {
                results: lists
              },
              title,
              original_title: originalTitle,
              images: {
                backdrops, posters
              },
              videos: {
                results: videos
              },
              reviews: {
                results: reviews
              },
              recommendations: {
                results: recommendations
              }
            }) => (
              <>
                <MovieOverview overview={overview} />
                <GeneralMedia backdrops={backdrops} posters={posters} title={title || originalTitle} videos={videos} pageType='película' />
                <MovieCast id={id} cast={cast} />
                {collection &&
                  <MovieCollection collection={collection} />}
                {reviews.length > 0 &&
                  <MovieReviews reviews={reviews} />}
                {lists.length > 0 &&
                  <MovieLists lists={lists} />}
                <MovieRecommendations id={id} recommendations={recommendations} />
              </>
            )}
          </Await>
        </Suspense>

      }
      right={
        <Suspense fallback={<SocialLinksSkeleton />}>
          <Await resolve={loaderMovieDetails}>
            {({
              external_ids: externalIDs,
              homepage: homepageLink,
              title,
              original_title: originalTitle
            }) => <SocialLinks externalIDs={externalIDs} homepageLink={homepageLink} name={title || originalTitle} />}
          </Await>
        </Suspense>
      }
    />
  )
}
