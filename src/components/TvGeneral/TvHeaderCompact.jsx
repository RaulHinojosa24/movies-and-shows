import HeaderCompact from '../PageUI/HeaderCompact'

export default function TvHeaderCompact ({ id, posterPath, name }) {
  return (
    <HeaderCompact target={'/tv/' + id} mediaType='tv' posterPath={posterPath} title={name} />
  )
}
