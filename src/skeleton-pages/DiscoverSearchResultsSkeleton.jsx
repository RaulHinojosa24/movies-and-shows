import ResponsiveCardSkeleton from '../components/Skeletons/ResponsiveCardSkeleton'

export default function DiscoverSearchResultsSkeleton () {
  return (
    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
      {Array(20).fill().map((_, i) => <ResponsiveCardSkeleton key={i} />)}
    </div>
  )
}
