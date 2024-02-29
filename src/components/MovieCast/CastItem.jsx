import { Link } from 'react-router-dom'
import DefaultProfileImage from '../../assets/default-user.png'

export default function CastItem ({ id, image, primary, secondary }) {
  const castImage = image || DefaultProfileImage

  return (
    <div className='flex gap-4'>
      <Link to={'/person/' + id}><img className='aspect-[5/6] h-20 object-cover object-top rounded' loading='lazy' src={castImage} alt={'Foto de perfil de ' + primary + ' no disponible'} /></Link>
      <div className='flex flex-col justify-center'>
        <Link to={'/person/' + id}>
          <p className='font-semibold w-fit'>{primary}</p>
        </Link>
        <p>{secondary}</p>
      </div>
    </div>
  )
}
