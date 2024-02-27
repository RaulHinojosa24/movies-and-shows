import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'

export default function CollectionGeneralPage () {
  return (
    <main className='p-8'>
      <CollectionSummary />
      <CollectionList />
    </main>
  )
}
