import { NavLink, useMatch } from 'react-router-dom'
import logo from '../assets/logo.png'
import SearchBar from '../components/Search/SearchBar'

const activeClasses = ({ isActive }) => 'no-underline ' + (isActive ? 'font-bold' : '')

export default function MainNavigation () {
  const isSearchPage = useMatch('/search/*')

  return (
    <header className='w-full h-12 px-app-space sticky top-0 bg-neutral-900 text-white z-20 shadow-sm shadow-neutral-900'>
      <div className='content h-full py-2 flex gap-4 items-center'>
        <NavLink to='/' className='h-full'><img loading='lazy' src={logo} className='h-full rounded' alt='Movies and Shows logo. Yellow background with "M&S" written in black.' /></NavLink>
        <nav className='mr-auto'>
          <ul className='flex gap-4'>
            <li>
              <NavLink to='/search' className={activeClasses}>Buscador</NavLink>
            </li>
            <li>
              <NavLink to='/movie' className={activeClasses}>Películas</NavLink>
            </li>
            <li>
              <NavLink to='/tv' className={activeClasses}>Series de TV</NavLink>
            </li>
          </ul>
        </nav>
        {!isSearchPage &&
          <SearchBar compact />}
        {/* <NavLink to='/login'>Log in</NavLink> */}
      </div>
    </header>
  )
}
