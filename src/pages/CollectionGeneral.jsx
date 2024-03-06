import { Link } from 'react-router-dom'
import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'

export default function CollectionGeneralPage () {
  return (
    <main className='px-app-space mx-auto w-full max-w-small-content'>
      <Link to='media' className='font-bold'>TODO: Ver Media</Link>
      <CollectionSummary />
      <CollectionList />
    </main>
  )
}
