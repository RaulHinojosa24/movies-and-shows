import { useRouteLoaderData } from 'react-router-dom'
import { formatNumberSymbols, generateVoteColor, roundDecimals } from '../../utils/utility'

export default function CollectionSummary () {
  const { parts } = useRouteLoaderData('collection-details')

  const nMovies = parts?.length || 0
  const votedMovies = (parts || []).filter(m => m.vote_count > 0).length
  const totalVotes = formatNumberSymbols(parts?.reduce((acc, curr) => acc + curr.vote_count, 0))
  const voteAvg = roundDecimals(parts?.reduce((acc, curr) => acc + curr.vote_average, 0) / votedMovies, 1)
  const color = generateVoteColor(voteAvg / 10)

  return (
    <section className='flex justify-around flex-wrap'>
      <SummaryItem data={nMovies} text='películas' />
      <SummaryItem style={{ color }} data={voteAvg} text='puntuación media' />
      <SummaryItem data={totalVotes} text='votaciones' />
    </section>
  )
}

function SummaryItem ({ data, text, style }) {
  return (
    <div className='flex flex-col items-center justify-start min-w-fit w-fit min-h-full py-6 px-10 custom-shadow'>
      <span className='text-4xl font-semibold' style={style}>{data}</span>
      <p className='w-min text-center'>{text}</p>
    </div>
  )
}