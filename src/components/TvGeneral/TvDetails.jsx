import { Await, Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import { retrieveConfig } from '../../utils/utility'
import { Suspense, useEffect, useState } from 'react'

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
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyLanguage, setPrettyLanguage] = useState('...')

  useEffect(() => {
    loaderConfig.then(({ languages }) => {
      const isoLanguage = languages
        .find(l => l.iso_639_1 === originalLanguage)
      setPrettyLanguage(isoLanguage?.name || isoLanguage?.english_name || originalLanguage)
    })
  }, [loaderConfig, originalLanguage])

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
            {networks.map(net => {
              return (
                <li key={net.id} className=''>
                  <Link to={'/network/' + net.id} className='inline-block'>
                    <Suspense fallback={<span className='underline'>{net.name}</span>}>
                      <Await resolve={loaderConfig}>
                        {({
                          images: {
                            logo_sizes: logoSizes,
                            secure_base_url: baseURL
                          }
                        }) => {
                          return (
                            <>{net.logo_path &&
                              <img src={baseURL + logoSizes[1] + net.logo_path} alt='' className='bg-white p-1 h-8' />}
                              {!net.logo_path &&
                                <span className='underline'>{net.name}</span>}
                            </>
                          )
                        }}
                      </Await>
                    </Suspense>
                  </Link>
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
