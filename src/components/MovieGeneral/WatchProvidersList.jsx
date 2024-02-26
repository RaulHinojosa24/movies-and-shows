// let a = {
//   logo_path: '/7YPdUs60C9qQQQfOFCgxpnF07D9.jpg',
//   provider_id: 337,
//   provider_name: 'Disney Plus',
//   display_priority: 0

import WatchProviderItem from './WatchProviderItem'

// }
export default function WatchProvidersList ({ providers }) {
  return (
    <ul className='flex flex-wrap gap-2'>
      {providers.map(provider => <WatchProviderItem key={provider.provider_id} provider={provider} />)}
    </ul>
  )
}
