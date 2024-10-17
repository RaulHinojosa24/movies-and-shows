import ResultItem from './ResultItem'

export default function Results ({ results }) {
  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
      {results.map((result) => {
        const {
          id,
          original_title: originalTitle,
          poster_path: posterPath,
          release_date: releaseDate,
          title,
          vote_average: voteAverage,
          vote_count: voteCount,
          overview,
          adult
        } = result

        return <ResultItem key={id} id={id} posterPath={posterPath} releaseDate={releaseDate} title={title} originalTitle={originalTitle} voteAverage={voteAverage} voteCount={voteCount} overview={overview} adult={adult} />
      })}
    </div>
  )
}
