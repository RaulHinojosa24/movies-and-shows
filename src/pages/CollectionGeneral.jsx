import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'

export default function CollectionGeneralPage () {
  return (
    <main className='mx-app-space'>
      <CollectionSummary />
      <CollectionList />
    </main>
  )
}
