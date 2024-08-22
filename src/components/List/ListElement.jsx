import DefaultPoster from '../../assets/default-poster.webp'
import { formatLongDate, formatNumberSymbols, formatRuntime } from '../../utils/utility'
import { Link } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import { useContext } from 'react'
import MediaType from '../PageUI/MediaType'
import { rootContext } from '../../context/root-context'

export default function ListElement ({ id, order, title, originalTitle, posterPath, mediaType, comment = '', releaseDate, voteAverage, voteCount, revenue, runtime, posterMode, commentVisible }) {
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
        <div className='custom-shadow-small rounded overflow-hidden max-w-56 w-full text-sm'>
          <Link to={`/${mediaType}/${id}`}>
            <div className='relative'>
              <img className='w-full object-cover aspect-[2/3]' src={prettyPosterPath} alt={`Poster de la película ${prettyTitle}`} loading='lazy' />
              <MediaType mediaType={mediaType} isPoster={posterMode} className='absolute bottom-2 right-2' />
              <VoteCard small rating={voteAverage} count={voteCount} className='absolute bottom-2 left-2' />
            </div>
          </Link>
          <div className='p-3 flex flex-col gap-2'>
            <Link to={`/${mediaType}/${id}`} className='font-semibold text-base'>
              <h3 className='inline'>{prettyTitle} </h3>
              <ReleaseDate date={releaseDate} posterMode={posterMode} className='' />
            </Link>
            {commentVisible && comment &&
              <span>{comment}</span>}
            {mediaType === 'movie' &&
              <div className='flex justify-between opacity-75'>
                {revenue &&
                  <span>{prettyRevenue}</span>}
                {runtime &&
                  <span>{prettyRuntime}</span>}
              </div>}
          </div>
        </div>}
      {!posterMode &&
        <div className='
          custom-shadow-small rounded text-sm py-2 px-4
          md:table-row-group
          [&>:first-child]:pl-4 [&>:last-child]:pr-4 [&>:last-child]:rounded-r [&>:first-child]:rounded-l [&>:first-child]:border-l-1 [&>:last-child]:border-r-1
        '
        >
          <Cell className='font-bold md:visible hidden'><span className='opacity-75'>{order}</span></Cell>
          <Cell className='w-full flex md:flex-row flex-col'>
            <Link to={`/${mediaType}/${id}`} className='font-semibold whitespace-normal'><h3 className='text-base inline'>{prettyTitle}</h3></Link>
            {commentVisible && comment &&
              <span className='opacity-80 whitespace-break-spaces md:before:content-["_|_"]'>{comment}</span>}
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
              <div className='flex gap-3 opacity-75'>
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
