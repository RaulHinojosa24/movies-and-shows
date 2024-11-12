import { useState } from 'react'
import Select from '../UI/Select'
import Section from '../UI/Section'
import SortAscIcon from '../../icons/SortAscIcon'
import SortDescIcon from '../../icons/SortDescIcon'
import CreditsCast from './CreditsCast'
import CreditsCrew from './CreditsCrew'

const groupByOptions = [
  {
    value: 'date',
    label: 'Date'
  },
  {
    value: 'type',
    label: 'Type'
  }
]
const sortingOptions = [
  {
    value: 'year',
    label: 'Year'
  },
  {
    value: 'name',
    label: 'Title'
  },
  {
    value: 'popularity',
    label: 'Popularity'
  },
  {
    value: 'rating',
    label: 'Rating'
  }
]

export default function PersonCredits ({ cast, crew }) {
  const [groupBy, setGroupBy] = useState('default')
  const [sorting, setSorting] = useState('default')
  const [direction, setDirection] = useState('desc')

  const handleGroupByChange = (event) => setGroupBy(event.target.value)
  const handleSortingChange = (event) => setSorting(event.target.value)
  const toggleDirection = () => setDirection(prev => prev === 'asc' ? 'desc' : 'asc')

  return (
    <Section title='Credits' className='space-y-3'>
      <div className='grid grid-flow-col auto-cols-max gap-4'>
        <Select bgClass='bg-light dark:bg-dark' compact name='person-credits-group-by' label='Group by' options={groupByOptions} onChange={handleGroupByChange} />
        <Select bgClass='bg-light dark:bg-dark' compact name='person-credits-sorting' label='Sort by' options={sortingOptions} onChange={handleSortingChange} />
        <button className='rounded shadow shadow-colors aspect-square grid place-items-center self-stretch' onClick={toggleDirection}>
          {direction === 'asc'
            ? <SortAscIcon />
            : <SortDescIcon />}
        </button>
      </div>
      <CreditsCast groupBy={groupBy} sorting={sorting} direction={direction} cast={cast} />
      <CreditsCrew groupBy={groupBy} sorting={sorting} direction={direction} crew={crew} />
    </Section>
  )
}
