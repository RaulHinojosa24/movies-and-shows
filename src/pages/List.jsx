import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ListElement from '../components/List/ListElement'
import ListHeader from '../components/List/ListHeader'
import Main from '../components/PageUI/Main'
import { getListDetails } from '../utils/http'
import { useLoaderData, json } from 'react-router-dom'
import Loading from '../components/UI/Loading'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import ListFilters from '../components/List/ListFilters'
import { setDocTitle } from '../utils/utility'

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
  const {
    id,
    results,
    comments,
    page,
    total_pages: totalPages,
    name
  } = useLoaderData()

  setDocTitle(name)

  const [listElements, setListElements] = useState(results)
  const [currentPage, setCurrentPage] = useState(page)
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

  const loadButtonRef = useRef()
  const isVisible = useIntersectionObserver(loadButtonRef, '0px')

  const sortedList = useMemo(() => {
    const sorted = [...listElements].sort(SORTING[sortValue])
    if (sortDirection === 'desc') sorted.reverse()
    return sorted
  }, [sortValue, listElements, sortDirection])

  const fetchNewPage = useCallback(async () => {
    setIsLoading(true)
    const response = await getListDetails(id, currentPage + 1)

    if (!response.ok) {
      setIsLoading(false)
      throw json(
        { message: 'Could not fetch list data.' },
        { status: 500 }
      )
    } else {
      const data = await response.json()

      setCurrentPage(prev => prev + 1)
      setListElements(prev => [...prev, ...data.results])
      setIsLoading(false)
    }
  }, [currentPage, id])

  useEffect(() => {
    if (isVisible) {
      fetchNewPage()
    }
  }, [fetchNewPage, isVisible])

  const listClasses = posterMode
    ? 'grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'
    : 'md:table border-separate border-spacing-y-2 space-y-2'

  return (
    <>
      <ListHeader />
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
                vote_count: voteCount
              } = result

              return <ListElement key={id} order={index + 1} comment={comments[`${mediaType}:${id}`]} id={id} mediaType={mediaType} posterPath={posterPath} releaseDate={releaseDate || firstAirDate} revenue={revenue} title={title || name} originalTitle={originalTitle || originalName} voteAverage={voteAverage} voteCount={voteCount} runtime={runtime} commentVisible={commentsVisible} posterMode={posterMode} />
            })}
          </div>
          {currentPage < totalPages &&
            <button
              disabled={isLoading}
              ref={loadButtonRef}
              onClick={fetchNewPage}
              className='block mx-auto py-1 px-5 rounded whitespace-nowrap font-semibold bg-yellow-400 text-black relative'
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
}

export async function loader ({ request, params }) {
  const { id } = params

  const response = await getListDetails(id)

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch list data.' },
      { status: 500 }
    )
  } else {
    const data = await response.json()

    if (!data.public) {
      throw json(
        { message: "The list you're trying to access is set to private." },
        { status: 401 }
      )
    } else {
      return data
    }
  }
}
