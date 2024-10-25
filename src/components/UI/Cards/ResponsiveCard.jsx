import { Link } from 'react-router-dom'
import AdultTag from '../../PageUI/AdultTag'

export default function ResponsiveCard ({ imageUrl, title, originalTitle, tertiary, isAdult, overview, bottomLeft, secondary, link }) {
  return (
    <li className='shadow shadow-colors rounded overflow-hidden flex md:flex-col'>
      <div className='relative shrink-0'>
        <Link to={link} className='contents'>
          <img crossOrigin='anonymous' className='w-24 md:w-full h-full object-cover aspect-[2/3]' src={imageUrl} alt={`Imágen de ${title}`} loading='lazy' />
        </Link>
        {bottomLeft &&
          <div className='hidden md:block absolute bottom-2 left-2'>
            {bottomLeft}
          </div>}
      </div>
      <div className='py-2 px-3 space-y-1'>
        <div>
          <h3 className='inline-block mr-2 font-semibold'>
            <Link to={link}>
              {title}
            </Link>
          </h3>
          {isAdult &&
            <AdultTag />}
          {originalTitle &&
            <p className='md:hidden text-medium font-semibold -mt-1'>{originalTitle}</p>}
        </div>
        {tertiary &&
          <p className='text-medium'>{tertiary}</p>}
        {overview &&
          <p className='md:hidden line-clamp-2'>{overview}</p>}
        {secondary &&
          secondary}
      </div>
    </li>
  )
}
