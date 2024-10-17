import DefaultPoster from '../../assets/default-poster.webp'
import { formatLongDate, formatNumberSymbols, formatRuntime } from '../../utils/utility'
import { Link } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import { useContext } from 'react'
import MediaType from '../PageUI/MediaType'
import { rootContext } from '../../context/root-context'
import AdultTag from '../PageUI/AdultTag'

export default function ListElement ({ id, order, title, originalTitle, posterPath, mediaType, comment = '', releaseDate, voteAverage, voteCount, revenue, runtime, posterMode, commentVisible, adult }) {
  const { config } = useContext(rootContext)

  const prettyPosterPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[3] + posterPath
    : DefaultPoster
  const prettyRevenue = '$' + formatNumberSymbols(revenue, 1)
  const prettyRuntime = formatRuntime(runtime)
  const prettyTitle = title || originalTitle

  return (
    <>
      {posterMode &&
        <div className='shadow shadow-colors rounded overflow-hidden max-w-56 w-full text-sm'>
          <div className='relative'>
            <Link to={`/${mediaType}/${id}`}>
              <img crossOrigin='anonymous' className='w-full object-cover aspect-[2/3]' src={prettyPosterPath} alt={`Poster de la película ${prettyTitle}`} loading='lazy' />
            </Link>
            <MediaType mediaType={mediaType} isPoster={posterMode} className='absolute bottom-2 right-2' />
            <VoteCard small rating={voteAverage} count={voteCount} className='absolute bottom-2 left-2' />
            <span className='absolute left-0 top-0 text-medium font-bold text-lg px-2 dark:bg-dark bg-light'>{order}</span>
          </div>
          <div className='p-3 flex flex-col gap-2'>
            <div>
              <h3 className='inline-block mr-2'>
                <Link to={`/${mediaType}/${id}`} className='font-semibold text-base mr-2'>
                  {prettyTitle}
                </Link>
                <ReleaseDate date={releaseDate} posterMode={posterMode} className='' />
              </h3>
              {adult &&
                <AdultTag />}
            </div>
            {commentVisible && comment &&
              <span>{comment}</span>}
            {mediaType === 'movie' &&
              <div className='flex justify-between text-medium'>
                {revenue &&
                  <span>{prettyRevenue}</span>}
                {runtime &&
                  <span>{prettyRuntime}</span>}
              </div>}
          </div>
        </div>}
      {!posterMode &&
        <div className='
          shadow shadow-colors rounded text-sm py-2 px-4
          md:table-row-group
          [&>:first-child]:pl-4 [&>:last-child]:pr-4 [&>:last-child]:rounded-r [&>:first-child]:rounded-l [&>:first-child]:border-l-1 [&>:last-child]:border-r-1
        '
        >
          <Cell className='font-bold md:visible hidden'><span className='text-medium'>{order}</span></Cell>
          <Cell className='w-full flex md:flex-row flex-col'>
            <div className='inline-block'>
              <h3 className='text-base mr-2 inline-block'>
                <Link to={`/${mediaType}/${id}`} className='font-semibold whitespace-normal'>
                  {prettyTitle}
                </Link>
              </h3>
              {adult &&
                <AdultTag />}
            </div>
            {commentVisible && comment &&
              <span className='ml-2 text-medium whitespace-break-spaces'>{comment}</span>}
          </Cell>
          <div className='md:contents md:border-inherit md:m-0 mt-3 flex flex-wrap items-center gap-y-2 gap-x-3'>
            <Cell>
              <MediaType mediaType={mediaType} isPoster={posterMode} />
            </Cell>
            <Cell>
              <VoteCard small rating={voteAverage} count={voteCount} />
            </Cell>
            <Cell>
              <ReleaseDate date={releaseDate} posterMode={posterMode} />
            </Cell>
          </div>
          <Cell className='hidden md:visible'>
            {mediaType === 'movie' &&
              <div className='flex gap-3 text-medium'>
                {revenue &&
                  <span>{prettyRevenue}</span>}
                {runtime &&
                  <span>{prettyRuntime}</span>}
              </div>}
          </Cell>
        </div>}
    </>
  )
}

function Cell ({ children, className = '' }) {
  return <div className={'md:table-cell md:border-y-1 md:border-inherit align-middle whitespace-nowrap md:py-3 md:px-2 ' + className}>{children}</div>
}

function ReleaseDate ({ date, posterMode, className = '' }) {
  const shortDate = new Date(date).getFullYear()
  const longDate = formatLongDate(date)

  return <span className={posterMode ? 'italic opacity-70 font-semibold' : 'rounded-full w-fit px-4 py-1 bg-indigo-900 text-white ' + className}>{posterMode ? shortDate : longDate}</span>
}
