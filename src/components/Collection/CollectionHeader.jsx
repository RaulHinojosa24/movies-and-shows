import { useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig, retrieveMovieGenres } from '../../utils/utility'

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

  const genres = [...new Set(parts.reduce((acc, curr) => [...acc, ...curr.genre_ids], []))]
    .map(id => movieGenres.find(genre => genre.id === id))
    .sort((a, b) => a.name.localeCompare(b.name))

  const backdropSize = backdropSizes[2]
  const posterSize = posterSizes[3]
  const prettyGenres = [...genres]
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <header
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),url(${baseURL + backdropSize + backdropPath})` }}
        className='bg-neutral-800 bg-cover bg-no-repeat flex items-end gap-8 p-app-space'
      >
        <section className='w-aside shrink-0 overflow-hidden rounded shadow-xl shadow-neutral-950'>
          <img loading='lazy' src={posterPath ? (baseURL + posterSize + posterPath) : DefaultPosterImage} alt={name} className='w-full aspect-[2/3] object-cover' />
        </section>
        <section className='flex flex-col gap-2 grow'>
          <div className='flex items-end gap-3'>
            <h1 className='text-4xl font-semibold'>{name}</h1>
          </div>
          <div>
            <ul className='flex flex-wrap [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
              {prettyGenres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
          <p>{overview}</p>
        </section>
      </header>
    </>
  )
}
