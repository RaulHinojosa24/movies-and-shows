/* eslint-disable no-octal-escape */
import { useRouteLoaderData } from 'react-router-dom'
import useBodyDimensions from '../../hooks/useBodyDimensions'
import { calculateImageSize, formatShortDate, formatRuntime, retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'
import MovieVoteCard from './MovieVoteCard'

import DefaultPosterImage from '../../assets/default-poster.png'
import MovieWatchProviders from './MovieWatchProviders'

export default function MovieHeader () {
  const {
    backdrop_path: backdropPath,
    genres,
    poster_path: posterPath,
    release_date: releaseDate,
    release_dates: releaseDates,
    runtime,
    tagline,
    title,
    vote_average: voteAvarage,
    vote_count: voteCount
  } = useRouteLoaderData('movie-details')

  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const { width } = useBodyDimensions()

  const backdropSize = calculateImageSize(backdropSizes.filter(s => s.includes('w')), width, 1)
  const posterSize = calculateImageSize(posterSizes.filter(s => s.includes('w')), width, width < 512 ? 1 : 1 / 4)

  const prettyRuntime = formatRuntime(runtime)

  const countryReleaseDates = releaseDates.results.find(el => el.iso_3166_1 === 'ES')?.release_dates || []
  const theatricalRelease = countryReleaseDates.find(el => [2, 3].includes(el.type))

  const { certification, release_date: officialReleaseDate } = countryReleaseDates.length
    ? (theatricalRelease || countryReleaseDates[0])
    : { certification: '', release_date: releaseDate }

  const prettyDate = formatShortDate(new Date(officialReleaseDate))

  return (
    <>
      <header
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),url(${baseURL + backdropSize + backdropPath})` }}
        className={`bg-neutral-800 bg-cover bg-no-repeat bg-[linear-gradient(to_bottom,_rgba(200,200,200,0.15),_40%,_rgb(10,10,10)),_url(${baseURL + backdropSize + backdropPath})] flex items-end gap-8 p-8`}
      >
        <Section className='mt-12 overflow-hidden rounded shadow-xl shadow-neutral-950'>
          <img loading='lazy' src={posterPath ? (baseURL + posterSize + posterPath) : DefaultPosterImage} alt={title} className='w-48 aspect-[2/3] object-cover' />
          <MovieWatchProviders className='' />
        </Section>
        <Section className='flex flex-col gap-2'>
          <div className='flex items-end gap-3'>
            <h1 className='text-4xl font-semibold'>{title}

            </h1>
          </div>
          <div className='flex [&>*+*]:before:content-["\2022"] [&>*+*]:before:mx-2'>
            {certification !== '' &&
              <span className='border-1 px-1 h-fit'>{certification}</span>}
            <span className='text-base font-normal break-keep'>
              {prettyRuntime}
            </span>
            <span>{prettyDate}</span>
            <ul className='flex flex-wrap [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          {tagline && <p className='italic text-neutral-300'>{tagline}</p>}
          <MovieVoteCard avarage={voteAvarage} count={voteCount} />
        </Section>
      </header>
    </>
  )
}
