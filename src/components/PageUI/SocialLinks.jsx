import FacebookLogo from '../../logos/FacebookLogo'
import ImdbLogo from '../../logos/ImdbLogo'
import WikidataLogo from '../../logos/WikidataLogo'
import InstagramLogo from '../../logos/InstagramLogo'
import TwitterLogo from '../../logos/TwitterLogo'
import TiktokLogo from '../../logos/TiktokLogo'
import YoutubeLogo from '../../logos/YoutubeLogo'
import LinkIcon from '../../icons/LinkIcon'

export default function SocialLinks ({ externalIDs, homepageLink, name, isPerson }) {
  const {
    imdb_id: imdb,
    wikidata_id: wikidata,
    facebook_id: facebook,
    instagram_id: instagram,
    twitter_id: twitter,
    youtube_id: youtube,
    tiktok_id: tiktok
  } = externalIDs

  const socials = [
    {
      name: 'Oficial',
      link: homepageLink,
      icon: LinkIcon,
      id: homepageLink
    },
    {
      name: 'Twitter',
      link: 'https://www.twitter.com/' + twitter,
      icon: TwitterLogo,
      id: twitter
    },
    {
      name: 'YouTube',
      link: 'https://www.youtube.com/' + youtube,
      icon: YoutubeLogo,
      id: youtube
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/' + instagram,
      icon: InstagramLogo,
      id: instagram
    },
    {
      name: 'IMDB',
      link: 'https://www.imdb.com/title/' + imdb,
      personLink: 'https://www.imdb.com/name/' + imdb,
      icon: ImdbLogo,
      id: imdb
    },
    {
      name: 'TikTok',
      link: 'https://www.tiktok.com/@' + tiktok,
      icon: TiktokLogo,
      id: tiktok
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/' + facebook,
      icon: FacebookLogo,
      id: facebook
    },
    {
      name: 'Wikidata',
      link: 'https://www.wikidata.org/wiki/' + wikidata,
      icon: WikidataLogo,
      id: wikidata
    }
  ]

  const anySocial = socials.map(a => a.id).some(Boolean)

  return (
    <>
      {anySocial &&
        <section>
          <ul className='flex flex-row w-3/5 md:w-full md:flex-col gap-6 justify-center mx-auto items-center flex-wrap'>
            {socials.map(social => (Boolean(social.id) &&
              <li key={social.name}>
                <a href={isPerson ? (social.personLink || social.link) : social.link} target='_blank' title={'Visita la página oficial de ' + social.name + ' de ' + name}>
                  <social.icon className='icon' />
                </a>
              </li>
            ))}
          </ul>
        </section>}
    </>
  )
}
