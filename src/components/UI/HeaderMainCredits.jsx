import { Link } from 'react-router-dom'

export default function HeaderMainCredits ({ credits }) {
  const shortCredits = credits
    .filter((_, i) => i < 6)
  return (
    <ul className='grid grid-cols-3 gap-x-8 gap-y-2 max-w-3xl'>
      {shortCredits.map(el => (
        <li key={el.id}>
          <Link to={'/person/' + el.id} className='inline-block'>
            <h3 className='font-semibold'>{el.name}</h3>
          </Link>
          <p className='text-sm'>{el.role}</p>
        </li>
      ))}
    </ul>
  )
}
