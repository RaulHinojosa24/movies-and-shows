import { useSearchParams } from 'react-router-dom'
import ChevronIcon from '../../icons/ChevronIcon'

const PAGES_AMOUNT = 5

export default function Pagination ({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Math.max(Number(searchParams.get('page')) || 0, 1)
  const pages = [currentPage]
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  for (let i = 0; i < Math.floor(PAGES_AMOUNT / 2); i++) {
    const first = pages[0]

    if (first === 1) break

    pages.unshift(first - 1)
  }

  let remaining = PAGES_AMOUNT - pages.length

  for (let i = 0; i < remaining; i++) {
    const last = pages[pages.length - 1]

    if (last === totalPages) break

    pages.push(last + 1)
  }

  remaining = PAGES_AMOUNT - pages.length

  for (let i = 0; i < remaining; i++) {
    const first = pages[0]

    if (first === 1) break

    pages.unshift(first - 1)
  }

  return (
    <ol className='w-fit mx-auto flex gap-2'>
      <li>
        <button
          className={'h-full text-xl ' + (isFirstPage ? 'text-neutral-500 cursor-default' : '')}
          onClick={isFirstPage ? () => null : () => setSearchParams({ query: searchParams.get('query'), page: currentPage - 1 })}
          disabled={isFirstPage}
        ><ChevronIcon />
        </button>
      </li>
      {pages.map(page => (
        <Page key={page} page={page} isActive={page === currentPage} />
      ))}
      <li>
        <button
          className={'h-full text-xl ' + (isLastPage ? 'text-neutral-500 cursor-default' : '')}
          onClick={isLastPage ? () => null : () => setSearchParams({ query: searchParams.get('query'), page: currentPage + 1 })}
          disabled={isLastPage}
        ><ChevronIcon className='rotate-180' />
        </button>
      </li>
    </ol>
  )
}

function Page ({ page, isActive }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeClass = isActive ? 'font-bold dark:bg-neutral-800 bg-neutral-200' : ''

  function updatePage () {
    setSearchParams({ query: searchParams.get('query'), page })
  }

  return (
    <li>
      <button className={'rounded border-1 px-2 h-full ' + activeClass} onClick={isActive ? () => {} : updatePage}>{page}</button>
    </li>
  )
}
