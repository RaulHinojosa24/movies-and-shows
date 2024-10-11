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
      {!watchProvidersList && 'Cargando proveedores...'}
      {watchProvidersList && config &&
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
                <img crossOrigin='anonymous' loading='lazy' className='aspect-square w-12 rounded' src={prettyURL} alt={'Logo de ' + providerName} />
                {selected &&
                  <div className='absolute grid place-content-center bg- bg-accent/70 rounded top-0 left-0 bottom-0 right-0 text-4xl font-bold text-black'>
                    <CheckIcon />
                  </div>}
              </li>
            )
          })}
        </ol>}
      {watchProvidersList && !config &&
        <ol>
          {watchProvidersList.map(({
            provider_name: providerName,
            provider_id: providerId
          }) => {
            const selected = watchProviders.includes(providerId)

            return (
              <li key={providerId}>
                <label htmlFor={providerId} className={selected ? 'underline underline-offset-4' : ''}>
                  <input type='checkbox' onChange={() => toggleWatchProvider(providerId)} name={providerId} id={providerId} checked={selected} /> {providerName}
                </label>
              </li>
            )
          })}
        </ol>}
    </FilterItem>
  )
}
