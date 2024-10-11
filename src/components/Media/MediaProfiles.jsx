import { useContext, useMemo, useState } from 'react'

import Section from '../UI/Section'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { rootContext } from '../../context/root-context'

export default function MediaProfiles ({ images }) {
  const { config } = useContext(rootContext)
  const [index, setIndex] = useState(-1)

  const amount = images.length
  const photos = useMemo(() => (
    images
      .map(img => {
        const srcSet = config?.images?.profile_sizes.map(size => {
          const isHeight = size.includes('h')
          const amount = Number(size.match(/\d+/g)) || (isHeight ? img.height : img.width)
          const [width, height] = isHeight ? [Math.round(img.aspect_ratio * amount), amount] : [amount, Math.round(amount / img.aspect_ratio)]
          const src = config?.images?.secure_base_url + size + img.file_path

          return {
            src,
            width,
            height
          }
        })

        return {
          key: img.file_path,
          src: config?.images?.secure_base_url + config?.images?.profile_sizes[0] + img.file_path,
          width: img.width,
          height: img.height,
          srcSet
        }
      })
  ), [config, images])

  return (
    <Section title={<>Retratos <span className='text-medium font-semibold'>{amount}</span></>}>
      {!config &&
        'Cargando fotos...'}
      {config && photos.length === 0 &&
        'No tenemos ninguna imagen disponible.'}
      {config && photos.length > 0 &&
        <>
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
        </>}
    </Section>
  )
}
