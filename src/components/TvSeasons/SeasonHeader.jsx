import HeaderCompact from '../PageUI/HeaderCompact'

export default function SeasonHeader ({ tvId, seasonNumber, posterPath, name }) {
  return <HeaderCompact target={'/tv/' + tvId + '/season' + (seasonNumber !== undefined ? '/' + seasonNumber : '')} mediaType='tv' posterPath={posterPath} title={name} />
}
