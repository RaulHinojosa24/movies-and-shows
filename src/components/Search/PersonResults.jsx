import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { getPersonsByQuery } from '../../utils/http'
import { retrieveConfig } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultUserImage from '../../assets/default-user.png'

export default function PersonResults () {
  const currentPageData = useLoaderData()
  const baseData = useRouteLoaderData('search')

  const firstPage = baseData?.persons
  const totalPages = baseData?.persons?.total_pages
  const totalResults = baseData?.persons?.total_results

  const persons = (currentPageData || firstPage)?.results

  return (
    <>
      {persons && persons.length > 0 &&
        <ul className='space-y-2'>
          {persons.map(person => {
            const {
              id,
              known_for_department: knownForDepartment,
              name,
              original_name: originalName,
              profile_path: profilePath,
              known_for: knownFor
            } = person

            return (
              <PersonCard key={id} id={id} name={name} originalName={originalName} profilePath={profilePath} knownForDepartment={knownForDepartment} knownFor={knownFor} />
            )
          })}
        </ul>}
      {persons && totalResults > 0 && persons.length === 0 &&
        <p>Parece que te has pasado de página, vuelve a la última!</p>}
      {(!persons || totalResults === 0) &&
        <p>No hemos podido encontrar ninguna persona que se adapte a tu búsqueda...</p>}
      {persons && totalResults > 0 &&
        <Pagination totalPages={totalPages} />}
    </>
  )
}

function PersonCard ({ id, name, originalName, profilePath, knownForDepartment, knownFor }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyPosterPath = profilePath ? baseURL + profileSizes[1] + profilePath : DefaultUserImage
  const sameName = name === originalName
  const prettyKnownFor = knownFor.map(kf => {
    const { id, media_type: mediaType, name, original_name: originalName, title, original_title: originalTitle } = kf

    return {
      id,
      title: name || originalName || title || originalTitle,
      mediaType
    }
  })

  return (
    <li className='rounded custom-shadow-small flex overflow-hidden'>
      <img
        className='aspect-[5/6] w-24 object-cover'
        src={prettyPosterPath} alt={'Poster de la serie de tv ' + (name || originalName)}
      />
      <div className='px-4 py-2 flex flex-col justify-center'>
        <Link to={`/person/${id}`} className='w-fit inline-block'>
          <h3 className='font-semibold text-lg'>{name || originalName} {!sameName && <span className='text-neutral-500 font-normal'>{originalName}</span>}</h3>
        </Link>
        <div className='flex font-semibold [&>*+*]:before:content-["·"] [&>*+*]:before:mx-1'>
          <span>{knownForDepartment}</span>
          {knownFor.length > 0 &&
            <p className='[&>*+*]:before:content-[","] [&>*+*]:before:mr-1 font-normal'>
              {prettyKnownFor.map(kf => {
                return <Link key={kf.id} to={`/${kf.mediaType}/${kf.id}`}>{kf.title}</Link>
              })}
            </p>}
        </div>
      </div>
    </li>
  )
}

export function loader ({ request, params }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const page = Number(url.searchParams.get('page') || '')

  if (query && Boolean(page) && page > 1) {
    return getPersonsByQuery(query, page)
  }

  return null
}
