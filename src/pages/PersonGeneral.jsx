import { useRouteLoaderData } from 'react-router-dom'
import PersonInfo from '../components/Person/PersonInfo'
import DefaultPoster from '../assets/default-poster.png'
import { retrieveConfig } from '../utils/utility'

export default function PersonGeneralPage () {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))
  const data = useRouteLoaderData('person-details')
  const {
    profile_path: profilePath
  } = data

  const prettyProfilePath = profilePath
    ? baseURL + posterSizes[3] + profilePath
    : DefaultPoster

  return (
    <main>
      <section>
        <img src={prettyProfilePath} alt='' />
        <PersonInfo />
      </section>
    </main>
  )
}
