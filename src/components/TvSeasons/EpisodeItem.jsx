/* eslint-disable no-octal-escape */
import { formatLongDate, formatRuntime } from '../../utils/utility'
import DefaultLandscape from '../../assets/default-landscape.webp'
import VoteCard from '../PageUI/VoteCard'
import { useContext, useState } from 'react'
import EpisodeCrewList from './EpisodeCrewList'
import EpisodeGuestsList from './EpisodeGuestsList'
import ChevronIcon from '../../icons/ChevronIcon'
import { rootContext } from '../../context/root-context'
import ElementsList from '../UI/ElementsList'

export default function EpisodeItem ({ airDate, episodeNumber, name, overview, runtime, seasonNumber, showId, stillPath, voteAverage, voteCount, crew, guestStars, tvName, tvOriginalName }) {
  const { config } = useContext(rootContext)
  const [isExpanded, setIsExpanded] = useState(false)

  const prettySmallStillPath = stillPath && config
    ? config?.images?.secure_base_url + config?.images?.still_sizes[2] + stillPath
    : DefaultLandscape
  const prettyBigStillPath = stillPath && config
    ? config?.images?.secure_base_url + config?.images?.still_sizes[3] + stillPath
    : DefaultLandscape
  const prettyTvName = tvName || tvOriginalName
  const prettyAirDate = formatLongDate(airDate)
  const prettyRuntime = formatRuntime(runtime)

  const toggleIsExpanded = () => setIsExpanded(p => !p)

  return (
    <li className='rounded shadow shadow-colors overflow-hidden'>
      <section className='flex sm:flex-row flex-col'>
        <img crossOrigin='anonymous' src={prettySmallStillPath} className='aspect-video object-cover sm:inline hidden max-w-72' alt={`Imagen del episodio ${episodeNumber}-${name} de la serie de tv ${prettyTvName}`} loading='lazy' />
        <img crossOrigin='anonymous' src={prettyBigStillPath} className='aspect-video object-cover sm:hidden inline' alt={`Imagen del episodio ${episodeNumber}-${name} de la serie de tv ${prettyTvName}`} loading='lazy' />
        <div className='p-4 content-center space-y-1'>
          <h3 className='font-semibold text-lg'><span className='text-medium'>{episodeNumber}</span> {name}</h3>
          <ElementsList style='bull'>
            <VoteCard small rating={voteAverage} count={voteCount} />
          </ElementsList>
          <p>{overview}</p>
        </div>
      </section>
      <button className='w-full flex justify-center items-center gap-1' onClick={toggleIsExpanded}>
        <ChevronIcon className={isExpanded ? 'rotate-90' : '-rotate-90'} />
        {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
        <ChevronIcon className={isExpanded ? 'rotate-90' : '-rotate-90'} />
      </button>
      {isExpanded &&
        <div className='p-4 flex sm:flex-row flex-col gap-4'>
          <EpisodeCrewList crew={crew} className='w-68' />
          <EpisodeGuestsList guests={guestStars} />
        </div>}
    </li>
  )
}
