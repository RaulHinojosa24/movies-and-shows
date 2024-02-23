import { useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import ReviewItem from '../MovieReviews/ReviewItem'

export default function MovieReviews () {
  const {
    reviews: {
      results: reviews
    }
  } = useRouteLoaderData('movie-details')

  const nReviews = reviews.length

  const {
    author,
    author_details: authorDetails,
    content,
    created_at: createdAt,
    id,
    updated_at: updatedAt,
    url
  } = reviews[0]

  return (
    <Section title='Reseñas'>
      {!nReviews > 0 &&
        <p className='italic'>Todavía no hay ninguna reseña en tu idioma.</p>}
      {nReviews > 0 &&
        <>
          <ReviewItem author={author} authorDetails={authorDetails} content={content} createdAt={createdAt} id={id} updatedAt={updatedAt} url={url} />
          <a className='inline-block mt-4'>Ver todas las reseñas</a>
        </>}
    </Section>
  )
}
