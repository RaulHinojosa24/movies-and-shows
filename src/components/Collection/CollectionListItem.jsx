import { Link } from 'react-router-dom'
import { formatLongDate } from '../../utils/utility'
import DefaultPosterImg from '../../assets/default-poster.png'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function CollectionListItem ({ id, title, posterPath, releaseDate, overview }) {
  const { config } = useContext(rootContext)

  const prettyPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[0] + posterPath
    : DefaultPosterImg

  return (
    <li className='flex rounded overflow-hidden custom-shadow'>
      <Link to={'/movie/' + id} className='contents'>
        <img className='aspect-[2/3] object-cover w-full max-w-24' src={prettyPath} alt={'Poster de la película ' + title} />
      </Link>
      <div className='flex flex-col justify-around p-4'>
        <div>
          <Link to={'/movie/' + id} className='inline-block'>
            <h3 className='font-semibold text-lg'>{title}</h3>
          </Link>
          <p className='dark:text-neutral-300 text-neutral-600'>{releaseDate ? formatLongDate(releaseDate) : 'Fecha desconocida'}</p>
        </div>
        {overview &&
          <p className='line-clamp-2'>{overview}</p>}
      </div>
    </li>
  )
}
