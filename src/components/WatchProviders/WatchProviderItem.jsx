import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function WatchProviderItem ({
  provider: {
    logo_path: logoPath,
    provider_name: providerName
  }
}) {
  const { config } = useContext(rootContext)
  const prettyPath = config?.images?.secure_base_url + config?.images?.logo_sizes[1] + logoPath

  return (
    <li>
      {!config &&
        <p>|{providerName}|</p>}
      {config &&
        <img crossOrigin='anonymous' loading='lazy' className='w-14 rounded aspect-square' src={prettyPath} alt={`${providerName}'s logo`} title={providerName} />}
    </li>
  )
}
