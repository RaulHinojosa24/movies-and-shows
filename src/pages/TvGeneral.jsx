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
import GeneralAsideSkeleton from '../components/Skeletons/GeneralAsideSkeleton'
import GeneralCenterSkeleton from '../components/Skeletons/GeneralCenterSkeleton'
import SocialLinksSkeleton from '../components/Skeletons/SocialLinksSkeleton'

export default function TvGeneral () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')

  return (
    <Suspense fallback={
      <Main
        left={<GeneralAsideSkeleton />}
        center={<GeneralCenterSkeleton />}
        right={<SocialLinksSkeleton />}
      />
}
    >
      <Await resolve={loaderTvDetails}>
        {({
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
          }
        }) => {
          const prettyName = name || originalName
          setDocTitle(prettyName)

          return (
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
          )
        }}
      </Await>
    </Suspense>
  )
}
