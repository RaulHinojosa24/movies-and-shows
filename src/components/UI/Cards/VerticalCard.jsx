import { Link } from 'react-router-dom'
import AdultTag from '../../PageUI/AdultTag'
import VerticalCardSkeleton from '../../Skeletons/VerticalCardSkeleton'

export default function VerticalCard ({ fetching, link, imageUrl, title, secondary, tertiary, bottomLeft, bottomRight, isAdult }) {
  return (
    <>
      {!fetching &&
        <article className='w-32 md:w-36 h-full rounded overflow-hidden shadow shadow-colors'>
          <div className='relative'>
            <Link to={link}>
              <img crossOrigin='anonymous' className='w-full object-cover aspect-[2/3]' src={imageUrl} alt={`Imágen de ${title}`} loading='lazy' />
            </Link>
            {bottomLeft &&
              <div className='absolute bottom-2 left-2'>
                {bottomLeft}
              </div>}
            {bottomRight &&
              <div className='absolute bottom-2 right-2'>
                {bottomRight}
              </div>}
          </div>
          <div className='py-2 px-3'>
            <div>
              <h3 className='inline-block mr-2 no-swiping font-semibold'>
                <Link to={link}>
                  {title}
                </Link>
              </h3>
              {isAdult &&
                <AdultTag />}
            </div>
            {secondary &&
              <div className='no-swiping'>{secondary}</div>}
            {tertiary &&
              <div className='text-medium'>{tertiary}</div>}
          </div>
        </article>}
      {fetching &&
        <VerticalCardSkeleton />}
    </>
  )
}
