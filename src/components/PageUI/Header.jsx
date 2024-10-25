import { Link } from 'react-router-dom'
import { formatShortDate, formatRuntime } from '../../utils/utility'
import VoteCard from '../PageUI/VoteCard'

import DefaultPosterImage from '../../assets/default-poster.webp'
import WatchProviders from '../WatchProviders/WatchProviders'
import HeaderMainCredits from '../PageUI/HeaderMainCredits'
import { useContext, useMemo } from 'react'
import { rootContext } from '../../context/root-context'
import useImageColors from '../../hooks/useImageColors'
import AdultTag from './AdultTag'
import ElementsList from '../UI/ElementsList'

export default function Header ({ posterPath, backdropPath, title, releaseDate, firstAirDate, certification, runtime, genres = [], tagline, voteAverage, voteCount, mainCredits = [], watchProviders, mediaType, overview, adult }) {
  const { config } = useContext(rootContext)
  const { dominant: [r, g, b], isDark, ref: imgRef } = useImageColors(posterPath)

  const prettyBackdropURL = config && backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[2] + backdropPath
    : DefaultPosterImage
  const prettyPosterURL = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[3] + posterPath
    : DefaultPosterImage
  const prettyRuntime = formatRuntime(runtime || 0)
  const prettyDate = formatShortDate(releaseDate || firstAirDate)
  const prettyGenres = useMemo(() =>
    [...genres]
      .sort((a, b) => a.name.localeCompare(b.name))
  , [genres])

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
          md:flex-row md:items-end transition-colors
        `}
      >
        <section className='w-aside shrink-0 overflow-hidden rounded shadow-lg shadow-black/75'>
          <img loading='lazy' ref={imgRef} src={prettyPosterURL} crossOrigin='anonymous' alt={'Poster de ' + title} className='aspect-[2/3] object-cover w-full' />
          {watchProviders &&
            <WatchProviders watchProviders={watchProviders} title={title} type={mediaType} />}
        </section>
        <section className='flex flex-col gap-2 grow md:text-start text-center md:items-start items-center'>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <ElementsList style='bull'>
            {adult &&
              <AdultTag />}
            {certification &&
              <span className='border-1 px-1 rounded h-fit border-current'>{certification}</span>}
            {runtime &&
              <span className='shrink-0 text-nowrap'>{prettyRuntime}</span>}
            {prettyDate && prettyDate !== 'Invalid Date' &&
              <span className='shrink-0'>{prettyDate}</span>}
            {prettyGenres.length > 0 &&
              <ElementsList style='comma'>
                {prettyGenres.map(({ id, name }) => (
                  <Link key={id} to={`/${mediaType}?genres=${id}`}>{name}</Link>
                ))}
              </ElementsList>}
          </ElementsList>
          {tagline &&
            <p className='italic font-semibold'>{tagline}</p>}
          {!!voteAverage && !!voteCount &&
            <VoteCard rating={voteAverage} count={voteCount} />}
          {overview &&
            <p>{overview}</p>}
          {mainCredits && mainCredits.length > 0 &&
            <HeaderMainCredits credits={mainCredits} />}
        </section>
      </header>
    </>
  )
}
