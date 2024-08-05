import { Link } from 'react-router-dom'
import DefaultProfileImage from '../../assets/default-user.png'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function CastItem ({ id, image, primary, secondary }) {
  const { config } = useContext(rootContext)

  const profileURL = config && image
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[1] + image
    : DefaultProfileImage

  return (
    <div className='flex gap-4'>
      <Link to={'/person/' + id} className='shrink-0'>
        <img className='aspect-[5/6] h-20 object-cover object-top rounded' loading='lazy' src={profileURL} alt={'Foto de perfil de ' + primary} />
      </Link>
      <div className='flex flex-col justify-center'>
        <Link to={'/person/' + id} className='font-semibold'>
          {primary}
        </Link>
        <p className='text-sm [&>*+*]:before:content-[","] [&>*+*]:before:mr-1'>{secondary.map(j => {
          const { credit_id: id, job, character, episode_count: episodes } = j

          return (
            <span key={id}>
              {job || character} {episodes && <>({episodes} episodios)</>}
            </span>
          )
        })}
        </p>
      </div>
    </div>
  )
}
