import { useRouteLoaderData } from 'react-router-dom'
import { formatLongDate, retrieveConfig } from '../../utils/utility'

import DefaultUser from '../../assets/default-user.png'
import ClampedText from '../UI/ClampedText'
import VoteCard from '../PageUI/VoteCard'
import { useEffect, useState } from 'react'

export default function ReviewItem ({ author, authorDetails, content, createdAt, id, updatedAt, url }) {
  const [userImg, setUserImg] = useState(DefaultUser)
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const { name, username, avatar_path: avatarPath, rating } = authorDetails

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        profile_sizes: profileSizes
      }
    }) => {
      if (avatarPath) setUserImg(baseURL + profileSizes[0] + avatarPath)
    })
  }, [avatarPath, loaderConfig])

  const prettyCreationDate = formatLongDate(createdAt)

  return (
    <div className='custom-shadow border- rounded p-6'>
      <header className='flex items-center gap-4'>
        <img src={userImg} alt={'Profile image of the user ' + (username || author)} className='aspect-square w-12 rounded-full' />
        <div>
          <a href={url} target='_blank'>
            <h3 className='text-lg font-semibold'>Una reseña de {name || username || author}</h3>
          </a>
          <p className='font-thin text-sm'>
            {rating &&
              <VoteCard rating={rating} minimal />}
            Escrita por <span className='font-semibold text-ba'>{username || author}</span> el {prettyCreationDate}
          </p>
        </div>
      </header>
      <main className='mt-3'>
        <ClampedText text={content} clampClass='line-clamp-5' />
      </main>
    </div>
  )
}
