import Section from '../UI/Section'

import FacebookLogo from '../../logos/FacebookLogo'
import ImdbLogo from '../../logos/ImdbLogo'
import WikidataLogo from '../../logos/WikidataLogo'
import InstagramLogo from '../../logos/InstagramLogo'
import TwitterLogo from '../../logos/TwitterLogo'
import LinkIcon from '../../logos/LinkIcon'

export default function MovieSocialLinks ({ externalIDs, homepageLink, title }) {
  const {
    imdb_id: imdb,
    wikidata_id: wikidata,
    facebook_id: facebook,
    instagram_id: instagram,
    twitter_id: twitter
  } = externalIDs

  return (
    <Section>
      <ul className='flex flex-col gap-6 items-center flex-wrap'>
        {homepageLink !== '' &&
          <li>
            <a href={homepageLink} target='_blank' title={'Visita la página oficial de ' + title}>
              <LinkIcon className='icon' />
            </a>
          </li>}
        {twitter &&
          <li>
            <a href={'https://www.twitter.com/' + twitter} target='_blank' title={'Visita la página oficial de Twitter de ' + title}>
              <TwitterLogo className='icon' />
            </a>
          </li>}
        {instagram &&
          <li>
            <a href={'https://www.instagram.com/' + instagram} target='_blank' title={'Visita la página oficial de Instagram de ' + title}>
              <InstagramLogo className='icon' />
            </a>
          </li>}
        {imdb &&
          <li>
            <a href={'https://www.imdb.com/title/' + imdb} target='_blank' title={'Visita la página oficial de IMDB de ' + title}>
              <ImdbLogo className='icon' />
            </a>
          </li>}
        {facebook &&
          <li>
            <a href={'https://www.facebook.com/' + facebook} target='_blank' title={'Visita la página oficial de Facebook de ' + title}>
              <FacebookLogo className='icon' />
            </a>
          </li>}
        {wikidata &&
          <li>
            <a href={'https://www.wikidata.org/wiki/' + wikidata} target='_blank' title={'Visita la página oficial de Wikidata de ' + title}>
              <WikidataLogo className='icon' />
            </a>
          </li>}
      </ul>
    </Section>
  )
}
