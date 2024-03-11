/* eslint-disable no-octal-escape */
import { useRouteLoaderData } from 'react-router-dom'
import { formatShortDate, formatRuntime, retrieveConfig } from '../../utils/utility'
import VoteCard from '../PageUI/VoteCard'

import DefaultPosterImage from '../../assets/default-poster.png'
import WatchProviders from '../WatchProviders/WatchProviders'
import HeaderMainCredits from '../PageUI/HeaderMainCredits'
import useGenerateImageColors from '../../hooks/useGenerateImageColors'

export default function Header ({ posterPath, backdropPath, title, releaseDate, firstAirDate, certification, runtime, genres = [], tagline, voteAverage, voteCount, mainCredits = [], watchProviders, mediaType, overview }) {
  const [[r, g, b], isDark] = useGenerateImageColors(posterPath, 0.4)
  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyBackdropURL = backdropPath ? baseURL + backdropSizes[2] + backdropPath : ''
  const prettyPosterURL = posterPath ? baseURL + posterSizes[3] + posterPath : DefaultPosterImage
  const prettyRuntime = formatRuntime(runtime || 0)
  const prettyDate = formatShortDate(releaseDate || firstAirDate)
  const prettyGenres = [...genres]
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <header
        style={{
          backgroundImage: `
            linear-gradient(30deg,
              rgba(${r},${g},${b},1) 20%,
              rgba(${r},${g},${b},.85) 20%,
              rgba(${r},${g},${b},.85) 40%,
              rgba(${r},${g},${b},.7) 40%,
              rgba(${r},${g},${b},.7) 60%,
              rgba(${r},${g},${b},.55) 60%,
              rgba(${r},${g},${b},.55) 80%,
              rgba(${r},${g},${b},.4) 80%,
              rgba(${r},${g},${b},.4) 100%),
            url(${prettyBackdropURL})
          `
        }}
        className={`
          bg-cover bg-center bg-no-repeat flex flex-col items-center gap-8 p-8 ${isDark ? 'text-white' : 'text-black'}
          md:flex-row md:items-end
        `}
      >
        <section className='w-aside shrink-0 overflow-hidden rounded shadow-lg shadow-black/75'>
          <img loading='lazy' src={prettyPosterURL} alt={'Poster de ' + title} className='aspect-[2/3] object-cover w-full' />
          {watchProviders &&
            <WatchProviders watchProviders={watchProviders} title={title} type={mediaType} />}
        </section>
        <section className='flex flex-col gap-2 grow md:items-start items-center'>
          <h1 className='text-4xl font-bold text-center md:text-left'>{title}</h1>
          <div className='flex flex-wrap justify-center md:justify-start [&>*+*]:before:content-["\2022"] [&>*+*]:before:mx-2'>
            {certification &&
              <span className={`border-1 px-1 rounded h-fit ${isDark ? 'border-white' : 'border-black'}`}>{certification}</span>}
            {runtime &&
              <span className='shrink-0'>{prettyRuntime}</span>}
            {prettyDate && prettyDate !== 'Invalid Date' &&
              <span className='shrink-0'>{prettyDate}</span>}
            {prettyGenres.length > 0 &&
              <ul className='hidden md:flex flex-wrap shrink-0 [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
                {prettyGenres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>}
          </div>
          <div className='md:hidden visible'>{prettyGenres.length > 0 &&
            <ul className='flex flex-wrap shrink-0 [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
              {prettyGenres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>}
          </div>
          {tagline &&
            <p className={`italic ${isDark ? 'text-neutral-100' : 'text-neutral-900'} font-semibold`}>{tagline}</p>}
          {!!voteAverage && !!voteCount &&
            <VoteCard rating={voteAverage} count={voteCount} theme={isDark ? 'light' : 'dark'} />}
          {overview &&
            <p>{overview}</p>}
          {mainCredits && mainCredits.length > 0 &&
            <HeaderMainCredits credits={mainCredits} />}
        </section>
      </header>
    </>
  )
}
