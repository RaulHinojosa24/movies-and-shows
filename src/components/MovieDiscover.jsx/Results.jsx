import { useLoaderData } from 'react-router-dom'
import ResultItem from './ResultItem'

export default function Results () {
  const {
    results
    // total_results: totalResults,
    // page,
    // total_pages: totalPages
  } = useLoaderData()

  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
      {results.map((result) => {
        const {
          id,
          original_title: originalTitle,
          poster_path: posterPath,
          release_date: releaseDate,
          title,
          vote_average: voteAverage,
          vote_count: voteCount
        } = result

        return <ResultItem key={id} id={id} posterPath={posterPath} releaseDate={releaseDate} title={title} originalTitle={originalTitle} voteAverage={voteAverage} voteCount={voteCount} posterMode />
      })}
    </div>
  )
}
