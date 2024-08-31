import { Await, useRouteLoaderData } from 'react-router-dom'
import Main from '../components/PageUI/Main'
import EpisodeList from '../components/TvSeasons/EpisodeList'
import { setDocTitle } from '../utils/utility'
import GeneralMedia from '../components/Media/GeneralMedia'
import { Suspense, useEffect } from 'react'
import TvSeasonGeneralSkeleton from '../skeleton-pages/TvSeasonGeneralSkeleton'

export default function TvSeasonGeneralPage () {
  const { data: loaderTvDetails } = useRouteLoaderData('tv-details')
  const { data: loaderSeasonDetails } = useRouteLoaderData('season-details')
  setDocTitle('Cargando...')

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
    <Suspense fallback={<TvSeasonGeneralSkeleton />}>
      <Await resolve={loaderSeasonDetails}>
        {({
          images: { posters },
          videos: { results },
          episodes,
          name,
          orinigal_name: originalName
        }) =>
          <>
            <Main
              center={
                <>
                  <GeneralMedia posters={posters} videos={results} pageType='temporada' title={name || originalName} />
                  <EpisodeList episodes={episodes} tvName={name} tvOriginalName={originalName} />
                </>
            }
            />
          </>}
      </Await>
    </Suspense>

  )
}
