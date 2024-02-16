import { useRouteLoaderData } from 'react-router-dom'
import Section from './UI/Section'
import SubSection from './UI/SubSection'
import { formatCurrency } from '../utils/utility'

export default function MovieMain () {
  const {
    budget,
    keywords,
    original_language: originalLanguage,
    original_title: originalTitle,
    revenue,
    status
  } = useRouteLoaderData('movie-details')
  console.log(keywords)
  return (
    <main>
      <Section title='Details'>
        <SubSection title='Estado'>{status}</SubSection>
        <SubSection title='Presupuesto'>{formatCurrency(budget)}</SubSection>
        <SubSection title='Ingresos'>{formatCurrency(revenue)}</SubSection>
        <SubSection title='Idioma original'>{originalLanguage}</SubSection>
        <SubSection title='Título original'>{originalTitle}</SubSection>
        <SubSection title='Palabras clave'>
          <ul>
            {keywords.keywords.map(word => (
              <li key={word.id}>{word.name}</li>
            ))}
          </ul>
        </SubSection>
      </Section>
      <Section>
        {}
      </Section>
    </main>
  )
}
