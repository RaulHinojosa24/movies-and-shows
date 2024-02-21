import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function MainNavigation () {
  return (
    <header className='w-full h-12 px-app-space fixed top-0 left-0 bg-neutral-900 z-10 shadow-sm shadow-[#171717]'>
      <div className='content h-full py-2 flex gap-4 items-center'>
        <NavLink to='/' className='h-full'><img loading='lazy' src={logo} className='h-full rounded' alt='Movies and Shows logo. Yellow background with "M&S" written in black.' /></NavLink>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <NavLink to='/'>Test</NavLink>
            </li>
            <li>
              <NavLink to='/'>Test</NavLink>
            </li>
            <li>
              <NavLink to='/'>Test</NavLink>
            </li>
            <li>
              <NavLink to='/'>Test</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to='/login' className='ml-auto'>Log in</NavLink>
      </div>
    </header>
  )
}
