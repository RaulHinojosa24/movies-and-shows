import { Link, useRouteLoaderData } from 'react-router-dom'
import VoteCard from '../UI/VoteCard'
import { retrieveConfig } from '../../utils/utility'
import DefaultPoster from '../../assets/default-poster.png'

export default function CreditItem ({
  id, title, character, releaseDate, voteAverage, voteCount, mediaType, posterPath, video, creditId, name, firstAirDate, episodeCount
}) {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const date = new Date(releaseDate || firstAirDate)
  const year = date.getFullYear()
  console.log(year)
  const type = mediaType === 'movie'
    ? (video ? 'Corto' : 'Película')
    : 'Serie'
  const url = mediaType === 'movie'
    ? '/movie/' + id
    : ''
  const path = posterPath
    ? baseURL + posterSizes[0] + posterPath
    : DefaultPoster
  console.log(posterPath)

  return (
    <Link to={url}>
      <div className='flex justify-between items-center py-2'>
        <div className='flex gap-2 items-center'>
          <img className='aspect-[2/3] object-cover w-10' loading='lazy' src={path} alt='' />
          <div>
            <h3 className='font-semibold'>{title || name}</h3>
            <p className='text-sm'>
              {voteCount > 0 &&
                <VoteCard rating={voteAverage} precission={0} minimal title={`Valoración media de ${voteCount} votos`} />}
              <span className='opacity-75'>{type}</span>
            </p>
            {character &&
              <p className='opacity-75 text-sm'>...como {character}</p>}
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

const a = {
  id: 93514,
  poster_path: '/xpT3549LLOsS6oHFyGinFDDlA7m.jpg',
  first_air_date: '2019-09-12',
  name: 'La mente, en pocas palabras',
  vote_average: 7.432,
  character: 'Self - Narrator',
  credit_id: '5d7a12b7af43243b2196bd5e',
  episode_count: 10,
  media_type: 'tv'
}

const b = {
  id: 337404,
  poster_path: '/tNFBP5OTmKm7CTc5ptUwgmepd8G.jpg',
  release_date: '2021-05-26',
  title: 'Cruella',
  video: false,
  vote_average: 8,
  character: 'Estella / Cruella',
  credit_id: '59a50d419251412f02004a64',
  media_type: 'movie'
}
