import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ListElement from '../components/List/ListElement'
import ListHeader from '../components/List/ListHeader'
import Main from '../components/PageUI/Main'
import { getListDetails } from '../utils/http'
import { useLoaderData, json } from 'react-router-dom'
import Loading from '../components/UI/Loading'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function ListPage () {
  const data = useLoaderData()
  const {
    id,
    results,
    comments,
    page,
    total_pages: totalPages
  } = data

  const [listElements, setListElements] = useState(results)
  const [currentPage, setCurrentPage] = useState(page)
  const [isLoading, setIsLoading] = useState(false)
  const [commentVisible, setCommentVisible] = useState(true)

  const loadButtonRef = useRef()
  const isVisible = useIntersectionObserver(loadButtonRef, '0px')
  const sortedList = useMemo(() => listElements, [listElements])

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
      fetchNewPage() // Trigger a function when the div is visible on view port
    }
  }, [fetchNewPage, isVisible])

  return (
    <>
      <ListHeader />
      <Main center={
        <>
          <div className='md:table border-separate border-spacing-y-2'>
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
                vote_average: voteAverage
              } = result

              return <ListElement key={id} order={index + 1} comment={comments[`${mediaType}:${id}`]} id={id} mediaType={mediaType} posterPath={posterPath} releaseDate={releaseDate || firstAirDate} revenue={revenue} title={title || name} originalTitle={originalTitle || originalName} voteAverage={voteAverage} runtime={runtime} commentVisible={commentVisible} />
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
