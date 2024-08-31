import Header from '../PageUI/Header'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'

export default function CollectionHeader ({ parts, backdropPath, posterPath, name, overview }) {
  const { movieGenres } = useContext(rootContext)

  const prettyGenres = movieGenres
    ? [...new Set(parts.reduce((acc, curr) => [...acc, ...curr.genre_ids], []))]
        .map(id => movieGenres?.genres.find(genre => genre.id === id))
        .sort((a, b) => a.name.localeCompare(b.name))
    : []

  return (
    <Header
      backdropPath={backdropPath}
      posterPath={posterPath}
      title={name}
      genres={prettyGenres}
      overview={overview}
      mediaType='movie'
    />
  )
}
