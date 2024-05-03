import MinMaxRangeInput from '../UI/MinMaxRangeInput'
import FilterItem from './FilterItem'

export default function DurationFilter ({ durationMin, durationMax, setDurationMin, setDurationMax }) {
  return (
    <FilterItem title='Duración'>
      <MinMaxRangeInput min={0} max={400} low={durationMin} high={durationMax} setLow={setDurationMin} setHigh={setDurationMax} step={1} />
    </FilterItem>
  )
}
