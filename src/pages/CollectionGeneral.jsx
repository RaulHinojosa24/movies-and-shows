import { Link, useRouteLoaderData } from 'react-router-dom'
import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'

export default function CollectionGeneralPage () {
  const {
    name
  } = useRouteLoaderData('collection-details')

  setDocTitle(name)

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
