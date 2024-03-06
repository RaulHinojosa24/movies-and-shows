/* eslint-disable no-octal-escape */
import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { formatShortDate, retrieveConfig } from '../../utils/utility'
import DefaultBackdrop from '../../assets/default-landscape.png'
import DefaultPoster from '../../assets/default-poster.png'
import VoteCard from '../UI/VoteCard'

export default function TvHeader () {
  const {
    backdrop_path: backdropPath,
    content_ratings: contentRatings,
    created_by: createdBy,
    episode_run_time: episodeRunTime,
    first_air_date: firstAirDate,
    genres,
    name,
    // networks, /* IDK about this */
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

  const prettyBackdropURL = backdropPath
    ? baseURL + backdropSizes[2] + backdropPath
    : DefaultBackdrop
  const prettyPosterURL = posterPath
    ? baseURL + posterSizes[3] + posterPath
    : DefaultPoster
  const certification = contentRatings.results
    .find(el => el.iso_3166_1 === 'ES')
    ?.rating
  const prettyRuntime = episodeRunTime
    .reduce((acc, curr) => acc + curr, 0) /
    episodeRunTime.length
  const prettyDate = formatShortDate(firstAirDate)

  return (
    <header
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),url(${prettyBackdropURL})` }}
      className={`bg-neutral-800 bg-cover bg-center bg-no-repeat bg-[linear-gradient(to_bottom,_rgba(200,200,200,0.15),_40%,_rgb(10,10,10)),_url(${prettyBackdropURL})] flex items-end gap-8 p-8`}
    >
      <Section className='w-aside overflow-hidden rounded shadow-xl shadow-neutral-950'>
        <img loading='lazy' src={prettyPosterURL} alt={name || originalName} className='aspect-[2/3] object-cover w-full' />
        {/* <MovieWatchProviders className='' /> */}
      </Section>
      <Section className='flex flex-col gap-2'>
        <div className='flex items-end gap-3'>
          <h1 className='text-4xl font-bold'>{name || originalName}</h1>
        </div>
        <div className='flex [&>*+*]:before:content-["\2022"] [&>*+*]:before:mx-2'>
          {certification &&
            <span className='border-1 px-1 h-fit'>{certification}</span>}
          {!isNaN(prettyRuntime) &&
            <span className='text-base font-normal break-keep'>
              {prettyRuntime} min aprox.
            </span>}
          <span>{prettyDate}</span>
          <ul className='flex flex-wrap [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
        {tagline && <p className='italic text-neutral-300'>{tagline}</p>}
        <VoteCard rating={voteAverage} count={voteCount} />
      </Section>
    </header>
  )
}
