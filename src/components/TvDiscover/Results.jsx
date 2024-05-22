import { Await, useLoaderData } from 'react-router-dom'
import ResultItem from './ResultItem'
import { Suspense } from 'react'
import DiscoverResultsSkeleton from '../Skeletons/DiscoverResultsSkeleton'

export default function Results () {
  const {
    data: loaderData
  } = useLoaderData()

  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
      <Suspense fallback={<Fallback />}>
        <Await resolve={loaderData}>
          {({ results }) => {
            return results.map((result) => {
              const {
                id,
                original_name: originalName,
                poster_path: posterPath,
                first_air_date: firstAirDate,
                name,
                vote_average: voteAverage,
                vote_count: voteCount,
                overview
              } = result

              return <ResultItem key={id} id={id} posterPath={posterPath} firstAirDate={firstAirDate} name={name} originalName={originalName} voteAverage={voteAverage} voteCount={voteCount} overview={overview} />
            })
          }}
        </Await>
      </Suspense>

    </div>
  )
}

function Fallback () {
  return Array(20).fill().map((_, i) => <DiscoverResultsSkeleton key={i} />)
}
