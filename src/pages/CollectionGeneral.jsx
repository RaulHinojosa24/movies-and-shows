import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'

export default function CollectionGeneralPage () {
  return (
    <main className='px-app-space mx-auto w-full max-w-small-content'>
      <CollectionSummary />
      <CollectionList />
    </main>
  )
}
