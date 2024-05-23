import { Link, useRouteLoaderData } from 'react-router-dom'

import Section from '../UI/Section'
import { retrieveConfig } from '../../utils/utility'
import { useEffect, useState } from 'react'

export default function MovieCollection ({ collection }) {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [backdropURL, setBackdropURL] = useState('')

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        backdrop_sizes: backdropSizes
      }
    }) => {
      if (collection.backdrop_path) {
        setBackdropURL(baseURL + backdropSizes[2] + collection.backdrop_path)
      }
    })
  }, [collection.backdrop_path, loaderConfig])

  return (
    <Section title='Colección' className='text-white'>
      <div
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
          url(${backdropURL})
          `
        }} className='flex flex-col items-center bg-cover bg-center bg-no-repeat rounded py-12 p-8'
      >
        <p>Ésta película pertenece a...</p>
        <h3 className='text-3xl text-center'>{collection.name}</h3>
        <Link to={'/collection/' + collection.id} className='mt-8 bg-yellow-400 text-black font-bold py-1 px-6 rounded-full'>Ver la colección completa</Link>
      </div>
    </Section>
  )
}
