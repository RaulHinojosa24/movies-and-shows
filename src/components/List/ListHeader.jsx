import { formatNumberSymbols, formatRuntime, generateVoteColor } from '../../utils/utility'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import DefaultUserImage from '../../assets/default-user.webp'

export default function ListHeader ({ averageRating, backdropPath, createdBy, description, itemCount, name, revenue, runtime }) {
  const { config } = useContext(rootContext)

  const prettyBackdropURL = config && backdropPath
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[2] + backdropPath
    : ''
  const prettyProfileURL = config && createdBy?.avatar_path
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[0] + createdBy?.avatar_path
    : DefaultUserImage
  const prettyRuntime = formatRuntime(runtime || 0)
  const prettyRevenue = '$' + formatNumberSymbols(revenue, 1)
  const prettyCreatorName = createdBy?.name ? createdBy?.name : createdBy?.username
  const avgColor = generateVoteColor(averageRating)

  return (
    <>
      <header
        className='relative'
      >
        <div
          style={{
            backgroundImage: `
              url(${prettyBackdropURL})
            `,
            filter: prettyBackdropURL ? 'sepia(100%) saturate(300%) brightness(50%)' : ''
          }}
          className={`
            -z-10 absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-accent pointer-events-none
          `}
        />
        <section className={`flex flex-col px-app-space pt-app-space pb-4 gap-4 grow items-start ${prettyBackdropURL ? 'text-white' : 'text-black'}`}>
          <h1 className='text-4xl font-bold'>{name}</h1>
          <p>{description}</p>
          <div className='flex items-center gap-2 text-base'>
            {prettyProfileURL &&
              <img loading='lazy' crossOrigin='anonymous' src={prettyProfileURL} alt={`${prettyCreatorName}'s profile picture`} width={45} className='aspect-square rounded-full object-cover' />}
            <p>List by <span className='font-semibold'>{prettyCreatorName}</span></p>
          </div>
        </section>
        <section className='md:flex md:justify-start grid grid-cols-2 px-app-space py-2 gap-x-8 gap-y-2 bg-black/80 text-white'>
          <HeaderBigElements title='Elements' value={itemCount} />
          <HeaderBigElements title='Average rating' value={averageRating * 10 + '%'} className={`text-[${avgColor}]`} />
          <HeaderBigElements title='Total duration' value={prettyRuntime} />
          <HeaderBigElements title='Total revenue' value={prettyRevenue} />
        </section>
      </header>
    </>
  )
}

function HeaderBigElements ({ title, value, className = '' }) {
  return (
    <div className='font-bold w-fit'>
      <p className={'text-2xl md:text-3xl ' + className}>{value}</p>
      <p className='text-lg'>{title}</p>
    </div>
  )
}
