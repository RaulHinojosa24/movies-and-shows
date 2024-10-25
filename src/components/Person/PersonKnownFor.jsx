import Section from '../UI/Section'
import DefaultProfileImage from '../../assets/default-user.webp'
import Slider from '../PageUI/Slider'
import { useContext } from 'react'
import { rootContext } from '../../context/root-context'
import VerticalCard from '../UI/Cards/VerticalCard'

const WEIGHTS = { popularity: 0.5, voteCount: 0.3, voteAverage: 0.2 }

const calculateScore = (credit, maxValues) => {
  const normalizedPopularity = credit.popularity / maxValues.popularity
  const normalizedVoteCount = credit.vote_count / maxValues.vote_count
  const normalizedVoteAverage = credit.vote_average / 10

  const score =
    (WEIGHTS.popularity * normalizedPopularity) +
    (WEIGHTS.voteCount * normalizedVoteCount) +
    (WEIGHTS.voteAverage * normalizedVoteAverage)

  return score
}

export default function PersonKnownFor ({ id, cast, crew }) {
  const combinedCredits = [...cast, ...crew]
  const filteredCredits = combinedCredits
    .reduce((acc, curr) => acc.find(el => el.id === curr.id) ? acc : [...acc, curr], [])
    .filter(credit => credit.vote_count > 1 && credit.popularity > 1)
  const maxValues = {
    popularity: Math.max(...filteredCredits.map(c => c.popularity)),
    vote_count: Math.max(...filteredCredits.map(c => c.vote_count)),
    vote_average: 10
  }

  const scoredCredits = filteredCredits
    .map(credit => ({
      ...credit,
      score: calculateScore(credit, maxValues)
    }))
    .sort((a, b) => b.score - a.score)
    .filter((_, i) => i < 9)
    .map(cc => ({
      id: cc.id,
      name: cc.name,
      title: cc.title,
      posterPath: cc.poster_path,
      type: cc.media_type,
      adult: cc.adult
    }))

  return (
    <>
      <Section title='Conocida por'>
        <Slider key={id} slides={scoredCredits} SlideComponent={Slide} />
      </Section>
    </>
  )
}

const Slide = ({ id, name, title, posterPath, type, adult }) => {
  const { config } = useContext(rootContext)

  const prettyPosterPath = posterPath && config
    ? config?.images?.secure_base_url + config?.images?.poster_sizes[1] + posterPath
    : DefaultProfileImage
  const prettyTitle = title || name
  const prettyLink = `/${type}/${id}`

  return (
    <VerticalCard
      imageUrl={prettyPosterPath}
      isAdult={adult}
      link={prettyLink}
      title={prettyTitle}
    />
  )
}
