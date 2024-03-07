/* eslint-disable no-octal-escape */
import { useRouteLoaderData } from 'react-router-dom'
import { formatShortDate, retrieveConfig } from '../../utils/utility'
import DefaultPoster from '../../assets/default-poster.png'
import VoteCard from '../UI/VoteCard'
import WatchProviders from '../WatchProviders/WatchProviders'
import HeaderMainCredits from '../UI/HeaderMainCredits'

export default function TvHeader () {
  const {
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
  } = useRouteLoaderData('tv-details')

  const {
    images: {
      backdrop_sizes: backdropSizes,
      poster_sizes: posterSizes,
      secure_base_url: baseURL
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyName = name || originalName
  const prettyBackdropURL = backdropPath
    ? baseURL + backdropSizes[2] + backdropPath
    : ''
  const prettyPosterURL = posterPath
    ? baseURL + posterSizes[3] + posterPath
    : DefaultPoster
  const certification = contentRatings.results
    .find(el => el.iso_3166_1 === 'ES')
    ?.rating
  const prettyDate = formatShortDate(firstAirDate)
  const mainCredits = createdBy
    .map(el => ({
      id: el.id,
      name: el.name,
      role: 'Creador'
    }))
  const prettyGenres = [...genres]
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <header
      style={{
        backgroundImage: `
        linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),
        url(${prettyBackdropURL})`
      }}
      className='bg-cover bg-center bg-no-repeat flex items-end gap-8 p-app-space'
    >
      <section className='w-aside shrink-0 overflow-hidden rounded shadow-xl shadow-neutral-950'>
        <img loading='lazy' src={prettyPosterURL} alt={'Poster de ' + prettyName} className='aspect-[2/3] object-cover w-full' />
        <WatchProviders watchProviders={watchProviders} title={prettyName} type='tv' />
      </section>
      <section className='flex flex-col gap-2 grow'>
        <h1 className='text-4xl font-bold'>{prettyName}</h1>
        <div className='flex [&>*+*]:before:content-["\2022"] [&>*+*]:before:mx-2'>
          {certification &&
            <span className='border-1 px-1 rounded'>{certification}</span>}
          {firstAirDate &&
            <span>{prettyDate}</span>}
          {genres.length > 0 &&
            <ul className='flex flex-wrap [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
              {prettyGenres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>}
        </div>
        {tagline &&
          <p className='italic text-neutral-300'>{tagline}</p>}
        <VoteCard rating={voteAverage} count={voteCount} />
        {mainCredits.length > 0 &&
          <HeaderMainCredits credits={mainCredits} />}
      </section>
    </header>
  )
}
