import RangeInput from '../UI/RangeInput'
import FilterItem from './FilterItem'

export default function VoteCountFilter ({ voteCountRange, voteCount, setVoteCount }) {
  return (
    <FilterItem title='Número de votos'>
      <RangeInput
        min={voteCountRange[0]} max={voteCountRange[1]} step={50}
        value={voteCount}
        setValue={setVoteCount}
      />
    </FilterItem>
  )
}
