import VideoModal from '../Media/VideoModal'
import Section from '../UI/Section'
import { Link, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'

export default function GeneralMedia ({ title, backdrops = [], posters, videos = [], pageType, className = '' }) {
  const trailer = videos.reduce((acc, curr) => {
    if (acc.length === 0 && curr.type === 'Trailer') {
      return [curr]
    }
    return acc
  }, [])
  const fourBackdrops = backdrops.slice(0, 4)

  const wideEls = [...trailer, ...fourBackdrops]
  const highEls = posters.slice(0, 8)

  if (pageType === 'colección') {
    return (
      <Link to='media' className='block mx-auto relative group'>
        <div className='flex md:hidden justify-center items-center'>
          {wideEls.map((el, i) => {
            if (i >= 2) return null
            return (
              <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-1/2 first:rounded-l last:rounded-r' />
            )
          })}
        </div>
        <div className='hidden md:flex justify-center items-center'>
          {wideEls.map((el, i) => {
            if (i >= 4) return null
            return (
              <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-1/4 first:rounded-l last:rounded-r' />
            )
          })}
        </div>
        <span className='absolute top-0 left-0 w-full h-full grid text-center content-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-12 text-lg'>Ver todo el contenido multimedia</span>
      </Link>
    )
  }

  if (pageType === 'temporada') {
    return (
      <Link to='media' className='block mx-auto relative group'>
        <div className='flex items-center sm:hidden relative'>
          {highEls.map((poster, i) => {
            if (i >= 4) return null
            return (
              <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-1/4 first:rounded-l last:rounded-r' />
            )
          })}
        </div>
        <div className='sm:flex items-center hidden relative'>
          {highEls.map((poster, i) => {
            if (i >= 8) return null
            return (
              <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[12.5%] first:rounded-l last:rounded-r' />
            )
          })}
        </div>
        <span className='absolute top-0 left-0 w-full h-full grid text-center content-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-12 text-lg'>Ver todo el contenido multimedia</span>
      </Link>
    )
  }

  return (
    <>
      <Section title='Multimedia' className={'space-y-4 ' + className}>
        {wideEls.length >= 2 && highEls.length >= 1 &&
          <>
            <div className='flex sm:hidden md:flex lg:hidden items-center'>
              <div className='flex flex-col w-[57.14%] rounded-l overflow-hidden'>
                {wideEls.map((el, i) => {
                  if (i > 1) return null
                  if (el.type) {
                    return <VideoModal key={el.id} video={el} />
                  } else {
                    return (
                      <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' />
                    )
                  }
                })}
              </div>
              {highEls.map((poster, i) => {
                if (i >= 1) return null
                return (
                  <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[42.86%] rounded-r' />
                )
              })}
            </div>
            <div className='hidden sm:flex md:hidden lg:flex items-center [&>*:first-child]:rounded-l [&>*:last-child]:rounded-r'>
              {wideEls.map((el, i) => {
                if (i > 1) return null
                if (el.type) {
                  return <VideoModal key={el.id} video={el} className='w-[42.1%]' />
                } else {
                  return (
                    <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-[42.1%]' />
                  )
                }
              })}
              {highEls.map((poster, i) => {
                if (i >= 1) return null
                return (
                  <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[15.8%]' />
                )
              })}
            </div>
          </>}
        {wideEls.length >= 2 && highEls.length === 0 &&
          <>
            <div className='flex sm:hidden md:flex lg:hidden flex-col items-center rounded overflow-hidden'>
              {wideEls.map((el, i) => {
                if (i >= 2) return null
                if (el.type) {
                  return <VideoModal key={el.id} video={el} className='w-full' />
                } else {
                  return (
                    <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-full' />
                  )
                }
              })}
            </div>
            <div className='hidden sm:flex md:hidden lg:flex items-center rounded overflow-hidden'>
              {wideEls.map((el, i) => {
                if (i >= 2) return null
                if (el.type) {
                  return <VideoModal key={el.id} video={el} className='w-1/2' />
                } else {
                  return (
                    <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-1/2' />
                  )
                }
              })}
            </div>
          </>}
        {wideEls.length === 1 &&
          <>
            <div className='flex sm:hidden md:flex lg:hidden flex-col items-center [&>*:first-child]:rounded-t [&>*:last-child]:rounded-b'>
              {wideEls[0].type
                ? <VideoModal key={wideEls[0].id} video={wideEls[0]} className={`w-full ${highEls.length < 3 && 'rounded-br'}`} />
                : <Image key={wideEls[0].file_path} pageType={pageType} element={wideEls[0]} title={title} mediaType='backdrop' className={`w-full ${highEls.length < 3 && 'rounded-br'}`} />}
              {highEls.length > 0 &&
                <div className='flex w-full overflow-hidden'>
                  {highEls.map((poster, i) => {
                    if (i >= 3) return null
                    return (
                      <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[33.33%] last:rounded-br' />
                    )
                  })}
                </div>}
            </div>
            <div className='hidden sm:flex md:hidden lg:flex items-center [&>*:first-child]:rounded-l [&>*:last-child]:rounded-r'>
              {wideEls[0].type
                ? <VideoModal key={wideEls[0].id} video={wideEls[0]} className='w-[47%]' />
                : <Image key={wideEls[0].file_path} pageType={pageType} element={wideEls[0]} title={title} mediaType='backdrop' className='w-[47%]' />}
              {highEls.map((poster, i) => {
                if (i >= 3) return null
                return (
                  <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[17.66%]' />
                )
              })}
            </div>
          </>}
        {wideEls.length === 0 && highEls.length > 0 &&
          <>
            <div className='flex sm:hidden md:flex lg:hidden flex-col items-center [&>*:first-child]:rounded-t [&>*:last-child]:rounded-b'>
              {highEls.length > 0 &&
                <div className='flex w-full overflow-hidden'>
                  {highEls.map((poster, i) => {
                    if (i >= 3) return null
                    return (
                      <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className={`w-[33.33%] ${highEls.length < 6 && 'last:rounded-r'}`} />
                    )
                  })}
                </div>}
              {highEls.length > 3 &&
                <div className='flex w-full overflow-hidden'>
                  {highEls.map((poster, i) => {
                    if (i < 3 || i >= 6) return null
                    return (
                      <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[33.33%] last:rounded-br' />
                    )
                  })}
                </div>}
            </div>
            <div className='hidden sm:flex md:hidden lg:flex items-center'>
              {highEls.map((poster, i) => {
                if (i >= 6) return null
                return (
                  <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[16.66%] first:rounded-l last:rounded-r' />
                )
              })}
            </div>
          </>}
        {wideEls.length === 0 && highEls.length === 0
          ? <p className='italic'>No disponemos de material multimedia.</p>
          : <Link to='media' className='mt-2 inline-block'>Ver todo el contenido multimedia</Link>}
      </Section>
    </>
  )
}

const Image = ({ element, mediaType, pageType, title, className = '' }) => {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes,
      backdrop_sizes: backdropSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const prettyURL = baseURL + (mediaType === 'poster'
    ? posterSizes[2]
    : backdropSizes[1]) + element.file_path

  const alt = `${mediaType === 'poster' ? 'Poster' : 'Imagen de fondo'} de la ${pageType} ${title}`
  const classes = `${mediaType === 'poster' ? 'aspect-[2/3]' : 'aspect-video'} object-cover ${className}`

  return (
    <img
      loading='lazy'
      src={prettyURL}
      alt={alt}
      className={classes}
    />
  )
}
