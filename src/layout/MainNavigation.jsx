import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.webp'
import SearchBar from '../components/Search/SearchBar'
import { useEffect, useState } from 'react'
import NavbarIcon from '../icons/NavbarIcon'
import { createPortal } from 'react-dom'
import Settings from '../components/AppSettings/Settings'

const desktopClasses = ({ isActive }) => 'no-underline ' + (isActive ? 'font-bold' : '')
const mobileClasses = ({ isActive }) => 'w-full py-2 px-4 dark:hover:bg-dark-4 dark:focus:bg-dark-4 dark:active:bg-dark-4 hover:bg-light-3 focus:bg-light-3 active:bg-light-3 transition-all inline-block no-underline ' + (isActive ? 'font-bold' : '')

const ROUTES = [
  {
    label: 'Search',
    route: '/search'
  },
  {
    label: 'Movies',
    route: '/movie'
  },
  {
    label: 'TV Shows',
    route: '/tv'
  }
]

export default function MainNavigation () {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbarExpanded = () => {
    setIsOpen(p => !p)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) document.body.style.setProperty('overflow', 'hidden')
    else document.body.style.removeProperty('overflow')
  }, [isOpen])

  return (
    <>
      <header className='sticky z-50 top-0'>
        <nav>
          <div className={`w-full h-12 px-app-space py-2 bg-light-2 dark:bg-dark-2 shadow !border-0 shadow-colors flex gap-4 items-center justify-between ${isOpen ? '!shadow-none' : 'md:justify-start'}`}>
            <button className={`h-3/4 shrink-0 ${isOpen ? '' : 'md:hidden'}`} onClick={toggleNavbarExpanded}>
              <NavbarIcon className='h-full' />
            </button>
            <NavLink to='/' className='h-full shrink-0 mx-auto md:m-0'>
              <img crossOrigin='anonymous' loading='lazy' src={logo} className='h-full rounded' alt='Movies & Shows logo. Yellow background with "M&S" written in black.' />
            </NavLink>
            <ul className={`${isOpen ? '' : 'md:flex'} hidden gap-4`}>
              {ROUTES.map(({ label, route }) =>
                <li key={route}>
                  <NavLink to={route} className={desktopClasses}>{label}</NavLink>
                </li>)}
            </ul>
            <SearchBar compact className={isOpen ? '' : 'md:ml-auto'} />
            <Settings />
          </div>
        </nav>
      </header>

      {createPortal(
        <div className={'fixed left-0 top-12 z-[45] w-full bg-light-1 dark:bg-dark-3 max-h-[calc(100vh-3rem)] overflow-auto transition-all ' + (isOpen ? 'shadow shadow-colors !border-0' : 'md:hidden -translate-y-full')}>
          <ul className='flex flex-col'>
            {ROUTES.map(({ label, route }) =>
              <li key={route}>
                <NavLink to={route} className={mobileClasses}>{label}</NavLink>
              </li>)}
          </ul>
        </div>,
        document.getElementById('overlay'))}

      {createPortal(
        <div className={'z-40 fixed left-0 top-0 right-0 bottom-0 bg-black/50 backdrop-blur-md transition-all ' + (isOpen ? 'opacity-100 visible' : 'md:hidden opacity-0 invisible')} onClick={toggleNavbarExpanded} />,
        document.getElementById('backdrop'))}
    </>
  )
}
