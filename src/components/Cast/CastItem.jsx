import { Link, useRouteLoaderData } from 'react-router-dom'
import DefaultProfileImage from '../../assets/default-user.png'
import { useEffect, useState } from 'react'
import { retrieveConfig } from '../../utils/utility'

export default function CastItem ({ id, image, primary, secondary }) {
  const [profileURL, setProfileURL] = useState('')
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        profile_sizes: profileSizes
      }
    }) => {
      setProfileURL(image ? baseURL + profileSizes[1] + image : DefaultProfileImage)
    })
  }, [image, loaderConfig])

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
