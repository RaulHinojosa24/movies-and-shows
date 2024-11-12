import { formatLongDate } from '../../utils/utility'
import DefaultUser from '../../assets/default-user.webp'
import ClampedText from '../UI/ClampedText'
import VoteCard from '../PageUI/VoteCard'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import { settingsContext } from '../../context/settings-context'

export default function ReviewItem ({ author, author_details: authorDetails = {}, content, created_at: createdAt, id, updated_at: updatedAt, url }) {
  const { config } = useContext(rootContext)
  const { country, language } = useContext(settingsContext)

  const { name, username, avatar_path: avatarPath, rating } = authorDetails

  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const prettyUserImage = config && avatarPath
    ? config?.images?.secure_base_url + config?.images?.profile_sizes[0] + avatarPath
    : DefaultUser
  const prettyCreationDate = formatLongDate(createdAt, appLanguage)
  const prettyUsername = username || author

  return (
    <div className='shadow shadow-colors rounded p-6'>
      <header className='flex items-center gap-4'>
        <img crossOrigin='anonymous' src={prettyUserImage} alt={`${prettyUsername}'s profile picture`} className='aspect-square w-12 rounded-full object-cover object-top' loading='lazy' />
        <div>
          <h3 className='text-lg font-semibold'>A review by {name || prettyUsername}</h3>
          <div className='font-thin text-sm flex flex-wrap gap-x-2'>
            {rating &&
              <VoteCard rating={rating} minimal hidePopover />}
            Written by <span className='font-semibold'>{prettyUsername}</span> on {prettyCreationDate}
          </div>
        </div>
      </header>
      <main className='mt-3'>
        <ClampedText text={content} clampClass='line-clamp-5' />
      </main>
    </div>
  )
}
