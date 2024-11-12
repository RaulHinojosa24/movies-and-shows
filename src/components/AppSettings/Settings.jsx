import { useContext } from 'react'
import Select from '../UI/Select'
import { settingsContext } from '../../context/settings-context'
import { rootContext } from '../../context/root-context'
import SettingsIcon from '../../icons/SettingsIcon'
import Popover from '../UI/Popover'

export default function Settings () {
  const settings = useContext(settingsContext)
  const { config } = useContext(rootContext)

  function languageChangeHandler (e) {
    const selectedLanguage = config.languages.find(l => l.iso_639_1 === e.target.value)

    if (selectedLanguage) settings.setLanguage(selectedLanguage)
  }
  function countryChangeHandler (e) {
    const selectedCountry = config.countries.find(c => c.iso_3166_1 === e.target.value)

    if (selectedCountry) settings.setCountry(selectedCountry)
  }
  function allowChangeHandler (e) {
    const allow = e.target.checked

    settings.setIncludeAdult(allow)
  }

  return (
    <>
      {config &&
        <Popover className='z-[60]' popoverTarget={<SettingsIcon className='text-2xl group-hover:rotate-[60deg] transition-all' />}>
          {config &&
            <div className='space-y-2'>
              <Select
                name='language'
                label='Language'
                defaultValue={settings.language.iso_639_1}
                onChange={languageChangeHandler}
                options={config.languages
                  .map(l => (
                    {
                      label: l.name || l.english_name,
                      value: l.iso_639_1
                    }))
                  .sort((a, b) => a.label.localeCompare(b.label))}
              />
              <Select
                name='country'
                label='Country'
                defaultValue={settings.country.iso_3166_1}
                onChange={countryChangeHandler}
                options={config.countries
                  .map(c => (
                    {
                      label: c.native_name || c.english_name,
                      value: c.iso_3166_1
                    }))
                  .sort((a, b) => a.label.localeCompare(b.label))}
              />
              <div className={'transition-all ' + (settings.includeAdult ? '' : 'text-medium line-through decoration-1')}>
                <input type='checkbox' name='allow' id='allow' onChange={allowChangeHandler} checked={settings.includeAdult} />
                <label htmlFor='allow'> Show adult content</label>
              </div>
            </div>}
        </Popover>}
    </>
  )
}
