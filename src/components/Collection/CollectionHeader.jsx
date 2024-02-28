import { useRouteLoaderData } from 'react-router-dom'
import useBodyDimensions from '../../hooks/useBodyDimensions'
import { calculateImageSize, retrieveConfig, retrieveMovieGenres } from '../../utils/utility'
import Section from '../UI/Section'

import DefaultPosterImage from '../../assets/default-poster.png'

export default function CollectionHeader () {
  const {
    name,
    overview,
    poster_path: posterPath,
    backdrop_path: backdropPath,
    parts
  } = useRouteLoaderData('collection-details')

  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const { genres: movieGenres } = retrieveMovieGenres(useRouteLoaderData('root'))

  const { width } = useBodyDimensions()

  const genres = [...new Set(parts.reduce((acc, curr) => [...acc, ...curr.genre_ids], []))]
    .map(id => movieGenres.find(genre => genre.id === id))
    .sort((a, b) => a.name.localeCompare(b.name))

  const backdropSize = calculateImageSize(backdropSizes.filter(s => s.includes('w')), width, 1)
  const posterSize = calculateImageSize(posterSizes.filter(s => s.includes('w')), width, width < 512 ? 1 : 1 / 4)

  return (
    <>
      <header
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),url(${baseURL + backdropSize + backdropPath})` }}
        className={`bg-neutral-800 bg-cover bg-no-repeat bg-[linear-gradient(to_bottom,_rgba(200,200,200,0.15),_40%,_rgb(10,10,10)),_url(${baseURL + backdropSize + backdropPath})] flex items-end gap-8 p-8`}
      >
        <Section className='mt-12 overflow-hidden rounded shadow-xl shadow-neutral-950'>
          <img loading='lazy' src={posterPath ? (baseURL + posterSize + posterPath) : DefaultPosterImage} alt={name} className='w-48 aspect-[2/3] object-cover' />
        </Section>
        <Section className='flex flex-col gap-2'>
          <div className='flex items-end gap-3'>
            <h1 className='text-4xl font-semibold'>{name}</h1>
          </div>
          <div>
            <ul className='flex flex-wrap [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <p>{overview}</p>
        </Section>
      </header>
    </>
  )
}