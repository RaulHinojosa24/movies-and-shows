import { useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaBackdrops from '../components/Media/MediaBackdrops'
import MediaPosters from '../components/Media/MediaPosters'

export default function CollectionMediaPage () {
  const {
    name,
    images: {
      backdrops, posters
    }
  } = useRouteLoaderData('collection-details')

  setDocTitle(`${name} - Fotos`)

  return (
    <Main
      center={
        <>
          {backdrops.length > 0 &&
            <MediaBackdrops images={backdrops} />}
          {posters.length > 0 &&
            <MediaPosters images={posters} />}
        </>
      }
    />
  )
}
