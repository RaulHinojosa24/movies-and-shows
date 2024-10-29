import Section from '../UI/Section'
import ReviewItem from '../Reviews/ReviewItem'
import Slider from '../PageUI/Slider'

export default function TvReviews ({ reviews }) {
  return (
    <Section title='Reseñas'>
      <Slider type='bullets' slides={reviews} SlideComponent={ReviewItem} />
    </Section>
  )
}
