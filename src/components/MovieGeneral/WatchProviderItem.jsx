import { useRouteLoaderData } from 'react-router-dom'

export default function WatchProviderItem ({ provider }) {
  const {
    images: {
      secure_base_url: baseURL,
      logo_sizes: logoSizes
    }
  } = useRouteLoaderData('root')

  const {
    logo_path: logoPath,
    provider_name: providerName
  } = provider

  return (
    <li>
      <img className='w-14 rounded aspect-square' src={baseURL + logoSizes[1] + logoPath} alt={'Logo of ' + providerName} />
    </li>
  )
}
