import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function MainNavigation () {
  return (
    <header className='w-full h-12 p-2 px-8 fixed top-0 left-0 flex gap-4 items-center dark:bg-neutral-900 z-10'>
      <Link to='/' className='h-full'><img src={logo} className='h-full rounded' alt='Movies and Shows logo. Yellow background with "M&S" written in black.' /></Link>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link to='/'>Test</Link>
          </li>
          <li>
            <Link to='/'>Test</Link>
          </li>
          <li>
            <Link to='/'>Test</Link>
          </li>
          <li>
            <Link to='/'>Test</Link>
          </li>
        </ul>
      </nav>
      <Link to='/login' className='ml-auto'>Log in</Link>
    </header>
  )
}
