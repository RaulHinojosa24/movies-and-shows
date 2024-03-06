import { Link, useNavigate, useRouteLoaderData } from 'react-router-dom'
import { retrieveConfig } from '../../utils/utility'
import DefaultUserImage from '../../assets/default-user.png'

export default function PersonHeaderCompact () {
  const {
    images: {
      secure_base_url: baseURL,
      profile_sizes: profileSizes
    }
  } = retrieveConfig(useRouteLoaderData('root'))

  const data = useRouteLoaderData('person-details')

  const navigate = useNavigate()

  const goBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const {
    profile_path: profilePath,
    name
  } = data

  const prettyProfilePath = profilePath
    ? baseURL + profileSizes[1] + profilePath
    : DefaultUserImage

  return (
    <header className='flex p-app-space gap-4 bg-gradient-to-b from-neutral-800 to-transparent'>
      <Link to='..' onClick={goBack}>
        <img className='aspect-[2/3] w-16 rounded shadow-xl shadow-neutral-950' src={prettyProfilePath} alt={'Foto de ' + name} />
      </Link>
      <div className='flex flex-col justify-center '>
        <Link to='..' onClick={goBack}>
          <h1 className='font-bold text-2xl'>{name}</h1>
        </Link>
        <Link to='..' onClick={goBack}>
          <p>⬅ Volver a la página principal</p>
        </Link>
      </div>
    </header>
  )
}
