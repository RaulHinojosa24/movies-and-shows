import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import { getTvByQuery } from '../../utils/http'
import { formatLongDate, retrieveConfig } from '../../utils/utility'
import Pagination from './Pagination'
import DefaultPosterImage from '../../assets/default-poster.png'

export default function TvResults () {
  const currentPageData = useLoaderData()
  const baseData = useRouteLoaderData('search')

  const firstPage = baseData?.tvs
  const totalPages = baseData?.tvs?.total_pages
  const totalResults = baseData?.tvs?.total_results

  const tvs = (currentPageData || firstPage)?.results

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
}

function TvCard ({ id, name, originalName, posterPath, overview, firstAirDate }) {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyReleaseDate = formatLongDate(firstAirDate)
  const prettyPosterPath = posterPath ? baseURL + posterSizes[1] + posterPath : DefaultPosterImage
  const sameName = name === originalName

  return (
    <li className='rounded custom-shadow-small flex overflow-hidden'>
      <img
        className='aspect-[2/3] w-24 object-cover'
        src={prettyPosterPath} alt={'Poster de la serie de tv ' + (name || originalName)}
      />
      <div className='px-4 py-2 space-y-2 flex flex-col justify-center'>
        <div>
          <Link to={`/tv/${id}`} className='w-fit inline-block'>
            <h3 className='font-semibold text-lg'>{name || originalName} {!sameName && <span className='text-neutral-500 font-normal'>{originalName}</span>}</h3>
          </Link>
          <p className='text-neutral-500'>{prettyReleaseDate}</p>
        </div>
        <p className='line-clamp-2'>{overview}</p>
      </div>
    </li>
  )
}

export function loader ({ request, params }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const page = Number(url.searchParams.get('page') || '')

  if (query && Boolean(page) && page > 1) {
    return getTvByQuery(query, page)
  }

  return null
}
