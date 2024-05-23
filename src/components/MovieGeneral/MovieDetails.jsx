import { useRouteLoaderData } from 'react-router-dom'
import { formatCurrency, retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import { useEffect, useState } from 'react'

export default function MovieDetails ({
  budget,
  keywords,
  originalLanguage,
  originalTitle,
  revenue,
  status
}) {
  const [prettyLanguage, setPrettyLanguage] = useState('')
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const prettyBudget = formatCurrency(budget)
  const prettyRevenue = formatCurrency(revenue)

  useEffect(() => {
    loaderConfig.then(({ languages }) => {
      const isoLanguage = languages
        .find(l => l.iso_639_1 === originalLanguage)
      setPrettyLanguage(isoLanguage?.name || isoLanguage?.english_name || originalLanguage)
    })
  })

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
              <li key={id} className='dark:bg-neutral-900 px-2 py-1 rounded border-1 dark:border-neutral-800 text-sm'>{name}</li>
            ))}
          </ul>
        </SubSection>}
    </Section>
  )
}
