import { Link, useRouteLoaderData } from 'react-router-dom'
import PersonInfo from '../components/Person/PersonInfo'
import DefaultProfile from '../assets/default-user.png'
import { retrieveConfig } from '../utils/utility'
import PersonBio from '../components/Person/PersonBio'
import PersonCredits from '../components/Person/PersonCredits'
import PersonKnownFor from '../components/Person/PersonKnownFor'
import SocialLinks from '../components/PageUI/SocialLinks'
import Main from '../components/PageUI/Main'

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
    <Main
      left={
        <>
          <img className='aspect-[2/3] object-cover w-full mx-auto max-w-aside rounded custom-shadow' src={prettyProfilePath} alt={'Foto de ' + name} />
          <PersonInfo className='hidden md:block' />
        </>
      }
      center={
        <>
          <h1 className='text-4xl font-bold text-center md:text-left'>{name}</h1>
          <Link to='media' className='font-bold text-center md:text-left'>TODO: Ver Media</Link>
          <PersonInfo className='md:hidden block' />
          <PersonBio />
          <PersonKnownFor />
          <PersonCredits />
        </>
      }
      right={
        <SocialLinks externalIDs={externalIDs} name={name} isPerson />
      }
    />
  )
}
