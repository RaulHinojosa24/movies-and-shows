import { Link, useRouteLoaderData } from 'react-router-dom'
import Section from '../UI/Section'
import ReviewItem from '../Reviews/ReviewItem'

export default function MovieReviews () {
  const {
    reviews: {
      results: reviews
    }
  } = useRouteLoaderData('movie-details')

  if (reviews.length === 0) {
    return (
      <Section title='Reseñas'>
        <p className='italic'>Todavía no tenemos ninguna reseña en tu idioma.</p>
      </Section>
    )
  }

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
      <ReviewItem key={id} author={author} authorDetails={authorDetails} content={content} createdAt={createdAt} id={id} updatedAt={updatedAt} url={url} />
      <Link to='' className='inline-block mt-4'>Ver todas las reseñas</Link>
    </Section>
  )
}
