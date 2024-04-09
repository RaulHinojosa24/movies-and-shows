import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { formatNumberSymbols, formatRuntime, retrieveConfig } from '../../utils/utility'

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
    public: isPublic,
    revenue,
    runtime
  } = data

  const prettyBackdropURL = backdropPath ? baseURL + backdropSizes[2] + backdropPath : ''
  const prettyProfileURL = createdBy?.avatar_path ? baseURL + profileSizes[0] + createdBy.avatar_path : ''
  const prettyRuntime = formatRuntime(runtime || 0)
  const prettyRevenue = formatNumberSymbols(revenue, 1)
  const prettyCreatorName = createdBy?.name ? createdBy?.name : createdBy?.username

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
            filter: 'sepia(100%) saturate(300%) brightness(60%)'
          }}
          className={`
            -z-10 absolute top-0 left-0 w-full h-full bg-cover bg-top bg-no-repeat bg-yellow-400
          `}
        />
        <section className='flex flex-col px-app-space pt-app-space pb-4 gap-4 grow md:items-start items-center'>
          <h1 className='text-4xl font-bold text-center md:text-left'>{name}</h1>
          <p>{description}</p>
          <div className='flex items-center gap-4 text-lg'>
            {prettyProfileURL &&
              <img src={prettyProfileURL} alt={'Imagen de perfil del usuario ' + prettyCreatorName} width={45} className='rounded-full' />}
            <p>Una lista de <span className='font-semibold'>{prettyCreatorName}</span></p>
          </div>
        </section>
        <section className='flex flex-wrap justify-center md:justify-start px-app-space py-2 gap-8 bg-black/80'>
          <HeaderBigElements title='Elementos' value={itemCount} />
          <HeaderBigElements title='Valoración media' value={averageRating} />
          <HeaderBigElements title='Duración total' value={prettyRuntime} />
          <HeaderBigElements title='Ingresos totales' value={prettyRevenue} />
        </section>
      </header>
    </>
  )
}

function HeaderBigElements ({ title, value }) {
  return (
    <div className='flex flex-col font-bold w-fit'>
      <span className='text-3xl'>{value}</span>
      <p className='text-lg'>{title}</p>
    </div>
  )
}
