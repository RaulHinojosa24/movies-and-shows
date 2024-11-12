import { Link } from 'react-router-dom'
import LogoBig from '../assets/logo_big.webp'
import GithubLogo from '../logos/GithubLogo'
import LinkedinLogo from '../logos/LinkedinLogo'

export default function Footer () {
  return (
    <footer className='p-app-space bg-light-2 dark:bg-dark-2 shadow !border-0 shadow-colors mt-auto'>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
        <div className='self-center'>
          <img crossOrigin='anonymous' src={LogoBig} loading='lazy' alt='"Movies & Shows" logo with yellow text' className='aspect-square max-w-1/2 w-40 mx-auto' />
        </div>
        <div className='block md:contents space-y-4 md:space-y-0'>
          <FooterSection title='Get Around'>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/movie'>Movies</Link>
            </li>
            <li>
              <Link to='/tv'>TV Shows</Link>
            </li>
          </FooterSection>
          <FooterSection title='Learn more'>
            <li>
              <ul className='flex gap-4'>
                <li>
                  <a className='icon inline-block' href='https://github.com/RaulHinojosa24/movies-and-shows' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo className='w-8 h-8' />
                  </a>
                </li>
                <li>
                  <a className='icon inline-block' href='https://www.linkedin.com/in/raulhinojosaperez/' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo className='w-8 h-8' />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/about'>About Movies & Shows</Link>
            </li>
          </FooterSection>
        </div>
      </section>
    </footer>
  )
}

const FooterSection = ({ title, children }) => {
  return (
    <div>
      <h2 className='text-xl mb-2 text-accent font-semibold'>{title}</h2>
      <ul className='space-y-1'>
        {children}
      </ul>
    </div>
  )
}
