import { Link } from 'react-router-dom'
import AdultTag from '../../PageUI/AdultTag'

export default function HorizontalCard ({ link, imageUrl, title, originalTitle, secondary, tertiary, isAdult, aside }) {
  return (
    <li className='shadow shadow-colors rounded overflow-hidden flex w-full'>
      <div className='relative shrink-0'>
        <Link to={link} className='contents'>
          <img crossOrigin='anonymous' className='w-24 h-full object-cover aspect-[2/3]' src={imageUrl} alt={`Picture of ${title}`} loading='lazy' />
        </Link>
      </div>
      <div className='py-3 px-4 flex gap-2'>
        <div className='flex flex-col gap-1 justify-center'>
          <div>
            <h3 className='inline-block mr-2 text-lg font-semibold'>
              <Link to={link}>
                {title}
              </Link>
            </h3>
            {isAdult &&
              <AdultTag />}
            {originalTitle &&
              <p className='text-medium font-semibold -mt-1'>{originalTitle}</p>}
          </div>
          {tertiary &&
            <p className='text-medium'>{tertiary}</p>}
          {secondary &&
            secondary}
        </div>
        {aside &&
          aside}
      </div>
    </li>
  )
}
