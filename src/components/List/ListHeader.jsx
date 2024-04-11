import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { formatNumberSymbols, formatRuntime, generateVoteColor, retrieveConfig } from '../../utils/utility'

export default function ListHeader () {
  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))
  const data = useLoaderData()

  const {
    average_rating: averageRating,
    backdrop_path: backdropPath,
    created_by: createdBy,
    description,
    item_count: itemCount,
    name,
    revenue,
    runtime
  } = data

  const prettyBackdropURL = backdropPath ? baseURL + backdropSizes[2] + backdropPath : ''
  const prettyProfileURL = createdBy?.avatar_path ? baseURL + profileSizes[0] + createdBy.avatar_path : ''
  const prettyRuntime = formatRuntime(runtime || 0)
  const prettyRevenue = '$' + formatNumberSymbols(revenue, 1)
  const avgColor = generateVoteColor(averageRating)
  const prettyCreatorName = createdBy?.name ? createdBy?.name : createdBy?.username

  return (
    <>
      <header
        className='relative text-white'
      >
        <div
          style={{
            backgroundImage: `
              url(${prettyBackdropURL})
            `,
            filter: backdropPath ? 'sepia(100%) saturate(300%) brightness(50%)' : ''
          }}
          className={`
            -z-10 absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-yellow-500
          `}
        />
        <section className='flex flex-col px-app-space pt-app-space pb-4 gap-4 grow items-start'>
          <h1 className='text-4xl font-bold'>{name}</h1>
          <p>{description}</p>
          <div className='flex items-center gap-2 text-base'>
            {prettyProfileURL &&
              <img src={prettyProfileURL} alt={'Imagen de perfil del usuario ' + prettyCreatorName} width={45} className='rounded-full' />}
            <p>Una lista de <span className='font-semibold'>{prettyCreatorName}</span></p>
          </div>
        </section>
        <section className='md:flex md:justify-start grid grid-cols-2 px-app-space py-2 gap-x-8 gap-y-2 bg-black/80'>
          <HeaderBigElements title='Elementos' value={itemCount} />
          <HeaderBigElements title='Valoración media' value={averageRating * 10 + '%'} className={`text-[${avgColor}]`} />
          <HeaderBigElements title='Duración total' value={prettyRuntime} />
          <HeaderBigElements title='Ingresos totales' value={prettyRevenue} />
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
