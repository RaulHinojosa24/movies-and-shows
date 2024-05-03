import RangeInput from '../UI/RangeInput'
import FilterItem from './FilterItem'

export default function VoteCountFilter ({ voteCount, setVoteCount }) {
  return (
    <FilterItem title='Número de votos'>
      <RangeInput
        min={0} max={500} step={50}
        value={voteCount}
        setValue={setVoteCount}
      />
    </FilterItem>
  )
}
