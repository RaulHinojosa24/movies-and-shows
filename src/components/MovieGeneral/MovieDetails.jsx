import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/utility'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import { settingsContext } from '../../context/settings-context'

export default function MovieDetails ({
  budget,
  keywords,
  originalLanguage,
  originalTitle,
  revenue,
  status
}) {
  const { config } = useContext(rootContext)
  const { country, language } = useContext(settingsContext)

  const isoLanguage = config?.languages
    .find(l => l.iso_639_1 === originalLanguage)

  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const prettyLanguage = isoLanguage?.name || isoLanguage?.english_name || originalLanguage
  const prettyBudget = formatCurrency(budget, appLanguage)
  const prettyRevenue = formatCurrency(revenue, appLanguage)

  return (
    <Section title='Details' className='space-y-3'>
      <div className='grid grid-cols-2 md:grid-cols-1 gap-3'>
        {originalTitle &&
          <SubSection title='Original title'>
            {originalTitle}
            {prettyLanguage && <> ({prettyLanguage})</>}
          </SubSection>}
        {status &&
          <SubSection title='Status'>{status}</SubSection>}
        {budget > 0 &&
          <SubSection title='Budget'>{prettyBudget}</SubSection>}
        {revenue > 0 &&
          <SubSection title='Revenue'>{prettyRevenue}</SubSection>}
        {keywords.keywords.length > 0 &&
          <SubSection title='Keywords' className='col-span-2 md:col-span-1'>
            <ul className='flex gap-2 flex-wrap'>
              {keywords.keywords.map(({ id, name }) => (
                <li key={id}>
                  <Link to={`/movie?keywords=${id}%25${name}`} className='inline-block dark:bg-dark-2 px-2 py-1 rounded border-1 dark:border-dark-3 text-sm'>{name}</Link>
                </li>
              ))}
            </ul>
          </SubSection>}
      </div>
    </Section>
  )
}
