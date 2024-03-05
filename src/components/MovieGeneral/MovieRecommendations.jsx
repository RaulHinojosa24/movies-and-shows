import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import { retrieveConfig } from '../../utils/utility'
import VoteCard from '../UI/VoteCard'
import { useEffect, useRef } from 'react'
import DefaultLandscapeImage from '../../assets/default-landscape.png'

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
  } = retrieveConfig(useRouteLoaderData('root'))

  const backdropSize = backdropSizes[1]

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
          const releaseYear = new Date(releaseDate).getFullYear()
          return (
            <swiper-slide key={id} lazy='true'>
              <div className='rounded overflow-hidden w-80 h-full custom-shadow'>
                <Link to={`/movie/${id}`}>
                  <img loading='lazy' src={backdropPath ? (baseURL + backdropSize + backdropPath) : DefaultLandscapeImage} alt={`Picture from the film ${title}`} className='w-full aspect-video object-cover' />
                </Link>
                <div className='py-2 flex justify-between px-2'>
                  <Link to={`/movie/${id}`} className=''>
                    <p className='no-swiping font-semibold'>{title} ({releaseYear})</p>
                  </Link>
                  <VoteCard rating={voteAverage} count={voteCount} small />
                </div>
              </div>
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
