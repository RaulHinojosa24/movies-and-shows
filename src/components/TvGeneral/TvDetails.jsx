import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function TvDetails ({
  episodeRunTime,
  inProduction,
  keywords,
  networks,
  originalLanguage,
  originalName,
  status,
  type
}) {
  const { config } = useContext(rootContext)

  const isoLanguage = config?.languages
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
        <SubSection title='Canales'>
          <ul>
            {networks.map(net => {
              const prettyPath = config?.images?.secure_base_url + config?.images?.logo_sizes[1] + net.logo_path

              return (
                <li key={net.id} className=''>
                  {/* TODO: NETWORK LINK  to={'/network/' + net.id}  */}
                  <span className='inline-block'>
                    {(!config || !net.logo_path) &&
                      <span className='underline'>{net.name}</span>}
                    {config && net.logo_path &&
                      <img src={prettyPath} alt={net.name + ' logo'} className='h-8 imageshadow' loading='lazy' />}
                  </span>
                </li>
              )
            }
            )}
          </ul>
        </SubSection>}
      {keywords.results.length > 0 &&
        <SubSection title='Palabras clave'>
          <ul className='flex gap-2 flex-wrap'>
            {keywords.results.map(({ id, name }) => (
              <li key={id}>
                <Link to={`/tv?keywords=${id}%25${name}`} className='inline-block dark:bg-neutral-900 px-2 py-1 rounded border-1 dark:border-neutral-800 text-sm'>{name}</Link>
              </li>
            ))}
          </ul>
        </SubSection>}
    </Section>
  )
}
