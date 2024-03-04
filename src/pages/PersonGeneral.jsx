import { useRouteLoaderData } from 'react-router-dom'
import PersonInfo from '../components/Person/PersonInfo'
import DefaultPoster from '../assets/default-poster.png'
import { retrieveConfig } from '../utils/utility'
import PersonBio from '../components/Person/PersonBio'
import PersonCredits from '../components/Person/PersonCredits'
import PersonKnownFor from '../components/Person/PersonKnownFor'

export default function PersonGeneralPage () {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))
  const data = useRouteLoaderData('person-details')
  const {
    profile_path: profilePath,
    name
  } = data

  const prettyProfilePath = profilePath
    ? baseURL + posterSizes[3] + profilePath
    : DefaultPoster

  return (
    <main className='flex mx-app-space gap-8'>
      <section className='mt-8 w-56 shrink-0'>
        <img className='aspect-[2/3] object-cover w-full rounded' src={prettyProfilePath} alt={'Foto de ' + name} />
        <PersonInfo />
      </section>
      <section className='min-w-0 w-full'>
        <h1 className='text-4xl font-bold my-8'>{name}</h1>
        <PersonBio />
        <PersonKnownFor />
        <PersonCredits />
      </section>
    </main>
  )
}
