import { useEffect, useRef, useState } from 'react'

export default function Slider ({ slides, LastSlide, SlideComponent, vertical, isLanding }) {
  const sliderRef = useRef()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const swiperContainer = sliderRef.current

    const params = isLanding
      ? {
          slidesPerView: 'auto',
          spaceBetween: 0,
          navigation: {
            enabled: true
          },
          loop: true,
          centeredSlides: true,
          autoplay: {
            delay: 500000,
            pauseOnMouseEnter: true
          },
          speed: 700,
          keyboard: {
            enabled: true
          }
        }
      : {
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

    const swiperInstance = swiperContainer.swiper
    if (isLanding && swiperInstance) {
      swiperInstance.on('slideChange', () => {
        setActiveIndex(swiperInstance.realIndex)
      })
    }

    return () => {
      if (isLanding && swiperInstance) {
        swiperInstance.off('slideChange')
      }
    }
  }, [isLanding, vertical])

  return (
    <swiper-container
      ref={sliderRef}
      init={false}
      class={isLanding && 'isLanding'}
    >
      {slides.map((slide, idx) => (
        <swiper-slide key={`${idx}${slide.id}`}>
          <SlideComponent {...slide} isActive={idx === activeIndex} />
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
