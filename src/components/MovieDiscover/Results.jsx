import { useContext } from 'react'
import ResponsiveCard from '../UI/Cards/ResponsiveCard'
import { rootContext } from '../../context/root-context'
import DefaultPoster from '../../assets/default-poster.webp'
import { formatLongDate } from '../../utils/utility'
import VoteCard from '../PageUI/VoteCard'

export default function Results ({ results }) {
  const { config } = useContext(rootContext)

  return (
    <ul className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
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

        const prettyPosterPath = config && posterPath
          ? config?.images?.secure_base_url + config?.images?.poster_sizes[2] + posterPath
          : DefaultPoster
        const prettyTitle = title || originalTitle
        const prettyOriginalTitle = title !== originalTitle && originalTitle
        const prettyDate = formatLongDate(releaseDate)
        const prettyLink = `/movie/${id}`
        const voteCard = <VoteCard small rating={voteAverage} count={voteCount} />

        return <ResponsiveCard key={id} link={prettyLink} imageUrl={prettyPosterPath} title={prettyTitle} originalTitle={prettyOriginalTitle} bottomLeft={voteCard} overview={overview} isAdult={adult} tertiary={prettyDate} />
      })}
    </ul>
  )
}
