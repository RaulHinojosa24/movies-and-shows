import MediaBackdrops from '../components/CollectionMedia/MediaBackdrops'
import MediaPosters from '../components/CollectionMedia/MediaPosters'

export default function CollectionMediaPage () {
  return (
    <main className='px-app-space mx-auto w-full max-w-small-content'>
      <MediaBackdrops />
      <MediaPosters />
    </main>
  )
}
