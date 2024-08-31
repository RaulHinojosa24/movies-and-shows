import Main from '../components/PageUI/Main'
import HeaderCompactSkeleton from '../components/Skeletons/HeaderCompactSkeleton'
import SeasonCardSkeleton from '../components/Skeletons/SeasonCardSkeleton'

export default function TvSeasonsSkeleton () {
  return (
    <>
      <HeaderCompactSkeleton />
      <Main
        center={
          <>
            <div className='skeleton__title w-2/3' />
            <div className='space-y-2'>
              {Array(3).fill().map((_, id) => <SeasonCardSkeleton key={id} />)}
            </div>
          </>
        }
      />
    </>
  )
}
