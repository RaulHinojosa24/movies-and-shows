import DefaultPoster from '../../assets/default-poster.png'
import { formatLongDate, formatNumberSymbols, formatRuntime, retrieveConfig } from '../../utils/utility'
import { Link, useRouteLoaderData } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'

export default function ListElement ({ id, order, title, originalTitle, posterPath, mediaType, comment = '', releaseDate, voteAverage, revenue, runtime, posterMode, commentVisible }) {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyPosterPath = posterPath ? baseURL + posterSizes[2] + posterPath : DefaultPoster
  const prettyMediaType = mediaType === 'movie' ? 'Película' : 'Serie de TV'
  const prettyReleaseDate = formatLongDate(releaseDate)
  const prettyRevenue = '$' + formatNumberSymbols(revenue, 1)
  const prettyRuntime = formatRuntime(runtime)
  const prettyTitle = title || originalTitle

  return (
    <>
      {/* {posterMode &&
        <div>
          <h2>{title}</h2>
          <span>{prettyMediaType}</span>
          {commentVisible &&
            <span>{comment}</span>}
          <span>{prettyReleaseDate}</span>
          <VoteCard small rating={voteAverage} />
        </div>} */}
      {!posterMode &&
        <div className='
          custom-shadow-small rounded text-sm py-2 px-4
          md:table-row-group
          [&>:first-child]:pl-4 [&>:last-child]:pr-4 [&>:last-child]:rounded-r [&>:first-child]:rounded-l [&>:first-child]:border-l-1 [&>:last-child]:border-r-1
        '
        >
          <Cell className='font-bold md:visible hidden'><span className='opacity-75'>{order}</span></Cell>
          <Cell className='w-full flex text-base md:flex-row flex-col'>
            <Link to={`/${mediaType}/${id}`} className='font-semibold whitespace-normal'>{prettyTitle}</Link>
            {commentVisible && comment &&
              <span className='opacity-80 whitespace-break-spaces text-sm md:before:content-["_|_"]'>{comment}</span>}
          </Cell>
          <div className='md:contents md:border-inherit md:m-0 mt-3 flex flex-wrap items-center gap-y-2 gap-x-3'>
            <Cell>{prettyMediaType}</Cell>
            <Cell>
              <VoteCard small rating={voteAverage} />
            </Cell>
            <Cell>{prettyReleaseDate}</Cell>
          </div>
          <Cell className='hidden md:visible'>
            {mediaType === 'movie' &&
              <div className='flex gap-3'>
                <span>{prettyRevenue}</span>
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
