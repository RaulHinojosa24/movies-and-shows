import { Link } from 'react-router-dom'

export default function HeaderMainCredits ({ credits }) {
  const shortCredits = credits
    .filter((_, i) => i < 6)

  return (
    <ul className='flex justify-center md:justify-start flex-wrap gap-x-8 gap-y-2 max-w-3xl'>
      {shortCredits.map(el => (
        <li key={el.id}>
          <Link to={'/person/' + el.id} className='inline-block'>
            <h3 className='font-semibold'>{el.name}</h3>
          </Link>
          <p className='text-sm text-center'>{el.role}</p>
        </li>
      ))}
    </ul>
  )
}
