/* eslint-disable no-octal-escape */
import { useRouteLoaderData } from 'react-router-dom'
import { formatShortDate, formatRuntime, retrieveConfig } from '../../utils/utility'
import VoteCard from '../UI/VoteCard'

import DefaultPosterImage from '../../assets/default-poster.png'
import WatchProviders from '../WatchProviders/WatchProviders'
import HeaderMainCredits from '../UI/HeaderMainCredits'

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
    vote_average: voteAvarage,
    vote_count: voteCount,
    'watch/providers': watchProviders
  } = useRouteLoaderData('movie-details')
  console.log(useRouteLoaderData('movie-details'))

  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const countryReleaseDates = releaseDates.results.find(el => el.iso_3166_1 === 'ES')?.release_dates || []
  const theatricalRelease = countryReleaseDates.find(el => [2, 3].includes(el.type))
  const { certification, release_date: officialReleaseDate } = countryReleaseDates.length
    ? (theatricalRelease || countryReleaseDates[0])
    : { certification: '', release_date: releaseDate }

  const prettyTitle = title || originalTitle
  const prettyBackdropURL = baseURL + backdropSizes[2] + backdropPath
  const prettyPosterURL = posterPath ? (baseURL + posterSizes[3] + posterPath) : DefaultPosterImage
  const prettyRuntime = formatRuntime(runtime)
  const prettyDate = formatShortDate(officialReleaseDate)
  const prettyGenres = [...genres]
    .sort((a, b) => a.name.localeCompare(b.name))

  const directors = crew.filter(c => c.job === 'Director')
  const writers = crew
    .filter(c => c.department === 'Writing')
    .sort((a, b) => a.job.localeCompare(b.job))

  const mainCredits = [...directors, ...writers]
    .map(mc => ({
      id: mc.id,
      name: mc.name,
      role: mc.job
    }))

  return (
    <>
      <header
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),url(${prettyBackdropURL})` }}
        className='bg-neutral-800 bg-cover bg-center bg-no-repeat flex items-end gap-8 p-8'
      >
        <section className='w-aside shrink-0 overflow-hidden rounded shadow-xl shadow-neutral-950'>
          <img loading='lazy' src={prettyPosterURL} alt={'Poster de ' + prettyTitle} className='aspect-[2/3] object-cover w-full' />
          <WatchProviders watchProviders={watchProviders} title={prettyTitle} type='movie' />
        </section>
        <section className='flex flex-col gap-2 grow'>
          <h1 className='text-4xl font-bold'>{prettyTitle}</h1>
          <div className='flex [&>*+*]:before:content-["\2022"] [&>*+*]:before:mx-2'>
            {certification &&
              <span className='border-1 px-1 rounded'>{certification}</span>}
            {runtime &&
              <span>{prettyRuntime}</span>}
            {prettyDate &&
              <span>{prettyDate}</span>}
            <ul className='flex flex-wrap [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
              {prettyGenres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          {tagline && <p className='italic text-neutral-300'>{tagline}</p>}
          <VoteCard rating={voteAvarage} count={voteCount} />

          {mainCredits.length > 0 &&
            <HeaderMainCredits credits={mainCredits} />}
        </section>
      </header>
    </>
  )
}
