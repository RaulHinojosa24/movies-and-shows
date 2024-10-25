import { useContext } from 'react'
import ResponsiveCard from '../UI/Cards/ResponsiveCard'
import { rootContext } from '../../context/root-context'
import DefaultPoster from '../../assets/default-poster.webp'
import { formatLongDate } from '../../utils/utility'
import VoteCard from '../PageUI/VoteCard'

export default function Results ({ results }) {
  const { config } = useContext(rootContext)

  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
      {results.map((result) => {
        const {
          id,
          original_name: originalName,
          poster_path: posterPath,
          first_air_date: firstAirDate,
          name,
          vote_average: voteAverage,
          vote_count: voteCount,
          overview,
          adult
        } = result

        const prettyPosterPath = config && posterPath
          ? config?.images?.secure_base_url + config?.images?.poster_sizes[2] + posterPath
          : DefaultPoster
        const prettyName = name || originalName
        const prettyOriginalName = name !== originalName && originalName
        const prettyDate = formatLongDate(firstAirDate)
        const prettyLink = `/tv/${id}`
        const voteCard = <VoteCard small rating={voteAverage} count={voteCount} />

        return <ResponsiveCard key={id} link={prettyLink} imageUrl={prettyPosterPath} title={prettyName} originalTitle={prettyOriginalName} bottomLeft={voteCard} overview={overview} isAdult={adult} tertiary={prettyDate} />
      })}
    </div>
  )
}
