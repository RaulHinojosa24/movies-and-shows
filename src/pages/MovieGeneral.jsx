import { useRouteLoaderData } from 'react-router-dom'
import Section from '../components/UI/Section'
import SubSection from '../components/UI/SubSection'
import { formatCurrency, retrieveConfig } from '../utils/utility'
import MovieCast from '../components/MovieGeneral/MovieCast'
import MovieRecommendations from '../components/MovieGeneral/MovieRecommendations'
import SocialLinks from '../components/UI/SocialLinks'
import MovieLists from '../components/MovieGeneral/MovieLists'
import MovieCollection from '../components/MovieGeneral/MovieCollection'
import MovieReviews from '../components/MovieGeneral/MovieReviews'

export default function MovieDetailsPage () {
  const {
    budget,
    credits,
    external_ids: externalIDs,
    homepage: homepageLink,
    keywords,
    original_language: originalLanguage,
    original_title: originalTitle,
    overview,
    recommendations,
    revenue,
    status,
    title
  } = useRouteLoaderData('movie-details')

  const cleanCast = credits.cast.map(person => ({
    id: person.id,
    name: person.name,
    originalName: person.original_name,
    picturePath: person.profile_path,
    character: person.character
  }))

  const cleanRecommendations = recommendations.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    backdropPath: movie.backdrop_path,
    mediaType: movie.media_type,
    releaseDate: movie.release_date,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count
  }))

  const { languages } = retrieveConfig(useRouteLoaderData('root'))

  const { english_name: originalLanguageEnglishName, name: originalLanguageName } = languages.find(el => el.iso_639_1 === originalLanguage)

  return (
    <main className='px-app-space w-full flex gap-8'>
      <Section title='Detalles' className='space-y-2 w-aside'>
        <SubSection title='Estado'>{status}</SubSection>
        <SubSection title='Presupuesto'>{formatCurrency(budget)}</SubSection>
        <SubSection title='Ingresos'>{formatCurrency(revenue)}</SubSection>
        <SubSection title='Idioma original'>
          {originalLanguageName !== '' && originalLanguageEnglishName !== originalLanguageName
            ? `${originalLanguageName} (${originalLanguageEnglishName})`
            : originalLanguageEnglishName}
        </SubSection>
        <SubSection title='Título original'>{originalTitle}</SubSection>
        <SubSection title='Palabras clave'>
          <ul className='flex gap-2 flex-wrap'>
            {keywords.keywords.map(({ id, name }) => (
              <li key={id} className='bg-neutral-900 px-2 py-1 rounded border-1 border-neutral-800 text-sm'>{name}</li>
            ))}
          </ul>
        </SubSection>
      </Section>
      <div className='space-y-8 min-w-0 w-full'>
        <Section title='Sinopsis'>
          {overview}
        </Section>
        {/* <hr /> */}
        <MovieCast cast={cleanCast} />
        {/* <hr /> */}
        <MovieCollection />
        {/* <hr /> */}
        <MovieReviews />
        {/* <hr /> */}
        <MovieLists />
        {/* <hr /> */}
        <MovieRecommendations recommendations={cleanRecommendations} />
      </div>
      <SocialLinks externalIDs={externalIDs} homepageLink={homepageLink} name={title} />
    </main>
  )
}
