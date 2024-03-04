import SortedCreditsDisplay from './SortedCreditsDisplay'

const groupByDate = (credits) => {
  return {
    Próximamente: credits.filter(c => (!c.releaseDate && !c.firstAirDate) || c.sortDate - new Date() > 0),
    Anterior: credits.filter(c => (c.releaseDate || c.firstAirDate) && c.sortDate - new Date() < 0)
  }
}
const groupByType = (credits) => {
  return {
    Película: credits.filter(c => c.mediaType === 'movie' && !c.video),
    Serie: credits.filter(c => c.mediaType === 'tv'),
    Corto: credits.filter(c => c.mediaType === 'movie' && c.video)
  }
}

const GROUP_BY_DICT = {
  date: groupByDate,
  type: groupByType,
  default: groupByDate
}

export default function GroupedCreditsDisplay ({ credits, groupBy, sorting, direction }) {
  const groupedCredits = (GROUP_BY_DICT[groupBy] || GROUP_BY_DICT.default)(credits)

  return (
    <>
      {Object.keys(groupedCredits).map(group => {
        const credits = groupedCredits[group]
        return credits.length > 0
          ? <SortedCreditsDisplay key={group} credits={credits} title={group} sorting={sorting} direction={direction} />
          : null
      })}
    </>
  )
}
