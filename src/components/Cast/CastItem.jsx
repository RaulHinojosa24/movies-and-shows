import { Link } from 'react-router-dom'
import DefaultProfileImage from '../../assets/default-user.webp'
import React, { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import AdultTag from '../PageUI/AdultTag'
import ElementsList from '../UI/ElementsList'

export default function CastItem ({ id, image, primary, secondary, adult }) {
  const { config } = useContext(rootContext)

  const profileURL = config && image
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[1] + image
    : DefaultProfileImage

  return (
    <li className='flex gap-4'>
      <Link to={'/person/' + id} className='shrink-0'>
        <img crossOrigin='anonymous' className='aspect-[5/6] h-20 object-cover object-top rounded' loading='lazy' src={profileURL} alt={'Foto de perfil de ' + primary} />
      </Link>
      <div className='flex flex-col justify-center'>
        <div>
          <Link to={'/person/' + id} className='inline-block font-semibold mr-2'>
            {primary}
          </Link>
          {adult &&
            <AdultTag />}
        </div>
        <ElementsList className='text-sm' style='comma'>
          {secondary.map(j => {
            const { credit_id: id, job, character, episode_count: episodes } = j
            return (
              <React.Fragment key={id}>
                {job || character} {episodes && <span className='text-medium'>({episodes} episodios)</span>}
              </React.Fragment>
            )
          })}
        </ElementsList>
      </div>
    </li>
  )
}
