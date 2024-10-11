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
          <div className='mx-auto max-w-aside aspect-[2/3] w-full skeleton rounded' />
          <GeneralAsideSkeleton />
        </div>
      }
      center={
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
