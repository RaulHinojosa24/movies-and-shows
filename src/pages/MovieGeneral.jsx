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
import { Suspense } from 'react'
import MovieGeneralSkeleton from '../skeleton-pages/MovieGeneralSkeleton'
import MovieHeader from '../components/MovieGeneral/MovieHeader'
import ErrorPage from '../pages/ErrorPage'

export default function MovieGeneralPage () {
  const { data: loaderMovieDetails } = useRouteLoaderData('movie-details')
  setDocTitle('Loading...')

  return (
    <Suspense fallback={<MovieGeneralSkeleton />}>
      <Await
        resolve={loaderMovieDetails}
        errorElement={<ErrorPage />}
      >
        {(data) => {
          const {
            adult,
            budget,
            keywords,
            original_language: originalLanguage,
            original_title: originalTitle,
            revenue,
            status,
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
            },
            external_ids: externalIDs,
            homepage: homepageLink,
            backdrop_path: backdropPath,
            credits: {
              crew
            },
            genres,
            poster_path: posterPath,
            release_date: releaseDate,
            release_dates: releaseDates,
            runtime,
            tagline,
            vote_average: voteAverage,
            vote_count: voteCount,
            'watch/providers': watchProviders
          } = data

          const prettyTitle = title || originalTitle
          setDocTitle(prettyTitle)

          return (
            <>
              <MovieHeader backdropPath={backdropPath} crew={crew} genres={genres} posterPath={posterPath} releaseDate={releaseDate} releaseDates={releaseDates} runtime={runtime} tagline={tagline} title={prettyTitle} voteAverage={voteAverage} voteCount={voteCount} watchProviders={watchProviders} adult={adult} videos={videos} />
              <Main
                left={
                  <MovieDetails budget={budget} keywords={keywords} originalLanguage={originalLanguage} originalTitle={originalTitle} revenue={revenue} status={status} />
              }
                center={
                  <>
                    <MovieOverview overview={overview} />
                    <GeneralMedia backdrops={backdrops} posters={posters} title={prettyTitle} />
                    <MovieCast id={id} cast={cast} />
                    {collection &&
                      <MovieCollection collection={collection} />}
                    {reviews.length > 0 &&
                      <MovieReviews reviews={reviews} />}
                    {lists.length > 0 &&
                      <MovieLists lists={lists} />}
                    <MovieRecommendations id={id} recommendations={recommendations} />
                  </>
              }
                right={
                  <SocialLinks externalIDs={externalIDs} homepageLink={homepageLink} name={prettyTitle} />
              }
              />
            </>
          )
        }}
      </Await>
    </Suspense>
  )
}
