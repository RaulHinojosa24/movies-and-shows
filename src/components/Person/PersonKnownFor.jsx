import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { useEffect, useRef } from 'react'
import { retrieveConfig } from '../../utils/utility'

import DefaultProfileImage from '../../assets/default-user.png'

const sortingLogic = (cc) => cc.vote_count ** 2 * cc.vote_average

export default function PersonKnownFor () {
  const sliderRef = useRef()
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

  const combinedCredits = [...cast, ...crew]
    .filter((el, i, array) => array.findIndex(a => a.id === el.id) === i)
    .sort((a, b) => sortingLogic(b) - sortingLogic(a))
    .filter((_, i) => i < 9)

  return (
    <>
      <Section title='Conocida por'>
        <swiper-container
          ref={sliderRef}
          init={false}
        >
          {combinedCredits.map(({
            id,
            name,
            title,
            poster_path: posterPath
          }) => {
            const prettyPicturePath = posterPath
              ? baseURL + posterSizes[1] + posterPath
              : DefaultProfileImage
            return (
              <swiper-slide key={id} lazy='true'>
                <div className='h-full w-32 rounded overflow-hidden custom-shadow'>
                  <Link to={'/movie/' + id}>
                    <img loading='lazy' className='aspect-[2/3] w-full object-cover object-top' src={prettyPicturePath} alt={`Picture of ${name}`} />
                  </Link>
                  <div className='p-2 h-full'>
                    <Link to={'/movie/' + id} className='inline-block'>
                      <p className='no-swiping font-semibold w-fit'>{title || name}</p>
                    </Link>
                  </div>
                </div>
              </swiper-slide>
            )
          })}
        </swiper-container>
      </Section>
    </>
  )
}
