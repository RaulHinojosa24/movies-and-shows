import { Await, useRouteLoaderData } from 'react-router-dom'

import Header from '../PageUI/Header'
import { Suspense } from 'react'
import HeaderSkeleton from '../Skeletons/HeaderSkeleton'

export default function TvHeader () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')

  return (
    <Suspense fallback={<HeaderSkeleton />}>
      <Await resolve={loaderTvDetails}>
        {({
          backdrop_path: backdropPath,
          content_ratings: contentRatings,
          created_by: createdBy,
          first_air_date: firstAirDate,
          genres,
          name,
          original_name: originalName,
          poster_path: posterPath,
          tagline,
          vote_average: voteAverage,
          vote_count: voteCount,
          'watch/providers': watchProviders
        }) => {
          const prettyName = name || originalName
          const certification = contentRatings.results
            .find(el => el.iso_3166_1 === 'ES')
            ?.rating
          const mainCredits = createdBy
            .map(el => ({
              id: el.id,
              name: el.name,
              role: 'Creador'
            }))
          const prettyGenres = [...genres]
            .sort((a, b) => a.name.localeCompare(b.name))

          return (
            <Header
              backdropPath={backdropPath}
              posterPath={posterPath}
              certification={certification}
              firstAirDate={firstAirDate}
              title={prettyName}
              tagline={tagline}
              mediaType='tv'
              voteAverage={voteAverage}
              voteCount={voteCount}
              watchProviders={watchProviders}
              genres={prettyGenres}
              mainCredits={mainCredits}
            />
          )
        }}
      </Await>
    </Suspense>
  )
}
