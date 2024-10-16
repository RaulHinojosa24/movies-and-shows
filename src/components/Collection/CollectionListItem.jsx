import { Link } from 'react-router-dom'
import { formatLongDate } from '../../utils/utility'
import DefaultPosterImg from '../../assets/default-poster.webp'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import AdultTag from '../PageUI/AdultTag'

export default function CollectionListItem ({ id, title, posterPath, releaseDate, overview, adult }) {
  const { config } = useContext(rootContext)

  const prettyPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[0] + posterPath
    : DefaultPosterImg

  return (
    <li className='flex rounded overflow-hidden shadow shadow-colors'>
      <Link to={'/movie/' + id} className='contents'>
        <img crossOrigin='anonymous' loading='lazy' className='aspect-[2/3] object-cover w-full max-w-24' src={prettyPath} alt={'Poster de la película ' + title} />
      </Link>
      <div className='flex flex-col justify-around p-4'>
        <div>
          <div>
            <h3 className='font-semibold text-lg inline-block mr-2'>
              <Link to={'/movie/' + id}>
                {title}
              </Link>
            </h3>
            {adult &&
              <AdultTag />}
          </div>
          <p className='text-medium'>{releaseDate ? formatLongDate(releaseDate) : 'Fecha desconocida'}</p>
        </div>
        {overview &&
          <p className='line-clamp-2'>{overview}</p>}
      </div>
    </li>
  )
}
