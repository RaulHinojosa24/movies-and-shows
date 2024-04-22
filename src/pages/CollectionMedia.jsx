import { useRouteLoaderData } from 'react-router-dom'
import MediaBackdrops from '../components/CollectionMedia/MediaBackdrops'
import MediaPosters from '../components/CollectionMedia/MediaPosters'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function CollectionMediaPage () {
  const {
    name
  } = useRouteLoaderData('collection-details')

  setDocTitle(`${name} - Fotos`)

  return (
    <Main
      center={
        <>
          <MediaBackdrops />
          <MediaPosters />
        </>
      }
    />
  )
}
