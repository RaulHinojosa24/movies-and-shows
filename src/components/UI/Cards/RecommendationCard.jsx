import { Link } from 'react-router-dom'
import AdultTag from '../../PageUI/AdultTag'

export default function RecommendationCard ({ aside, imageUrl, isAdult, link, primary, title }) {
  return (
    <article className='w-72 md:w-80 h-full rounded overflow-hidden shadow shadow-colors'>
      <div className='relative'>
        <Link to={link}>
          <img crossOrigin='anonymous' className='w-full object-cover aspect-video' src={imageUrl} alt={`Imágen de ${title}`} loading='lazy' />
        </Link>
      </div>
      <div className='py-2 px-3 flex justify-between gap-2'>
        <div>
          <h3 className='no-swiping font-semibold text-base inline-block mr-2'>
            <Link to={link}>
              {primary}
            </Link>
          </h3>
          {isAdult &&
            <AdultTag />}
        </div>
        {aside &&
          aside}
      </div>
    </article>
  )
}
