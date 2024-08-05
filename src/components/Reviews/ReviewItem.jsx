import { formatLongDate } from '../../utils/utility'
import DefaultUser from '../../assets/default-user.png'
import ClampedText from '../UI/ClampedText'
import VoteCard from '../PageUI/VoteCard'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function ReviewItem ({ author, authorDetails, content, createdAt, id, updatedAt, url }) {
  const { config } = useContext(rootContext)

  const { name, username, avatar_path: avatarPath, rating } = authorDetails

  const prettyUserImage = config && avatarPath
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[0] + avatarPath
    : DefaultUser
  const prettyCreationDate = formatLongDate(createdAt)
  const prettyUsername = username || author

  return (
    <div className='custom-shadow rounded p-6'>
      <header className='flex items-center gap-4'>
        <img src={prettyUserImage} alt={'Imagen de perfil de ' + prettyUsername} className='aspect-square w-12 rounded-full' loading='lazy' />
        <div>
          <a href={url} target='_blank'>
            <h3 className='text-lg font-semibold'>Una reseña de {name || prettyUsername}</h3>
          </a>
          <p className='font-thin text-sm'>
            {rating &&
              <VoteCard rating={rating} minimal />}
            Escrita por <span className='font-semibold text-ba'>{prettyUsername}</span> el {prettyCreationDate}
          </p>
        </div>
      </header>
      <main className='mt-3'>
        <ClampedText text={content} clampClass='line-clamp-5' />
      </main>
    </div>
  )
}
