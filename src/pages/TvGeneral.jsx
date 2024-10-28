import { Await, useRouteLoaderData } from 'react-router-dom'
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
import { Suspense } from 'react'
import TvGeneralSkeleton from '../skeleton-pages/TvGeneralSkeleton'
import TvHeader from '../components/TvGeneral/TvHeader'
import ErrorPage from './ErrorPage'

export default function TvGeneral () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  setDocTitle('Cargando...')

  return (
    <Suspense fallback={<TvGeneralSkeleton />}>
      <Await
        resolve={loaderTvDetails}
        errorElement={<ErrorPage />}
      >
        {(data) => {
          const {
            episode_run_time: episodeRunTime,
            in_production: inProduction,
            keywords,
            overview,
            networks,
            original_language: originalLanguage,
            original_name: originalName,
            status,
            type,
            external_ids: externalIds,
            homepage,
            name,
            images: {
              backdrops, posters
            },
            videos: {
              results: videos
            },
            id,
            aggregate_credits: {
              cast
            },
            seasons,
            reviews: {
              results: reviews
            },
            lists,
            recommendations: {
              results: recommendations
            },
            backdrop_path: backdropPath,
            content_ratings: contentRatings,
            created_by: createdBy,
            first_air_date: firstAirDate,
            genres,
            poster_path: posterPath,
            tagline,
            vote_average: voteAverage,
            vote_count: voteCount,
            'watch/providers': watchProviders,
            adult
          } = data

          const prettyName = name || originalName
          setDocTitle(prettyName)

          return (
            <>
              <TvHeader name={prettyName} contentRatings={contentRatings} createdBy={createdBy} genres={genres} backdropPath={backdropPath} posterPath={posterPath} firstAirDate={firstAirDate} tagline={tagline} voteAverage={voteAverage} voteCount={voteCount} watchProviders={watchProviders} adult={adult} videos={videos} />
              <Main
                left={
                  <TvDetails
                    episodeRunTime={episodeRunTime}
                    inProduction={inProduction}
                    keywords={keywords}
                    networks={networks}
                    originalLanguage={originalLanguage}
                    originalName={originalName}
                    status={status}
                    type={type}
                  />
              }
                center={
                  <>
                    <TvOverview overview={overview} />
                    <GeneralMedia backdrops={backdrops} posters={posters} title={prettyName} videos={videos} pageType='serie de tv' />
                    <TvCast id={id} cast={cast} />
                    <TvLatestSeason tvId={id} seasons={seasons} />
                    {reviews.length > 0 &&
                      <TvReviews reviews={reviews} />}
                    {lists.length > 0 &&
                      <TvLists lists={lists} />}
                    <TvRecommendations id={id} recommendations={recommendations} />
                  </>
              }
                right={
                  <SocialLinks externalIDs={externalIds} homepageLink={homepage} name={name || originalName} />
              }
              />
            </>
          )
        }}
      </Await>
    </Suspense>
  )
}
