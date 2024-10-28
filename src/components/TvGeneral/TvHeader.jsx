import Header from '../PageUI/Header'

export default function TvHeader ({ name, contentRatings, createdBy, genres, backdropPath, posterPath, firstAirDate, tagline, voteAverage, voteCount, watchProviders, adult, videos }) {
  const certification = contentRatings.results
    .find(el => el.iso_3166_1 === 'ES')
    ?.rating
  const mainCredits = createdBy
    .map(el => ({
      id: el.id,
      name: el.name,
      job: 'Creador'
    }))
  const prettyGenres = [...genres]
    .sort((a, b) => a.name.localeCompare(b.name))
  const trailer = videos.find(v => v.type === 'Trailer')

  return (
    <Header
      backdropPath={backdropPath}
      posterPath={posterPath}
      certification={certification}
      firstAirDate={firstAirDate}
      title={name}
      tagline={tagline}
      mediaType='tv'
      voteAverage={voteAverage}
      voteCount={voteCount}
      watchProviders={watchProviders}
      genres={prettyGenres}
      mainCredits={mainCredits}
      adult={adult}
      trailer={trailer}
    />
  )
}
