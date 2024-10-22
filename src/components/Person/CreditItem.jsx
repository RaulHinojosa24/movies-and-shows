import { Link } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import DefaultPoster from '../../assets/default-poster.webp'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import AdultTag from '../PageUI/AdultTag'

export default function CreditItem ({
  id, title, characters = [], jobs = [], releaseDate, voteAverage, voteCount, mediaType, posterPath, video, creditId, name, firstAirDate, episodeCount, adult
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
    <div className='flex justify-between items-center py-2'>
      <div className='flex gap-2 items-center'>
        <Link to={prettyUrl} className='contents'>
          <img crossOrigin='anonymous' className='aspect-[2/3] object-cover w-12' loading='lazy' src={prettyPosterPath} alt={`Poster de ${prettyTitle}`} />
        </Link>
        <div>
          <div>
            <Link to={prettyUrl} className='mr-2 inline-block'>
              <h3 className='font-semibold'>{prettyTitle}</h3>
            </Link>
            {adult &&
              <AdultTag />}
          </div>
          <div className='text-sm flex gap-2'>
            {voteCount > 0 &&
              <VoteCard rating={voteAverage} count={voteCount} minimal />}
            <span className='text-medium'>{prettyType}</span>
          </div>
          {prettyCharactersOrJobs &&
            <p className='text-medium text-sm'>...como {(prettyCharactersOrJobs).join(', ')}</p>}
        </div>
      </div>
      <div className='flex flex-col items-end'>
        {!isNaN(prettyYear) &&
          <span>{prettyYear}</span>}
        {mediaType === 'tv' && episodeCount > 0 &&
          <span>{episodeCount} episodios</span>}
      </div>
    </div>
  )
}
