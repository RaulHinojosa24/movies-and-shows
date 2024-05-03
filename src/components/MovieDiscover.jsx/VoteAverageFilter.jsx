import MinMaxRangeInput from '../UI/MinMaxRangeInput'
import FilterItem from './FilterItem'

export default function VoteAverageFilter ({ voteMin, voteMax, setVoteMin, setVoteMax }) {
  return (
    <FilterItem title='Valoración media'>
      <MinMaxRangeInput min={0} max={10} low={voteMin} high={voteMax} setLow={setVoteMin} setHigh={setVoteMax} step={0.1} />
    </FilterItem>
  )
}
