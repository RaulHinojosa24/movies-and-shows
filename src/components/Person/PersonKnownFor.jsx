import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { retrieveConfig } from '../../utils/utility'

import DefaultProfileImage from '../../assets/default-user.png'
import Slider from '../PageUI/Slider'

const sortingLogic = (cc) => cc.vote_count ** 2 * cc.vote_average

export default function PersonKnownFor () {
  const {
    combined_credits: {
      cast, crew
    }
  } = useRouteLoaderData('person-details')
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const combinedCredits = [...cast, ...crew]
    .filter((el, i, array) => array.findIndex(a => a.id === el.id) === i)
    .sort((a, b) => sortingLogic(b) - sortingLogic(a))
    .filter((_, i) => i < 9)
    .map(cc => ({
      id: cc.id,
      name: cc.name,
      title: cc.title,
      posterPath: cc.poster_path
        ? baseURL + posterSizes[1] + cc.poster_path
        : DefaultProfileImage,
      type: cc.media_type
    }))

  const slide = ({ id, name, title, posterPath, type }) => (
    <div className='h-full w-32 rounded overflow-hidden custom-shadow'>
      <Link to={`/${type}/${id}`}>
        <img loading='lazy' className='aspect-[2/3] w-full object-cover object-top' src={posterPath} alt={`Póster de ${title || name}`} />
      </Link>
      <div className='p-2 h-full'>
        <Link to={`/${type}/${id}`} className='inline-block'>
          <p className='no-swiping font-semibold w-fit'>{title || name}</p>
        </Link>
      </div>
    </div>
  )

  return (
    <>
      <Section title='Conocida por'>
        <Slider slides={combinedCredits} SlideComponent={slide} />
      </Section>
    </>
  )
}
