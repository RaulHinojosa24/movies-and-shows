import MovieIcon from '../../icons/MovieIcon'
import PersonIcon from '../../icons/PersonIcon'
import TvIcon from '../../icons/TvIcon'

export default function MediaType ({ mediaType, isPoster, className = '' }) {
  const prettyMediaType = mediaType === 'movie'
    ? isPoster ? <MovieIcon /> : 'Película'
    : mediaType === 'tv'
      ? isPoster ? <TvIcon /> : 'Serie de TV'
      : isPoster ? <PersonIcon /> : 'Persona'

  const title = mediaType === 'movie'
    ? 'Película'
    : mediaType === 'tv'
      ? 'Serie de TV'
      : 'Persona'

  const mediaStyles = {
    tv: 'bg-gradient-to-br from-amber-500 to-rose-600',
    movie: 'bg-gradient-to-br from-green-600 to-purple-950',
    person: 'bg-gradient-to-br from-cyan-200 to-blue-900'
  }

  const posterStyles = {
    true: 'w-10 p-[5%] aspect-square rounded-full text-xl grid place-items-center',
    false: 'rounded-full w-fit px-4 py-1'
  }

  return (
    <div title={title} className={`font-semibold shadow-sm shadow-black/50 text-white ${mediaStyles[mediaType]} ${posterStyles[isPoster]} ${className}`}>
      {prettyMediaType}
    </div>
  )
}
