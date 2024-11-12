import { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import SubSection from '../UI/SubSection'
import WatchProvidersList from './WatchProvidersList'
import TmdbLogoAltShort from '../../logos/TmdbLogoAltShort'
import JustWatchLogo from '../../logos/JustWatchLogo'
import { settingsContext } from '../../context/settings-context'

const OPTION_TITLES = {
  flatrate: 'Stream',
  rent: 'Rent',
  buy: 'Buy',
  free: 'Free',
  ads: 'Ads'
}

export default function WatchProviders ({ className = '', watchProviders, title, type }) {
  const { country } = useContext(settingsContext)
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const prettyCountry = country.native_name
  const isoCountry = country.iso_3166_1
  const tmdbLink = watchProviders.results[isoCountry]?.link
  const options = Object.keys(watchProviders.results[isoCountry] || {}).filter(o => o !== 'link')

  return (
    <>
      <button className={className + ' py-1 px-5 w-full whitespace-nowrap font-semibold bg-accent text-black'} onClick={open}>Where to watch</button>
      {isOpen &&
        <Modal crossInside onClose={close} className='rounded w-[calc(100%-4rem)] max-w-2xl dark:bg-dark-1 bg-light-1 p-6 shadow-lg shadow-colors flex flex-col overflow-hidden'>
          <h2 className='text-xl font-bold text-accent'>Where can I watch "{title}"?</h2>
          <p className='my-4 whitespace-pre-line'>
            {options.length > 0
              ? `Thanks to the collaboration of TMDB and JustWatch, we can inform you that in ${prettyCountry}, you have these options to watch this movie:`
              : `Unfortunately, thanks to the collaboration of TMDB and JustWatch, we can inform you that in ${prettyCountry}, we couldn't find any available options to watch this movie.`}
          </p>
          {options.length > 0 &&
            <div className='my-2 space-y-2 h-auto overflow-auto'>
              {options.map(option => (
                <SubSection key={option} title={OPTION_TITLES[option]} className='space-y-2'>
                  <WatchProvidersList providers={watchProviders.results[isoCountry][option]} />
                </SubSection>
              ))}
            </div>}
          <p className='my-4'>For further information, please visit:</p>
          <div className='flex flex-wrap justify-around'>
            <a className='h-4 inline-block' href={tmdbLink} target='_blank' rel='noopener noreferrer'>
              <TmdbLogoAltShort />
            </a>
            <a className='h-4 inline-block' href='https://www.justwatch.com/' target='_blank' rel='noopener noreferrer'>
              <JustWatchLogo />
            </a>
          </div>
        </Modal>}
    </>
  )
}
