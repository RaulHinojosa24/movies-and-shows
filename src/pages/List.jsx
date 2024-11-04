import { Suspense, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import ListElement from '../components/List/ListElement'
import ListHeader from '../components/List/ListHeader'
import Main from '../components/PageUI/Main'
import { fetchWithDefer, getListDetails } from '../utils/http'
import { useLoaderData, Await, useParams } from 'react-router-dom'
import Loading from '../components/UI/Loading'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import ListFilters from '../components/List/ListFilters'
import { setDocTitle } from '../utils/utility'
import ListSkeleton from '../skeleton-pages/ListSkeleton'
import { settingsContext } from '../context/settings-context'
import ErrorPage from './ErrorPage'

const dateSorting = (a, b) => (
  new Date(b.release_date || b.first_air_date) - (new Date(a.release_date || a.first_air_date)) ||
  (a.name || a.original_name || a.title || a.original_title).localeCompare(b.name || b.original_name || b.title || b.original_title)
)

const titleSorting = (a, b) => (
  a.name || a.original_name || a.title || a.original_title).localeCompare(b.name || b.original_name || b.title || b.original_title
)

const voteSorting = (a, b) => (
  a.vote_count && b.vote_count
    ? b.vote_average - a.vote_average
    : a.vote_count
      ? -1
      : b.vote_count
        ? 1
        : (a.name || a.original_name || a.title || a.original_title).localeCompare(b.name || b.original_name || b.title || b.original_title)
)

const SORTING = {
  date: dateSorting,
  title: titleSorting,
  vote: voteSorting
}

export default function ListPage () {
  const { data: loaderData } = useLoaderData()
  const [listElements, setListElements] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { id: listId } = useParams()
  const { language, country, includeAdult } = useContext(settingsContext)
  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`

  useEffect(() => {
    loaderData.then(({ results, page, name }) => {
      setListElements(results)
      setCurrentPage(page)
      setDocTitle(`Lista: ${name}`)
    })
  }, [loaderData])

  const [isLoading, setIsLoading] = useState(false)
  const [posterMode, setPosterMode] = useState(false)
  const [commentsVisible, setCommentsVisible] = useState(false)
  const [sortValue, setSortValue] = useState('default')
  const [sortDirection, setSortDirection] = useState('asc')
  const sortByProps = [
    {
      value: 'default',
      label: 'Por defecto'
    },
    {
      value: 'date',
      label: 'Fecha de estreno'
    },
    {
      value: 'title',
      label: 'Título'
    },
    {
      value: 'vote',
      label: 'Valoración'
    }
  ]

  const fetchNewPage = useCallback(async () => {
    if (isLoading) return
    setIsLoading(true)
    const data = await getListDetails({ id: listId, page: currentPage + 1, language: appLanguage, includeAdult })

    setCurrentPage(prev => prev + 1)
    setListElements(prev => [...prev, ...data.results])
    setIsLoading(false)
  }, [appLanguage, currentPage, includeAdult, isLoading, listId])

  const { ref: loadButtonRef } = useIntersectionObserver({ callback: fetchNewPage })

  const sortedList = useMemo(() => {
    const sorted = [...listElements].sort(SORTING[sortValue])
    if (sortDirection === 'desc') sorted.reverse()
    return sorted
  }, [sortValue, listElements, sortDirection])

  const listClasses = posterMode
    ? 'grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'
    : 'md:table border-separate border-spacing-y-2 space-y-2'

  useEffect(() => setDocTitle('Cargando...'), [])

  return (
    <Suspense fallback={<ListSkeleton />}>
      <Await
        resolve={loaderData}
        errorElement={<ErrorPage />}
      >
        {({
          comments,
          total_pages: totalPages,
          name,
          average_rating: averageRating,
          backdrop_path: backdropPath,
          created_by: createdBy,
          description,
          item_count: itemCount,
          revenue,
          runtime
        }) => {
          return (
            <>
              <ListHeader
                averageRating={averageRating}
                backdropPath={backdropPath}
                createdBy={createdBy}
                description={description}
                itemCount={itemCount}
                name={name}
                revenue={revenue}
                runtime={runtime}
              />
              <Main center={
                <>
                  <ListFilters
                    posterMode={posterMode}
                    setPosterMode={setPosterMode}
                    commentsVisible={commentsVisible}
                    setCommentsVisible={setCommentsVisible}
                    sortValue={sortValue}
                    setSortValue={setSortValue}
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                    sortByProps={sortByProps}
                  />
                  <div className={listClasses}>
                    {sortedList.map((result, index) => {
                      const {
                        id,
                        title,
                        original_title: originalTitle,
                        name,
                        original_name: originalName,
                        poster_path: posterPath,
                        media_type: mediaType,
                        runtime,
                        revenue,
                        release_date: releaseDate,
                        first_air_date: firstAirDate,
                        vote_average: voteAverage,
                        vote_count: voteCount,
                        adult
                      } = result

                      return <ListElement key={id} order={index + 1} comment={comments[`${mediaType}:${id}`]} id={id} mediaType={mediaType} posterPath={posterPath} releaseDate={releaseDate || firstAirDate} revenue={revenue} title={title || name} originalTitle={originalTitle || originalName} voteAverage={voteAverage} voteCount={voteCount} runtime={runtime} commentVisible={commentsVisible} posterMode={posterMode} adult={adult} />
                    })}
                  </div>
                  {totalPages > 0 && currentPage < totalPages &&
                    <button
                      disabled={isLoading}
                      ref={loadButtonRef}
                      onClick={() => fetchNewPage()}
                      className='block mx-auto py-1 px-5 rounded whitespace-nowrap font-semibold bg-accent text-black relative'
                    >
                      <span className={isLoading ? 'invisible' : ''}>Cargar más elementos</span>
                      {isLoading &&
                        <Loading dark className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />}
                    </button>}
                </>
          }
              />
            </>
          )
        }}
      </Await>
    </Suspense>

  )
}

export async function loader ({ request, params, language, includeAdult }) {
  const { id } = params

  return fetchWithDefer({ data: () => getListDetails({ id, language, includeAdult }) })
}
