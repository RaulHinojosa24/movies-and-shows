import { Link } from 'react-router-dom'
import SubSection from '../UI/SubSection'
import DefaultProfileImage from '../../assets/default-user.webp'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import { formatNumber } from '../../utils/utility'

export default function EpisodeGuestsList ({ className = '', guests }) {
  const prettyAmount = formatNumber(guests.length)

  return (
    <SubSection title='Guest stars' subtitle={prettyAmount} className='space-y-2 w-full'>
      <ul className={'grid md:grid-cols-2 lg:grid-cols-3 gap-2 ' + className}>
        {guests.map(({ id, credit_id: crId, name, character, original_name: ogName, profile_path: profilePath }) => {
          return <GuestItem key={crId} id={id} name={name || ogName} character={character} profilePath={profilePath} />
        })}
      </ul>
    </SubSection>
  )
}

function GuestItem ({ id, profilePath, name, character }) {
  const { config } = useContext(rootContext)

  const prettyProfilePath = profilePath && config
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[1] + profilePath
    : DefaultProfileImage

  return (
    <li className='flex gap-4'>
      <Link to={'/person/' + id} className='shrink-0'>
        <img crossOrigin='anonymous' className='aspect-[5/6] w-16 object-cover object-center rounded' loading='lazy' src={prettyProfilePath} alt={`${name}'s picture`} />
      </Link>
      <div className='flex flex-col justify-center'>
        <Link to={'/person/' + id} className='font-semibold'>
          {name}
        </Link>
        <p className='text-sm'>
          {character}
        </p>
      </div>
    </li>
  )
}
