import MinMaxRangeInput from '../UI/MinMaxRangeInput'
import FilterItem from './FilterItem'

export default function DurationFilter ({ durationRange, durationMin, durationMax, setDurationMin, setDurationMax }) {
  return (
    <FilterItem title='Duration'>
      <MinMaxRangeInput min={durationRange[0]} max={durationRange[1]} low={durationMin} high={durationMax} setLow={setDurationMin} setHigh={setDurationMax} step={10} />
    </FilterItem>
  )
}
