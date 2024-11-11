import SubSection from '../UI/SubSection'
import { calculateAge, formatLongDate, getPersonGender } from '../../utils/utility'
import Section from '../UI/Section'
import { useContext } from 'react'
import { settingsContext } from '../../context/settings-context'

export default function PersonInfo ({ alsoKnownAs, birthday, deathday, gender, knownForDepartment, placeOfBirth }) {
  const { country, language } = useContext(settingsContext)

  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const prettyAge = calculateAge(birthday, deathday)
  const prettyGender = getPersonGender(gender)
  const prettyBirthday = formatLongDate(birthday, appLanguage)
  const prettyDeathday = formatLongDate(deathday, appLanguage)

  return (
    <Section>
      <div className='flex md:flex-col flex-row flex-wrap gap-4 [&>*]:grow'>
        {knownForDepartment &&
          <SubSection title='Conocida por'>{knownForDepartment}</SubSection>}
        <SubSection title='Género'>{prettyGender}</SubSection>
        {birthday &&
          <SubSection title='Fecha de nacimiento'>
            {prettyBirthday} {!deathday && <>({prettyAge} años)</>}
          </SubSection>}
        {deathday &&
          <SubSection title='Fecha de defunción'>{prettyDeathday} ({prettyAge} años)</SubSection>}
        {placeOfBirth &&
          <SubSection title='Lugar de nacimiento'>{placeOfBirth}</SubSection>}
        {alsoKnownAs.length > 0 &&
          <SubSection title='También conocida como' className='hidden md:visible'>
            <ul>
              {alsoKnownAs.map(n => <li key={n}>{n}</li>)}
            </ul>
          </SubSection>}
      </div>
    </Section>
  )
}
