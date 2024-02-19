import { useRouteLoaderData } from 'react-router-dom'
import { calculateImageSize } from '../../utils/utility'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Section from '../UI/Section'

export default function MovieCast ({ cast }) {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = useRouteLoaderData('root')

  const { width } = useWindowDimensions()

  const pictureSize = calculateImageSize(profileSizes.filter(s => s.includes('w')), width, 1 / 10)

  const shortCast = cast.filter((_, id) => id < 9)

  return (
    <Section title='Reparto principal'>
      <swiper-container
        slides-per-view='auto'
        space-between={15}
        scrollbar
        scrollbar-hide
        no-swiping-class='no-swiping'
      >
        {shortCast.map(({
          id,
          name,
          originalName,
          picturePath,
          character
        }) => {
          return (
            <swiper-slide key={id}>
              <div className='rounded overflow-hidden border-[1px] border-neutral-700 border-opacity-50 h-full'>
                <img src={baseURL + pictureSize + picturePath} alt={`Picture of ${name}`} className='w-32 aspect-[2/3]' />
                <div className='p-2 w-32 h-full'>
                  <p className='no-swiping font-semibold'>{name}</p>
                  <p className='no-swiping '>{character}</p>
                </div>
              </div>
            </swiper-slide>
          )
        })}
        <swiper-slide>
          <div className='rounded overflow-hidden w-32 h-full grid place-items-center'>
            Ver más ➡
          </div>
        </swiper-slide>
      </swiper-container>
    </Section>
  )
}
