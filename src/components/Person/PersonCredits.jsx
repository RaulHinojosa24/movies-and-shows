import Section from '../UI/Section'
import CreditsCast from './CreditsCast'
import CreditsCrew from './CreditsCrew'

export default function PersonCredits () {
  return (
    <Section title='Créditos' className='space-y-3'>
      <CreditsCast />
      <CreditsCrew />
    </Section>
  )
}
