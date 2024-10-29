import { useEffect, useRef, useState } from 'react'

const PARAMS = {
  landing: {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      enabled: true
    },
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true
    },
    speed: 700,
    keyboard: {
      enabled: true
    }
  },
  bullets: {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      clickable: true,
      type: 'bullets',
      dynamicBullets: true
    },
    noSwipingClass: 'no-swiping'
  },
  default: {
    slidesPerView: 'auto',
    spaceBetween: 15,
    scrollbar: {
      hide: true,
      draggable: true
    },
    direction: 'horizontal',
    noSwipingClass: 'no-swiping',
    injectStyles: [`
      .swiper-horizontal {
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
}

export default function Slider ({ slides, LastSlide, SlideComponent, vertical, type }) {
  const sliderRef = useRef()
  const [activeIndex, setActiveIndex] = useState(0)
  const isLanding = type === 'landing'

  useEffect(() => {
    const swiperContainer = sliderRef.current

    const params = PARAMS[type] || PARAMS.default

    Object.assign(swiperContainer, params)
    swiperContainer.initialize()

    const swiperInstance = swiperContainer.swiper

    if (type === 'bullets' && swiperInstance && swiperContainer) {
      swiperContainer.addEventListener('mouseup', () => {
        setTimeout(() => {
          swiperInstance.updateAutoHeight(300)
        }, 0)
      })
    }

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
  }, [isLanding, type])

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
