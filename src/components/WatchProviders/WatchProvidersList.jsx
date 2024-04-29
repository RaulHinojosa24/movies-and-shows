import WatchProviderItem from './WatchProviderItem'

export default function WatchProvidersList ({ providers }) {
  return (
    <ul className='flex flex-wrap gap-2'>
      {providers.map(provider => <WatchProviderItem key={provider.provider_id} provider={provider} />)}
    </ul>
  )
}
