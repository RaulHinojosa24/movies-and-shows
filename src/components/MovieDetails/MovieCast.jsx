import { useRouteLoaderData } from 'react-router-dom'
import { calculateImageSize } from '../../utils/utility'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Section from '../UI/Section'
import { useEffect, useRef } from 'react'

export default function MovieCast ({ cast }) {
  const sliderRef = useRef()

  useEffect(() => {
    const swiperContainer = sliderRef.current

    const params = {
      slidesPerView: 'auto',
      spaceBetween: 15,
      scrollbar: {
        hide: true
      },
      noSwipingClass: 'no-swiping',
      injectStyles: [`
        @tailwind utilities;

        .swiper {
          padding: 1px 5px 20px 5px;
          margin: -1px -5px -9px -5px;
        }

        .swiper::after {
          content: "";
          width: 60px;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          background-image: linear-gradient(to right, transparent, #0a0a0a);
          pointer-events: none;
          z-index: 10;
        }
        `]
    }

    Object.assign(swiperContainer, params)
    swiperContainer.initialize()
  }, [])

  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = useRouteLoaderData('root')

  const { width } = useWindowDimensions()

  const pictureSize = calculateImageSize(profileSizes.filter(s => s.includes('w')), width, 1 / 10)

  const shortCast = cast
    .filter((_, id) => id < 9)

  return (
    <Section title='Reparto principal'>
      <swiper-container
        ref={sliderRef}
        init={false}
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
              <div className='h-full w-36 rounded overflow-hidden border-[1px] border-neutral-700 border-opacity-50 shadow-md shadow-neutral-800'>
                <div className='aspect-[4/5] overflow-hidden'>
                  <img loading='lazy' src={baseURL + pictureSize + picturePath} alt={`Picture of ${name}`} />
                </div>
                <div className='p-2 h-full'>
                  <p className='no-swiping font-semibold w-fit'>{name}</p>
                  <p className='no-swiping w-fit'>{character}</p>
                </div>
              </div>
            </swiper-slide>
          )
        })}
        <swiper-slide>
          <div className='w-32 h-full grid place-items-center'>
            Ver más ➡
          </div>
        </swiper-slide>
      </swiper-container>
    </Section>
  )
}
