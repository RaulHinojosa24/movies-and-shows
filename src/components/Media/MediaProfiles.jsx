import { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'

import Section from '../UI/Section'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { retrieveConfig } from '../../utils/utility'

export default function MediaProfiles ({ images }) {
  const loaderConfig = retrieveConfig(useRouteLoaderData('root'))
  const [index, setIndex] = useState(-1)
  const [photos, setPhotos] = useState([])
  const amount = images.length

  useEffect(() => {
    loaderConfig.then(({
      images: {
        secure_base_url: baseURL,
        profile_sizes: profileSizes
      }
    }) => setPhotos(images
      .map(img => {
        const srcSet = profileSizes.map(size => {
          const isHeight = size.includes('h')
          const amount = Number(size.match(/\d+/g)) || (isHeight ? img.height : img.width)
          const [width, height] = isHeight ? [Math.round(img.aspect_ratio * amount), amount] : [amount, Math.round(amount / img.aspect_ratio)]
          const src = baseURL + size + img.file_path

          return {
            src,
            width,
            height
          }
        })

        return {
          key: img.file_path,
          src: baseURL + profileSizes[0] + img.file_path,
          width: img.width,
          height: img.height,
          srcSet
        }
      })))
  }, [images, loaderConfig])

  return (
    <Section title={<>Retratos <span className='text-neutral-500 font-semibold'>{amount}</span></>}>
      <PhotoAlbum
        photos={photos} layout='columns'
        columns={(containerWidth) => Math.ceil(containerWidth / 300)}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </Section>
  )
}
