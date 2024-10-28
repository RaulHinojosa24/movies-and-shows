import Header from '../PageUI/Header'

export default function MovieHeader ({ backdropPath, crew, genres, posterPath, releaseDate, releaseDates, runtime, tagline, title, voteAverage, voteCount, watchProviders, adult, videos }) {
  const countryReleaseDates = releaseDates.results.find(el => el.iso_3166_1 === 'ES')?.release_dates || []
  const theatricalRelease = countryReleaseDates.find(el => [2, 3].includes(el.type))
  const { certification, release_date: officialReleaseDate } = countryReleaseDates.length
    ? (theatricalRelease || countryReleaseDates[0])
    : { certification: '', release_date: releaseDate }

  const directors = crew
    .filter(c => c.job === 'Director')
    .sort((a, b) => a.name.localeCompare(b.name))
  const writers = crew
    .filter(c => c.department === 'Writing')
    .sort((a, b) => a.job.localeCompare(b.job))
  const mainCredits = [...directors, ...writers]
  const trailer = videos.find(v => v.type === 'Trailer')

  return (
    <Header
      backdropPath={backdropPath}
      posterPath={posterPath}
      title={title}
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
      adult={adult}
      trailer={trailer}
    />
  )
}
