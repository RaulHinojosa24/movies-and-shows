import { useState } from 'react'
import Modal from '../UI/Modal'
import SubSection from '../UI/SubSection'
import WatchProvidersList from './WatchProvidersList'
import TmdbLogoAltShort from '../../logos/TmdbLogoAltShort'
import JustWatchLogo from '../../logos/JustWatchLogo'

const TYPE_DICT = {
  tv: 'la serie',
  movie: 'la película'
}

export default function WatchProviders ({ className = '', watchProviders, title, type }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const tmdbLink = watchProviders.results.ES?.link
  const flatrateProvs = watchProviders.results.ES?.flatrate
  const rentProvs = watchProviders.results.ES?.rent
  const buyProvs = watchProviders.results.ES?.buy
  const options = Object.keys(watchProviders.results.ES || {})
  const hasRent = options.includes('rent')
  const hasBuy = options.includes('buy')
  const hasStream = options.includes('flatrate')

  const negativeResponse = 'no se han encontrado opciones para que puedas disfrutar del título de forma legal.\nLo sentimos'

  const positiveResponse = TYPE_DICT[type] + ' se encuentra disponible en los siguientes formatos:'
  return (
    <>
      <button className={className + ' py-1 px-5 w-full rounded-b whitespace-nowrap font-semibold bg-yellow-400 text-black'} onClick={open}>Dónde ver</button>
      {isOpen &&
        <Modal crossInside onClose={close} className='rounded w-[calc(100%-4rem)] max-w-2xl bg-neutral-950 p-6 shadow-lg shadow-black'>
          <h2 className='text-xl font-bold text-yellow-400'>Dónde puedo ver "{title}"?</h2>
          <p className='my-4 whitespace-pre-line'>
            Gracias a la colaboración de TMDB y JustWatch, podemos informarle de que en España, {options.length > 0 ? positiveResponse : negativeResponse}
          </p>
          <div className='my-6 space-y-2'>
            {hasStream &&
              <SubSection title='Streaming' className='space-y-2'>
                <WatchProvidersList providers={flatrateProvs} />
              </SubSection>}
            {hasRent &&
              <SubSection title='Alquiler' className='space-y-2'>
                <WatchProvidersList providers={rentProvs} />
              </SubSection>}
            {hasBuy &&
              <SubSection title='Compra' className='space-y-2'>
                <WatchProvidersList providers={buyProvs} />
              </SubSection>}
          </div>
          <p className='my-4'>Si desea consultar más información, puede dirigirse a:</p>
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
