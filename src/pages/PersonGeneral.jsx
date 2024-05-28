import { Await, Link, useRouteLoaderData } from 'react-router-dom'
import PersonInfo from '../components/Person/PersonInfo'
import DefaultProfile from '../assets/default-user.png'
import { retrieveConfig, setDocTitle } from '../utils/utility'
import PersonBio from '../components/Person/PersonBio'
import PersonCredits from '../components/Person/PersonCredits'
import PersonKnownFor from '../components/Person/PersonKnownFor'
import SocialLinks from '../components/PageUI/SocialLinks'
import Main from '../components/PageUI/Main'
import { Suspense, useState } from 'react'
import SocialLinksSkeleton from '../components/Skeletons/SocialLinksSkeleton'

export default function PersonGeneralPage () {
  const [prettyProfilePath, setPrettyProfilePath] = useState('')
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const { data: loaderPersonDetails } = useRouteLoaderData('person-details')

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={loaderPersonDetails}>
        {({
          external_ids: externalIDs,
          profile_path: profilePath,
          name,
          also_known_as: alsoKnownAs,
          birthday,
          deathday,
          gender,
          known_for_department: knownForDepartment,
          place_of_birth: placeOfBirth,
          biography,
          id,
          combined_credits: {
            cast, crew
          }
        }) => {
          setDocTitle(name)

          loaderConfig.then(({
            images: {
              secure_base_url: baseURL,
              profile_sizes: profileSizes
            }
          }) => setPrettyProfilePath(profilePath
            ? baseURL + profileSizes[2] + profilePath
            : DefaultProfile))

          return (
            <Main
              left={
                <>
                  <Link to='media' className='block mx-auto relative group'>
                    <span className='absolute top-0 left-0 w-full h-full grid text-center content-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-12 text-lg'>Ver todas las imágenes</span>
                    <img className='aspect-[2/3] object-cover w-full mx-auto max-w-aside rounded custom-shadow' src={prettyProfilePath} alt={'Foto de ' + name} />
                  </Link>
                  <h1 className='text-4xl font-bold text-center md:text-left'>{name}</h1>
                  <PersonInfo alsoKnownAs={alsoKnownAs} birthday={birthday} deathday={deathday} gender={gender} knownForDepartment={knownForDepartment} placeOfBirth={placeOfBirth} />
                </>
              }
              center={
                <>
                  <PersonBio biography={biography} />
                  <PersonKnownFor id={id} cast={cast} crew={crew} />
                  <PersonCredits cast={cast} crew={crew} />
                </>
              }
              right={
                <SocialLinks externalIDs={externalIDs} name={name} isPerson />
              }
            />
          )
        }}
      </Await>
    </Suspense>

  )
}

function Fallback () {
  return (
    <Main
      left={
        <div className='w-full space-y-4'>
          <div className='aspect-[2/3] w-full skeleton rounded' />
          <div className='skeleton__title w-full' />
          <div className='skeleton__title w-1/2' />
          <div className='skeleton__text w-3/4' />
          <div className='skeleton__title w-1/2' />
          <div className='skeleton__text w-3/4' />
          <div className='skeleton__title w-1/2' />
          <div className='skeleton__text w-3/4' />
        </div>
      }
      center={
        <div className='w-full space-y-4'>
          <div className='skeleton__title w-1/4' />
          <div className='skeleton__paragraph w-full !h-40' />
          <div className='skeleton__title w-1/4' />
          <div className='flex gap-4 overflow-hidden'>
            {Array(5).fill().map((_, i) => <div key={i} className='aspect-[2/3] shrink-0 w-32 skeleton rounded' />)}
          </div>
        </div>
      }
      right={
        <SocialLinksSkeleton />
      }
    />
  )
}
