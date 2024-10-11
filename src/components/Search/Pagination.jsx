import { useSearchParams } from 'react-router-dom'
import ChevronIcon from '../../icons/ChevronIcon'

const PAGES_AMOUNT = 5

export default function Pagination ({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const allSearchParams = searchParams.entries().reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {})
  const currentPage = Math.min(Math.max(Number(searchParams.get('page')) || 0, 1), totalPages)
  const pages = [currentPage]
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  for (let i = 0; i < Math.floor(PAGES_AMOUNT / 2); i++) {
    const first = pages[0]

    if (first <= 1) break

    pages.unshift(first - 1)
  }

  let remaining = PAGES_AMOUNT - pages.length

  for (let i = 0; i < remaining; i++) {
    const last = pages[pages.length - 1]

    if (last >= totalPages) break

    pages.push(last + 1)
  }

  remaining = PAGES_AMOUNT - pages.length

  for (let i = 0; i < remaining; i++) {
    const first = pages[0]

    if (first <= 1) break

    pages.unshift(first - 1)
  }

  function updatePage (page) {
    setSearchParams({ ...allSearchParams, page })
  }

  return (
    <ol className='w-fit mx-auto flex gap-2'>
      <li>
        <button
          className={'h-full text-xl ' + (isFirstPage ? 'text-medium cursor-default' : '')}
          onClick={isFirstPage ? () => null : () => updatePage(currentPage - 1)}
          disabled={isFirstPage}
        ><ChevronIcon />
        </button>
      </li>
      {pages.map(page => {
        const activeClass = page === currentPage ? 'font-bold dark:bg-dark-2 bg-light-2' : ''

        return (
          <li key={page}>
            <button className={'rounded border-1 dark:border-dark-3 border-light-3 px-2 h-full ' + activeClass} onClick={() => updatePage(page)}>{page}</button>
          </li>
        )
      })}
      <li>
        <button
          className={'h-full text-xl ' + (isLastPage ? 'text-medium cursor-default' : '')}
          onClick={isLastPage ? () => null : () => updatePage(currentPage + 1)}
          disabled={isLastPage}
        ><ChevronIcon className='rotate-180' />
        </button>
      </li>
    </ol>
  )
}
