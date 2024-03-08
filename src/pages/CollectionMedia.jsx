import MediaBackdrops from '../components/CollectionMedia/MediaBackdrops'
import MediaPosters from '../components/CollectionMedia/MediaPosters'
import Main from '../components/PageUI/Main'

export default function CollectionMediaPage () {
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
