import { formatLongDate } from '../../utils/utility'
import DefaultPosterImg from '../../assets/default-poster.webp'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import HorizontalCard from '../UI/Cards/HorizontalCard'

export default function CollectionListItem ({ id, title, originalTitle, posterPath, releaseDate, overview, adult }) {
  const { config } = useContext(rootContext)

  const prettyLink = `/movie/${id}`
  const prettyTitle = title || originalTitle
  const prettyOriginalTitle = title !== originalTitle && originalTitle
  const prettyPath = config && posterPath
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[1] + posterPath
    : DefaultPosterImg
  const secondary = <p className='line-clamp-2'>{overview}</p>
  const tertiary = releaseDate ? formatLongDate(releaseDate) : 'Fecha desconocida'

  return (
    <HorizontalCard imageUrl={prettyPath} isAdult={adult} link={prettyLink} originalTitle={prettyOriginalTitle} secondary={secondary} tertiary={tertiary} title={prettyTitle} />
  )
}
