import { Await, Link, useRouteLoaderData } from 'react-router-dom'
import PersonInfo from '../components/Person/PersonInfo'
import DefaultProfile from '../assets/default-user.webp'
import { setDocTitle } from '../utils/utility'
import PersonBio from '../components/Person/PersonBio'
import PersonCredits from '../components/Person/PersonCredits'
import PersonKnownFor from '../components/Person/PersonKnownFor'
import SocialLinks from '../components/PageUI/SocialLinks'
import Main from '../components/PageUI/Main'
import { Suspense, useContext } from 'react'
import { rootContext } from '../context/root-context'
import PersonGeneralSkeleton from '../skeleton-pages/PersonGeneralSkeleton'
import ErrorPage from './ErrorPage'
import AdultTag from '../components/PageUI/AdultTag'

export default function PersonGeneralPage () {
  const { data: loaderPersonDetails } = useRouteLoaderData('person-details')
  const { config } = useContext(rootContext)
  setDocTitle('Loading...')

  return (
    <Suspense fallback={<PersonGeneralSkeleton />}>
      <Await
        resolve={loaderPersonDetails}
        errorElement={<ErrorPage />}
      >
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
          },
          adult
        }) => {
          setDocTitle(name)

          const prettyProfilePath = profilePath
            ? config?.images?.secure_base_url + config?.images?.profile_sizes?.[2] + profilePath
            : DefaultProfile

          return (
            <Main
              left={
                <>
                  <div className='w-fit mx-auto relative'>
                    <Link to='media' className='no-underline absolute top-0 left-0 w-full h-full grid text-center content-center font-semibold opacity-0 hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-12 text-lg text-white rounded'>View all portraits</Link>
                    <img loading='lazy' crossOrigin='anonymous' className='aspect-[2/3] object-cover w-full mx-auto max-w-aside rounded shadow shadow-colors' src={prettyProfilePath} alt={`${name}'s picture`} />
                  </div>
                  <div className='text-center md:text-left'>
                    <h1 className='text-4xl font-bold'>{name}</h1>
                    {adult &&
                      <AdultTag />}
                  </div>
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
