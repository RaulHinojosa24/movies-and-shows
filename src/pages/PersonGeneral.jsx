import { Link, useRouteLoaderData } from 'react-router-dom'
import PersonInfo from '../components/Person/PersonInfo'
import DefaultProfile from '../assets/default-user.png'
import { retrieveConfig } from '../utils/utility'
import PersonBio from '../components/Person/PersonBio'
import PersonCredits from '../components/Person/PersonCredits'
import PersonKnownFor from '../components/Person/PersonKnownFor'
import SocialLinks from '../components/UI/SocialLinks'

export default function PersonGeneralPage () {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))
  const data = useRouteLoaderData('person-details')
  const {
    external_ids: externalIDs,
    profile_path: profilePath,
    name
  } = data

  const prettyProfilePath = profilePath
    ? baseURL + profileSizes[2] + profilePath
    : DefaultProfile

  return (
    <main className='flex p-app-space gap-8'>
      <section className='w-aside shrink-0 space-y-8'>
        <img className='aspect-[2/3] object-cover w-full rounded' src={prettyProfilePath} alt={'Foto de ' + name} />
        <PersonInfo />
      </section>
      <section className='min-w-0 w-full space-y-8'>
        <h1 className='text-4xl font-bold'>{name}</h1>
        <Link to='media' className='font-bold'>TODO: Ver Media</Link>
        <PersonBio />
        <PersonKnownFor />
        <PersonCredits />
      </section>
      <section>
        <SocialLinks externalIDs={externalIDs} name={name} />
      </section>
    </main>
  )
}
