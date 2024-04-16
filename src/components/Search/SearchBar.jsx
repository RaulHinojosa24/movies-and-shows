import { useRef, useState } from 'react'
import LensIcon from '../../icons/LensIcon'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CrossIcon from '../../icons/CrossIcon'

export default function SearchBar ({ className = '', compact }) {
  const [searchParams] = useSearchParams()
  const prevQuery = searchParams.get('query') || ''
  const [query, setQuery] = useState(prevQuery)
  const navigate = useNavigate()
  const [isCompact, setIsCompact] = useState(Boolean(compact))
  const inputRef = useRef()

  const searchHandler = (event) => {
    event.preventDefault()

    if (query.trim() && query !== prevQuery) {
      navigate('/search/movie?query=' + query)
      event.target.querySelector('input').blur()
    }
  }

  return (
    <div className={'py-1 flex items-center gap-2 ' + className}>
      <span onClick={compact && (isCompact ? () => setIsCompact(false) : () => setIsCompact(true))}>
        {(isCompact || !compact) &&
          <LensIcon className={'text-2xl ' + (isCompact ? 'cursor-pointer' : '')} />}
        {!isCompact && compact &&
          <CrossIcon className='text-sm cursor-pointer' />}
      </span>
      <form action='.' className={isCompact ? 'hidden w-0' : 'w-full'} onSubmit={searchHandler}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          name='query'
          className='w-full py-2 px-4 border-none bg-transparent'
          placeholder={compact ? 'Búsqueda...' : 'Busca películas, series o gente...'}
          autoFocus={isCompact || !query}
          ref={inputRef}
        />
      </form>
    </div>
  )
}
