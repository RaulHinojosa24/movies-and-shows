import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Popover ({ popoverTarget, children, className = '', noDelay, compact }) {
  const [showPopover, setShowPopover] = useState(false)
  const [popoverStyle, setPopoverStyle] = useState({})
  const timeoutRef = useRef(null)
  const buttonRef = useRef(null)
  const popoverRef = useRef(null)
  const resizeObserverRef = useRef(null)

  const calculatePopoverPosition = () => {
    if (buttonRef.current && popoverRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const popoverRect = popoverRef.current.getBoundingClientRect()
      const windowWidth = window.innerWidth
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      const sideMargin = 10

      let left = buttonRect.left + (buttonRect.width / 2) - (popoverRect.width / 2)

      if (left < sideMargin) {
        left = sideMargin
      }

      if (left + popoverRect.width + sideMargin > windowWidth - scrollbarWidth - sideMargin) {
        left = windowWidth - scrollbarWidth - popoverRect.width - sideMargin
      }

      setPopoverStyle({
        top: buttonRect.top + buttonRect.height + sideMargin,
        left,
        maxWidth: windowWidth - (sideMargin * 2) - scrollbarWidth
      })
    }
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setShowPopover(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopover(false)
    }, noDelay ? 0 : 500)
  }

  const handlePopoverEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handlePopoverLeave = () => {
    handleMouseLeave()
  }

  useEffect(() => {
    if (showPopover) {
      window.addEventListener('scroll', calculatePopoverPosition)
      window.addEventListener('resize', calculatePopoverPosition)
      calculatePopoverPosition()
      resizeObserverRef.current = new ResizeObserver(() => {
        calculatePopoverPosition()
      })

      if (popoverRef.current) {
        resizeObserverRef.current.observe(popoverRef.current)
      }
    }

    return () => {
      window.removeEventListener('scroll', calculatePopoverPosition)
      window.removeEventListener('resize', calculatePopoverPosition)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
    }
  }, [showPopover])

  return (
    <div className='inline-flex items-center justify-center'>
      <span
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {popoverTarget}
      </span>

      {showPopover && (
        <>
          {createPortal(
            <div
              ref={popoverRef}
              className={`fixed ${compact ? 'px-3 py-1' : 'px-4 py-2'} w-fit rounded dark:bg-dark-3 bg-light-1 z-40 shadow shadow-colors ${className}`}
              style={popoverStyle}
              onMouseEnter={handlePopoverEnter}
              onMouseLeave={handlePopoverLeave}
            >
              {children}
            </div>, document.getElementById('overlay'))}
        </>
      )}
    </div>
  )
}
