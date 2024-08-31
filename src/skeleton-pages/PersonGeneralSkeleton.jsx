import Main from '../components/PageUI/Main'
import SocialLinksSkeleton from '../components/Skeletons/SocialLinksSkeleton'
import GeneralAsideSkeleton from '../components/Skeletons/GeneralAsideSkeleton'
import GeneralOverviewSkeleton from '../components/Skeletons/GeneralOverviewSkeleton'
import GeneralCastSkeleton from '../components/Skeletons/GeneralCastSkeleton'
import PersonCreditsSkeleton from '../components/Skeletons/PersonCreditsSkeleton'

export default function PersonGeneralSkeleton () {
  return (
    <Main
      left={
        <div className='w-full space-y-8'>
          <div className='aspect-[2/3] w-full skeleton rounded' />
          <GeneralAsideSkeleton />
        </div>
      }
      center={
        // <div className='w-full space-y-4'>
        //   <div className='skeleton__title w-1/4' />
        //   <div className='skeleton__paragraph w-full !h-40' />
        //   <div className='skeleton__title w-1/4' />
        //   <div className='flex gap-4 overflow-hidden'>
        //     {Array(5).fill().map((_, i) => <div key={i} className='aspect-[2/3] shrink-0 w-32 skeleton rounded' />)}
        //   </div>
        // </div>
        <>
          <GeneralOverviewSkeleton person />
          <GeneralCastSkeleton person />
          <PersonCreditsSkeleton />
        </>
      }
      right={
        <SocialLinksSkeleton />
      }
    />
  )
}
