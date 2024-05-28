import SubSection from '../UI/SubSection'
import { calculateAge, formatLongDate, getPersonGender } from '../../utils/utility'
import Section from '../UI/Section'

export default function PersonInfo ({ alsoKnownAs, birthday, deathday, gender, knownForDepartment, placeOfBirth }) {
  const prettyAge = (deathday
    ? calculateAge(birthday, deathday)
    : calculateAge(birthday)) + ' años'
  const prettyGender = getPersonGender(gender)
  const prettyBirthday = formatLongDate(birthday)
  const prettyDeathday = formatLongDate(deathday)

  return (
    <Section>
      <div className='flex md:flex-col flex-row flex-wrap gap-4 [&>*]:grow'>
        <SubSection title='Conocida por'>{knownForDepartment}</SubSection>
        <SubSection title='Género'>{prettyGender}</SubSection>
        <SubSection title='Fecha de nacimiento'>
          {prettyBirthday} {!deathday && <span className='whitespace-nowrap'>({prettyAge})</span>}
        </SubSection>
        {deathday &&
          <SubSection title='Fecha de defunción'>{prettyDeathday} ({prettyAge})</SubSection>}
        <SubSection title='Lugar de nacimiento'>{placeOfBirth}</SubSection>
        <SubSection title='También conocida como' className='hidden md:visible'>
          <ul>
            {alsoKnownAs.map(n => <li key={n}>{n}</li>)}
          </ul>
        </SubSection>
      </div>
    </Section>
  )
}
