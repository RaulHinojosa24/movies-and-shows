import MinMaxRangeInput from '../UI/MinMaxRangeInput'
import FilterItem from './FilterItem'

export default function VoteAverageFilter ({ voteAverageRange, voteMin, voteMax, setVoteMin, setVoteMax }) {
  return (
    <FilterItem title='Average Rating'>
      <MinMaxRangeInput min={voteAverageRange[0]} max={voteAverageRange[1]} low={voteMin} high={voteMax} setLow={setVoteMin} setHigh={setVoteMax} step={1} />
    </FilterItem>
  )
}
