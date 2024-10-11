import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/utility'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function MovieDetails ({
  budget,
  keywords,
  originalLanguage,
  originalTitle,
  revenue,
  status
}) {
  const { config } = useContext(rootContext)

  const isoLanguage = config?.languages
    .find(l => l.iso_639_1 === originalLanguage)

  const prettyLanguage = isoLanguage?.name || isoLanguage?.english_name || originalLanguage
  const prettyBudget = formatCurrency(budget)
  const prettyRevenue = formatCurrency(revenue)

  return (
    <Section title='Detalles' className='space-y-3'>
      {originalTitle &&
        <SubSection title='Título original'>
          {originalTitle}
          {prettyLanguage && <> ({prettyLanguage})</>}
        </SubSection>}
      {status &&
        <SubSection title='Estado'>{status}</SubSection>}
      {budget > 0 &&
        <SubSection title='Presupuesto'>{prettyBudget}</SubSection>}
      {revenue > 0 &&
        <SubSection title='Ingresos'>{prettyRevenue}</SubSection>}
      {keywords.keywords.length > 0 &&
        <SubSection title='Palabras clave'>
          <ul className='flex gap-2 flex-wrap'>
            {keywords.keywords.map(({ id, name }) => (
              <li key={id}>
                <Link to={`/movie?keywords=${id}%25${name}`} className='inline-block dark:bg-dark-2 px-2 py-1 rounded border-1 dark:border-dark-3 text-sm'>{name}</Link>
              </li>
            ))}
          </ul>
        </SubSection>}
    </Section>
  )
}
