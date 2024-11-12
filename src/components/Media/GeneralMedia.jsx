import Section from '../UI/Section'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function GeneralMedia ({ title, backdrops = [], posters, className = '' }) {
  const wideEls = backdrops.slice(0, 2)
  const highEls = posters.slice(0, 6)

  return (
    <Section title='Media' className={'space-y-4 ' + className}>
      {wideEls.length === 0 && highEls.length === 0 &&
        <p className='italic'>We currently have no media available</p>}
      {(wideEls.length > 0 || highEls.length > 0) &&
        <div className='relative flex flex-row rounded overflow-hidden'>
          <div className='w-full flex flex-col sm:flex-row'>
            {wideEls.length > 0 &&
              wideEls.map(el =>
                <Image key={el.file_path} element={el} title={title} mediaType='backdrop' className='w-full sm:w-1/2' />)}
            {wideEls.length <= 1 && highEls.length > 0 &&
              <div className='flex w-full sm:w-1/2'>
                {highEls.slice(0, 3).map(el =>
                  <Image key={el.file_path} element={el} title={title} mediaType='poster' className='w-1/3' />)}
              </div>}
            {wideEls.length === 0 && highEls.length > 3 &&
              <div className='flex w-full sm:w-1/2'>
                {highEls.slice(3, 6).map(el =>
                  <Image key={el.file_path} element={el} title={title} mediaType='poster' className='w-1/3' />)}
              </div>}
          </div>
          {wideEls.length === 2 && highEls[0] &&
            <div className='shrink-0 w-[42.86%] sm:w-[15.8%]'>
              <Image key={highEls[0].file_path} element={highEls[0]} title={title} mediaType='poster' />
            </div>}
          <Link to='media' className='no-underline absolute top-0 left-0 w-full h-full grid content-center font-semibold opacity-0 hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-12 text-center text-lg text-white rounded'>View all media</Link>
        </div>}
    </Section>
  )
}

const Image = ({ element, mediaType, title, className = '' }) => {
  const { config } = useContext(rootContext)

  const prettyURL = config?.images?.secure_base_url +
   (mediaType === 'poster'
     ? config?.images?.poster_sizes[3]
     : config?.images?.backdrop_sizes[1]) +
    element.file_path

  const alt = `${title}'s ${mediaType}`
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
