import { useRouteLoaderData } from 'react-router-dom'
import { formatCurrency, retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'

export default function MovieDetails () {
  const {
    budget,
    keywords,
    original_language: originalLanguage,
    original_title: originalTitle,
    revenue,
    status
  } = useRouteLoaderData('movie-details')

  const { languages } = retrieveConfig(useRouteLoaderData('root'))
  const isoLanguage = languages
    .find(l => l.iso_639_1 === originalLanguage)
  const prettyLanguage = isoLanguage?.name || isoLanguage?.english_name || originalLanguage
  const prettyBudget = formatCurrency(budget)
  const prettyRevenue = formatCurrency(revenue)

  return (
    <Section title='Detalles' className='space-y-2'>
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
              <li key={id} className='bg-neutral-900 px-2 py-1 rounded border-1 border-neutral-800 text-sm'>{name}</li>
            ))}
          </ul>
        </SubSection>}
    </Section>
  )
}
