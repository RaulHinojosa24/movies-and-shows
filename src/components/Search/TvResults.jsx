import { Await, Link, defer, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { getTvByQuery } from '../../utils/http'
import { formatLongDate } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultPosterImage from '../../assets/default-poster.png'
import { Suspense, useContext } from 'react'
import SearchResultsSkeleton from '../Skeletons/SearchResultsSkeleton'
import { rootContext } from '../../context/root-context'

export default function TvResults () {
  const { data: loaderData } = useLoaderData()
  const baseLoaderData = useRouteLoaderData('search')

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={loaderData || baseLoaderData?.tvs}>
        {loadedData => {
          const tvs = loadedData?.results
          const totalPages = loadedData?.total_pages
          const totalResults = loadedData?.total_results

          return (
            <>
              {tvs && tvs.length > 0 &&
                <ul className='space-y-2'>
                  {tvs.map(tv => {
                    const {
                      id,
                      name,
                      original_name: originalName,
                      poster_path: posterPath,
                      overview,
                      first_air_date: firstAirDate
                    } = tv

                    return (
                      <TvCard key={id} id={id} name={name} originalName={originalName} posterPath={posterPath} overview={overview} firstAirDate={firstAirDate} />
                    )
                  })}
                </ul>}
              {tvs && totalResults > 0 && tvs.length === 0 &&
                <p>Parece que te has pasado de página, vuelve a la última!</p>}
              {(!tvs || totalResults === 0) &&
                <p>No hemos podido encontrar ninguna serie de tv que se adapte a tu búsqueda...</p>}
              {tvs && totalResults > 0 &&
                <Pagination totalPages={totalPages} />}
            </>
          )
        }}
      </Await>
    </Suspense>
  )
}

function TvCard ({ id, name, originalName, posterPath, overview, firstAirDate }) {
  const { config } = useContext(rootContext)

  const prettyPosterPath = posterPath && config
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[1] + posterPath
    : DefaultPosterImage
  const prettyReleaseDate = formatLongDate(firstAirDate)
  const prettyName = name || originalName

  const sameName = name === originalName

  return (
    <li className='rounded custom-shadow-small flex overflow-hidden'>
      <img
        className='aspect-[2/3] w-24 object-cover'
        src={prettyPosterPath} alt={'Poster de la serie de tv ' + prettyName}
      />
      <div className='px-4 py-2 space-y-2 flex flex-col justify-center'>
        <div>
          <Link to={`/tv/${id}`} className='w-fit inline-block'>
            <h3 className='font-semibold text-lg'>{prettyName} {!sameName && <span className='text-neutral-500 font-normal'>{originalName}</span>}</h3>
          </Link>
          <p className='text-neutral-500'>{prettyReleaseDate}</p>
        </div>
        <p className='line-clamp-2'>{overview}</p>
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
    return defer({ data: getTvByQuery(query, page) })
  }

  return { data: null }
}
