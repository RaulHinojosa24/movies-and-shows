import SortedCreditsDisplay from './SortedCreditsDisplay'

const groupByDate = (credits) => {
  return {
    Upcoming: credits.filter(c => (!c.releaseDate && !c.firstAirDate) || c.sortDate - new Date() > 0),
    Released: credits.filter(c => (c.releaseDate || c.firstAirDate) && c.sortDate - new Date() < 0)
  }
}
const groupByType = (credits) => {
  return {
    Movies: credits.filter(c => c.mediaType === 'movie' && !c.video),
    'TV Shows': credits.filter(c => c.mediaType === 'tv'),
    Specials: credits.filter(c => c.mediaType === 'movie' && c.video)
  }
}

const GROUP_BY_DICT = {
  date: groupByDate,
  type: groupByType,
  default: groupByDate
}

export default function GroupedCreditsDisplay ({ credits, groupBy, sorting, direction }) {
  const groupedCredits = GROUP_BY_DICT[groupBy || 'default'](credits)

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
