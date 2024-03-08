/* eslint-disable no-octal-escape */
import { useRouteLoaderData } from 'react-router-dom'
import { formatShortDate, formatRuntime, retrieveConfig } from '../../utils/utility'
import VoteCard from '../UI/VoteCard'

import DefaultPosterImage from '../../assets/default-poster.png'
import WatchProviders from '../WatchProviders/WatchProviders'
import HeaderMainCredits from '../UI/HeaderMainCredits'
import useGenerateImageColors from '../../hooks/useGenerateImageColors'

export default function Header ({ posterPath, backdropPath, title, releaseDate, firstAirDate, certification, runtime, genres = [], tagline, voteAverage, voteCount, mainCredits = [], watchProviders, mediaType, overview }) {
  const [color, isDark] = useGenerateImageColors(posterPath, 0.9)

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
        style={{ backgroundImage: `/*linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),*/linear-gradient(${color},${color}),url(${prettyBackdropURL})` }}
        className={`bg-cover bg-center bg-no-repeat flex items-end gap-8 p-8 ${isDark ? 'text-white' : 'text-black'} transition-all`}
      >
        <section className='w-aside shrink-0 overflow-hidden rounded shadow-xl shadow-neutral-950'>
          <img loading='lazy' src={prettyPosterURL} alt={'Poster de ' + title} className='aspect-[2/3] object-cover w-full' />
          {watchProviders &&
            <WatchProviders watchProviders={watchProviders} title={title} type={mediaType} />}
        </section>
        <section className='flex flex-col gap-2 grow'>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <div className='flex [&>*+*]:before:content-["\2022"] [&>*+*]:before:mx-2'>
            {certification &&
              <span className={`border-1 px-1 rounded ${isDark ? 'border-white' : 'border-black'}`}>{certification}</span>}
            {runtime &&
              <span>{prettyRuntime}</span>}
            {prettyDate && prettyDate !== 'Invalid Date' &&
              <span>{prettyDate}</span>}
            {prettyGenres.length > 0 &&
              <ul className='flex flex-wrap [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
                {prettyGenres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>}
          </div>
          {tagline &&
            <p className={`italic ${isDark ? 'text-neutral-200' : 'text-neutral-800'} font-semibold`}>{tagline}</p>}
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
