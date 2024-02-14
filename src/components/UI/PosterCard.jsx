// {
//   adult: false,
//   backdrop_path: '/7RxhC2ntrglVl1nkKjAgNoO0XP.jpg',
//   genre_ids: [ 18 ],
//   id: 998022,
//   original_language: 'de',
//   original_title: 'Das Lehrerzimmer',
//   overview:
//     'Carla Nowak, una idealista profesora de matemáticas y deportes, comienza su primer trabajo en una escuela de secundaria. Cuando se producen una serie de robos en la escuela y se sospecha de uno de sus alumnos, decide llegar al fondo del asunto por su cuenta. Carla intenta mediar entre padres indignados, colegas obstinados y estudiantes agresivos, pero se enfrenta a las implacables estructuras del sistema escolar.',
//   popularity: 21.732,
//   poster_path: '/3xFWOPWzN4mwFx0js8bDvHOUIO0.jpg',
//   release_date: '2024-02-02',
//   title: 'Sala de profesores',
//   video: false,
//   vote_average: 7.4,
//   vote_count: 76
// }

import { useRouteLoaderData } from 'react-router-dom'

export default function PosterCard ({ movie }) {
  const {
    images: {
      secure_base_url: baseURL,
      poster_sizes: posterSizes
    }
  } = useRouteLoaderData('root')
  const {
    poster_path: posterPath,
    title
  } = movie

  const posterSize = posterSizes[2]
  const width = posterSize.match(/\d+/g)

  return (
    <article style={{ width: width + 'px' }}>
      <img src={baseURL + posterSize + posterPath} alt='' />
      <p>{title}</p>
    </article>
  )
}
