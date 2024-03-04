import { useState } from 'react'
import Section from '../UI/Section'
import CreditsCast from './CreditsCast'
import CreditsCrew from './CreditsCrew'
import Select from '../UI/Select'

const groupByOptions = [
  {
    value: 'date',
    label: 'Fecha'
  },
  {
    value: 'type',
    label: 'Tipo'
  }
]
const sortingOptions = [
  {
    value: 'year',
    label: 'Año'
  },
  {
    value: 'name',
    label: 'Título'
  }
]

export default function PersonCredits () {
  const [groupBy, setGroupBy] = useState('default')
  const [sorting, setSorting] = useState('default')

  const handleGroupByChange = (event) => setGroupBy(event.target.value)
  const handleSortingChange = (event) => setSorting(event.target.value)

  return (
    <Section title='Créditos' className='space-y-3'>
      <div className='w-fit flex gap-4'>
        <Select name='person-credits-group-by' label='Agrupar por' options={groupByOptions} onChange={handleGroupByChange} />
        <Select name='person-credits-sorting' label='Ordenar por' options={sortingOptions} onChange={handleSortingChange} />
      </div>
      <CreditsCast groupBy={groupBy} sorting={sorting} />
      <CreditsCrew groupBy={groupBy} sorting={sorting} />
    </Section>
  )
}
