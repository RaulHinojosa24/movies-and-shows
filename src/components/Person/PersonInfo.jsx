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

  const years = `(${prettyAge} year${prettyAge > 1 ? 's' : ''})`

  return (
    <Section>
      <div className='grid grid-cols-2 md:grid-cols-1 gap-3'>
        {knownForDepartment &&
          <SubSection title='Known for'>{knownForDepartment}</SubSection>}
        <SubSection title='Genre'>{prettyGender}</SubSection>
        {birthday &&
          <SubSection title='Birthday'>
            {prettyBirthday} {!deathday && years}
          </SubSection>}
        {deathday &&
          <SubSection title='Deathday'>{prettyDeathday} {years}</SubSection>}
        {placeOfBirth &&
          <SubSection title='Place of birth'>{placeOfBirth}</SubSection>}
        {alsoKnownAs.length > 0 &&
          <SubSection title='Also known as' className='col-span-2 md:col-span-1'>
            <ul className='flex flex-row md:flex-col gap-x-2 flex-wrap'>
              {alsoKnownAs.map((name, idx) =>
                <li key={`${name}${idx}`}>
                  {name}
                  <span>{idx === alsoKnownAs.length - 1 ? '' : ','}</span>
                </li>)}
            </ul>
          </SubSection>}
      </div>
    </Section>
  )
}
