import { formatLongDate } from '../../utils/utility'
import DefaultPosterImg from '../../assets/default-poster.webp'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import HorizontalCard from '../UI/Cards/HorizontalCard'
import { settingsContext } from '../../context/settings-context'

export default function CollectionListItem ({ id, title, originalTitle, posterPath, releaseDate, overview, adult }) {
  const { config } = useContext(rootContext)
  const { country, language } = useContext(settingsContext)

  const appLanguage = `${language.iso_639_1}-${country.iso_3166_1}`
  const prettyLink = `/movie/${id}`
  const prettyTitle = title || originalTitle
  const prettyOriginalTitle = title !== originalTitle && originalTitle
  const prettyPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[1] + posterPath
    : DefaultPosterImg
  const secondary = <p className='line-clamp-2'>{overview}</p>
  const tertiary = releaseDate ? formatLongDate(releaseDate, appLanguage) : 'Unknown date'

  return (
    <HorizontalCard imageUrl={prettyPath} isAdult={adult} link={prettyLink} originalTitle={prettyOriginalTitle} secondary={secondary} tertiary={tertiary} title={prettyTitle} />
  )
}
