import HeaderCompact from '../PageUI/HeaderCompact'

export default function MovieHeaderCompact ({ id, posterPath, title }) {
  return <HeaderCompact target={'/movie/' + id} mediaType='movie' posterPath={posterPath} title={title} />
}
