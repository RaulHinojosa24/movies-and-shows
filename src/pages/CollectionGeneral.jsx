import { Link } from 'react-router-dom'
import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'
import Main from '../components/PageUI/Main'

export default function CollectionGeneralPage () {
  return (
    <Main
      center={
        <>
          <Link to='media' className='font-bold'>TODO: Ver Media</Link>
          <CollectionSummary />
          <CollectionList />
        </>
    }
    />
  )
}
