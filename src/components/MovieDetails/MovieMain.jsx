import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import SubSection from '../UI/SubSection'
import { formatCurrency } from '../../utils/utility'
import MovieCast from './MovieCast'
import MovieRecommendations from './MovieRecommendations'

export default function MovieMain () {
  const {
    budget,
    credits,
    keywords,
    original_language: originalLanguage,
    original_title: originalTitle,
    overview,
    recommendations,
    revenue,
    status
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

  const { languages } = useRouteLoaderData('root')

  const { english_name: originalLanguageEnglishName, name: originalLanguageName } = languages.find(el => el.iso_639_1 === originalLanguage)

  return (
    <main className='w-11/12 m-auto grid grid-cols-5 gap-4'>
      <Section title='Detalles' className='flex flex-col gap-2'>
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
              <li key={id}>{name}</li>
            ))}
          </ul>
        </SubSection>
      </Section>
      <div className='col-span-4'>
        <Section title='Sinopsis'>
          {overview}
        </Section>
        <hr />
        <MovieCast cast={cleanCast} />
        <hr />
        <MovieRecommendations recommendations={cleanRecommendations} />
      </div>
    </main>
  )
}
