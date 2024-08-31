import Main from '../components/PageUI/Main'
import SeasonEpisodeSkeleton from '../components/Skeletons/SeasonEpisodeSkeleton'

export default function TvSeasonGeneralSkeleton () {
  return (
    <Main
      center={
        <>
          <div className='skeleton rounded-lg w-full aspect-[8/3] sm:aspect-[16/3]' />
          <div className='skeleton__title w-36' />
          <div className='space-y-2'>
            {Array(6).fill().map((_, id) => (
              <SeasonEpisodeSkeleton key={id} />
            ))}
          </div>
        </>
        }
    />
  )
}
