import { Link } from 'react-router-dom'
import SubSection from '../UI/SubSection'

export default function EpisodeCrewList ({ className = '', crew }) {
  return (
    <SubSection title={<>Equipo <span className='text-medium font-normal'>{crew.length}</span></>} className='space-y-2'>
      <ul className={'space-y-1 ' + className}>
        {crew.map(cr => <CrewItem key={cr.credit_id} id={cr.id} name={cr.name} role={cr.job} />)}
      </ul>
    </SubSection>
  )
}

function CrewItem ({ id, name, role }) {
  return (
    <li key={id}>
      <Link to={'/person/' + id} className='inline-block'>
        <h3 className='font-semibold'>{name}</h3>
      </Link>
      <p className='text-sm'>{role}</p>
    </li>
  )
}
