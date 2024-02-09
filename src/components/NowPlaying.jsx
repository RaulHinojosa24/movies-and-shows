import { useLoaderData } from 'react-router-dom'

export default function NowPlaying () {
  const data = useLoaderData()

  return (
    <ul>
      {data.results.map(movie => {
        console.log(movie)
        return (
          <li key={movie.id}>
            {movie.title}
            <p>{movie.release_date}</p>
          </li>
        )
      })}
    </ul>
  )
}
