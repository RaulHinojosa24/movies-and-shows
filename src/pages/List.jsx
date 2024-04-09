import ListHeader from '../components/List/ListHeader'
import { getListDetails } from '../utils/http'

export default function ListPage () {
  return (
    <>
      <ListHeader />
      {/* <Main
        left={
          <>
            <img className='aspect-[2/3] object-cover w-full mx-auto max-w-aside rounded custom-shadow' src={prettyProfilePath} alt={'Foto de ' + name} />
            <PersonInfo className='hidden md:block' />
          </>
      }
        center={
          <>
            <h1 className='text-4xl font-bold text-center md:text-left'>{name}</h1>
            <Link to='media' className='font-bold text-center md:text-left'>TODO: Ver Media</Link>
            <PersonInfo className='md:hidden block' />
            <PersonBio />
            <PersonKnownFor />
            <PersonCredits />
          </>
      }
        right={
          <SocialLinks externalIDs={externalIDs} name={name} isPerson />
      }
      /> */}
    </>
  )
}

export function loader ({ request, params }) {
  const { id } = params

  return getListDetails(id)
}
