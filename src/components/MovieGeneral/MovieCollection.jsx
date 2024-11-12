import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function MovieCollection ({ collection }) {
  const { config } = useContext(rootContext)

  const backdropURL = config && collection.backdrop_path
    ? config?.images?.secure_base_url + config?.images?.backdrop_sizes[2] + collection.backdrop_path
    : ''

  return (
    <Section title='Collection' className='text-white'>
      <div
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
          url(${backdropURL})
          `
        }} className='flex flex-col items-center bg-cover bg-center bg-no-repeat rounded py-12 p-8'
      >
        <p>This movie is part of...</p>
        <h3 className='text-3xl text-center'>{collection.name}</h3>
        <Link to={'/collection/' + collection.id} className='mt-8 bg-accent text-black font-bold py-1 px-6 rounded'>Visit collection</Link>
      </div>
    </Section>
  )
}
