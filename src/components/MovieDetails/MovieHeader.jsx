import { useRouteLoaderData } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { calculateImageSize, formatDate, formatRuntime } from '../../utils/utility'
import Section from '../UI/Section'
import MovieVoteCard from './MovieVoteCard'

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
  } = useRouteLoaderData('root')

  const { width } = useWindowDimensions()

  const backdropSize = calculateImageSize(backdropSizes.filter(s => s.includes('w')), width, 1)
  const posterSize = calculateImageSize(posterSizes.filter(s => s.includes('w')), width, width < 512 ? 1 : 1 / 4)

  const prettyRuntime = formatRuntime(runtime)

  const countryReleaseDates = releaseDates.results.find(el => el.iso_3166_1 === 'ES')?.release_dates
  const { certification, release_date: officialReleaseDate } = countryReleaseDates
    ? countryReleaseDates.find(el => [2, 3].includes(el.type))
    : { certification: '', release_date: releaseDate }
  const prettyDate = formatDate(new Date(officialReleaseDate))

  return (
    <>
      <header
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),url(${baseURL + backdropSize + backdropPath})` }}
        className='bg-cover bg-no-repeat flex items-end gap-8 p-8'
      >
        <Section className='mt-12 shadow-xl shadow-black rounded overflow-hidden'>
          <img
            src={baseURL + posterSize + posterPath} alt={title}
            className='w-48'
          />
        </Section>
        <Section className='flex flex-col gap-2'>
          <div className='flex items-end gap-3'>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <span className='text-neutral-300'>
              {prettyRuntime}
            </span>
          </div>
          <div className='flex gap-2'>
            {certification && certification !== '' &&
              <><span className='border-[1px] px-1'>{certification}</span>&bull;</>}

            <span>{prettyDate}</span>
            &bull;
            <ul className='flex flex-wrap gap-2'>
              {genres.map(({ id, name }, i) => (
                <li key={id}>{name}{i < genres.length - 1 && ','}</li>
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
