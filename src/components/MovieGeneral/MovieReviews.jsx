import Section from '../UI/Section'
import ReviewItem from '../Reviews/ReviewItem'
import Slider from '../PageUI/Slider'

export default function MovieReviews ({ reviews }) {
  return (
    <Section title='Reviews'>
      <Slider type='bullets' slides={reviews} SlideComponent={ReviewItem} />
    </Section>
  )
}
