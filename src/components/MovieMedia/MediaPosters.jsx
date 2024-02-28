import { useState } from 'react'
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

export default function MediaPosters () {
  const [index, setIndex] = useState(-1)

  const {
    images: {
      posters: images
    }
  } = useRouteLoaderData('movie-details')

  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const photos = images.map(img => {
    const srcSet = posterSizes.map(size => {
      const width = Number(size.match(/\d+/g)) || img.width
      const height = Math.round(width / img.aspect_ratio)
      const src = baseURL + size + img.file_path

      return {
        src,
        width,
        height
      }
    })

    return {
      key: img.file_path,
      src: baseURL + posterSizes[0] + img.file_path,
      width: img.width,
      height: img.height,
      srcSet
    }
  })
  return (
    <Section title='Carteles'>
      <PhotoAlbum
        photos={photos} layout='rows' targetRowHeight={150} onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
  // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </Section>
  )
}
