import { useEffect, useRef, useState } from 'react'
import LensIcon from '../../icons/LensIcon'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CrossIcon from '../../icons/CrossIcon'

export default function SearchBar ({ className = '', compact }) {
  const [searchParams] = useSearchParams()
  const spQuery = searchParams.get('query') || ''
  const [userInput, setUserInput] = useState(spQuery)
  const navigate = useNavigate()
  const [isCompact, setIsCompact] = useState(Boolean(compact))
  const inputRef = useRef()

  const searchHandler = (event) => {
    event?.preventDefault()

    if (userInput.trim() && userInput !== spQuery) {
      navigate('/search/movie?query=' + userInput)
      event?.target?.querySelector('input').blur()
    }
  }

  useEffect(() => {
    if (!isCompact) inputRef.current.focus()
  }, [isCompact])

  useEffect(() => {
    setUserInput(searchParams.get('query') || '')
  }, [searchParams])

  return (
    <div className={'py-1 flex items-center justify-end transition-all ' + (compact ? 'relative ' : 'gap-2 ') + (isCompact ? '' : 'grow ') + className}>
      <form className={(compact ? 'absolute left-0 ' : '') + (isCompact ? 'invisible w-0' : 'w-[calc(100%-1.5rem-0.5rem)]')} onSubmit={searchHandler}>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type='text'
          name='query'
          className='w-full py-2 px-2 border-none bg-transparent'
          placeholder={compact ? 'Búsqueda...' : 'Busca películas, series o gente...'}
          autoFocus={isCompact || !userInput}
          ref={inputRef}
        />
      </form>
      <button onClick={compact ? (isCompact ? () => setIsCompact(false) : () => setIsCompact(true)) : () => searchHandler()}>
        {(isCompact || !compact) &&
          <LensIcon className='text-2xl' />}
        {!isCompact && compact &&
          <CrossIcon className='text-sm' />}
      </button>
    </div>
  )
}
