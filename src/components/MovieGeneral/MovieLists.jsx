import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import ListItem from '../MovieLists/ListItem'
// {
//   page: 1,
//   results: [
//     {
//       description: '',
//       favorite_count: 0,
//       id: 8281476,
//       item_count: 64,
//       iso_639_1: 'es',
//       iso_3166_1: 'ES',
//       list_type: 'movie',
//       name: 'Vistas en 2024',
//       poster_path: null
//     },
//     {
//       description: '',
//       favorite_count: 0,
//       id: 102682,
//       item_count: 322,
//       iso_639_1: 'es',
//       iso_3166_1: 'ES',
//       list_type: 'movie',
//       name: 'Online Peliculas',
//       poster_path: null
//     },
//     {
//       description: '',
//       favorite_count: 0,
//       id: 8285029,
//       item_count: 17,
//       iso_639_1: 'es',
//       iso_3166_1: 'ES',
//       list_type: 'movie',
//       name: 'Sony Spiderverse',
//       poster_path: null
//     }
//   ],
//   total_pages: 1,
//   total_results: 3
// }
const shorListsLength = 5

export default function MovieLists () {
  const { lists } = useRouteLoaderData('movie-details')
  const shortLists = lists.results.filter((_, i) => i < shorListsLength)

  return (
    <Section title='Listas de usuarios'>
      <ul className='flex flex-col gap-2'>
        {shortLists.map(list => (
          <li key={list.id}>
            <ListItem name={list.name} description={list.description} count={list.item_count} favCount={list.favorite_count} />
          </li>
        ))}
      </ul>
      {shortLists.length === shorListsLength &&
        <a className='inline-block mt-4'>Ver la lista completa</a>}
    </Section>
  )
}
