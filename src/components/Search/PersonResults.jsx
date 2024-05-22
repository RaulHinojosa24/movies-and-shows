import { Await, Link, defer, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { getPersonsByQuery } from '../../utils/http'
import { retrieveConfig } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultUserImage from '../../assets/default-user.png'
import { Suspense, useEffect, useState } from 'react'
import SearchResultsSkeleton from '../Skeletons/SearchResultsSkeleton'

export default function PersonResults () {
  const { data: loaderData } = useLoaderData()
  const baseLoaderData = useRouteLoaderData('search')

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={loaderData || baseLoaderData?.persons}>
        {loadedData => {
          const persons = loadedData?.results
          const totalPages = loadedData?.total_pages
          const totalResults = loadedData?.total_results

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
        }}
      </Await>
    </Suspense>
  )
}

function PersonCard ({ id, name, originalName, profilePath, knownForDepartment, knownFor }) {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [prettyPosterPath, setPrettyPosterPath] = useState(DefaultUserImage)

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        profile_sizes: profileSizes
      }
    }) => {
      if (profilePath) setPrettyPosterPath(baseURL + profileSizes[1] + profilePath)
    })
  }, [loaderConfig, profilePath])

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

function Fallback () {
  return (
    <div className='space-y-2'>
      {Array(10).fill().map((_, i) => <SearchResultsSkeleton key={i} />)}
    </div>
  )
}

export async function loader ({ request, params }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const page = Number(url.searchParams.get('page') || '')

  if (query && Boolean(page) && page > 1) {
    return defer({ data: getPersonsByQuery(query, page) })
  }

  return { data: null }
}
