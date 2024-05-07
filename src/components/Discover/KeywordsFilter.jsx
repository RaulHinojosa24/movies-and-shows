import { useEffect, useRef, useState } from 'react'
import { getKeywordsByQuery } from '../../utils/http'
import FilterItem from './FilterItem'

export default function KeywordsFilter ({ keywords, setKeywords }) {
  const resultsListRef = useRef()
  const [userInput, setUserInput] = useState('')
  const [resultIndex, setResultIndex] = useState(0)
  const [results, setResults] = useState([])
  const [resultsVisible, setResultsVisible] = useState(false)

  useEffect(() => {
    if (userInput.trim().length < 2) {
      setResultsVisible(false)
      return
    }

    const timeout = setTimeout(async () => {
      setResultIndex(0)

      getKeywordsByQuery(userInput.trim())
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          setResults(data.results)
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error)
        })
        .finally(() => {
          setResultsVisible(true)
        })
    }, 300)

    return () => clearTimeout(timeout)
  }, [userInput])

  useEffect(() => {
    resultsListRef.current?.children[resultIndex]?.scrollIntoViewIfNeeded()
  }, [resultIndex])

  const toggleTag = (newTag) => {
    setKeywords(prevTags => prevTags.some(tag => tag.id === newTag.id)
      ? prevTags.filter(tag => tag.id !== newTag.id)
      : [newTag, ...prevTags]
    )
    setResultsVisible(false)
    setUserInput('')
  }

  const changeHandler = (event) => {
    setUserInput(event.target.value)
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (userInput.trim()) {
        toggleTag(results[resultIndex])
      }
    }

    if (event.key === 'Escape') {
      setResultsVisible(false)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setResultIndex(p => Math.max(0, p - 1))
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setResultIndex(p => Math.min(results.length - 1, p + 1))
    }
  }

  const inputBlurHandler = () => setResultsVisible(false)

  return (
    <FilterItem title='Palabras clave'>
      <div className='w-full max-w-full relative'>
        <input
          className='bg-transparent border-none outline-none w-full py-1' placeholder='Añadir palabra clave'
          value={userInput} onChange={changeHandler} onKeyDown={keyDownHandler} onBlur={inputBlurHandler}
        />
        {resultsVisible &&
          <div className='absolute bottom-0 left-0 right-0 max-h-80 overflow-y-auto translate-y-full bg-neutral-900 border-1 border-t-0 rounded-b'>
            {results.length > 0 &&
              <ul ref={resultsListRef}>
                {results.map((result, index) => {
                  const isSelected = index === resultIndex
                  const alreadyInList = keywords.some(tag => tag.id === result.id)
                  const inListClass = 'bg-yellow-500 text-black font-semibold'
                  const selectedClass = 'bg-neutral-700'
                  const hoverClass = 'hover:bg-neutral-700 hover:text-white'

                  const clickHandler = (e) => {
                    toggleTag(result)
                    e.preventDefault()
                  }

                  return (
                    <li key={result.id} className={`py-1 px-2 cursor-pointer flex justify-between ${hoverClass} ${alreadyInList && !isSelected && inListClass} ${isSelected && selectedClass}`} onMouseDown={clickHandler}>
                      {result.name}
                      {alreadyInList &&
                        <span>&#10539;</span>}
                    </li>
                  )
                })}
              </ul>}
            {results.length === 0 &&
              <p className='py-1 text-center'>No hay resultados.</p>}
          </div>}
      </div>
      <ul className='flex flex-wrap gap-2' onClick={focus}>
        {keywords.map(tag => (
          <li
            key={tag.id} className='cursor-pointer border-1 px-2 break-words text-pretty hyphens-auto max-w-full'
            onClick={() => toggleTag(tag)}
          >
            {tag.name} <span>&#10539;</span>
          </li>
        ))}
      </ul>
    </FilterItem>
  )
}
