import FilterItem from './FilterItem'
import CheckIcon from '../../icons/CheckIcon'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function WatchProvidersFilter ({ watchProvidersList, watchProviders, setWatchProviders }) {
  const { config } = useContext(rootContext)

  const toggleWatchProvider = (id) => {
    setWatchProviders(prev => {
      const index = prev.indexOf(id)

      if (index === -1) return [...prev, id]
      return prev.filter(wp => wp !== id)
    })
  }

  return (
    <FilterItem title='Proveedores'>
      {!config && 'Cargando proveedores...'}
      {config &&
        <ol className='flex flex-wrap gap-3 justify-between'>
          {watchProvidersList.map(({
            logo_path: logoPath,
            provider_name: providerName,
            provider_id: providerId
          }) => {
            const prettyURL = config ? config?.images?.secure_base_url + config?.images?.logo_sizes[0] + logoPath : ''
            const selected = watchProviders.includes(providerId)

            return (
              <li key={providerId} onClick={() => toggleWatchProvider(providerId)} className='relative cursor-pointer' title={providerName}>
                <img loading='lazy' className='aspect-square w-12 rounded' src={prettyURL} alt={'Logo de ' + providerName} />
                {selected &&
                  <div className='absolute grid place-content-center bg- bg-yellow-400/70 rounded top-0 left-0 bottom-0 right-0 text-4xl font-bold text-black'>
                    <CheckIcon />
                  </div>}
              </li>
            )
          })}
        </ol>}
    </FilterItem>
  )
}
