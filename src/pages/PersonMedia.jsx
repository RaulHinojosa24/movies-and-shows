import { useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import { setDocTitle } from '../utils/utility'
import MediaProfiles from '../components/Media/MediaProfiles'

export default function PersonMediaPage () {
  const {
    name,
    images: {
      profiles
    }
  } = useRouteLoaderData('person-details')

  setDocTitle(`${name} - Retratos`)

  return (
    <Main center={
      <>
        {profiles.length > 0 &&
          <MediaProfiles images={profiles} />}
      </>
    }
    />
  )
}
