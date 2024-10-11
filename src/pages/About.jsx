import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function AboutPage () {
  setDocTitle('Sobre el proyecto')

  return (
    <Main
      center={
        <div className='max-w-5xl mx-auto p-6 md:px-12 dark:bg-dark-1 bg-light-1 shadow-lg shadow-colors rounded'>
          <div>
            <h1 className='text-4xl font-bold text-accent mb-1'>Sobre el proyecto</h1>
            <p className='text-lg font-semibold mb-4'>Bienvenida/o a Movies & Shows!</p>
            <p className='mb-4'>
              El objetivo de este proyecto es proporcionar una plataforma
              útil y competitiva donde poder buscar información sobre tus series y películas favoritas.
              Utilizamos la API de TMDB para ofrecer datos actualizados y detallados sobre una amplia variedad
              de contenidos.
              <br />
              Dejar claro que utilizo las APIs de TMDB pero no está avalado, certificado ni aprobado de ninguna manera por TMDB.
            </p>
            <p className='mb-4'>
              Este proyecto no solo ha sido concebido con objetivo de presentar un producto a los usuarios, sino también como una herramienta personal de práctica para mejorar mis habilidades en programación. Se utilizan tecnologías modernas
              como React y Tailwind CSS para construir una experiencia de usuario eficiente y atractiva.
            </p>
          </div>
          <div>
            <h2 className='text-2xl text-accent font-bold mb-2'>Objetivos</h2>
            <ul className='list-disc list-inside mb-4'>
              <li>Proporcionar información precisa y actualizada sobre series y películas.</li>
              <li>Ofrecer una interfaz de usuario intuitiva y fácil de usar.</li>
              <li>Mejorar continuamente mis habilidades en desarrollo web y programación.</li>
            </ul>
          </div>
          <div>
            <h2 className='text-2xl text-accent font-bold  mb-2'>Tecnologías utilizadas</h2>
            <ul className='list-disc list-inside mb-4'>
              <li>React</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>API de TMDB</li>
            </ul>
          </div>
        </div>
      }
    />
  )
}
