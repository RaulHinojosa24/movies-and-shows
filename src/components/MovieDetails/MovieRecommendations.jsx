import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { calculateImageSize } from '../../utils/utility'
import MovieVoteCard from './MovieVoteCard'
import { useEffect, useRef } from 'react'

export default function MovieRecommendations ({ recommendations }) {
  const sliderRef = useRef()

  useEffect(() => {
    const swiperContainer = sliderRef.current

    const params = {
      slidesPerView: 'auto',
      spaceBetween: 15,
      scrollbar: {
        draggable: true,
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
      backdrop_sizes: backdropSizes
    }
  } = useRouteLoaderData('root')

  const { width } = useWindowDimensions()

  const backdropSize = calculateImageSize(backdropSizes.filter(s => s.includes('w')), width, 1 / 6)

  return (
    <Section title='Recomendaciones'>
      <swiper-container
        ref={sliderRef}
        init={false}
      >
        {recommendations.map(({
          id,
          title,
          backdropPath,
          mediaType,
          releaseDate,
          voteAverage,
          voteCount
        }) => {
          return (
            <swiper-slide key={id}>
              <Link to={`/movies/${id}`}>
                <div className='rounded overflow-hidden w-80 h-full border-[1px] border-neutral-700 border-opacity-50
                shadow-md shadow-neutral-800'
                >
                  <div className='aspect-video w-full grid place-items-center'>
                    <img loading='lazy' src={baseURL + backdropSize + backdropPath} alt={`Picture from the film ${title}`} className='w-full' />
                  </div>
                  <div className='py-2 flex justify-between px-2'>
                    <p className='no-swiping font-semibold'>{title}</p>
                    <MovieVoteCard avarage={voteAverage} count={voteCount} small />
                  </div>
                </div>
              </Link>
            </swiper-slide>
          )
        })}
        {/* <swiper-slide>
          <div className='rounded overflow-hidden aspect-video w-80 h-full grid place-items-center'>
            Ver más ➡
          </div>
        </swiper-slide> */}
      </swiper-container>
    </Section>
  )
}
