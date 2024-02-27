import { useRouteLoaderData } from 'react-router-dom'
import { formatLongDate } from '../../utils/utility'

export default function CollectionList () {
  const { parts } = useRouteLoaderData('collection-details')
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = useRouteLoaderData('root')

  if (parts.length === 0) {
    return (
      <p>Ésta colección no contiene ninguna película.</p>
    )
  }

  return (
    <section className='m-auto max-w-screen-xl'>
      <ol className='space-y-4'>
        {parts.map((part) => {
          const {
            id,
            title,
            overview,
            poster_path: posterPath,
            release_date: releaseDate
          } = part

          return (
            <li key={id} className='flex rounded overflow-hidden custom-shadow'>
              <img className='aspect-[2/3] object-cover w-24' src={baseURL + posterSizes[0] + posterPath} alt={'Poster de la película ' + title} />
              <div className='flex flex-col justify-between p-4'>
                <div>
                  <h3 className='font-semibold text-lg'>{title}</h3>
                  <p className='text-neutral-300'>{formatLongDate(new Date(releaseDate))}</p>
                </div>
                <p className='line-clamp-2'>{overview}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
