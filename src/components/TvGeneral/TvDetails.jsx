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
    <Section title='Details'>
      <div className='grid grid-cols-2 md:grid-cols-1 gap-3'>
        {originalName &&
          <SubSection title='Original name'>
            {originalName}
            {prettyLanguage && <> ({prettyLanguage})</>}
          </SubSection>}
        {status &&
          <SubSection title='Status'>
            {status}
            {inProduction && <span> (in production)</span>}
          </SubSection>}
        {episodeRunTime.length > 0 &&
          <SubSection title='Episode duration'>
            {episodeRunTime.join(' / ')} min.
          </SubSection>}
        {type &&
          <SubSection title='Type'>{type}</SubSection>}
        {networks.length > 0 &&
          <SubSection title='Networks' className='col-span-2 md:col-span-1'>
            <ul className='flex gap-2 flex-wrap md:flex-col'>
              {networks.map(net => {
                const prettyPath = config?.images?.secure_base_url + config?.images?.logo_sizes[1] + net.logo_path

                return (
                  <li key={net.id}>
                    {/* TODO: NETWORK LINK  to={'/network/' + net.id}  */}
                    <span className='inline-block'>
                      {(!config || !net.logo_path) &&
                        <span className='underline'>{net.name}</span>}
                      {config && net.logo_path &&
                        <img crossOrigin='anonymous' src={prettyPath} alt={`${net.name}'s logo`} className='h-8 imageshadow' loading='lazy' />}
                    </span>
                  </li>
                )
              }
              )}
            </ul>
          </SubSection>}
        {keywords.results.length > 0 &&
          <SubSection title='Keywords' className='col-span-2 md:col-span-1'>
            <ul className='flex gap-2 flex-wrap'>
              {keywords.results.map(({ id, name }) => (
                <li key={id}>
                  <Link to={`/tv?keywords=${id}%25${name}`} className='inline-block dark:bg-dark-2 px-2 py-1 rounded border-1 dark:border-dark-3 text-sm'>{name}</Link>
                </li>
              ))}
            </ul>
          </SubSection>}
      </div>
    </Section>
  )
}
