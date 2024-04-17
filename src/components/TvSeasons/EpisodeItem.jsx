/* eslint-disable no-octal-escape */
import { formatLongDate, formatRuntime, retrieveConfig } from '../../utils/utility'
import DefaultLandscape from '../../assets/default-landscape.png'
import { useRouteLoaderData } from 'react-router-dom'
import VoteCard from '../PageUI/VoteCard'
import { useState } from 'react'
import EpisodeCrewList from './EpisodeCrewList'
import EpisodeGuestsList from './EpisodeGuestsList'
import ChevronIcon from '../../icons/ChevronIcon'

export default function EpisodeItem ({ airDate, episodeNumber, name, overview, runtime, seasonNumber, showId, stillPath, voteAverage, voteCount, crew, guestStars }) {
  const {
    images: {
      secure_base_url: baseURL,
      still_sizes: stillSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))
  const {
    tvName,
    orinigal_name: tvOriginalName
  } = useRouteLoaderData('tv-details')
  const [isExpanded, setIsExpanded] = useState(false)

  const prettyTvName = tvName || tvOriginalName
  const prettyAirDate = formatLongDate(airDate)
  const prettyRuntime = formatRuntime(runtime)
  const prettySmallStillPath = stillPath ? baseURL + stillSizes[2] + stillPath : DefaultLandscape
  const prettyBigStillPath = stillPath ? baseURL + stillSizes[3] + stillPath : DefaultLandscape

  const toggleIsExpanded = () => setIsExpanded(p => !p)

  return (
    <li className='rounded custom-shadow-small overflow-hidden'>
      <section className='flex sm:flex-row flex-col'>
        <img src={prettySmallStillPath} className='aspect-video object-cover sm:inline hidden' alt={`Imagen del episodio ${episodeNumber}-${name} de la serie de tv ${prettyTvName}`} loading='lazy' />
        <img src={prettyBigStillPath} className='aspect-video object-cover sm:hidden inline' alt={`Imagen del episodio ${episodeNumber}-${name} de la serie de tv ${prettyTvName}`} loading='lazy' />
        <div className='p-4 content-center space-y-1'>
          <h3 className='font-semibold text-lg'><span className='dark:text-neutral-300 text-neutral-700'>{episodeNumber}</span> {name}</h3>
          <div className='[&>*+*]:before:content-["\2022"] [&>*+*]:before:mx-2'>
            <VoteCard minimal rating={voteAverage} count={voteCount} />
            <span>{prettyAirDate}</span>
            <span>{prettyRuntime}</span>
          </div>
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
          <EpisodeCrewList crew={crew} className='w-56' />
          <EpisodeGuestsList guests={guestStars} />
        </div>}
    </li>
  )
}
