import { Link, useRouteLoaderData } from 'react-router-dom'

import Section from '../UI/Section'

import useBodyDimensions from '../../hooks/useBodyDimensions'
import { calculateImageSize, retrieveConfig } from '../../utils/utility'
// {
//   id: 131295,
//   name: 'Capitán América - Colección',
//   poster_path: '/c78ZW1qaO62fLxNbaTGKp6n2PrQ.jpg',
//   backdrop_path: '/ezEpSQhUQxVKdMx81zaSLsTHv7j.jpg'
// }
export default function MovieCollection () {
  const {
    belongs_to_collection: collection
  } = useRouteLoaderData('movie-details')
  const {
    images: {
      secure_base_url: baseURL,
      backdrop_sizes: backdropSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))
  const { width } = useBodyDimensions()
  const backdropSize = calculateImageSize(backdropSizes, width, 1)
  const backdropURL = baseURL + backdropSize + collection?.backdrop_path

  return (
    <>
      {collection &&
        <Section title='Colección'>
          <div
            style={{
              backgroundImage: `
          url(${backdropURL}),
          linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))
        `
            }} className='flex flex-col items-center bg-cover bg-center bg-no-repeat rounded py-12 bg-blend-overlay'
          >
            <p>Ésta película pertenece a...</p>
            <h3 className='text-3xl'>{collection.name}</h3>
            <Link to={'/collection/' + collection.id} className='mt-8 bg-yellow-400 text-black font-bold py-1 px-6 rounded-full'>Ver la colección completa</Link>
          </div>
        </Section>}
    </>
  )
}
