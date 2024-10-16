import { formatNumberSymbols, generateVoteColor, roundDecimals } from '../../utils/utility'

export default function CollectionSummary ({ parts }) {
  const nMovies = parts?.length || 0
  const votedMovies = (parts || []).filter(m => m.vote_count > 0).length
  const totalVotes = parts?.reduce((acc, curr) => acc + curr.vote_count, 0)
  const prettyTotalVotes = formatNumberSymbols(totalVotes)
  const voteAvg = parts?.reduce((acc, curr) => acc + curr.vote_average, 0)
  const prettyVoteAvg = totalVotes ? roundDecimals(voteAvg / votedMovies, 1) : 0
  const color = totalVotes ? generateVoteColor(prettyVoteAvg / 10) : ''

  return (
    <section className='flex justify-around items-center flex-wrap'>
      <SummaryItem data={nMovies} text='películas' />
      <SummaryItem style={{ color }} data={prettyVoteAvg} text='puntuación media' />
      <SummaryItem data={prettyTotalVotes} text='valoraciones' />
    </section>
  )
}

function SummaryItem ({ data, text, style }) {
  return (
    <div className='flex flex-col items-center justify-center py-6 px-10 h-fit rounded shadow-md shadow-colors'>
      <span className='text-4xl font-semibold' style={style}>{data}</span>
      <p className='w-min text-center'>{text}</p>
    </div>
  )
}
