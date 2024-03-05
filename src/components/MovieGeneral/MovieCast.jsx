import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import Section from '../UI/Section'
import { useEffect, useRef } from 'react'

import DefaultProfileImage from '../../assets/default-user.png'

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
  } = retrieveConfig(useRouteLoaderData('root'))

  const pictureSize = profileSizes[1]

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
          const prettyPicturePath = picturePath
            ? baseURL + pictureSize + picturePath
            : DefaultProfileImage
          return (
            <swiper-slide key={id} lazy='true'>
              <div className='h-full w-36 rounded overflow-hidden custom-shadow'>
                <Link to={'/person/' + id}><img loading='lazy' className='aspect-[4/5] object-cover object-top' src={prettyPicturePath} alt={`Picture of ${name}`} /></Link>
                <div className='p-2 h-full'>
                  <Link to={'/person/' + id} className='inline-block'>
                    <p className='no-swiping font-semibold w-fit'>{name}</p>
                  </Link>
                  <p className='no-swiping w-fit text-sm'>{character}</p>
                </div>
              </div>
            </swiper-slide>
          )
        })}
        <swiper-slide>
          <div className='w-32 h-full grid place-items-center'>
            <Link to='cast'>Ver más ➡</Link>
          </div>
        </swiper-slide>
      </swiper-container>
      <Link to='cast' className='mt-2 inline-block'>Ver reparto y equipo completo</Link>
    </Section>
  )
}
