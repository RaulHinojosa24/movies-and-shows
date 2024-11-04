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
import { formatNumber } from '../../utils/utility'

export default function MediaPosters ({ images }) {
  const { config } = useContext(rootContext)
  const [index, setIndex] = useState(-1)

  const amount = images.length
  const photos = useMemo(() => (
    images
      .map(img => {
        const srcSet = config?.images?.poster_sizes.map(size => {
          const width = Number(size.match(/\d+/g)) || img.width
          const height = Math.round(width / img.aspect_ratio)
          const src = config?.images?.secure_base_url + size + img.file_path

          return {
            src,
            width,
            height
          }
        })

        return {
          key: img.file_path,
          src: config?.images?.secure_base_url + config?.images?.poster_sizes[0] + img.file_path,
          width: img.width,
          height: img.height,
          srcSet
        }
      })
  ), [config, images])

  const prettyAmount = formatNumber(amount)

  return (
    <Section title='Carteles' subtitle={prettyAmount}>
      {!config &&
        'Cargando carteles...'}
      {config && photos.length === 0 &&
        'No tenemos ningun cartel disponible.'}
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
