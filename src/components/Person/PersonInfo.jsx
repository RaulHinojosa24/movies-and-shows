import { useRouteLoaderData } from 'react-router-dom'
import SubSection from '../UI/SubSection'
import { calculateAge, formatLongDate, getPersonGender } from '../../utils/utility'
import Section from '../UI/Section'

export default function PersonInfo () {
  const {
    also_known_as: alsoKnownAs,
    birthday,
    deathday,
    external_ids: externalIds,
    gender,
    homepage,
    imdb_id: imdbId,
    known_for_department: knownForDepartment,
    place_of_birth: placeOfBirth
  } = useRouteLoaderData('person-details')

  const prettyAge = (deathday
    ? calculateAge(birthday, deathday)
    : calculateAge(birthday)) + ' años'
  const prettyGender = getPersonGender(gender)
  const prettyBirthday = formatLongDate(birthday)
  const prettyDeathday = formatLongDate(birthday)

  return (
    <Section title='Información personal' className='space-y-3'>
      <SubSection title='Conocida por'>{knownForDepartment}</SubSection>
      <SubSection title='Género'>{prettyGender}</SubSection>
      <SubSection title='Fecha de nacimiento'>
        {prettyBirthday} {!deathday && <>({prettyAge})</>}
      </SubSection>
      <SubSection title='Lugar de nacimiento'>{placeOfBirth}</SubSection>
      {deathday &&
        <SubSection title='Fecha de defunción'>{prettyDeathday} ({prettyAge})</SubSection>}
      <SubSection title='También conocida como'>
        <ul>
          {alsoKnownAs.map(n => <li key={n}>{n}</li>)}
        </ul>
      </SubSection>
    </Section>
  )
}
