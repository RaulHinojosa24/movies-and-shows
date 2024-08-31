import HeaderCompact from '../PageUI/HeaderCompact'

export default function CollectionHeaderCompact ({ id, posterPath, name }) {
  return <HeaderCompact target={'/collection/' + id} mediaType='collection' posterPath={posterPath} title={name} />
}
