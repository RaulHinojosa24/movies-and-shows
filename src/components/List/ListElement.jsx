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
  const prettyRevenue = formatNumberSymbols(revenue, 1)
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
        <div className='custom-shadow-small md:table-row-group [&>:last-child]:pr-4 [&>:first-child]:pl-4 text-sm'>
          <Cell className='font-bold opacity-70'>{order}</Cell>
          <Cell className='w-full flex text-base'>
            <Link to={`/${mediaType}/${id}`} className='font-semibold'>{prettyTitle}</Link>
            {commentVisible && comment &&
              <span className='opacity-80 whitespace-break-spaces text-sm'> | {comment}</span>}
          </Cell>
          <Cell />
          <Cell>{prettyMediaType}</Cell>
          <Cell>
            <VoteCard small rating={voteAverage} />
          </Cell>
          <Cell>{prettyReleaseDate}</Cell>
          <Cell>
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
  return <div className={'md:table-cell align-middle whitespace-nowrap py-3 px-2 ' + className}>{children}</div>
}
