import { Link } from 'react-router-dom'
import LogoBig from '../assets/logo_big.webp'
import GithubLogo from '../logos/GithubLogo'
import LinkedinLogo from '../logos/LinkedinLogo'

export default function Footer () {
  return (
    <footer className='p-app-space bg-neutral-900 text-white shadow-sm shadow-neutral-900'>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 mb-4'>
        <div className='self-center'>
          <img src={LogoBig} loading='lazy' alt='Logo con texto en amarillo "Movies & Shows"' className='aspect-square max-w-1/2 w-40 mx-auto' />
        </div>
        <div className='block md:contents space-y-4 md:space-y-0'>
          <FooterSection title='Enlaces principales'>
            <li>
              <Link to='/search'>Buscador</Link>
            </li>
            <li>
              <Link to='/movie'>Películas</Link>
            </li>
            <li>
              <Link to='/tv'>Series de TV</Link>
            </li>
          </FooterSection>
          <FooterSection title='Sobre el proyecto'>
            <li>
              <ul className='flex gap-4'>
                <li>
                  <a className='inline-block' href='https://github.com/RaulHinojosa24/movies-and-shows' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo className='w-8 h-8' />
                  </a>
                </li>
                <li>
                  <a className='inline-block' href='https://www.linkedin.com/in/raulhinojosaperez/' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo className='w-8 h-8' />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/about'>¿Qué es Movies&Shows?</Link>
            </li>
          </FooterSection>
        </div>
      </section>
      <p className='text-center text-neutral-400'>Este sitio web utiliza TMDB y las APIs de TMDB pero no está avalado, certificado ni aprobado de ninguna manera por TMDB.</p>
    </footer>
  )
}

const FooterSection = ({ title, children }) => {
  return (
    <div>
      <h2 className='text-xl mb-2 text-yellow-400 font-semibold'>{title}</h2>
      <ul className='space-y-1'>
        {children}
      </ul>
    </div>
  )
}
