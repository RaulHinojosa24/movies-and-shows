import { Link } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import DefaultPoster from '../../assets/default-poster.webp'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function CreditItem ({
  id, title, characters = [], jobs = [], releaseDate, voteAverage, voteCount, mediaType, posterPath, video, creditId, name, firstAirDate, episodeCount
}) {
  const { config } = useContext(rootContext)

  const prettyYear = new Date(releaseDate || firstAirDate).getFullYear()
  const prettyCharactersOrJobs = characters.length > 0
    ? characters
    : jobs.length > 0
      ? jobs
      : null
  const prettyType = mediaType === 'movie'
    ? video ? 'Corto' : 'Película'
    : 'Serie'
  const prettyUrl = mediaType === 'movie'
    ? '/movie/' + id
    : '/tv/' + id
  const prettyTitle = title || name
  const prettyPosterPath = posterPath && config
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[0] + posterPath
    : DefaultPoster

  return (
    <Link to={prettyUrl}>
      <div className='flex justify-between items-center py-2'>
        <div className='flex gap-2 items-center'>
          <img className='aspect-[2/3] object-cover w-10' loading='lazy' src={prettyPosterPath} alt={`Poster de ${prettyTitle}`} />
          <div>
            <h3 className='font-semibold'>{prettyTitle}</h3>
            <p className='text-sm'>
              {voteCount > 0 &&
                <VoteCard rating={voteAverage} precission={0} minimal title={`Valoración media de ${voteCount} votos`} />}
              <span className='opacity-75'>{prettyType}</span>
            </p>
            {prettyCharactersOrJobs &&
              <p className='opacity-75 text-sm'>...como {(prettyCharactersOrJobs).join(', ')}</p>}
          </div>
        </div>
        <div className='flex flex-col items-end'>
          {!isNaN(prettyYear) &&
            <span>{prettyYear}</span>}
          {mediaType === 'tv' && episodeCount > 0 &&
            <span>{episodeCount} episodios</span>}
        </div>
      </div>
    </Link>
  )
}
