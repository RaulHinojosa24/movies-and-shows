import { Link } from 'react-router-dom'

export default function HeaderMainCredits ({ credits }) {
  const shortCredits = credits
    .filter((_, i) => i < 6)

  return (
    <ul className='flex justify-center md:justify-start flex-wrap gap-x-8 gap-y-2 max-w-3xl'>
      {shortCredits.map(el => (
        <li key={el.credit_id || el.id}>
          <Link to={'/person/' + el.id} className='block mx-auto'>
            <h3 className='font-semibold'>{el.name}</h3>
          </Link>
          <p className='text-sm text-center'>{el.job}</p>
        </li>
      ))}
    </ul>
  )
}
