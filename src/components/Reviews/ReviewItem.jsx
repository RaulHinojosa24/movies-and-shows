import { useRouteLoaderData } from 'react-router-dom'
import { formatLongDate, retrieveConfig } from '../../utils/utility'

import DefaultUser from '../../assets/default-user.png'
import { useEffect, useRef, useState } from 'react'

export default function ReviewItem ({ author, authorDetails, content, createdAt, id, updatedAt, url }) {
  const clampedContent = useRef()
  const [isClamped, setIsClamped] = useState(false)

  useEffect(() => {
    setIsClamped(clampedContent.current.scrollHeight > clampedContent.current.clientHeight)
  }, [])

  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const { name, username, avatar_path: avatarPath, rating } = authorDetails

  const userImg = avatarPath
    ? baseURL + profileSizes[0] + avatarPath
    : DefaultUser

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
            {rating && <span className='bg-neutral-100 text-black font-bold px-2 rounded mr-2'>{rating} &#9733;</span>}
            Escrita por <span className='font-semibold text-ba'>{username || author}</span> el {prettyCreationDate}
          </p>
        </div>
      </header>
      <main className='mt-3'>
        <p className={`whitespace-pre-line text-pretty line-clamp-5 ${isClamped ? 'read-shadow after:to-neutral-900' : ''}`} ref={clampedContent}>{content}</p>
        {isClamped && <a href={url} target='_blank'>Leer más</a>}
      </main>
    </div>
  )
}
