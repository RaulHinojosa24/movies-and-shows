import FilterItem from './FilterItem'

export default function AdultFilter ({ includeAdult, setIncludeAdult }) {
  return (
    <FilterItem>
      <input type='checkbox' name='include_adult' id='include_adult' checked={includeAdult} onChange={() => setIncludeAdult(p => !p)} />
      <label htmlFor='include_adult'> Incluír contenido adulto</label>
    </FilterItem>
  )
}
