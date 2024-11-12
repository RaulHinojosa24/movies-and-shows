import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function AboutPage () {
  setDocTitle('About The Project')

  return (
    <Main
      center={
        <div className='max-w-5xl mx-auto p-6 md:px-12 dark:bg-dark-1 bg-light-1 shadow-lg shadow-colors rounded'>
          <div>
            <h1 className='text-4xl font-bold text-accent mb-1'>About The Project</h1>
            <p className='text-lg font-semibold mb-4'>Welcome to Movies & Shows!</p>
            <p className='mb-4'>
              The goal of this project is to provide a useful and competitive platform
              where you can search for information about your favorite movies and shows.
              We use the TMDB API to offer up-to-date, detailed data on a wide variety
              of content.
              <br />
              Please note that although this project uses the TMDB APIs, it is not endorsed, certified, or approved by TMDB in any way.
            </p>
            <p className='mb-4'>
              This project has been conceived not only to provide a product to users, but also as a personal practice tool to improve my programming skills. Modern technologies
              like React and Tailwind CSS are used to create an efficient and engaging user experience.
            </p>
          </div>
          <div>
            <h2 className='text-2xl text-accent font-bold mb-2'>Objectives</h2>
            <ul className='list-disc list-inside mb-4'>
              <li>Provide accurate and up-to-date information on movies and shows.</li>
              <li>Offer an intuitive and user-friendly interface.</li>
              <li>Continuously improve my skills in web development and programming.</li>
            </ul>
          </div>
          <div>
            <h2 className='text-2xl text-accent font-bold  mb-2'>Technologies Used</h2>
            <ul className='list-disc list-inside mb-4'>
              <li>React</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>TMDB API</li>
            </ul>
          </div>
        </div>
      }
    />
  )
}
