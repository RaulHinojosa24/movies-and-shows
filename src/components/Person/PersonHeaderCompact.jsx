import HeaderCompact from '../PageUI/HeaderCompact'

export default function PersonHeaderCompact ({ id, name, profilePath }) {
  return <HeaderCompact target={'/person/' + id} mediaType='person' posterPath={profilePath} title={name} />
}
