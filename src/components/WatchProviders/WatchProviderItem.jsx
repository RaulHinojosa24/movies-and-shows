import { Await, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import { Suspense } from 'react'

export default function WatchProviderItem ({ provider }) {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))

  const {
    logo_path: logoPath,
    provider_name: providerName
  } = provider

  return (
    <li>
      <Suspense fallback={<p>&lt;{providerName}&gt;</p>}>
        <Await resolve={loaderConfig}>
          {({
            images: {
              secure_base_url: baseURL,
              logo_sizes: logoSizes
            }
          }) => <img loading='lazy' className='w-14 rounded aspect-square' src={baseURL + logoSizes[1] + logoPath} alt={'Logo de ' + providerName} title={providerName} />}
        </Await>
      </Suspense>

    </li>
  )
}
