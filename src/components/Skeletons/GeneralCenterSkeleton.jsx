import GeneralCastSkeleton from './GeneralCastSkeleton'
import GeneralMediaSkeleton from './GeneralMediaSkeleton'
import GeneralSeasonSkeleton from './GeneralSeasonSkeleton'
import GeneralOverviewSkeleton from './GeneralOverviewSkeleton'
import RecommendationsSkeleton from './RecommendationsSkeleton'

export default function GeneralCenterSkeleton ({ tv }) {
  return (
    <div className='space-y-4'>
      <GeneralOverviewSkeleton />
      <GeneralMediaSkeleton />
      <GeneralCastSkeleton />
      {tv &&
        <GeneralSeasonSkeleton />}
      <RecommendationsSkeleton />
    </div>
  )
}
