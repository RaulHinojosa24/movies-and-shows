import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import ListItem from '../List/ListItem'

const shorListsLength = 5

export default function MovieLists () {
  const { lists } = useRouteLoaderData('movie-details')

  if (lists.results.length === 0) {
    return (
      <Section title='Listas de usuarios'>
        <p className='italic'>Parece que nadie se ha guardado esta película.</p>
      </Section>
    )
  }

  const shortLists = lists.results.filter((_, i) => i < shorListsLength)
  console.log(shortLists)

  return (
    <Section title='Listas de usuarios'>
      <ul className='flex flex-col gap-2'>
        {shortLists.map(list => (
          <li key={list.id}>
            <ListItem id={list.id} name={list.name} description={list.description} count={list.item_count} favCount={list.favorite_count} />
          </li>
        ))}
      </ul>
      {lists.results.length > shorListsLength &&
        <Link to='' className='inline-block mt-4'>Ver la lista completa</Link>}
    </Section>
  )
}
