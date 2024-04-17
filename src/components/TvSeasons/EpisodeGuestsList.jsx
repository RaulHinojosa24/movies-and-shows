import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import SubSection from '../UI/SubSection'
import DefaultProfileImage from '../../assets/default-user.png'

export default function EpisodeGuestsList ({ className = '', guests }) {
  return (
    <SubSection title={<>Invitadas estrella <span className='opacity-75 font-normal'>{guests.length}</span></>} className='space-y-2'>
      <ul className={'grid lg:grid-cols-2 gap-2 ' + className}>
        {guests.map(({ id, credit_id: crId, name, character, original_name: ogName, profile_path: profilePath }) => {
          return <GuestItem key={crId} id={id} name={name || ogName} character={character} profilePath={profilePath} />
        })}
      </ul>
    </SubSection>
  )
}

function GuestItem ({ id, profilePath, name, character }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyProfilePath = profilePath ? baseURL + profileSizes[1] + profilePath : DefaultProfileImage

  return (
    <li className='flex gap-4'>
      <Link to={'/person/' + id} className='shrink-0'>
        <img className='aspect-[5/6] w-16 object-cover object-center rounded' loading='lazy' src={prettyProfilePath} alt={'Foto de perfil de ' + name} />
      </Link>
      <div className='flex flex-col justify-center'>
        <Link to={'/person/' + id} className='font-semibold'>
          {name}
        </Link>
        <p className='text-sm [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>
          {character}
        </p>
      </div>
    </li>
  )
}
