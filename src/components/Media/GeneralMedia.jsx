import VideoModal from '../Media/VideoModal'
import Section from '../UI/Section'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function GeneralMedia ({ title, backdrops = [], posters, videos = [], pageType, className = '' }) {
  const trailer = videos.find(el => el?.type === 'Trailer')
  const fourBackdrops = backdrops.slice(0, 4)

  const wideEls = trailer ? [trailer, ...fourBackdrops] : fourBackdrops
  const highEls = posters.slice(0, 8)

  if (pageType === 'colección') {
    return (
      <section className='relative'>
        <div className='flex md:hidden justify-center items-center'>
          {wideEls.slice(0, 2).map(el =>
            <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-1/2 first:rounded-l last:rounded-r' />)}
        </div>
        <div className='hidden md:flex justify-center items-center'>
          {wideEls.map(el =>
            <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-1/4 first:rounded-l last:rounded-r' />
          )}
        </div>
        <Link to='media' className='no-underline absolute top-0 left-0 w-full h-full grid content-center font-semibold opacity-0 hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-12 text-center text-lg text-white rounded'>Ver todo el contenido multimedia</Link>
      </section>
    )
  }

  if (pageType === 'temporada') {
    return (
      <section className='relative'>
        <div className='flex sm:hidden justify-center items-center'>
          {highEls.slice(0, 4).map(poster =>
            <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-1/4 first:rounded-l last:rounded-r' />)}
        </div>
        <div className='sm:flex hidden justify-center items-center'>
          {highEls.map(poster =>
            <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[12.5%] first:rounded-l last:rounded-r' />)}
        </div>
        <Link to='media' className='no-underline absolute top-0 left-0 w-full h-full grid content-center font-semibold opacity-0 hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-12 text-center text-lg text-white rounded'>Ver todo el contenido multimedia</Link>
      </section>
    )
  }

  return (
    <>
      <Section title='Multimedia' className={'space-y-4 ' + className}>
        {wideEls.length >= 2 && highEls.length >= 1 &&
          <div className='flex items-center overflow-hidden rounded'>
            <div className='flex sm:contents md:flex lg:contents flex-col w-[57.14%] rounded-l overflow-hidden'>
              {wideEls.slice(0, 2).map(el =>
                el.type
                  ? <VideoModal key={el.id} video={el} className='w-full sm:w-[42.1%] md:w-auto lg:w-[42.1%]' />
                  : <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-full sm:w-[42.1%] md:w-full lg:w-[42.1%]' />
              )}
            </div>
            <Image key={highEls[0].file_path} pageType={pageType} element={highEls[0]} title={title} mediaType='poster' className='w-[42.86%] sm:w-[15.8%] md:w-[42.86%] lg:w-[15.8%]' />
          </div>}

        {wideEls.length >= 2 && highEls.length === 0 &&
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center rounded overflow-hidden'>
              {wideEls.slice(0, 2).map(el =>
                el.type
                  ? <VideoModal key={el.id} video={el} className='w-full' />
                  : <Image key={el.file_path} pageType={pageType} element={el} title={title} mediaType='backdrop' className='w-full' />
              )}
            </div>
          </>}

        {wideEls.length === 1 &&
          <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row items-center overflow-hidden rounded'>
            {wideEls[0].type
              ? <VideoModal key={wideEls[0].id} video={wideEls[0]} className={`shrink-0 w-full sm:w-[47%] md:w-full lg:w-[47%] ${!highEls.length && 'rounded'} ${highEls.length && highEls.length < 3 && 'rounded-br sm:rounded-none md:rounded-br lg:rounded-none'}`} />
              : <Image key={wideEls[0].file_path} pageType={pageType} element={wideEls[0]} title={title} mediaType='backdrop' className={`shrink-0 w-full sm:w-[47%] md:w-full lg:w-[47%] ${!highEls.length && 'rounded'} ${highEls.length && highEls.length < 3 && 'rounded-br sm:rounded-none md:rounded-br lg:rounded-none'}`} />}
            {highEls.length > 0 &&
              <div className='flex w-full'>
                {highEls.slice(0, 3).map(poster =>
                  <Image key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-[33.33%] last:rounded-br last:rounded-tr-none sm:last:rounded-tr md:last:rounded-tr-none lg:last:rounded-tr' />)}
              </div>}
          </div>}

        {wideEls.length === 0 && highEls.length > 0 &&
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 rounded overflow-hidden'>
            <div className='w-full grid grid-cols-3'>
              {highEls.slice(0, 3).map(poster =>
                <Image
                  key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className={`w-full ${highEls.length <= 3 && 'last:rounded-r'} ${highEls.length < 6 && highEls.length > 3 && 'last:rounded-br sm:last:rounded-br-none md:last:rounded-br lglast:rounded-br-none'} `}
                />)}
            </div>
            <div className='w-full grid grid-cols-3'>
              {highEls.slice(3, 6).map(poster =>
                <Image
                  key={poster.file_path} pageType={pageType} element={poster} title={title} mediaType='poster' className='w-full last:rounded-br sm:last:rounded-r md:last:rounded-br lg:last:rounded-r'
                />)}
            </div>
          </div>}

        {wideEls.length === 0 && highEls.length === 0
          ? <p className='italic'>No disponemos de material multimedia.</p>
          : <Link to='media' className='mt-2 inline-block'>Ver todo el contenido multimedia</Link>}
      </Section>
    </>
  )
}

const Image = ({ element, mediaType, pageType, title, className = '' }) => {
  const { config } = useContext(rootContext)

  const prettyURL = config?.images?.secure_base_url +
   (mediaType === 'poster'
     ? config?.images?.poster_sizes[2]
     : config?.images?.backdrop_sizes[1]) +
    element.file_path

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
