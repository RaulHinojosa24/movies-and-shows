import { useEffect, useRef } from 'react'

export default function Slider ({ slides, LastSlide, SlideComponent, vertical }) {
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
      direction: vertical ? 'vertical' : 'horizontal',
      noSwipingClass: 'no-swiping',
      injectStyles: [`
        .swiper-horizontal {
          padding: 1px 5px 20px 5px;
          margin: -1px -5px -9px -5px;
          mask-image: linear-gradient(to right, rgba(0,0,0,1) calc(100% - 4rem), rgba(0,0,0,0));
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) calc(100% - 4rem), rgba(0,0,0,0));
        }
        .swiper-vertical {
          max-height: 50vh;
          padding: 5px 20px 5px 1px;
          margin: -5px -9px -5px -1px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 4rem), rgba(0,0,0,0));
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) calc(100% - 4rem), rgba(0,0,0,0));
        }
        `]
    }

    Object.assign(swiperContainer, params)
    swiperContainer.initialize()
  }, [vertical])

  return (
    <swiper-container
      ref={sliderRef}
      init={false}
    >
      {slides.map((slide, idx) => (
        <swiper-slide key={idx + slide.id} lazy='true'>
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
