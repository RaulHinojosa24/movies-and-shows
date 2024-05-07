import { useRouteLoaderData } from 'react-router-dom'
import Header from '../PageUI/Header'

export default function MovieHeader () {
  const {
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
    title,
    original_title: originalTitle,
    vote_average: voteAverage,
    vote_count: voteCount,
    'watch/providers': watchProviders
  } = useRouteLoaderData('movie-details')

  const countryReleaseDates = releaseDates.results.find(el => el.iso_3166_1 === 'ES')?.release_dates || []
  const theatricalRelease = countryReleaseDates.find(el => [2, 3].includes(el.type))
  const { certification, release_date: officialReleaseDate } = countryReleaseDates.length
    ? (theatricalRelease || countryReleaseDates[0])
    : { certification: '', release_date: releaseDate }
  const prettyTitle = title || originalTitle
    .sort((a, b) => a.name.localeCompare(b.name))

  const directors = crew.filter(c => c.job === 'Director')
  const writers = crew
    .filter(c => c.department === 'Writing')
    .sort((a, b) => a.job.localeCompare(b.job))
  const mainCredits = [...directors, ...writers]
    .map(mc => ({
      id: mc.credit_id,
      name: mc.name,
      role: mc.job
    }))

  return (
    <Header
      backdropPath={backdropPath}
      posterPath={posterPath}
      title={prettyTitle}
      certification={certification}
      releaseDate={officialReleaseDate}
      mediaType='movie'
      runtime={runtime}
      tagline={tagline}
      voteAverage={voteAverage}
      voteCount={voteCount}
      watchProviders={watchProviders}
      genres={genres}
      mainCredits={mainCredits}
    />
  )
}
