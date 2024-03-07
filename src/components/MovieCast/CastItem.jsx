import { Link } from 'react-router-dom'
import DefaultProfileImage from '../../assets/default-user.png'

export default function CastItem ({ id, image, primary, secondary }) {
  const profileURL = image || DefaultProfileImage

  return (
    <div className='flex gap-4'>
      <Link to={'/person/' + id} className='shrink-0'>
        <img className='aspect-[5/6] h-20 object-cover object-top rounded' loading='lazy' src={profileURL} alt={'Foto de perfil de ' + primary} />
      </Link>
      <div className='flex flex-col justify-center'>
        <Link to={'/person/' + id} className='font-semibold'>
          {primary}
        </Link>
        <p className='text-sm'>{secondary}</p>
      </div>
    </div>
  )
}
