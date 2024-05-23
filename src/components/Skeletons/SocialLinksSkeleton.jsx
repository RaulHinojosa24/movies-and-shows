export default function SocialLinksSkeleton () {
  return (
    <div className='flex md:flex-col gap-6 justify-center'>
      {Array(3).fill().map((_, i) => <div key={i} className='skeleton w-8 aspect-square rounded-lg' />)}
    </div>
  )
}
