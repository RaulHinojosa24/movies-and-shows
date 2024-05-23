import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import ListItem from '../List/ListItem'

const shorListsLength = 5

export default function MovieLists ({ lists }) {
  const shortLists = lists.filter((_, i) => i < shorListsLength)

  return (
    <Section title='Listas de usuarios'>
      <ul className='flex flex-col gap-2'>
        {shortLists.map(list => (
          <li key={list.id}>
            <ListItem id={list.id} name={list.name} description={list.description} count={list.item_count} favCount={list.favorite_count} />
          </li>
        ))}
      </ul>
      {lists.length > shorListsLength &&
        <Link to='' className='inline-block mt-4'>Ver la lista completa</Link>}
    </Section>
  )
}
