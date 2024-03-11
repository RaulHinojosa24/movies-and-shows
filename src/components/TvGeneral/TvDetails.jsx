import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import { retrieveConfig } from '../../utils/utility'

export default function TvDetails () {
  const {
    episode_run_time: episodeRunTime,
    in_production: inProduction,
    keywords,
    networks,
    original_language: originalLanguage,
    original_name: originalName,
    status,
    type
  } = useRouteLoaderData('tv-details')
  const {
    images: {
      logo_sizes: logoSizes,
      secure_base_url: baseURL
    },
    languages
  } = retrieveConfig(useRouteLoaderData('root'))

  const isoLanguage = languages
    .find(l => l.iso_639_1 === originalLanguage)
  const prettyLanguage = isoLanguage?.name || isoLanguage?.english_name || originalLanguage

  return (
    <Section title='Detalles' className='space-y-2'>
      {originalName &&
        <SubSection title='Título original'>
          {originalName}
          {prettyLanguage && <> ({prettyLanguage})</>}
        </SubSection>}
      {status &&
        <SubSection title='Estado'>
          {status}
          {inProduction && <span> (en producción)</span>}
        </SubSection>}
      {episodeRunTime.length > 0 &&
        <SubSection title='Duración episodios'>
          {episodeRunTime.join(' / ')} min.
        </SubSection>}
      {type &&
        <SubSection title='Tipo'>{type}</SubSection>}
      {networks.length > 0 &&
        <SubSection title='Canal'>
          <ul>
            {networks.map(net => (
              <li key={net.id} className=''>
                <Link to={'/network/' + net.id} className='inline-block'>
                  {net.logo_path &&
                    <img src={baseURL + logoSizes[1] + net.logo_path} alt='' className='bg-white p-1 h-8' />}
                  {!net.logo_path &&
                    <span className='underline'>{net.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </SubSection>}
      {keywords.results.length > 0 &&
        <SubSection title='Palabras clave'>
          <ul className='flex gap-2 flex-wrap'>
            {keywords.results.map(({ id, name }) => (
              <li key={id} className='dark:bg-neutral-900 px-2 py-1 rounded border-1 dark:border-neutral-800 text-sm'>{name}</li>
            ))}
          </ul>
        </SubSection>}
    </Section>
  )
}
