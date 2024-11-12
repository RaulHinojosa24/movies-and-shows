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

      getKeywordsByQuery({ query: userInput.trim() })
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
    <FilterItem title='Keywords'>
      <div className='w-full max-w-full relative'>
        <input
          className='bg-transparent border-none outline-none w-full py-1' placeholder='Add keyword'
          value={userInput} onChange={changeHandler} onKeyDown={keyDownHandler} onBlur={inputBlurHandler}
        />
        {resultsVisible &&
          <div className='z-10 absolute bottom-0 left-0 right-0 max-h-80 overflow-y-auto translate-y-full bg-light-1 dark:bg-dark-2 border-1 shadow shadow-colors border-t-0 rounded-b'>
            {results.length > 0 &&
              <ul ref={resultsListRef}>
                {results.map((result, index) => {
                  const isSelected = index === resultIndex
                  const alreadyInList = keywords.some(tag => tag.id === result.id)
                  const inListClass = 'bg-accent text-black font-semibold'
                  const removeClass = 'dark:!bg-red-600 !bg-red-500'
                  const selectedClass = 'bg-light-3 dark:bg-dark-3'
                  const hoverClass = alreadyInList ? 'dark:hover:!bg-red-600 hover:!bg-red-500' : 'dark:hover:bg-dark-3 hover:bg-light-3'

                  const clickHandler = (e) => {
                    toggleTag(result)
                    e.preventDefault()
                  }

                  return (
                    <li key={result.id}>
                      <button className={`w-full py-1 px-2 cursor-pointer flex justify-between transition-all ${hoverClass} ${alreadyInList && inListClass} ${alreadyInList && isSelected && removeClass} ${isSelected && selectedClass}`} onMouseDown={clickHandler}>
                        {result.name}
                        {alreadyInList &&
                          <span>&#10539;</span>}
                      </button>
                    </li>
                  )
                })}
              </ul>}
            {results.length === 0 &&
              <p className='py-1 text-center'>No keywords found</p>}
          </div>}
      </div>
      <ul className='flex flex-wrap gap-2'>
        {keywords.map(tag => (
          <li key={tag.id}>
            <button className='cursor-pointer border-1 px-2 break-words text-pretty hyphens-auto max-w-full rounded' onClick={() => toggleTag(tag)}>{tag.name} <span>&#10539;</span></button>
          </li>
        ))}
      </ul>
    </FilterItem>
  )
}
