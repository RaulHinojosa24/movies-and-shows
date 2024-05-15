import { useRouteLoaderData } from 'react-router-dom'
import CollectionList from '../components/Collection/CollectionList'
import CollectionSummary from '../components/Collection/CollectionSummary'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'

export default function CollectionGeneralPage () {
  const {
    name,
    images: {
      backdrops, posters
    }
  } = useRouteLoaderData('collection-details')

  setDocTitle(name)

  return (
    <Main
      center={
        <>
          <GeneralMedia backdrops={backdrops} posters={posters} title={name} pageType='colección' />
          <CollectionSummary />
          <CollectionList />
        </>
    }
    />
  )
}
