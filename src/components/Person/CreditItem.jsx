import { Link, useRouteLoaderData } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import { retrieveConfig } from '../../utils/utility'
import DefaultPoster from '../../assets/default-poster.png'
import { useEffect, useState } from 'react'

export default function CreditItem ({
  id, title, characters = [], jobs = [], releaseDate, voteAverage, voteCount, mediaType, posterPath, video, creditId, name, firstAirDate, episodeCount
}) {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyPosterPath, setPrettyPosterPath] = useState('')

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        poster_sizes: posterSizes
      }
    }) => setPrettyPosterPath(posterPath
      ? baseURL + posterSizes[0] + posterPath
      : DefaultPoster))
  }, [loaderConfig, posterPath])

  const charactersOrJobs = characters.length > 0
    ? characters
    : jobs.length > 0
      ? jobs
      : null

  const date = new Date(releaseDate || firstAirDate)
  const year = date.getFullYear()
  const type = mediaType === 'movie'
    ? (video ? 'Corto' : 'Película')
    : 'Serie'
  const url = mediaType === 'movie'
    ? '/movie/' + id
    : '/tv/' + id

  return (
    <Link to={url}>
      <div className='flex justify-between items-center py-2'>
        <div className='flex gap-2 items-center'>
          <img className='aspect-[2/3] object-cover w-10' loading='lazy' src={prettyPosterPath} alt='' />
          <div>
            <h3 className='font-semibold'>{title || name}</h3>
            <p className='text-sm'>
              {voteCount > 0 &&
                <VoteCard rating={voteAverage} precission={0} minimal title={`Valoración media de ${voteCount} votos`} />}
              <span className='opacity-75'>{type}</span>
            </p>
            {charactersOrJobs &&
              <p className='opacity-75 text-sm'>...como {(charactersOrJobs).join(', ')}</p>}
          </div>
        </div>
        <div className='flex flex-col items-end'>
          {!isNaN(year) && <span>{year}</span>}
          {mediaType === 'tv' && episodeCount > 0 &&
            <span>{episodeCount} episodios</span>}
        </div>
      </div>
    </Link>
  )
}
