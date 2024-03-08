import { useEffect, useRef } from 'react'

export default function Slider ({ slides, LastSlide, SlideComponent }) {
  const sliderRef = useRef()

  useEffect(() => {
    const swiperContainer = sliderRef.current

    const params = {
      slidesPerView: 'auto',
      spaceBetween: 15,
      scrollbar: {
        hide: true,
        draggable: true
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

  return (
    <swiper-container
      ref={sliderRef}
      init={false}
    >
      {slides.map((slide) => (
        <swiper-slide key={slide.id} lazy='true'>
          <SlideComponent {...slide} />
        </swiper-slide>
      )
      )}
      {LastSlide &&
        <swiper-slide>
          <LastSlide />
        </swiper-slide>}
    </swiper-container>

  )
}
