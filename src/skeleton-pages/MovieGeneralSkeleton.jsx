import GeneralAsideSkeleton from '../components/Skeletons/GeneralAsideSkeleton'
import SocialLinksSkeleton from '../components/Skeletons/SocialLinksSkeleton'
import GeneralCenterSkeleton from '../components/Skeletons/GeneralCenterSkeleton'
import Main from '../components/PageUI/Main'
import HeaderSkeleton from '../components/Skeletons/HeaderSkeleton'

export default function MovieGeneralSkeleton () {
  return (
    <>
      <HeaderSkeleton />
      <Main
        left={<GeneralAsideSkeleton />}
        center={<GeneralCenterSkeleton />}
        right={<SocialLinksSkeleton />}
      />
    </>
  )
}
