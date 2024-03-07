import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import ListItem from '../Lists/ListItem'

const shorListsLength = 5

export default function TvLists () {
  const { lists } = useRouteLoaderData('tv-details')

  if (lists.results.length === 0) {
    return (
      <Section title='Listas de usuarios'>
        <p className='italic'>Parece que nadie se ha guardado esta serie.</p>
      </Section>
    )
  }

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
      {lists.results.length > shorListsLength &&
        <Link to='' className='inline-block mt-4'>Ver todas las listas</Link>}
    </Section>
  )
}
