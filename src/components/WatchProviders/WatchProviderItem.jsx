import { useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'

export default function WatchProviderItem ({ provider }) {
  const {
    images: {
      secure_base_url: baseURL,
      logo_sizes: logoSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const {
    logo_path: logoPath,
    provider_name: providerName
  } = provider

  return (
    <li>
      <img loading='lazy' className='w-14 rounded aspect-square' src={baseURL + logoSizes[1] + logoPath} alt={'Logo de ' + providerName} title={providerName} />
    </li>
  )
}
