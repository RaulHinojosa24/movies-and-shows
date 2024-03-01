import Section from '../UI/Section'
import CreditsCast from './CreditsCast'
import CreditsCrew from './CreditsCrew'

export default function PersonCredits () {
  return (
    <Section title='Créditos' className='space-y-3'>
      <CreditsCast />
      <CreditsCrew />
    </Section>
  )
}

/*
Movie =>
  id, title, character, release_date, vote_average, media_type, poster_path, video?, credit_id
Tv =>
  id, name, character, first_air_date, vote_average, media_type, poster_path, episode_count, credit_id
*/
