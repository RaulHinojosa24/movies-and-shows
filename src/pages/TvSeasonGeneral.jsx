import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import EpisodeList from '../components/TvSeasons/EpisodeList'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'
import { Suspense, useEffect } from 'react'
import SeasonEpisodeSkeleton from '../components/Skeletons/SeasonEpisodeSkeleton'

export default function TvSeasonGeneralPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  const { data: loaderSeasonDetails } = useRouteLoaderData('season-details')

  useEffect(() => {
    Promise.all([loaderTvDetails, loaderSeasonDetails]).then(data => {
      const [{
        name: sName,
        original_name: sOriginalName
      }, { name }] = data
      setDocTitle(`${sName || sOriginalName} - ${name}`)
    })
  }, [loaderSeasonDetails, loaderTvDetails])

  return (
    <Main
      center={
        <Suspense fallback={<Fallback />}>
          <Await resolve={loaderSeasonDetails}>
            {({
              images: { posters },
              videos: { results },
              episodes,
              tvName,
              orinigal_name: tvOriginalName
            }) =>
              <>
                <GeneralMedia posters={posters} videos={results} pageType='temporada' title={name} />
                <EpisodeList episodes={episodes} tvName={tvName} tvOriginalName={tvOriginalName} />
              </>}
          </Await>
        </Suspense>
      }
    />
  )
}

function Fallback () {
  return (
    <>
      <div className='skeleton h-44 w-full rounded' />
      <div>
        <div className='skeleton__title w-1/5 mb-4' />
        <div className='space-y-2'>
          {Array(3).fill().map((_, i) => <SeasonEpisodeSkeleton key={i} />)}
        </div>
      </div>
    </>
  )
}
