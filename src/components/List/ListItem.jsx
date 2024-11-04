import { Link } from 'react-router-dom'
import { formatNumber } from '../../utils/utility.js'

export default function ListItem ({ id, name, description, count, favCount }) {
  const prettyCount = formatNumber(count)

  return (
    <div className='py-2 px-4 rounded shadow shadow-colors'>
      <div className='flex gap-2 items-end'>
        <Link to={'/list/' + id}>
          <h3 className='font-semibold text-lg'>{name}</h3>
        </Link>
        <span className='text-medium italic'>({prettyCount} elementos)</span>
        {/* <span className='text-medium italic'>({favCount} favoritos)</span> */}
      </div>
      {description !== '' &&
        <p className='text-ellipsis whitespace-nowrap overflow-hidden text-medium'>{description}</p>}
    </div>
  )
}
