// CONFIG FILE

const config = {
  images: {
    base_url: 'http://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
    logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
    poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
    profile_sizes: ['w45', 'w185', 'h632', 'original'],
    still_sizes: ['w92', 'w185', 'w300', 'original']
  },
  change_keys: [
    'adult', 'air_date', 'also_known_as', 'alternative_titles', 'biography', 'birthday',
    'budget', 'cast', 'certifications', 'character_names', 'created_by', 'crew',
    'deathday', 'episode', 'episode_number', 'episode_run_time', 'freebase_id', 'freebase_mid',
    'general', 'genres', 'guest_stars', 'homepage', 'images', 'imdb_id', 'languages',
    'name', 'network', 'origin_country', 'original_name', 'original_title', 'overview',
    'parts', 'place_of_birth', 'plot_keywords', 'production_code', 'production_companies',
    'production_countries', 'releases', 'revenue', 'runtime', 'season', 'season_number',
    'season_regular', 'spoken_languages', 'status', 'tagline', 'title', 'translations',
    'tvdb_id', 'tvrage_id', 'type', 'video', 'videos'
  ]
}

// MOVIE OBJECT FROM DISCOVER

const discover = {
  adult: false,
  backdrop_path: '/7RxhC2ntrglVl1nkKjAgNoO0XP.jpg',
  genre_ids: [18],
  id: 998022,
  original_language: 'de',
  original_title: 'Das Lehrerzimmer',
  overview:
    'Carla Nowak, una idealista profesora de matemáticas y deportes, comienza su primer trabajo en una escuela de secundaria. Cuando se producen una serie de robos en la escuela y se sospecha de uno de sus alumnos, decide llegar al fondo del asunto por su cuenta. Carla intenta mediar entre padres indignados, colegas obstinados y estudiantes agresivos, pero se enfrenta a las implacables estructuras del sistema escolar.',
  popularity: 21.732,
  poster_path: '/3xFWOPWzN4mwFx0js8bDvHOUIO0.jpg',
  release_date: '2024-02-02',
  title: 'Sala de profesores',
  video: false,
  vote_average: 7.4,
  vote_count: 76
}

// MOVIE DETAILS

const details = {
  adult: false,
  backdrop_path: '/uUiIGztTrfDhPdAFJpr6m4UBMAd.jpg',
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 878,
      name: 'Ciencia ficción'
    },
    {
      id: 28,
      name: 'Acción'
    },
    {
      id: 12,
      name: 'Aventura'
    }
  ],
  homepage: '',
  id: 634492,
  imdb_id: 'tt11057302',
  original_language: 'en',
  original_title: 'Madame Web',
  overview: 'Una historia de origen de la clarividente conocida como Madame Web, cuyas habilidades psíquicas le permiten ver dentro del mundo de las arañas.',
  popularity: 567.846,
  poster_path: '/je70tzQu8z4PQkVnZaPtfMgONdR.jpg',
  production_companies: [
    {
      id: 5,
      logo_path: '/71BqEFAF4V3qjjMPCpLuyJFB9A.png',
      name: 'Columbia Pictures',
      origin_country: 'US'
    },
    {
      id: 435,
      logo_path: '/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png',
      name: 'di Bonaventura Pictures',
      origin_country: 'US'
    },
    {
      id: 7505,
      logo_path: '/837VMM4wOkODc1idNxGT0KQJlej.png',
      name: 'Marvel Entertainment',
      origin_country: 'US'
    }
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America'
    }
  ],
  release_date: '2024-02-14',
  revenue: 0,
  runtime: 116,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English'
    }
  ],
  status: 'Released',
  tagline: '',
  title: 'Madame Web',
  video: false,
  vote_average: 5.563,
  vote_count: 40,
  images: {
    backdrops: [
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: null,
        file_path: '/uUiIGztTrfDhPdAFJpr6m4UBMAd.jpg',
        vote_average: 5.33,
        vote_count: 9,
        width: 1920
      },
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: null,
        file_path: '/rx6FXL5Pu2FQC3HrowNQrdqojnM.jpg',
        vote_average: 5.326,
        vote_count: 7,
        width: 1920
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/haCm6h324vysBmtXxSQ9twHasYJ.jpg',
        vote_average: 5.318,
        vote_count: 3,
        width: 2273
      },
      {
        aspect_ratio: 1.778,
        height: 2160,
        iso_639_1: null,
        file_path: '/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg',
        vote_average: 5.312,
        vote_count: 1,
        width: 3840
      },
      {
        aspect_ratio: 1.778,
        height: 2160,
        iso_639_1: null,
        file_path: '/dwl7raDGUHMaLlENxtE7h1qSH4h.jpg',
        vote_average: 5.276,
        vote_count: 12,
        width: 3840
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/2xBSjhAL7niE7BzvsifQ3BFZVBV.jpg',
        vote_average: 5.252,
        vote_count: 4,
        width: 2273
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/7paSYWVE9lLQ1Snb1CFONuk7Bg3.jpg',
        vote_average: 5.246,
        vote_count: 2,
        width: 2273
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/szJWzXfcDPazGoIhQxaqbGRkRnn.jpg',
        vote_average: 5.246,
        vote_count: 2,
        width: 2273
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/vrd1Vc1ESb7iqNoO08xouZHCYlD.jpg',
        vote_average: 5.246,
        vote_count: 2,
        width: 2273
      },
      {
        aspect_ratio: 1.777,
        height: 2004,
        iso_639_1: null,
        file_path: '/hmvo947roojktnWqEETXU7QYz25.jpg',
        vote_average: 5.246,
        vote_count: 2,
        width: 3562
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/elSS0sce0qzw51EjeOoGpcpXlpZ.jpg',
        vote_average: 5.238,
        vote_count: 0,
        width: 2273
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/fNgDAOftrtkKW0AE8h8T3h3wSJH.jpg',
        vote_average: 5.19,
        vote_count: 5,
        width: 2273
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/n0HYKmPL2ImAV47bxGUiaN8wPqc.jpg',
        vote_average: 5.18,
        vote_count: 3,
        width: 2273
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/cNxLAcKc9WjtP7l1wyFvSbjqGxj.jpg',
        vote_average: 0,
        vote_count: 0,
        width: 2273
      },
      {
        aspect_ratio: 1.779,
        height: 1278,
        iso_639_1: null,
        file_path: '/p9ndKwzjRQmGWj2nQ1GAj0YAJnH.jpg',
        vote_average: 0,
        vote_count: 0,
        width: 2273
      }
    ],
    logos: [],
    posters: [
      {
        aspect_ratio: 0.667,
        height: 3000,
        iso_639_1: null,
        file_path: '/mlWsRy9TwuVK7jAGetbIZ29FpDV.jpg',
        vote_average: 5.312,
        vote_count: 1,
        width: 2000
      },
      {
        aspect_ratio: 0.668,
        height: 2684,
        iso_639_1: null,
        file_path: '/223GfdxKkmfpSnbvJwcByvpMglt.jpg',
        vote_average: 5.246,
        vote_count: 2,
        width: 1794
      },
      {
        aspect_ratio: 0.667,
        height: 3000,
        iso_639_1: null,
        file_path: '/61X8XHKLBDzDmuNjKxF3kTqD3P9.jpg',
        vote_average: 0,
        vote_count: 0,
        width: 2000
      }
    ]
  },
  videos: {
    results: [
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Deben confiar en ella para sobrevivir',
        key: 'fHMT7374xjw',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-02-03T11:00:29.000Z',
        id: '65bf4b75fc65380163ea5c43'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Protagonizada por Dakota Johnson',
        key: 'YozsZcAV9RU',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-02-02T13:00:35.000Z',
        id: '65bf45f9ba480201616a76f4'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Deben confiar en ella',
        key: 'TfjTzGQd5ao',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-02-01T11:54:29.000Z',
        id: '65bc71d0e18b97017b9b30c7'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Su red los conecta a todos',
        key: 'kQS_bpgWd1U',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-02-01T11:00:42.000Z',
        id: '65bc71e311c066017bd1b82a'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Todo empieza con ella',
        key: 'KCHX5S3o4k0',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-31T11:00:15.000Z',
        id: '65bc71397646fd0184bf0ac7'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Con Dakota Johnson y Sydney Sweeney',
        key: '5_SfCg9rLuw',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-30T16:00:06.000Z',
        id: '65b986d733a376017b871f81'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Un mundo de cambios',
        key: '1sdngpnPPnE',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-30T11:00:01.000Z',
        id: '65b986e4f90b19017c055509'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Una nueva visión de Marvel',
        key: 'V51o99aupAA',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-29T16:51:44.000Z',
        id: '65b986f43344c601859263a6'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Su red los conecta todos',
        key: 'k2hK50wRHr4',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-29T13:00:43.000Z',
        id: '65b986fa33a376017b871f95'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Protagonizada por Dakota Johnson',
        key: 'NHAhCy-H_Bk',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-28T11:00:14.000Z',
        id: '65b987053344c601859263ae'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Mundo de cambios',
        key: 'yidbvU5fDbA',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-27T13:00:49.000Z',
        id: '65b9870d30f79c0162a99d00'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Una nueva visión de Marvel comienza',
        key: '0noXZ6t_ToA',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-26T15:00:02.000Z',
        id: '65b9874b30f79c0162a99d28'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: '¿Quién es Madame Web? [VOSE]',
        key: 'wQ2_tThXmQk',
        site: 'YouTube',
        size: 1080,
        type: 'Featurette',
        official: true,
        published_at: '2024-01-24T17:00:53.000Z',
        id: '65b9877a90fca30162067d8e'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Un mundo de cambios comienza con ella',
        key: 'XqMvhYFf2GA',
        site: 'YouTube',
        size: 1080,
        type: 'Teaser',
        official: true,
        published_at: '2024-01-24T14:00:33.000Z',
        id: '65b9878430f79c0183aa752a'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Genuinamente única [VOSE]',
        key: 'Le4Zimy382I',
        site: 'YouTube',
        size: 1080,
        type: 'Featurette',
        official: true,
        published_at: '2024-01-23T17:01:38.000Z',
        id: '65b0a949be6d880192439d90'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'El futuro está en su red [VOSE]',
        key: '-fM7Bq9sP1o',
        site: 'YouTube',
        size: 1080,
        type: 'Featurette',
        official: true,
        published_at: '2023-11-15T16:00:10.000Z',
        id: '655509f867b61345ccaec2d2'
      },
      {
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Tráiler oficial en español',
        key: 'plv6ppDBGCk',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: true,
        published_at: '2023-11-15T14:12:42.000Z',
        id: '65550a1ab540020138434d57'
      }
    ]
  },
  keywords: {
    keywords: [
      {
        id: 242,
        name: 'new york city'
      },
      {
        id: 9715,
        name: 'superhero'
      },
      {
        id: 3986,
        name: 'spider'
      },
      {
        id: 9717,
        name: 'based on comic'
      },
      {
        id: 33637,
        name: 'super power'
      },
      {
        id: 41603,
        name: 'paramedic'
      },
      {
        id: 168346,
        name: 'manhattan, new york city'
      },
      {
        id: 170620,
        name: 'clairvoyant'
      },
      {
        id: 241823,
        name: 'web'
      },
      {
        id: 242214,
        name: 'origin story'
      },
      {
        id: 252104,
        name: '2000s'
      },
      {
        id: 267111,
        name: 'vision of the future'
      },
      {
        id: 272493,
        name: 'female superhero'
      }
    ]
  },
  lists: {
    page: 1,
    results: [
      {
        description: '',
        favorite_count: 0,
        id: 8281476,
        item_count: 55,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        list_type: 'movie',
        name: 'Vistas en 2024',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 102682,
        item_count: 322,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        list_type: 'movie',
        name: 'Online Peliculas',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8285029,
        item_count: 17,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        list_type: 'movie',
        name: 'Sony Spiderverse',
        poster_path: null
      }
    ],
    total_pages: 1,
    total_results: 3
  },
  recommendations: {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/wdwcOBMkt3zmPQuEMxB3FUtMio2.jpg',
        id: 271110,
        title: 'Capitán América: Civil War',
        original_language: 'en',
        original_title: 'Captain America: Civil War',
        overview: 'Continúa la historia de “Avengers: Age of Ultron”, con Steve Rogers liderando un nuevo equipo de Vengadores en su esfuerzo por proteger a la humanidad. Tras otro incidente internacional relacionado con los Vengadores que ocasiona daños colaterales, la presión política fuerza a crear un sistema de registro y un cuerpo gubernamental para determinar cuándo se requiere los servicios del equipo. El nuevo status quo divide a los Vengadores mientras intentan salvar al mundo de un nuevo y perverso villano.',
        poster_path: '/g6UTwUVFYWI8VPWo5GylnbZVhin.jpg',
        media_type: 'movie',
        genre_ids: [
          12,
          28,
          878
        ],
        popularity: 80.386,
        release_date: '2016-04-27',
        video: false,
        vote_average: 7.4,
        vote_count: 21907
      },
      {
        adult: false,
        backdrop_path: '/jHxCeXnSchAuwHnmVatTgqMYdX8.jpg',
        id: 557,
        title: 'Spider-Man',
        original_language: 'en',
        original_title: 'Spider-Man',
        overview: 'Peter Parker es un joven y tímido estudiante que vive con su tía May y su tío Ben desde la muerte de sus padres. Un día es mordido por una araña que ha sido modificada genéticamente, descubriendo al día siguiente que posee unos poderes poco habituales: tiene la fuerza y agilidad de una araña.',
        poster_path: '/2ufIbl01RhJ9QkSUxD0UjDakxvk.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          878
        ],
        popularity: 85.77,
        release_date: '2002-05-01',
        video: false,
        vote_average: 7.29,
        vote_count: 18111
      },
      {
        adult: false,
        backdrop_path: '/ko4N6wWp0UYlMmsVyfIfLyRAZtP.jpg',
        id: 118340,
        title: 'Guardianes de la galaxia',
        original_language: 'en',
        original_title: 'Guardians of the Galaxy',
        overview: 'El temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuarteto de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia.',
        poster_path: '/rzEmtM8qrvRKNdJUUiizdNHTccV.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          878,
          12
        ],
        popularity: 32.038,
        release_date: '2014-07-30',
        video: false,
        vote_average: 7.907,
        vote_count: 27125
      },
      {
        adult: false,
        backdrop_path: '/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg',
        id: 19995,
        title: 'Avatar',
        original_language: 'en',
        original_title: 'Avatar',
        overview: 'Año 2154. Jake Sully, un exmarine en silla de ruedas, es enviado al planeta Pandora, donde se ha creado el programa Avatar, gracias al cual los seres humanos pueden controlar de forma remota un cuerpo biológico con apariencia y genética de la especie nativa. Pronto se encontrará con la encrucijada entre seguir las órdenes de sus superiores o defender al mundo que le ha acogido y siente como suyo.',
        poster_path: '/tXmTHdrZgNsULqCbThK2Dt2X9Wt.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          14,
          878
        ],
        popularity: 94.693,
        release_date: '2009-12-15',
        video: false,
        vote_average: 7.579,
        vote_count: 30462
      },
      {
        adult: false,
        backdrop_path: '/cyecB7godJ6kNHGONFjUyVN9OX5.jpg',
        id: 1726,
        title: 'Iron Man',
        original_language: 'en',
        original_title: 'Iron Man',
        overview: "El multimillonario fabricante de armas Tony Stark debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en 'El hombre de hierro' para combatir el mal a escala global.",
        poster_path: '/tFCTNx7foAsUQpgu2x1KjAJD1wT.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          878,
          12
        ],
        popularity: 100.268,
        release_date: '2008-04-30',
        video: false,
        vote_average: 7.642,
        vote_count: 25401
      },
      {
        adult: false,
        backdrop_path: '/ziC23LkMYj8gToQQYQGWSGJCLNF.jpg',
        id: 82690,
        title: '¡Rompe Ralph!',
        original_language: 'en',
        original_title: 'Wreck-It Ralph',
        overview: 'Durante décadas, Ralph ha vivido a la sombra de Repara-Félix Jr., el chico bueno de su videojuego. Cansado de ser el malo de la historia, Ralph decide tomar el asunto por sus propias y gigantes manos, y se lanza en un viaje a través de los distintos mundos y generaciones de videojuegos para demostrarle al mundo que él también puede ser un héroe.',
        poster_path: '/lTpE4JQ2C09NicqvDhwi70IRz62.jpg',
        media_type: 'movie',
        genre_ids: [
          10751,
          16,
          35,
          12
        ],
        popularity: 57.816,
        release_date: '2012-11-01',
        video: false,
        vote_average: 7.3,
        vote_count: 11790
      },
      {
        adult: false,
        backdrop_path: '/npDrIM6ZbuD7nUxI7ZzNBxs4IRF.jpg',
        id: 54138,
        title: 'Star Trek: En la oscuridad',
        original_language: 'en',
        original_title: 'Star Trek Into Darkness',
        overview: 'Cuando a la tripulación de la nave Enterprise le ordenan que regrese a casa, en la Tierra se enfrentan a una terrorífica fuerza que, aparentemente desde dentro, ha perpetrado un ataque a la cúpula de la Federación y todo lo que ésta representa, sumiendo a la flota en una profunda crisis. Para intentar solucionar el problema, y con un asunto personal que resolver, el capitán Kirk encabeza una incursión a un planeta en guerra, para capturar a un hombre que es un arma de destrucción masiva. A medida que nuestros héroes se van sumergiendo en una épica partida de ajedrez a vida o muerte, la lealtad se verá puesta a prueba, las amistades se romperán, y habrá que hacer ciertos sacrificios por la única familia que le queda a Kirk: su tripulación.',
        poster_path: '/7ncnBVignnCQ4vFNxiSLWDpFUcs.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878
        ],
        popularity: 33.292,
        release_date: '2013-05-05',
        video: false,
        vote_average: 7.328,
        vote_count: 8766
      },
      {
        adult: false,
        backdrop_path: '/m4F1KRK5jAoQHi2mKDFE2jFKEIb.jpg',
        id: 188927,
        title: 'Star Trek: Más allá',
        original_language: 'en',
        original_title: 'Star Trek Beyond',
        overview: 'El USS Enterprise, la nave insignia de la Flota Estelar, liderada por el capitán James T. Kirk, vuelve a surcar el universo, para proteger la Tierra y el resto de planetas aliados. Pero la tranquilidad durará poco y el peligro acecha. La primera etapa de su misión les llevará a un territorio desconocido, y su travesía pronto se convertirá en una carrera por la supervivencia, cuando se enfrenten a un nuevo y fiero enemigo, Krall, de una especie alienígena avanzada. A la vez que intentan encontrar el modo de volver a la Tierra, su objetivo será proteger el futuro de la raza humana y preservar la armonía entre especies...',
        poster_path: '/2yfbpstJY4Fan8DSfPFDl05jx9.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878
        ],
        popularity: 37.539,
        release_date: '2016-07-07',
        video: false,
        vote_average: 6.782,
        vote_count: 6356
      },
      {
        adult: false,
        backdrop_path: '/sAoUJAJtPqBLUcNNQHaVOjJ62oD.jpg',
        id: 166426,
        title: 'Piratas del Caribe: La venganza de Salazar',
        original_language: 'en',
        original_title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
        overview: 'El capitán Jack Sparrow se enfrentará a un grupo de piratas-fantasma comandados por una de sus viejas némesis, el terrorífico capitán Salazar, recién escapado del Triángulo de las Bermudas. La única posibilidad de Sparrow para salir con vida es encontrar el legendario Tridente de Poseidón, un poderoso artefacto que le da a su poseedor el control de los mares.',
        poster_path: '/AookkwjZfWdigGtaEwy5IfOnBku.jpg',
        media_type: 'movie',
        genre_ids: [
          12,
          28,
          14
        ],
        popularity: 83.59,
        release_date: '2017-05-23',
        video: false,
        vote_average: 6.649,
        vote_count: 11429
      },
      {
        adult: false,
        backdrop_path: '/6YwkGolwdOMNpbTOmLjoehlVWs5.jpg',
        id: 99861,
        title: 'Vengadores: La Era de Ultrón',
        original_language: 'en',
        original_title: 'Avengers: Age of Ultron',
        overview: 'Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz, las cosas empiezan a torcerse y los héroes más poderosos de la Tierra, incluyendo a Iron Man, Capitán América, Thor, El Increíble Hulk, Viuda Negra y Ojo de Halcón, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el villano Ultron emerge, le corresponderá a Los Vengadores detener sus terribles planes, que junto a incómodas alianzas llevarán a una inesperada acción que allanará el camino para una épica y única aventura.',
        poster_path: '/3Lz6h5rlCFNNyCZRaRJ2ZjtBnAE.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878
        ],
        popularity: 90.658,
        release_date: '2015-04-22',
        video: false,
        vote_average: 7.273,
        vote_count: 22170
      },
      {
        adult: false,
        backdrop_path: '/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg',
        id: 10195,
        title: 'Thor',
        original_language: 'en',
        original_title: 'Thor',
        overview: 'Thor es un arrogante y codicioso guerrero cuya imprudencia desata una antigua guerra. Por ese motivo, su padre Odín lo castiga desterrándolo a la Tierra para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Cuando el villano más peligroso de su mundo envía a la Tierra a las fuerzas más oscuras de Asgard, Thor se dará cuenta de lo que realmente hace falta para ser un verdadero héroe.',
        poster_path: '/qFAVW4XJaxhj7PcpiUI5hhO9bOX.jpg',
        media_type: 'movie',
        genre_ids: [
          12,
          14,
          28
        ],
        popularity: 68.771,
        release_date: '2011-04-21',
        video: false,
        vote_average: 6.766,
        vote_count: 20390
      },
      {
        adult: false,
        backdrop_path: '/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg',
        id: 1771,
        title: 'Capitán América: El primer vengador',
        original_language: 'en',
        original_title: 'Captain America: The First Avenger',
        overview: 'Nacido durante la Gran Depresión, Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez. Enternecido por sus súplicas, el general Chester Phillips le ofrece la oportunidad de tomar parte en un experimento especial: la Operación Renacimiento. Tras meses de preparación y entrenamiento recibe su primera misión como Capitán América. Armado con un escudo indestructible y su inteligencia para la batalla, el Capitán América emprende la guerra contra el mal, como centinela de la libertad y como líder de los Vengadores.',
        poster_path: '/82ucHZ4ioVGiweT1XMl1mUZaodq.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878
        ],
        popularity: 43.123,
        release_date: '2011-07-22',
        video: false,
        vote_average: 6.997,
        vote_count: 20667
      },
      {
        adult: false,
        backdrop_path: '/fctQU5MoXgJ5pNMljFzlEFXwfSu.jpg',
        id: 127585,
        title: 'X-Men: Días del futuro pasado',
        original_language: 'en',
        original_title: 'X-Men: Days of Future Past',
        overview: 'Ambientada en la década de los 70, los miembros de la famosa Patrulla X tendrán que evitar un futuro apocalíptico en el que los mutantes luchan por sobrevivir en campos de concentración controlados por los temibles Centinelas. Para ello, los héroes del universo Marvel deberán unificar sus fuerzas dejando a un lado la creciente enemistad de los bandos liderados por Charles Xavier y Magneto. Trask Industries, la empresa encargada de crear a estos gigantescos cazamutantes, será el origen de todos sus problemas. Tan sólo viajando en el tiempo podrán impedir la masacre que se avecina. ¿Serán capaces nuestros héroes de derrocar a la multinacional y evitar así el exterminio de su especie?',
        poster_path: '/ggb9nmS5alJuA0ll0iU5YHiGbb0.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878
        ],
        popularity: 73.397,
        release_date: '2014-05-15',
        video: false,
        vote_average: 7.524,
        vote_count: 14684
      },
      {
        adult: false,
        backdrop_path: '/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg',
        id: 140607,
        title: 'Star Wars: El despertar de la fuerza',
        original_language: 'en',
        original_title: 'Star Wars: The Force Awakens',
        overview: 'Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte (hechos narrados en el Episodio VI: El retorno del Jedi), la galaxia está todavía en guerra. Una nueva República se ha constituido, pero una siniestra organización, la Primera Orden, ha resurgido de las cenizas del Imperio Galáctico. A los héroes de antaño, que luchan ahora en la Resistencia, se suman nuevos héroes: Poe Dameron, un piloto de caza, Finn, un desertor de la Primera Orden, Rey, una joven chatarrera, y BB-8, un androide rodante. Todos ellos luchan contra las fuerzas del Mal: el Capitán Phasma, de la Primera Orden, y Kylo Ren, un temible y misterioso personaje que empuña un sable de luz roja.',
        poster_path: '/vI86GLIkT5pP3ZfNs2EvmTrBLBm.jpg',
        media_type: 'movie',
        genre_ids: [
          12,
          28,
          878
        ],
        popularity: 54.329,
        release_date: '2015-12-15',
        video: false,
        vote_average: 7.285,
        vote_count: 18697
      },
      {
        adult: false,
        backdrop_path: '/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg',
        id: 315635,
        title: 'Spider-Man. Homecoming',
        original_language: 'en',
        original_title: 'Spider-Man: Homecoming',
        overview: 'Peter Parker comienza a experimentar su recién descubierta identidad como el superhéroe Spider-Man. Después de la experiencia vivida con los Vengadores, Peter regresa a casa, donde vive con su tía. Bajo la atenta mirada de su mentor Tony Stark, Peter intenta mantener una vida normal como cualquier joven de su edad, pero interrumpe en su rutina diaria el nuevo villano Vulture y, con él, lo más importante de la vida de Peter comenzará a verse amenazado.',
        poster_path: '/yJfPC6pjSJ5VOsVyXhx5PXBe0mR.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878,
          18
        ],
        popularity: 77.37,
        release_date: '2017-07-05',
        video: false,
        vote_average: 7.3,
        vote_count: 20927
      },
      {
        adult: false,
        backdrop_path: '/1RWLMyC9KcFfcaoViMiJGSSZzzr.jpg',
        id: 100402,
        title: 'Capitán América: El soldado de invierno',
        original_language: 'en',
        original_title: 'Captain America: The Winter Soldier',
        overview: 'Capitán América, Viuda Negra y un nuevo aliado, Falcon, se enfrentan a un enemigo inesperado mientras intentan sacar a la luz una conspiración que pone en riesgo al mundo.',
        poster_path: '/3Zv12uAqBxj4xAdeHeVySEQzY1o.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878
        ],
        popularity: 31.948,
        release_date: '2014-03-20',
        video: false,
        vote_average: 7.7,
        vote_count: 18053
      },
      {
        adult: false,
        backdrop_path: '/2nyaeISu2xIxIgZYNpX4UayY8PN.jpg',
        id: 141052,
        title: 'Liga de la Justicia',
        original_language: 'en',
        original_title: 'Justice League',
        overview: 'Motivado por la fe que había recuperado en la humanidad e inspirado por la acción altruista de Superman, Bruce Wayne recluta la ayuda de su nueva aliada, Diana Prince, para enfrentarse a un enemigo aún mayor. Juntos, Batman y Wonder Woman se mueven rápidamente para intentar encontrar y reclutar un equipo de metahumanos que combata esta nueva amenaza. El problema es que a pesar de la formación de esta liga de héroes sin precedentes (Batman, Wonder Woman, Aquaman, Cyborg y Flash) puede que sea demasiado tarde para salvar el planeta de una amenaza de proporciones catastróficas.',
        poster_path: '/wUWqnavD8iGZ5F4xXhWlrtEzKjV.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878
        ],
        popularity: 85.317,
        release_date: '2017-11-15',
        video: false,
        vote_average: 6.093,
        vote_count: 12486
      },
      {
        adult: false,
        backdrop_path: '/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg',
        id: 351286,
        title: 'Jurassic World: El reino caído',
        original_language: 'en',
        original_title: 'Jurassic World: Fallen Kingdom',
        overview: 'Tras cuatro años de abandono del complejo turístico Jurassic World, la isla Nublar sólo está habitada por los dinosaurios supervivientes. Cuando el volcán inactivo de la isla comienza a cobrar vida, Owen y Claire montan una campaña para rescatar a los dinosaurios restantes en la isla.',
        poster_path: '/yHa2I7qxZvZUASLHrIR8vQLmZ4B.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          878,
          53
        ],
        popularity: 64.187,
        release_date: '2018-06-06',
        video: false,
        vote_average: 6.548,
        vote_count: 11293
      },
      {
        adult: false,
        backdrop_path: '/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
        id: 299536,
        title: 'Vengadores: Infinity War',
        original_language: 'en',
        original_title: 'Avengers: Infinity War',
        overview: 'El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?',
        poster_path: '/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg',
        media_type: 'movie',
        genre_ids: [
          12,
          28,
          878
        ],
        popularity: 171.197,
        release_date: '2018-04-25',
        video: false,
        vote_average: 8.251,
        vote_count: 28443
      },
      {
        adult: false,
        backdrop_path: '/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg',
        id: 297802,
        title: 'Aquaman',
        original_language: 'en',
        original_title: 'Aquaman',
        overview: 'Arthur Curry, también conocido como Aquaman (Jason Momoa), es un habitante de un poderoso reino subacuático que recibe el nombre de la Atlántida. En esta película repleta de acción, aventura, e incluso partes de terror, conoceremos sus orígenes, desde que era un niño criado por un hombre humano y considerado un paria por los suyos, hasta que crece y debe hacer frente a los problemas que han aparecido en su mundo. Entonces, este hombre mitad humano y mitad atlante, emprenderá el viaje de su vida, en el que tendrá que descubrir quién es realmente y si es digno de ser un rey. Acompañado de Mera (Amber Heard), hará frente a este y otros retos, mientras le planta cara a Black Manta (Yahya Abdul-Mateen II) y a su propio hermanastro Orm (Patrick Wilson). ¿Será capaz de dirigir a su pueblo y convertirse en un héroe para el mundo?',
        poster_path: '/hY2TaCAp5LDMB8l4757N7PjnedI.jpg',
        media_type: 'movie',
        genre_ids: [
          28,
          12,
          14
        ],
        popularity: 151.629,
        release_date: '2018-12-07',
        video: false,
        vote_average: 6.902,
        vote_count: 13445
      },
      {
        adult: false,
        backdrop_path: '/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg',
        id: 10138,
        title: 'Iron Man 2',
        original_language: 'en',
        original_title: 'Iron Man 2',
        overview: 'El mundo sabe que el multimillonario Tony Stark es Iron Man, el superhéroe enmascarado. Sometido a presiones por parte del gobierno, la prensa y la opinión pública para que comparta su tecnología con el ejército, Tony es reacio a desvelar los secretos de la armadura de Iron Man porque teme que esa información pueda caer en manos indeseables.',
        poster_path: '/ayyJVOV5I4MGjti7nIHC3mVCagR.jpg',
        media_type: 'movie',
        genre_ids: [
          12,
          28,
          878
        ],
        popularity: 96.006,
        release_date: '2010-04-28',
        video: false,
        vote_average: 6.838,
        vote_count: 20169
      }
    ],
    total_pages: 2,
    total_results: 40
  },
  reviews: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  },
  'watch/providers': {
    results: {}
  },
  release_dates: {
    results: [
      {
        iso_3166_1: 'AR',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'AU',
        release_dates: [
          {
            certification: 'M',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'BE',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'BG',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-16T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'BR',
        release_dates: [
          {
            certification: '14',
            descriptors: [
              'Violence'
            ],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'CA',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'CL',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'CN',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-03-01T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'CZ',
        release_dates: [
          {
            certification: '12+',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'DE',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'DK',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'EC',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'EE',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-23T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'ES',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'FI',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'FR',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'GB',
        release_dates: [
          {
            certification: '12A',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'HK',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'HR',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'HU',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'ID',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'IE',
        release_dates: [
          {
            certification: '12A',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-16T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'IL',
        release_dates: [
          {
            certification: 'All',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'IN',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: 'hi',
            note: '',
            release_date: '2024-02-16T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'IS',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'IT',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'JP',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-23T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'KR',
        release_dates: [
          {
            certification: '12',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-03-13T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'LT',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-23T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'MA',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'MX',
        release_dates: [
          {
            certification: 'B',
            descriptors: [],
            iso_639_1: 'es',
            note: '',
            release_date: '2024-04-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'MY',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'NL',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'NO',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'NZ',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'PA',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'PL',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-16T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'PT',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'RO',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'RS',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'RU',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'SE',
        release_dates: [
          {
            certification: '11',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'SG',
        release_dates: [
          {
            certification: 'PG13',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'SI',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'SK',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'TH',
        release_dates: [
          {
            certification: 'G',
            descriptors: [],
            iso_639_1: 'th',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'TR',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-16T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'TW',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'UA',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'US',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: 'Los Angeles, California',
            release_date: '2024-02-12T00:00:00.000Z',
            type: 1
          },
          {
            certification: 'PG-13',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'VE',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-15T00:00:00.000Z',
            type: 3
          },
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      },
      {
        iso_3166_1: 'ZA',
        release_dates: [
          {
            certification: '',
            descriptors: [],
            iso_639_1: '',
            note: '',
            release_date: '2024-02-14T00:00:00.000Z',
            type: 3
          }
        ]
      }
    ]
  },
  external_ids: {
    imdb_id: 'tt11057302',
    wikidata_id: 'Q111677117',
    facebook_id: 'madameweb',
    instagram_id: 'madameweb',
    twitter_id: 'MadameWeb'
  }
}

const collection = {
  id: 284433,
  name: 'Guardianes de la galaxia - Colección',
  overview: '"Guardianes de la galaxia" es una película de superhéroes estadounidense de 2014 basada en el equipo de superhéroes del comics homónimo de Marvel, producido por Marvel Studios y distribuido por Walt Disney Studios Motion Pictures. Es la décima película en el Universo Cineamatográfico de Marvel. La película fue dirigida por James Gunn, quien escribió el guión con Nicole Perlman, y cuenta con un elenco formado por Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper, Lee Pace, Michael Rooker, Karen Gillan, Djimon Hounsou, John C. Reilly, Glenn Close y Benicio del Toro. En el 2017 se estreno la segunda película, titulada Guardianes de la galaxia Vol.2 y esta programado completar la trilogía en el 2023 con  Guardianes de la galaxia Vol. 3.',
  poster_path: '/4KvfCk1haG5gSJhc2CwrizP2cV4.jpg',
  backdrop_path: '/jdyyjulTBU8YUYAUvQFj6U1g2Pj.jpg',
  parts: [
    {
      adult: false,
      backdrop_path: '/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg',
      id: 118340,
      title: 'Guardianes de la galaxia',
      original_language: 'en',
      original_title: 'Guardians of the Galaxy',
      overview: 'El temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuarteto de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia.',
      poster_path: '/rzEmtM8qrvRKNdJUUiizdNHTccV.jpg',
      media_type: 'movie',
      genre_ids: [
        28,
        878,
        12
      ],
      popularity: 63.366,
      release_date: '2014-07-30',
      video: false,
      vote_average: 7.9,
      vote_count: 27172
    },
    {
      adult: false,
      backdrop_path: '/n3gb8oqP9BeRCUsCmZVaT5eltPH.jpg',
      id: 283995,
      title: 'Guardianes de la galaxia Vol. 2',
      original_language: 'en',
      original_title: 'Guardians of the Galaxy Vol. 2',
      overview: 'Continúan las aventuras del equipo en su travesía por los confines del cosmos. Los Guardianes deberán luchar para mantener unida a su nueva familia mientras intentan resolver el misterio de los verdaderos orígenes de Peter Quill. Viejos rivales se convertirán en nuevos aliados, y queridos personajes de los cómics clásicos acudirán en ayuda de nuestros héroes a medida que el universo cinematográfico de Marvel continúa expandiéndose.',
      poster_path: '/kdg6Y06jfq9FV7qknWNcKLYtBJn.jpg',
      media_type: 'movie',
      genre_ids: [
        878,
        12,
        28
      ],
      popularity: 72.91,
      release_date: '2017-04-19',
      video: false,
      vote_average: 7.6,
      vote_count: 20818
    },
    {
      adult: false,
      backdrop_path: '/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
      id: 447365,
      title: 'Guardianes de la Galaxia: Volumen 3',
      original_language: 'en',
      original_title: 'Guardians of the Galaxy Vol. 3',
      overview: 'La querida banda de los Guardianes se instala en Knowhere. Pero sus vidas no tardan en verse alteradas por los ecos del turbulento pasado de Rocket. Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en una peligrosa misión para salvar la vida de Rocket, una misión que, si no se completa con éxito, podría muy posiblemente conducir al final de los Guardianes tal y como los conocemos.',
      poster_path: '/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg',
      media_type: 'movie',
      genre_ids: [
        878,
        12,
        28
      ],
      popularity: 168.629,
      release_date: '2023-05-03',
      video: false,
      vote_average: 8,
      vote_count: 5966
    }
  ]
}

const person = {
  adult: false,
  also_known_as: [
    'Emily Jean Stone',
    'Emily Stone',
    'Riley Stone ',
    'เอมมา สโตน',
    '艾瑪·史東',
    'エマ・ストーン',
    '엠마 스톤',
    'إيما ستون',
    'Έμμα Στόουν',
    'Έμιλι Τζιν Στόουν',
    '艾玛·斯通',
    'Эмма Стоун',
    'اما استون',
    'Емма Стоун',
    'אמה סטון'
  ],
  biography: 'Emily Jean «Emma» Stone (Scottsdale, Arizona, 6 de noviembre de 1988) es una actriz y cantante estadounidense. Ha recibido numerosos premios, entre ellos: un Óscar, un BAFTA, un SAG y un Globo de Oro, a mejor actriz, por su interpretación en la cinta La La Land. Adicionalmente ha ganado la Copa Volpi. Además es considerada como una de las mejores actrices de su generación.\n\nComenzó su carrera apareciendo en obras teatrales en el Valley Youth Theatre de Phoenix como Las aventuras de Alicia en el país de las maravillas y Joseph and the Amazing Technicolor Dreamcoat, y debutó en televisión en The New Partridge Family (2005), sin embargo, solo se produjo un episodio piloto.​ Su primer papel en cine se dio en la comedia de Greg Mottola Superbad (2007), junto a Michael Cera y Jonah Hill.​ Obtuvo reconocimiento por sus trabajos posteriores en producciones como easy A (2010) y The Help (2011) en las cuales fue protagonista y que determinaron excelentes críticas para la actriz.\n\nCon The Amazing Spider-Man en 2012, —junto a Andrew Garfield— la actriz alcanzó la fama mundial, al convertirse en su película más taquillera.​ Mientras que con la siguiente entrega del filme titulado The Amazing Spider-Man 2: Rise of Electro en 2014, recibió buenas críticas por parte de los especialistas. Luego con Birdman al lado de Michael Keaton, significó una de sus mejores interpretaciones en toda su carrera,​ y por la cual obtuvo su primera nominación a los Óscar, como actriz de reparto,​ Sin embargo es con La La Land junto a Ryan Gosling, con la cual alcanzó la aclamación mundial, ganando diversos premios y recibió elogios de los críticos.\n\nAdemás de su vocación como actriz, también ha incursionado en la escena musical, al protagonizar la obra teatral Cabaret como Sally Bowles.​ Incluso ha participado en las bandas sonoras de algunas películas en donde ha aparecido, como la de La La Land, donde interpretó seis temas.',
  birthday: '1988-11-06',
  deathday: null,
  gender: 1,
  homepage: null,
  id: 54693,
  imdb_id: 'nm1297015',
  known_for_department: 'Acting',
  name: 'Emma Stone',
  place_of_birth: 'Scottsdale, Arizona, USA',
  popularity: 140.866,
  profile_path: '/eWjkPYeXxPhE2F9J3Ui6E9OWVXy.jpg',
  external_ids: {
    freebase_mid: '/m/09yhzs',
    freebase_id: '/en/emily_stone',
    imdb_id: 'nm1297015',
    tvrage_id: 47669,
    wikidata_id: 'Q147077',
    facebook_id: '',
    instagram_id: '',
    tiktok_id: null,
    twitter_id: '',
    youtube_id: null
  },
  combined_credits: {
    cast: [
      {
        adult: false,
        backdrop_path: '/7RKUNTLzTaQSA8XgDasl0BjKWqS.jpg',
        genre_ids: [
          35
        ],
        id: 37735,
        original_language: 'en',
        original_title: 'Easy A',
        overview: 'El guión, obra del dramaturgo Bert V. Royal, es una versión moderna y en clave estudiantil de “La letra escarlata”, la novela de Nathaniel Hawthorne. Narra la historia de una joven que decide fingir que lleva una vida promiscua, creyendo que así obtendrá algún tipo de beneficio. Sin embargo, las circunstancias se volverán en su contra.',
        popularity: 33.813,
        poster_path: '/vSK2jgl4Xg0wNi6OyVjBLVv70Mq.jpg',
        release_date: '2010-09-16',
        title: 'Rumores y mentiras',
        video: false,
        vote_average: 6.811,
        vote_count: 6635,
        character: 'Olive Penderghast',
        credit_id: '52fe466a9251416c91053ba9',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/wyvUmyzqGOBDyqLHRSukGDjI7bH.jpg',
        genre_ids: [
          18
        ],
        id: 50014,
        original_language: 'en',
        original_title: 'The Help',
        overview: 'Mississippi, años 60. Skeeter es una joven sureña que regresa de la universidad decidida a convertirse en escritora. Su llegada altera la vida de la ciudad e incluso la de sus amigos porque se ha propuesto entrevistar a las mujeres negras que se han pasado la vida al servicio de las grandes familias sufriendo todas las formas de discriminación racial.',
        popularity: 78.794,
        poster_path: '/7V5sfN6fNNXvDdr9BPIIIOtPWOp.jpg',
        release_date: '2011-08-09',
        title: 'Criadas y señoras',
        video: false,
        vote_average: 8.203,
        vote_count: 7781,
        character: 'Eugenia "Skeeter" Phelan',
        credit_id: '52fe47b5c3a36847f814403f',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/kjTGuAeMsTTRxiHFSzj2T1zyUwH.jpg',
        genre_ids: [
          35
        ],
        id: 87818,
        original_language: 'en',
        original_title: 'Movie 43',
        overview: 'Serie de sketches cómicos que cuentan 14 disparatadas historias, dirigidas entre otros por los Hermanos Farrelly y con un reparto coral espectacular, todas conectadas entre sí y cada cual más hilarante que la anterior. Desde cómo fracasa una cita de dos jóvenes cuando la chica se convierte en “mujer” hasta la cita rápida de un superhéroe.',
        popularity: 35.918,
        poster_path: '/rWvr31yNd9VZ1VVk6sd3iWw8mua.jpg',
        release_date: '2013-01-24',
        title: 'Movie 43',
        video: false,
        vote_average: 4.582,
        vote_count: 2201,
        character: 'Veronica (segment "Veronica")',
        credit_id: '52fe49d79251416c910ba9a9',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/wCHJuJwEfOrrykgDas8T4m79Bzs.jpg',
        genre_ids: [
          18,
          35,
          36
        ],
        id: 369192,
        original_language: 'en',
        original_title: 'Battle of the Sexes',
        overview: "Crónica de la rivalidad existente entre el extenista profesional, de 55 años, Bobby Riggs, y su oponente de 29 años de edad, la carismática tenista Billie Jean King, quienes se enfrentaron en un partido legendario en 1973. Entonces se quería conocer si una tenista profesional podía realmente vencer a un hombre (aunque éste ya se hubiese retirado de las pistas). El evento atrajo a más de 50 millones de estadounidenses y que se publicitó como 'La batalla de sexos'.",
        popularity: 16.852,
        poster_path: '/sixfgP0CaPT9GhUMZCyPkVVFp9R.jpg',
        release_date: '2017-09-22',
        title: 'La batalla de los sexos',
        video: false,
        vote_average: 6.771,
        vote_count: 1781,
        character: 'Billie Jean King',
        credit_id: '564d54b09251416de3005a66',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/kmuSGNlF9mfNHIDOEVEWPj6f3Ak.jpg',
        genre_ids: [
          35,
          80
        ],
        id: 337404,
        original_language: 'en',
        original_title: 'Cruella',
        overview: 'Ambientada en el Londres de los años 70, en plena revolución del punk rock, muestra a una joven estafadora llamada Estella, una chica inteligente y creativa, decidida a convertirse en una exitosa diseñadora de moda, que se asocia con un par de ladrones para sobrevivir en las calles de la capital británica. Pero cuando su talento para la moda llama la atención de la legendaria diseñadora, la Baronesa von Hellman, Estella cambia el rumbo de su vida hasta que una serie de acontecimientos y revelaciones que harán que Estella asuma su lado malvado y se convierta en la estridente, moderna y vengativa Cruella de Vil.',
        popularity: 99.234,
        poster_path: '/tNFBP5OTmKm7CTc5ptUwgmepd8G.jpg',
        release_date: '2021-05-26',
        title: 'Cruella',
        video: false,
        vote_average: 8,
        vote_count: 8836,
        character: 'Estella / Cruella',
        credit_id: '59a50d419251412f02004a64',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/dTBlaTqKYFrXX5BWKY96xKqiXs.jpg',
        genre_ids: [
          18,
          9648
        ],
        id: 747225,
        original_language: 'el',
        original_title: 'Βληχή',
        overview: '',
        popularity: 10.206,
        poster_path: '/svedmfoPt8JgdWOIA1vHQB0rNzG.jpg',
        release_date: '2022-05-06',
        title: 'Bleat (Vlihi)',
        video: false,
        vote_average: 5.8,
        vote_count: 3,
        character: 'Woman',
        credit_id: '60217c4f95c0af003e505428',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/lXkOMo50HEAmWVG1QecdPJ5vi6T.jpg',
        genre_ids: [
          16,
          35,
          10751
        ],
        id: 801876,
        original_language: 'en',
        original_title: "Dear Diary: World's First Pranks",
        overview: '',
        popularity: 3.699,
        poster_path: '/1zCHghX3Nmy55UerNxd8cFLNXzh.jpg',
        release_date: '2021-02-09',
        title: 'Querido diario: Las primeras bromas del mundo',
        video: false,
        vote_average: 5.7,
        vote_count: 10,
        character: 'Eep (voice)',
        credit_id: '60687da2d036b6003fb5831b',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          80,
          35
        ],
        id: 836454,
        original_language: 'en',
        original_title: 'Cruella 2',
        overview: "Secuela de la película de 2021 'Cruella'.",
        popularity: 14.297,
        poster_path: '/6aPwIABk9bhSxBcRQ9TUzKqdhBe.jpg',
        release_date: '',
        title: 'Cruella 2',
        video: false,
        vote_average: 0,
        vote_count: 0,
        character: 'Cruella de Vil',
        credit_id: '60babddaf5f1c5002a37311c',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          35
        ],
        id: 659809,
        original_language: 'en',
        original_title: 'iPhone Murder Apps',
        overview: '',
        popularity: 1.772,
        poster_path: '/wngwNEEOoWObkQnvZl78yaBEApR.jpg',
        release_date: '2010-07-28',
        title: 'iPhone Murder Apps',
        video: true,
        vote_average: 5,
        vote_count: 2,
        character: 'Herself',
        credit_id: '6216b9524284ea001ae5eaa0',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/mhqaXKEr1ONiHnaXvEAj7lSMEUQ.jpg',
        genre_ids: [
          878,
          10749,
          35
        ],
        id: 792307,
        original_language: 'en',
        original_title: 'Poor Things',
        overview: 'Bella Baxter es una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender. Hambrienta de la mundanidad que le falta, Bella se escapa con Duncan Wedderburn, un sofisticado y perverso abogado, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella se vuelve firme en su propósito de defender la igualdad y la liberación.',
        popularity: 858.647,
        poster_path: '/xbfzQ7Q7qmDUf50eZH8C57Ygx6n.jpg',
        release_date: '2023-12-07',
        title: 'Pobres criaturas',
        video: false,
        vote_average: 8.103,
        vote_count: 1434,
        character: 'Bella Baxter',
        credit_id: '62eb08b38566d2005a484669',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          18,
          35
        ],
        id: 1029955,
        original_language: 'en',
        original_title: 'Kinds of Kindness',
        overview: '',
        popularity: 4.217,
        poster_path: '/iJ28sPYuNTIkEjUw2ZFq7KrKJpv.jpg',
        release_date: '',
        title: 'Kinds of Kindness',
        video: false,
        vote_average: 0,
        vote_count: 0,
        character: '',
        credit_id: '6335dee0cca7de007cd8fd3e',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          35,
          9648,
          37,
          27
        ],
        id: 648878,
        original_language: 'en',
        original_title: 'Eddington',
        overview: 'La produccion comenzara en marzo 2024',
        popularity: 5.116,
        poster_path: null,
        release_date: '',
        title: 'Eddington',
        video: false,
        vote_average: 0,
        vote_count: 0,
        character: 'Lindsay',
        credit_id: '654aec3467b61300e5dc3cc8',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          99
        ],
        id: 1204430,
        original_language: 'en',
        original_title: 'The Making of Easy A',
        overview: '',
        popularity: 1.243,
        poster_path: '/vMukQ6mUAX6sbhCuFaWycP0wRI9.jpg',
        release_date: '2010-12-21',
        title: 'The Making of Easy A',
        video: true,
        vote_average: 4,
        vote_count: 1,
        character: 'Self',
        credit_id: '6551b4e80816c700e0174c2e',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          53,
          35,
          878
        ],
        id: 701387,
        original_language: 'en',
        original_title: 'Save the Green Planet',
        overview: '',
        popularity: 3.079,
        poster_path: '/xWchrQHWhLsuZ008IknWQgE6fsQ.jpg',
        release_date: '',
        title: 'Save the Green Planet',
        video: false,
        vote_average: 0,
        vote_count: 0,
        character: '',
        credit_id: '65d4e0d4bbe1dd017d5fccbf',
        order: 0,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/zQ9riDbqJ2i6pUbLEZDEMubfQMU.jpg',
        genre_ids: [
          35,
          18
        ],
        id: 39414,
        original_language: 'en',
        original_title: 'Paper Man',
        overview: 'Paper Man es una comedia dramática que nos habla de un escritor que pasa por una mala racha creativa. Cuenta con la ayuda de su amigo imaginario, un superhéroe de aspecto verdaderamente pintoresco. Su esposa, preocupada por él, le lleva hasta su casa en el campo para que, en medio de la naturaleza, pueda reencontrarse con la inspiración perdida.',
        popularity: 16.886,
        poster_path: '/BKaXYV4lujFxmzhwpLrMLGsYx6.jpg',
        release_date: '2009-06-15',
        title: 'Paper Man',
        video: false,
        vote_average: 6.284,
        vote_count: 310,
        character: 'Abby',
        credit_id: '52fe47179251416c91069c5f',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/bNgqt819qpHcszjCzLCG5y16ldF.jpg',
        genre_ids: [
          16,
          12,
          10751,
          14,
          35,
          28
        ],
        id: 49519,
        original_language: 'en',
        original_title: 'The Croods',
        overview: 'La película está ambientada en la prehistoria, donde Crug lidera a su familia más allá de la comodidad de su hogar después de que este sea destruido por un gran terremoto. Mientras intentan viajar por el desconocido y aterrador mundo, se encuentran con un nómada que cautiva a su clan, en especial a su hermana mayor, con su mente moderna.',
        popularity: 50.204,
        poster_path: '/3X3qtBTgKt5mCB30RJwbIjgjzdw.jpg',
        release_date: '2013-03-15',
        title: 'Los Croods',
        video: false,
        vote_average: 6.913,
        vote_count: 6781,
        character: 'Eep Crood (voice)',
        credit_id: '52fe4799c3a36847f813e4fb',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/hDvqcbZhq9ux0euxYxCP9N6m1Rh.jpg',
        genre_ids: [
          28,
          12,
          878
        ],
        id: 102382,
        original_language: 'en',
        original_title: 'The Amazing Spider-Man 2',
        overview: 'Peter Parker lleva una vida muy ocupada, compaginando su tiempo entre su papel como Spider-Man, acabando con los malos, y en el instituto con la persona a la que quiere, Gwen. Peter no ve el momento de graduarse. No ha olvidado la promesa que le hizo al padre de Gwen de protegerla, manteniéndose lejos de ella, pero es una promesa que simplemente no puede cumplir. Las cosas cambiarán para Peter cuando aparece un nuevo villano, Electro, y un viejo amigo, Harry Osborn, regresa, al tiempo que descubre nuevas pistas sobre su pasado.',
        popularity: 103.075,
        poster_path: '/pyxjizLYG86Bxl4mntCWaWXZAko.jpg',
        release_date: '2014-04-16',
        title: 'The Amazing Spider-Man 2: El poder de Electro',
        video: false,
        vote_average: 6.5,
        vote_count: 12673,
        character: 'Gwen Stacy',
        credit_id: '52fe4a07c3a36847f81b4777',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/sxskOU71CO8LaNX2LOtjYFUtKv7.jpg',
        genre_ids: [
          28,
          12,
          878
        ],
        id: 1930,
        original_language: 'en',
        original_title: 'The Amazing Spider-Man',
        overview: 'Un estudiante de secundaria que fue abandonado por sus padres cuando era niño, dejándolo a cargo de su tío Ben (Martin Sheen) y su tía May (Sally Field). Como la mayoría de los adolescentes de su edad, Peter trata de averiguar quién es y qué quiere llegar a ser. Peter también está encontrando su camino con su primer amor de secundaria, Gwen Stacy (Emma Stone), y juntos luchan por su amor con compromiso. Cuando Peter descubre un misterioso maletín que perteneció a su padre, comienza la búsqueda para entender la desaparición de sus padres, una búsqueda que le lleva directamente a Oscorp, el laboratorio del Dr Curt Connors (Rhys Ifans), ex-compañero de trabajo de su padre. Mientras Spider-Man se encuentra en plena colisión con el alter-ego de Connors, el Lagarto, Peter hará elecciones que alterarán sus opciones para usar sus poderes y darán forma a un destino héroico.',
        popularity: 89.972,
        poster_path: '/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg',
        release_date: '2012-06-23',
        title: 'The Amazing Spider-Man',
        video: false,
        vote_average: 6.7,
        vote_count: 16713,
        character: 'Gwen Stacy',
        credit_id: '531325e8c3a36829ef003f5b',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/eIOLmLhRQPC44u5YyyPVw6BNhFZ.jpg',
        genre_ids: [
          35,
          18,
          10749
        ],
        id: 229297,
        original_language: 'en',
        original_title: 'Magic in the Moonlight',
        overview: 'En la Francia de los años 20, durante la época dorada del jazz, un mago inglés está decidido a desenmascarar a una falsa médium. Esto desencadenará una serie de hechos mágicos que sacudirán la vida de ambos.',
        popularity: 30.078,
        poster_path: '/xBcwa6DlVVojiT2C76KM8YjfTVQ.jpg',
        release_date: '2014-07-25',
        title: 'Magia a la luz de la luna',
        video: false,
        vote_average: 6.5,
        vote_count: 2003,
        character: 'Sophie Baker',
        credit_id: '52fe4eea9251416c75166c8d',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/pDqwUJJSaHIv2sxyRYfmYBFeU9C.jpg',
        genre_ids: [
          18,
          35
        ],
        id: 194662,
        original_language: 'en',
        original_title: 'Birdman or (The Unexpected Virtue of Ignorance)',
        overview: 'Después de hacerse famoso interpretando a un célebre superhéroe, un actor trata de darle un nuevo rumbo a su vida, recuperando a su familia y preparándose para el estreno de una obra teatral en Broadway.',
        popularity: 49.702,
        poster_path: '/lJxWFRrQIOphpD3oPjD0J0d9JYY.jpg',
        release_date: '2014-10-17',
        title: 'Birdman o (la inesperada virtud de la ignorancia)',
        video: false,
        vote_average: 7.466,
        vote_count: 12390,
        character: 'Sam Thomson',
        credit_id: '52fe4cf29251416c9110564b',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/1Z9wc3ZJpYTmUAEYi5PXhxup6kp.jpg',
        genre_ids: [
          18,
          35,
          10749
        ],
        id: 222936,
        original_language: 'en',
        original_title: 'Aloha',
        overview: 'Un contratista en materia de defensa, Brian Gilcrest (Bradley Cooper), supervisa el lanzamiento de un satélite desde Hawai junto a una piloto de las Fuerzas Aéreas, Allison Ng (Emma Stone), por la que comienza a sentir algo. Además en la isla se reencontrará con el viejo amor de su vida, Tracy Woodside (Rachel McAdams), ahora casada y con dos hijos.',
        popularity: 22.045,
        poster_path: '/AmTchyxSeCWc24vZAYT37cSL1pa.jpg',
        release_date: '2015-05-29',
        title: 'Aloha',
        video: false,
        vote_average: 5.492,
        vote_count: 1939,
        character: 'Captain Allison Ng',
        credit_id: '54cd44f99251414755001d5f',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/igTAlETp0TI24SbZdQxt8EM1bcA.jpg',
        genre_ids: [
          18,
          35,
          80
        ],
        id: 282984,
        original_language: 'en',
        original_title: 'Irrational Man',
        overview: 'Abe Lucas, un profesor de filosofía en plena crisis existencial, le encuentra de nuevo sentido a la vida al enamorarse de una de sus alumnas. Al poco de llegar a la universidad de una pequeña ciudad, se relaciona con dos mujeres: Rita Richards, una solitaria profesora que busca que la rescate de su infeliz matrimonio; y Jill Pollard, su mejor estudiante y muy pronto su amiga más cercana. Jill está enamorada de su novio, pero encuentra tan irresistible la personalidad atormentada de Abe que, incluso cuando el profesor muestra claros síntomas de desequilibrio mental, su fascinación por él no hace más que crecer.',
        popularity: 21.865,
        poster_path: '/ipAqhEWRzEuD6aXlAWIvEEF1KUe.jpg',
        release_date: '2015-07-17',
        title: 'Irrational Man',
        video: false,
        vote_average: 6.534,
        vote_count: 2294,
        character: 'Jill',
        credit_id: '53ccb96ec3a368777a002227',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/ph5fElfh4U7O3jwhFljxz2LDp1l.jpg',
        genre_ids: [
          18,
          35,
          53
        ],
        id: 375262,
        original_language: 'en',
        original_title: 'The Favourite',
        overview: 'Principios del siglo XVIII. Inglaterra está en guerra con los franceses. Una reina debilitada, Anne (Olivia Colman), ocupa el trono y su amiga Lady Sarah (Rachel Weisz) gobierna el país en su ausencia, debido a su estado de salud y a su carácter inestable. Cuando una nueva sirvienta aparece, Abigail (Emma Stone), su encanto seduce a Sarah. Sarah ayuda a Abigail y ésta ve una oportunidad para regresar a sus raíces aristocráticas. Como la política ocupa gran parte del tiempo de Sarah, Abigail empieza a acompañar con más frecuencia a la Reina. Desarrollarán una amistad que Abigail aprovechará para saciar sus ambiciones.',
        popularity: 37.867,
        poster_path: '/mirzwvOh7s5HN0vC7b7H6WMkO6X.jpg',
        release_date: '2018-11-23',
        title: 'La favorita',
        video: false,
        vote_average: 7.5,
        vote_count: 5131,
        character: 'Abigail',
        credit_id: '568645e0c3a368607501da1f',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/nlPCdZlHtRNcF6C9hzUH4ebmV1w.jpg',
        genre_ids: [
          35,
          18,
          10749,
          10402
        ],
        id: 313369,
        original_language: 'en',
        original_title: 'La La Land',
        overview: 'Mia, una joven aspirante a actriz que compagina los castings con su trabajo de camarera, y Sebastian, un pianista de jazz que se gana la vida tocando en sórdidos tugurios, se enamoran. Pero la gran ambición por llegar a la cima en sus carreras artísticas amenaza con separarlos.',
        popularity: 59.468,
        poster_path: '/7pFsAaJmiOppVHcldBzg8JKBHwe.jpg',
        release_date: '2016-11-29',
        title: 'La Ciudad De Las Estrellas (La La Land)',
        video: false,
        vote_average: 7.901,
        vote_count: 16044,
        character: 'Mia Dolan',
        credit_id: '575d52e3c3a3684516000671',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/ytTQoYkdpsgtfDWrNFCei8Mfbxu.jpg',
        genre_ids: [
          16,
          10751,
          12,
          14,
          35
        ],
        id: 529203,
        original_language: 'en',
        original_title: 'The Croods: A New Age',
        overview: 'Después de salir de su cueva, los Croods se encuentran con su mayor amenaza desde que se fueron: otra familia llamada Betterman, quienes afirman y demuestran ser mejores y evolucionados. Grug empieza a sospechar de los padres de Betterman, Phil y Hope, ya que planean en secreto separar a su hija Eep con su amado novio Guy para asegurarse de que su hija Dawn tenga un compañero amoroso e inteligente que la proteja.',
        popularity: 92.562,
        poster_path: '/5uMWKEmegf5aTJnp1u98JF4QerP.jpg',
        release_date: '2020-11-25',
        title: 'Los Croods: Una nueva era',
        video: false,
        vote_average: 7.496,
        vote_count: 3644,
        character: 'Eep Crood (voice)',
        credit_id: '5b3527699251413c8201d49f',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/dqXW5kXQeok9AOaAu6WzBW1DkB5.jpg',
        genre_ids: [
          35
        ],
        id: 612392,
        original_language: 'en',
        original_title: 'My Favorite Shapes by Julio Torres',
        overview: 'En este programa de comedia multimedia, Torres explora sus formas favoritas, que incluyen un cuadrado de plexiglás, un triángulo, un óvalo que desearía que fuera un círculo, un cactus consciente de sí mismo y un chocolate Ferrero Rocher con el que Julio está enojado porque dejó a su pequeño falda en casa Los objetos se presentan a través de una cinta transportadora industrial y sirven como punto de partida para historias fantásticas, anécdotas y chistes.',
        popularity: 17.608,
        poster_path: '/v1Bx5clsiLnAmHPOqRIMOnFmKrY.jpg',
        release_date: '2019-08-10',
        title: 'My Favorite Shapes by Julio Torres',
        video: false,
        vote_average: 7.1,
        vote_count: 14,
        character: 'Shoe (voice)',
        credit_id: '5d54e09ebc86576d952bed4c',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          99
        ],
        id: 478253,
        original_language: 'en',
        original_title: 'Rite of Passage: The Amazing Spider-Man Reborn',
        overview: '',
        popularity: 2.59,
        poster_path: '/n7qOW6GkspVb53G92CZMRSwk7Ed.jpg',
        release_date: '2012-11-09',
        title: 'Rite of Passage: The Amazing Spider-Man Reborn',
        video: true,
        vote_average: 7.5,
        vote_count: 12,
        character: 'Herself',
        credit_id: '5da85e15944a570013257ab5',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/tBB7adGGGMgh5pgsenHW8YLuK2s.jpg',
        genre_ids: [
          99,
          10770
        ],
        id: 426222,
        original_language: 'en',
        original_title: 'David Blaine: Beyond Magic',
        overview: '',
        popularity: 5.944,
        poster_path: '/tFdwMujvxiXmoXyngbeBsGVjSee.jpg',
        release_date: '2016-11-16',
        title: 'David Blaine: Beyond Magic',
        video: true,
        vote_average: 7,
        vote_count: 38,
        character: 'Self',
        credit_id: '5ffd8a0594d8a8004128fa3f',
        order: 1,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/vz6iY1MtETWRtZMn379JYZGVCX1.jpg',
        genre_ids: [
          10749,
          35
        ],
        id: 12620,
        original_language: 'en',
        original_title: 'The House Bunny',
        overview: 'Shelly (Anna Faris) es una conejita del Playboy que, tras ser expulsada de la famosa mansión Playboy, y sin sitio donde ir, entra a formar parte de la hermandad Zeta Tau Zeta del campus de la universidad. Allí tendrá mucho que enseñar a sus compañeras de estudios',
        popularity: 36.026,
        poster_path: '/jZL8cARZk08IR7XM4zawfSNjeDg.jpg',
        release_date: '2008-08-22',
        title: 'Una conejita en el campus',
        video: false,
        vote_average: 5.645,
        vote_count: 1825,
        character: 'Natalie',
        credit_id: '52fe45089251416c75049723',
        order: 2,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/oihWVx3imvRKujnGmSDYhfG1gI5.jpg',
        genre_ids: [
          35,
          27
        ],
        id: 19908,
        original_language: 'en',
        original_title: 'Zombieland',
        overview: 'En un mundo plagado de zombis, Columbus es un gallina, un joven que se encuentra aterrorizado por la situación, pero cuando te juegas el ser comido por los zombies, el miedo puede mantenerte vivo. De hecho su cobardía precisamente le ha permitido que sus sesos aún se mantengan en su cabeza. Entonces un día conoce a Tallahassse, un macarra caza zombies cuya única determinación en su vida es lograr el último Twinkie (dulce americano) en la tierra. Cuando ambos unen fuerzas con Wichita y Little Rock, que también han encontrado una manera original de sobrevivir en ese caos, tendrán que elegir qué es peor: si confiar los unos en los otros para sobrevivir o sucumbir ante los zombies.',
        popularity: 46.992,
        poster_path: '/fQAt6ltWR780GUoWXuuEUgxhbgU.jpg',
        release_date: '2009-10-07',
        title: 'Bienvenidos a Zombieland',
        video: false,
        vote_average: 7.262,
        vote_count: 11759,
        character: 'Wichita',
        credit_id: '52fe47f89251416c750ab95d',
        order: 2,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/e7tMI0zVKJB2TS74TaBifIZIkCp.jpg',
        genre_ids: [
          35,
          27
        ],
        id: 338967,
        original_language: 'en',
        original_title: 'Zombieland: Double Tap',
        overview: 'En esta secuela y empleando el característico sentido del humor del que hizo gala "Zombieland", el grupo de protagonistas tendrá que viajar desde la Casa Blanca hasta el corazón de los Estados Unidos, sobreviviendo a nuevas clases de muertos vivientes que han evolucionado desde lo sucedido hace algunos años, así como a algunos supervivientes humanos rezagados. Pero, por encima de todo, tendrán que tratar de soportar los inconvenientes de convivir entre ellos.',
        popularity: 53.38,
        poster_path: '/mIUGQ89isLNj4IRujDsXrZFIZCQ.jpg',
        release_date: '2019-10-09',
        title: 'Zombieland: Mata y remata',
        video: false,
        vote_average: 6.945,
        vote_count: 5371,
        character: 'Wichita',
        credit_id: '5ad39e7ac3a3685c4d0037ae',
        order: 2,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          99
        ],
        id: 638453,
        original_language: 'en',
        original_title: 'The Wages of Heroism: Making The Amazing Spider-Man 2',
        overview: '',
        popularity: 1.696,
        poster_path: '/z5nm4z5dCS06mptUKKJpVBIq1aX.jpg',
        release_date: '2014-08-19',
        title: 'The Wages of Heroism: Making The Amazing Spider-Man 2',
        video: true,
        vote_average: 7.375,
        vote_count: 4,
        character: 'Herself',
        credit_id: '5d9f48aff0647c0029ce99d9',
        order: 2,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/y6YSJ6TpXC1lbn7dF7CQ39g8l5H.jpg',
        genre_ids: [
          35,
          10402
        ],
        id: 10186,
        original_language: 'en',
        original_title: 'The Rocker',
        overview: 'Rob "Fish" Fishman es el baterista en la banda de hair metal de los 80 "Vesuvius". Cuando el grupo firma un contrato con una gran discográfica, lo despiden sin contemplaciones. Tras mantenerse 20 años apartado del mundillo de la música, recibe una segunda oportunidad con la banda de su sobrino.',
        popularity: 22.319,
        poster_path: '/cRWbXeOnqEt9ZIXY2cWXFk8OCGD.jpg',
        release_date: '2008-08-20',
        title: 'Un rockero de pelotas',
        video: false,
        vote_average: 6.015,
        vote_count: 556,
        character: 'Amelia',
        credit_id: '52fe433d9251416c75008d25',
        order: 3,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/cO3EwGUjy5lkDbKrAfJglxs2Acu.jpg',
        genre_ids: [
          10751,
          35
        ],
        id: 38579,
        original_language: 'en',
        original_title: 'Marmaduke',
        overview: "La historia versa sobre un travieso perro de raza Gran Danés que vive con la familia Winslow. Este perro apareció después en varios episodios animados de 'Heathcliff' (Isidoro) y 'Garfield and Friends'. La película mostrará cómo Marmaduke se encuentra tras mudarse de domicilio en medio de una lucha por el territorio entre chuchos callejeros y perros con Pedigree, además de que intentará conquistar a la perra de sus sueños",
        popularity: 26.868,
        poster_path: '/gg6lddIpfuE2zyn8fLn1lC9xUYV.jpg',
        release_date: '2010-06-03',
        title: 'Marmaduke',
        video: false,
        vote_average: 5.258,
        vote_count: 719,
        character: 'Mazie (voice)',
        credit_id: '52fe46c79251416c9105f6c9',
        order: 3,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/vTwNAu8C4SkYvPp73rFAmLvXVym.jpg',
        genre_ids: [
          35,
          18,
          10749
        ],
        id: 50646,
        original_language: 'en',
        original_title: 'Crazy, Stupid, Love.',
        overview: "La situación del cuarentón y puritano Cal Weaver es perfecta: tiene un buen trabajo, una bonita casa y unos hijos estupendos y está casado con el amor de su adolescencia. Sin embargo, cuando Cal se entera de que su esposa, Emily, le ha engañado y quiere divorciarse, su vida 'perfecta' se desmorona. Para colmo, en el actual mundo de los solteros, Cal, que no ha tenido una cita desde hace décadas, es el desastre en persona.",
        popularity: 56.381,
        poster_path: '/gBFzkVslmiHVuwwjJ8cl9JZGrmg.jpg',
        release_date: '2011-07-29',
        title: 'Crazy, Stupid, Love.',
        video: false,
        vote_average: 7.26,
        vote_count: 8058,
        character: 'Hannah Weaver',
        credit_id: '52fe47d0c3a36847f8149a1b',
        order: 3,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          99
        ],
        id: 562517,
        original_language: 'en',
        original_title: 'Birdman: All-Access (A View From the Wings)',
        overview: '',
        popularity: 1.589,
        poster_path: '/78gMxjXcUTbyD0L7c4bACEuSgyM.jpg',
        release_date: '2015-05-18',
        title: 'Birdman: All-Access (A View From the Wings)',
        video: true,
        vote_average: 7.2,
        vote_count: 4,
        character: 'Self',
        credit_id: '5bf051570e0a26266303ed92',
        order: 3,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/eBw5K3pmClsLO7N2FqgthuScKUx.jpg',
        genre_ids: [
          80,
          18,
          28,
          53
        ],
        id: 82682,
        original_language: 'en',
        original_title: 'Gangster Squad',
        overview: "Los Angeles, 1949. Mickey Cohen, originario de Brooklyn, se ha convertido en el gran jefe de la mafia que dirige la ciudad. Todos parece pasar por sus manos: drogas, armas, prostitutas, y cualquier material robado. Se encuentra absolutamente protegido por los miembros de su clan, que lo veneran como a su líder indiscutible, pero no solo eso, pues sus tentáculos van más allá de los bajos fondos: parte del cuerpo de policía y algunos miembros del sector político se encuentran bajo su influjo.  Sin embargo, todavía hay hombres dentro de la brigada policial que no se dejan amedrentar por la corrupción. Es el caso de los sargentos John O'Mara y Jerry Wooters, que contra todo y contra todos, intentarán destruir el imperio del todopoderoso Cohen.",
        popularity: 29.435,
        poster_path: '/1eW9kFSuTQfyMvZKtxlnwKRBvI.jpg',
        release_date: '2013-01-09',
        title: 'Gangster Squad: Brigada de élite',
        video: false,
        vote_average: 6.361,
        vote_count: 3881,
        character: 'Grace Faraday',
        credit_id: '52fe48689251416c9108b7d3',
        order: 4,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          10402
        ],
        id: 567104,
        original_language: 'xx',
        original_title: "Let's Dance",
        overview: '',
        popularity: 14.756,
        poster_path: '/2LlpkPEgW07GfekHxKQsHIJhZdq.jpg',
        release_date: '2018-12-06',
        title: "Let's Dance",
        video: true,
        vote_average: 6.222,
        vote_count: 9,
        character: 'Segment: "Coffee to Go"',
        credit_id: '5c09d294c3a368252003130f',
        order: 4,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/giYuvpmpZbwkT3NtX4WdNYqGhxw.jpg',
        genre_ids: [
          35
        ],
        id: 8363,
        original_language: 'en',
        original_title: 'Superbad',
        overview: 'En una de sus últimas noches como estudiantes del instituto, los amigos e inadaptados Evan y Seth experimentarán una legendaria odisea durante una tarde en la que intentan comprar bebida para una fiesta en la que estarán las chicas de sus sueños. En su peripecia les acompañará el indescriptible McLovin, otro amigo inadaptado que acaba de comprarse un carnet falso: su pasaporte para comprar el alcohol.',
        popularity: 61.819,
        poster_path: '/ftUDFRYywWzajElI2RT9NIno2PS.jpg',
        release_date: '2007-03-20',
        title: 'Supersalidos',
        video: false,
        vote_average: 7.239,
        vote_count: 6898,
        character: 'Jules',
        credit_id: '52fe44a2c3a36847f80a167f',
        order: 6,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/oy9Ox4WGPkOJ3656CNKasVjAnKS.jpg',
        genre_ids: [
          14,
          35,
          10749
        ],
        id: 12556,
        original_language: 'en',
        original_title: 'Ghosts of Girlfriends Past',
        overview: 'Connor Mead (Matthew McConaughey) es un conocido fotógrafo soltero, amante de la libertad e independencia, que es acosado por el fantasma de una novia del pasado en la boda de un hermano menor suyo.',
        popularity: 27.723,
        poster_path: '/qNsZv9ftfjsrymRalyjk9EWeHCC.jpg',
        release_date: '2009-05-01',
        title: 'Los fantasmas de mis exnovias',
        video: false,
        vote_average: 5.963,
        vote_count: 2213,
        character: 'Allison Vandermeersh',
        credit_id: '52fe44fa9251416c750478bd',
        order: 7,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/uvqdgaZLebhWmkFHyjO5XcdFUrd.jpg',
        genre_ids: [
          35,
          10770,
          99
        ],
        id: 992305,
        original_language: 'en',
        original_title: 'Bill Murray: The Kennedy Center Mark Twain Prize',
        overview: '',
        popularity: 0.926,
        poster_path: '/pFam50pISmOgRaPKH2sPMCMjaLR.jpg',
        release_date: '2016-10-28',
        title: 'Bill Murray: The Kennedy Center Mark Twain Prize',
        video: false,
        vote_average: 0,
        vote_count: 0,
        character: 'Self',
        credit_id: '62b7b7cf229ae20067064b88',
        order: 14,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          99
        ],
        id: 587877,
        original_language: 'en',
        original_title: 'The Amazing Spider-Man T4 Premiere Special',
        overview: '',
        popularity: 3.49,
        poster_path: null,
        release_date: '2012-06-30',
        title: 'The Amazing Spider-Man T4 Premiere Special',
        video: true,
        vote_average: 7.8,
        vote_count: 6,
        character: '',
        credit_id: '5c88ffae0e0a260428c1ec35',
        order: 15,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/wD0TCyFkRkol7JkLmO7gp7oZkib.jpg',
        genre_ids: [
          10749,
          35
        ],
        id: 50544,
        original_language: 'en',
        original_title: 'Friends with Benefits',
        overview: 'Narra cómo una relación entre dos jóvenes amigos, Dylan y Jamie, se complica cuando deciden involucrarse románticamente. Pensaban que seguir siendo amigos y tener sexo iba a ser fácil de llevar, pero pronto se darán cuenta de que no lo va a ser tanto.',
        popularity: 46.842,
        poster_path: '/fGPbQpNahUvixeS3l1s4NUoE3bj.jpg',
        release_date: '2011-07-21',
        title: 'Con derecho a roce',
        video: false,
        vote_average: 6.655,
        vote_count: 7609,
        character: 'Kayla',
        credit_id: '52fe47cbc3a36847f8148877',
        order: 16,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/tObVe1R7JnO3VXBvAOWTEPmmegu.jpg',
        genre_ids: [
          99
        ],
        id: 961651,
        original_language: 'en',
        original_title: 'Spider-Man: All Roads Lead to No Way Home',
        overview: 'Desde la trilogía original de Sam Raimi hasta las asombrosas películas de Marc Webb y el trío más reciente del director Jon Watts, llevaremos a los espectadores a través de las estrellas, las acrobacias y la acción, los villanos y los héroes y un homenaje a Stan Lee, junto con algunas sorpresas.',
        popularity: 34.036,
        poster_path: '/y3m8fNP6WnGemSPpEXRLyAaTSA1.jpg',
        release_date: '2022-05-03',
        title: 'Spider-Man: Todos los caminos conducen a No Way Home',
        video: false,
        vote_average: 6.9,
        vote_count: 60,
        character: 'Self (archive footage)',
        credit_id: '629bbdb1992fe60050b42ee2',
        order: 26,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/7SOUwC0hhq37MtcWLfXg5E5ZNXQ.jpg',
        genre_ids: [
          35,
          10402
        ],
        id: 341012,
        original_language: 'en',
        original_title: 'Popstar: Never Stop Never Stopping',
        overview: 'Tras dos años de exitosa gira mundial, Conner 4Real (Andy Samberg) es el nombre más reconocido de la música. Cuando su último disco es un fracaso, su popularidad entra en crisis y todos sus fans, aduladores y rivales, no saben qué hacer con él. Pero finalmente Conner, para levantarse, intentará volver a juntar a su ex-banda de música de cuando era joven.',
        popularity: 25.106,
        poster_path: '/1YFSd5HYNgFOE5UfTFEytP4OLrV.jpg',
        release_date: '2016-06-03',
        title: 'Popstar',
        video: false,
        vote_average: 6.629,
        vote_count: 1178,
        character: 'Claudia Cantrell',
        credit_id: '57572aa2925141123600001e',
        order: 37,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/3YKGMZQ0pwQXSBSASeKlfPlkso7.jpg',
        genre_ids: [
          28,
          35
        ],
        id: 228967,
        original_language: 'en',
        original_title: 'The Interview',
        overview: 'Dave Skylark, presentador de un conocido programa de entrevistas, y su productor, Aaron Rapoport, consiguen una entrevista exclusiva con Kim Jong-Un, dictador de Corea del Norte. Ante tal oportunidad, la CIA les pide un "favorcillo": asesinar a Kim. Pero lo cierto es que Dave y Aaron no son las personas más cualificadas para realizar un magnicidio.',
        popularity: 75.08,
        poster_path: '/bHkF3PQDqnKHdmi2KvdQiFtX8zI.jpg',
        release_date: '2014-12-25',
        title: 'The Interview',
        video: false,
        vote_average: 6.189,
        vote_count: 5510,
        character: 'Emma Stone (uncredited)',
        credit_id: '584677d392514167640202d8',
        order: 59,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          35,
          10770
        ],
        id: 1157462,
        original_language: 'en',
        original_title: 'Saturday Night Live: 40th Anniversary Special',
        overview: '',
        popularity: 3.633,
        poster_path: '/cda1A0SQ0C9511GSCVnEQ0821bh.jpg',
        release_date: '2015-02-15',
        title: 'Saturday Night Live: 40th Anniversary Special',
        video: false,
        vote_average: 8,
        vote_count: 2,
        character: 'Self / Roseanne Roseannadanna',
        credit_id: '64f38270caa50800ab730c2c',
        order: 70,
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/duCmqP1qub3aU5SpLwJlmOMCJ05.jpg',
        genre_ids: [
          35
        ],
        id: 4540,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Lucky Louie',
        overview: '',
        popularity: 22.539,
        poster_path: '/f9YSKUw3rlw2AU4N3FCzrJR4bCM.jpg',
        first_air_date: '2006-06-11',
        name: 'Lucky Louie',
        vote_average: 7.5,
        vote_count: 104,
        character: 'Shannon',
        credit_id: '52576eca760ee36aaa44b21b',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 27713,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The New Partridge Family',
        overview: '',
        popularity: 2.942,
        poster_path: null,
        first_air_date: '2005-01-22',
        name: 'The New Partridge Family',
        vote_average: 0,
        vote_count: 0,
        character: 'Laurie Partridge',
        credit_id: '525887fe760ee3466149bb1f',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/dVpAGo3TT2IjDyRuKwhNfe9E1A5.jpg',
        genre_ids: [
          80,
          18,
          9648,
          10765
        ],
        id: 36,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Medium',
        overview: 'Se inspira en la vida de la medium Allison Dubois. Patricia Arquette interpreta a una mujer casada y madre de tres hijas que intenta comprender sus dotes de medium y su capacidad para comunicarse con los muertos. Su marido (Jake Weber) es un hombre cariñoso que la apoya incondicionalmente. Ambos luchan para encontrar el equilibrio entre la vida familiar y el sobrenatural don de Allison. El fiscal Devalos (Miguel Sandoval) la contrata para utilizar sus poderes en la resolución de casos criminales. (FILMAFFINITY)',
        popularity: 356.002,
        poster_path: '/aqawO5mYblDRwEmHjMiLJa8LyIr.jpg',
        first_air_date: '2005-01-03',
        name: 'Medium',
        vote_average: 7.51,
        vote_count: 487,
        character: 'Cynthia McCallister',
        credit_id: '5253320419c295794001a92f',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/xCdCsHCH7VCQqaDUPD5tG6omMsB.jpg',
        genre_ids: [
          10767,
          35
        ],
        id: 1489,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Jimmy Kimmel Live!',
        overview: '',
        popularity: 1238.934,
        poster_path: '/hWLCBGQ2RFpjXyaKRMbL5bGEEDT.jpg',
        first_air_date: '2003-01-26',
        name: 'Jimmy Kimmel Live!',
        vote_average: 5.4,
        vote_count: 137,
        character: '',
        credit_id: '525707ea760ee3776a039ba1',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/uxida0VTUwvZ33gsnNHuAfH0Ots.jpg',
        genre_ids: [
          10759,
          18
        ],
        id: 2034,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Drive',
        overview: '',
        popularity: 25.839,
        poster_path: '/rNrb6s9WLSiy6CQCvcfrmZKHGM8.jpg',
        first_air_date: '2007-04-13',
        name: 'Drive',
        vote_average: 6.643,
        vote_count: 27,
        character: 'Violet Trimble',
        credit_id: '52571fbe19c295711411bcd9',
        episode_count: 6,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/y4w232QOzDD1McRocp2htMVmF3b.jpg',
        genre_ids: [
          10763,
          35
        ],
        id: 2224,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Daily Show',
        overview: 'Presentado por el humorista Jon Stewart, es el formato de sátira política más popular de la televisión norteamericana. Ha estado en antena en Comedy Central desde 1996 y ha ganado 18 Primetime Emmys. Se autodefine como un programa de noticias falso y enfoca su particular punto de vista en la actualidad, las noticias, los personajes políticos y de los medios de comunicación fundamentalmente con el objetivo de hacer reír. Generalmente el show comienza con un monólogo de Jon Stewart relacionado con los principales titulares de la actualidad. Después de este monólogo da paso a sus numerosos corresponsales y finalmente suele acabar con una entrevista a un personaje conocido.',
        popularity: 4303.547,
        poster_path: '/ixcfyK7it6FjRM36Te4OdblAq4X.jpg',
        first_air_date: '1996-07-22',
        name: 'The Daily Show',
        vote_average: 6.321,
        vote_count: 478,
        character: 'Self',
        credit_id: '5419572cc3a3686d93001029',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/ysaA0BInz4071p3LKqAQnWKZCsK.jpg',
        genre_ids: [
          10751,
          35,
          18
        ],
        id: 2004,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Malcolm in the Middle',
        overview: 'Sitcom familiar que aborda los divertidos problemas y situaciones de una familia americana de clase media en la que el hijo Malcolm parece ser el único sensato... o al menos el único que da señales de cordura. La familia está compuesta por sus neuróticos padres Hal y Lois, el hermano mayor Francis y sus otros dos hermanos, Reese y Dewey.',
        popularity: 378.799,
        poster_path: '/sUjsvpfWQ0OuKWPpbsfFHZhLGiK.jpg',
        first_air_date: '2000-01-09',
        name: 'Malcolm',
        vote_average: 8.479,
        vote_count: 4065,
        character: 'Diane',
        credit_id: '52571eca19c295711410cd32',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/t5Mf1lc2bBC0WoOkx89Fj8e7zYK.jpg',
        genre_ids: [
          35,
          18,
          10765
        ],
        id: 73411,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Maniac',
        overview: 'Relata las aventuras fantásticas de un paciente (Jonah Hill) que escapa de su vida recreando un mundo de fantasía dentro de su mente',
        popularity: 54.774,
        poster_path: '/kCNl4QPstAqChFD0NnLpbDFG8ul.jpg',
        first_air_date: '2018-09-21',
        name: 'Maniac',
        vote_average: 7.387,
        vote_count: 742,
        character: 'Annie Landsberg',
        credit_id: '5999a7ae925141040f00274f',
        episode_count: 10,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/wPNBOUMxSWKysHxQW4Q1hC99L4k.jpg',
        genre_ids: [
          10767,
          35
        ],
        id: 66488,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Chelsea',
        overview: '',
        popularity: 234.305,
        poster_path: '/lDbyyKRDk5FmDY98eCc97gUEZod.jpg',
        first_air_date: '2016-05-11',
        name: 'Chelsea',
        vote_average: 5.164,
        vote_count: 59,
        character: 'Self',
        credit_id: '59c563399251415b8702eb8f',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/lWkfSWJstUFk7oqyo7MrMoXehoi.jpg',
        genre_ids: [
          10767,
          35
        ],
        id: 2518,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Tonight Show with Jay Leno',
        overview: '',
        popularity: 617.515,
        poster_path: '/xAFMZ3wFIEXTISryRZD94AAvWng.jpg',
        first_air_date: '1992-05-25',
        name: 'The Tonight Show with Jay Leno',
        vote_average: 5.4,
        vote_count: 79,
        character: '',
        credit_id: '5b9b4a53c3a3686c1400f14a',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/70c2rCiA4eTyLs0vW9SwOHeomkC.jpg',
        genre_ids: [
          99
        ],
        id: 93514,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Mind, Explained',
        overview: '¿Te intriga saber qué pasa dentro de tu cabeza? ¿Quieres saber el por qué de los sueños y trastornos de ansiedad? Esta reveladora serie arroja luz sobre esas inquietudes.',
        popularity: 33.17,
        poster_path: '/xpT3549LLOsS6oHFyGinFDDlA7m.jpg',
        first_air_date: '2019-09-12',
        name: 'La mente, en pocas palabras',
        vote_average: 7.432,
        vote_count: 96,
        character: 'Self - Narrator',
        credit_id: '5d7a12b7af43243b2196bd5e',
        episode_count: 10,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/bfg3COqQzmaZqqaqmCruKoyjk72.jpg',
        genre_ids: [
          35,
          10763
        ],
        id: 1667,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Saturday Night Live',
        overview: 'Saturday Night Live es un show televisivo nocturno estadounidense, emitido en vivo, que revolucionó la televisión en los años 70 con su combinación de sketches, comedia, variedad, actores, músicos, e invitados especiales. Ha sido una cantera generadora de talentos muy fuerte de varios guinistas, actores, escritores, productores y cantantes. Creado por Lorne Michaels y desarrollado por Dick Ebersol, el programa fue estrenado por la cadena de televisión NBC. Durante más de 30 años, el programa ha presentado personajes locos, situaciones humorísticamente extrañas, parodias de los presidentes y políticos de turno, sarcásticas burlas a celebridades contemporáneas de la música y del cine, y shows musicales en vivo. Su reparto se compone de miembros repertorios, también conocidos como The Not Ready for Prime-Time Players (el nombre del reparto original del programa, que viene a significar «La Compañía No Apta para las Horas de Máxima Audiencia»), y nuevos miembros quienes se conocen como The Featured Players («La Compañía Destacada»).',
        popularity: 472.829,
        poster_path: '/sHGuKFjIBisPk8cvtCZTDVktYfs.jpg',
        first_air_date: '1975-10-11',
        name: 'Saturday Night Live',
        vote_average: 6.9,
        vote_count: 391,
        character: '',
        credit_id: '5dc34b8b7d5db500199bee4a',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/bfg3COqQzmaZqqaqmCruKoyjk72.jpg',
        genre_ids: [
          35,
          10763
        ],
        id: 1667,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Saturday Night Live',
        overview: 'Saturday Night Live es un show televisivo nocturno estadounidense, emitido en vivo, que revolucionó la televisión en los años 70 con su combinación de sketches, comedia, variedad, actores, músicos, e invitados especiales. Ha sido una cantera generadora de talentos muy fuerte de varios guinistas, actores, escritores, productores y cantantes. Creado por Lorne Michaels y desarrollado por Dick Ebersol, el programa fue estrenado por la cadena de televisión NBC. Durante más de 30 años, el programa ha presentado personajes locos, situaciones humorísticamente extrañas, parodias de los presidentes y políticos de turno, sarcásticas burlas a celebridades contemporáneas de la música y del cine, y shows musicales en vivo. Su reparto se compone de miembros repertorios, también conocidos como The Not Ready for Prime-Time Players (el nombre del reparto original del programa, que viene a significar «La Compañía No Apta para las Horas de Máxima Audiencia»), y nuevos miembros quienes se conocen como The Featured Players («La Compañía Destacada»).',
        popularity: 472.829,
        poster_path: '/sHGuKFjIBisPk8cvtCZTDVktYfs.jpg',
        first_air_date: '1975-10-11',
        name: 'Saturday Night Live',
        vote_average: 6.9,
        vote_count: 391,
        character: 'Assistant',
        credit_id: '5dc4562c6f8d950013c09b28',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/2pJYis3LUEgFC3UErTQVgmUV1hN.jpg',
        genre_ids: [
          35,
          10767
        ],
        id: 1220,
        origin_country: [
          'GB'
        ],
        original_language: 'en',
        original_name: 'The Graham Norton Show',
        overview: '',
        popularity: 888.593,
        poster_path: '/vrbqaBXB8AALynQzpWz6JdCPEJS.jpg',
        first_air_date: '2007-02-22',
        name: 'The Graham Norton Show',
        vote_average: 7.1,
        vote_count: 232,
        character: 'Self',
        credit_id: '5de74a3d3faba00019135aa6',
        episode_count: 3,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/gpDkx5Mog0jISp5rI7YbxQPKnCK.jpg',
        genre_ids: [
          10767
        ],
        id: 63498,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Close Up with The Hollywood Reporter',
        overview: 'Ahondaremos en los actores del momento, las actrices más cotizadas, los directores que marcan tendencia y los responsables de las últimas películas más taquilleras. Un imprescindible para todos aquellos amantes del séptimo arte.',
        popularity: 118.666,
        poster_path: '/h7X59O3T4VWVAUzZ00LEpbwA3GP.jpg',
        first_air_date: '2015-08-02',
        name: 'Hollywood en primer plano',
        vote_average: 5.656,
        vote_count: 16,
        character: 'Self',
        credit_id: '5e40263a41465c0018cbf927',
        episode_count: 2,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/bJbh9BT53az3uWortxzfvVcigJG.jpg',
        genre_ids: [
          10763,
          10767,
          35
        ],
        id: 101214,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Some Good News',
        overview: '',
        popularity: 12.089,
        poster_path: '/8KrhN7Mx6uoxFnRAaZrzYRO5TVB.jpg',
        first_air_date: '2020-03-29',
        name: 'Some Good News',
        vote_average: 6.6,
        vote_count: 11,
        character: 'Weatherwoman',
        credit_id: '5eb9d0d4cc277c00206d7565',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/9NrFyl7VHQmjuohKz9h3dcZ8gyv.jpg',
        genre_ids: [
          35,
          10751,
          10762
        ],
        id: 4605,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Suite Life of Zack & Cody',
        overview: 'Dos hermanos de 12 años que residen en un hotel lujoso y cansados de la monotonía causan todo tipo de líos para hacer de su vida y de su estadía en el hotel Tipton una experiencia divertida.',
        popularity: 126.252,
        poster_path: '/8vUeEQRKLjTT3CyTZGPTnIKDS5d.jpg',
        first_air_date: '2005-03-18',
        name: 'Hotel, dulce hotel: Las aventuras de Zack y Cody',
        vote_average: 7.7,
        vote_count: 604,
        character: 'Ivana Tipton (voice)',
        credit_id: '5f266d10dbbb420035e3ead0',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/bfg3COqQzmaZqqaqmCruKoyjk72.jpg',
        genre_ids: [
          35,
          10763
        ],
        id: 1667,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Saturday Night Live',
        overview: 'Saturday Night Live es un show televisivo nocturno estadounidense, emitido en vivo, que revolucionó la televisión en los años 70 con su combinación de sketches, comedia, variedad, actores, músicos, e invitados especiales. Ha sido una cantera generadora de talentos muy fuerte de varios guinistas, actores, escritores, productores y cantantes. Creado por Lorne Michaels y desarrollado por Dick Ebersol, el programa fue estrenado por la cadena de televisión NBC. Durante más de 30 años, el programa ha presentado personajes locos, situaciones humorísticamente extrañas, parodias de los presidentes y políticos de turno, sarcásticas burlas a celebridades contemporáneas de la música y del cine, y shows musicales en vivo. Su reparto se compone de miembros repertorios, también conocidos como The Not Ready for Prime-Time Players (el nombre del reparto original del programa, que viene a significar «La Compañía No Apta para las Horas de Máxima Audiencia»), y nuevos miembros quienes se conocen como The Featured Players («La Compañía Destacada»).',
        popularity: 472.829,
        poster_path: '/sHGuKFjIBisPk8cvtCZTDVktYfs.jpg',
        first_air_date: '1975-10-11',
        name: 'Saturday Night Live',
        vote_average: 6.9,
        vote_count: 391,
        character: 'Self',
        credit_id: '5f28ca21869e7500366d5a47',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/vi5RvXvMU1wT7bvNwQ69MPKyjCi.jpg',
        genre_ids: [
          35,
          18
        ],
        id: 114655,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Curse',
        overview: 'Una supuesta maldición perturba la relación de una pareja de recién casados que intentan concebir un hijo mientras coprotagonizan su nuevo y problemático programa de HGTV.',
        popularity: 64.393,
        poster_path: '/k2qJPaGFdyFXEEJpwG5HrmeNpjv.jpg',
        first_air_date: '2023-11-12',
        name: 'La maldición',
        vote_average: 7,
        vote_count: 61,
        character: 'Whitney Siegel',
        credit_id: '5fd7a5d73344c6003daed365',
        episode_count: 10,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg',
        genre_ids: [
          35,
          10767
        ],
        id: 59941,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Tonight Show Starring Jimmy Fallon',
        overview: 'Después del segundo retiro de Jay Leno del programa, Jimmy Fallon intervino como su reemplazo permanente. Después de 42 años en Los Ángeles, el programa regresó a Nueva York.',
        popularity: 3623.204,
        poster_path: '/g4amxJvtpnY79J77xeamnAEUO8r.jpg',
        first_air_date: '2014-02-17',
        name: 'The Tonight Show Starring Jimmy Fallon',
        vote_average: 5.865,
        vote_count: 288,
        character: '',
        credit_id: '5fe680dce74146003d35cbef',
        episode_count: 3,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/jO803koX4pYjGuxjOkLytCusuJm.jpg',
        genre_ids: [
          10767,
          35,
          10763
        ],
        id: 32415,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Conan',
        overview: "Conan es un programa de conversación nocturno tipo late night talk show que se emite de lunes a jueves en la señal TBS de Estados Unidos, a las 11:00 pm, hora del este. El programa, de una hora de duración, fue estrenado el 8 de noviembre de 2010. Está conducido por el escritor, presentador y comediante Conan O'Brien, quien fue conductor del programa de la NBC Late Night with Conan O'Brien por 16 años, y también de The Tonight Show with Conan O'Brien, show que duró sólo siete meses al aire y que provocó la renuncia de O'Brien a la cadena transmisora, la NBC, debido a conflictos por los horarios de salida del programa.3​ El 14 de mayo de 2014, TBS renovó a Conan, por lo menos hasta el 2018.",
        popularity: 1135.976,
        poster_path: '/oQxrvUhP3ycwnlxIrIMQ9Z3kleq.jpg',
        first_air_date: '2010-11-08',
        name: 'Conan',
        vote_average: 7,
        vote_count: 211,
        character: 'Self',
        credit_id: '5fe7b49bc9dbf9003e474a36',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/4ZPA42RwiJ82nP6bQmWxq1bMAgH.jpg',
        genre_ids: [
          10767
        ],
        id: 1900,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'LIVE with Kelly and Mark',
        overview: '',
        popularity: 744.201,
        poster_path: '/y2HYxNrammqTk4GFq5jetYO7UW5.jpg',
        first_air_date: '1988-09-05',
        name: 'LIVE with Kelly and Mark',
        vote_average: 5.4,
        vote_count: 37,
        character: 'Self - Guest',
        credit_id: '60accbb907e2810027afa2b9',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/zi5B3468QjH6jM7D8gQYzPgvMQZ.jpg',
        genre_ids: [
          10767,
          35
        ],
        id: 131659,
        origin_country: [
          'KR'
        ],
        original_language: 'ko',
        original_name: '제시의 쇼!터뷰',
        overview: '',
        popularity: 60.299,
        poster_path: '/jhrwzMvVLwJo9uWhHS9m3IV8tIi.jpg',
        first_air_date: '2020-06-11',
        name: '제시의 쇼!터뷰',
        vote_average: 7,
        vote_count: 2,
        character: 'Herself (virtual)',
        credit_id: '6120b622fcf90700469586cc',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/1yguthn0tBF7XzmAbX9kwtW3I9J.jpg',
        genre_ids: [
          35,
          10762,
          18,
          10751
        ],
        id: 5371,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'iCarly',
        overview: 'Carly es una estrella cibernética de 13 años que se dio a conocer a través de la página web que creó con unos amigos. La joven, a pesar de su popularidad, intenta aprender a llevar una vida normal.',
        popularity: 362.48,
        poster_path: '/zswxst53aM8g2LysdVbtQNJAiKM.jpg',
        first_air_date: '2007-09-08',
        name: 'iCarly',
        vote_average: 7.977,
        vote_count: 1382,
        character: 'Heather',
        credit_id: '6125083e4a52f80045b8bda9',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/ugYUSzs75Rm2syRuCrBSJAh09lJ.jpg',
        genre_ids: [],
        id: 23521,
        origin_country: [
          'DE'
        ],
        original_language: 'en',
        original_name: "Kids' Choice Awards",
        overview: '',
        popularity: 113.783,
        poster_path: '/7P0uk5BmadKP878JhPrK6KbZDh.jpg',
        first_air_date: '1987-01-18',
        name: "Kids' Choice Awards",
        vote_average: 9,
        vote_count: 11,
        character: 'Self',
        credit_id: '618dabbf2cde980042562ee9',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/bfg3COqQzmaZqqaqmCruKoyjk72.jpg',
        genre_ids: [
          35,
          10763
        ],
        id: 1667,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Saturday Night Live',
        overview: 'Saturday Night Live es un show televisivo nocturno estadounidense, emitido en vivo, que revolucionó la televisión en los años 70 con su combinación de sketches, comedia, variedad, actores, músicos, e invitados especiales. Ha sido una cantera generadora de talentos muy fuerte de varios guinistas, actores, escritores, productores y cantantes. Creado por Lorne Michaels y desarrollado por Dick Ebersol, el programa fue estrenado por la cadena de televisión NBC. Durante más de 30 años, el programa ha presentado personajes locos, situaciones humorísticamente extrañas, parodias de los presidentes y políticos de turno, sarcásticas burlas a celebridades contemporáneas de la música y del cine, y shows musicales en vivo. Su reparto se compone de miembros repertorios, también conocidos como The Not Ready for Prime-Time Players (el nombre del reparto original del programa, que viene a significar «La Compañía No Apta para las Horas de Máxima Audiencia»), y nuevos miembros quienes se conocen como The Featured Players («La Compañía Destacada»).',
        popularity: 472.829,
        poster_path: '/sHGuKFjIBisPk8cvtCZTDVktYfs.jpg',
        first_air_date: '1975-10-11',
        name: 'Saturday Night Live',
        vote_average: 6.9,
        vote_count: 391,
        character: 'Self - Host',
        credit_id: '61ad4a3062e86f008f3d3db2',
        episode_count: 5,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/qBffzkYHN5BkwMQMzobtf3TrqtF.jpg',
        genre_ids: [
          99
        ],
        id: 80480,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Trailblazer Honors',
        overview: '',
        popularity: 24.375,
        poster_path: '/podaRYWoAmSGW7GNjcmKYSJyMLD.jpg',
        first_air_date: '2014-06-27',
        name: 'Trailblazer Honors',
        vote_average: 7.5,
        vote_count: 2,
        character: 'Presenter',
        credit_id: '62ff40eed6819b007a96a84f',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/mofoDq8K1tvhSKE00NrlLkS7Mrg.jpg',
        genre_ids: [
          35,
          16
        ],
        id: 709,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Robot Chicken',
        overview: 'Popular serie americana de animación stop-motion, que parodia películas, videojuegos o personalidades de todo el mundo a través de humor mordaz.',
        popularity: 271.375,
        poster_path: '/lMZv3mJC9QRolgzflM3ajtB3o2U.jpg',
        first_air_date: '2005-02-20',
        name: 'Robot Chicken',
        vote_average: 7.6,
        vote_count: 453,
        character: 'Lois Lane, Bridget von Hammersmark (voice)',
        credit_id: '63cd63b109dda400959223db',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/mofoDq8K1tvhSKE00NrlLkS7Mrg.jpg',
        genre_ids: [
          35,
          16
        ],
        id: 709,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Robot Chicken',
        overview: 'Popular serie americana de animación stop-motion, que parodia películas, videojuegos o personalidades de todo el mundo a través de humor mordaz.',
        popularity: 271.375,
        poster_path: '/lMZv3mJC9QRolgzflM3ajtB3o2U.jpg',
        first_air_date: '2005-02-20',
        name: 'Robot Chicken',
        vote_average: 7.6,
        vote_count: 453,
        character: 'Yori, Janet (voice)',
        credit_id: '63cd63e709dda400cfd93a5b',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/cGQmSoB0e0bpuNJky5xj6U61erq.jpg',
        genre_ids: [
          35
        ],
        id: 4608,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: '30 Rock',
        overview: 'Liz Lemon (Tina Fey), la principal guionista de un show de televisión que consiste en sketches cómicos, debe enfrentarse todos los días a su arrogante nuevo jefe (Alec Baldwin) y a la estrella del programa, al tiempo que trata de conducirlo y conseguir el éxito televisivo sin perder los nervios...',
        popularity: 296.125,
        poster_path: '/eYYQWACx7ttUzRwTNYuo6zveqpE.jpg',
        first_air_date: '2006-10-11',
        name: 'Rockefeller Plaza',
        vote_average: 7.4,
        vote_count: 625,
        character: 'Emma Stone',
        credit_id: '63cd657cd363e5009d6888e6',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/9Lsus3eIlPwtXoJIk5IGM7DWwO8.jpg',
        genre_ids: [
          35,
          10767
        ],
        id: 66623,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Maya & Marty',
        overview: '',
        popularity: 17.645,
        poster_path: '/u6wbOsArJoWoEukj1tdS4zuQ3Py.jpg',
        first_air_date: '2016-05-31',
        name: 'Maya & Marty',
        vote_average: 6,
        vote_count: 10,
        character: 'Various',
        credit_id: '63cd660309dda4009592249a',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/qB0ajoSfmaQWAdmWOoSku08PhsP.jpg',
        genre_ids: [
          35,
          16
        ],
        id: 138600,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Saturday Morning All Star Hits!',
        overview: '',
        popularity: 25.741,
        poster_path: '/vHB2sMGWVjknajaKYhRPutJyQDd.jpg',
        first_air_date: '2021-12-10',
        name: 'Saturday Morning All Star Hits!',
        vote_average: 5.733,
        vote_count: 15,
        character: 'Heather (voice)',
        credit_id: '63cd66976d97e6007c9dfc41',
        episode_count: 5,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/wjrLhvRxOxvfxPmU76Lh98EiWUZ.jpg',
        genre_ids: [
          10767
        ],
        id: 105200,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: '73 Questions',
        overview: '',
        popularity: 82.49,
        poster_path: '/6kxjUczylN29tmikUuet08uODQ2.jpg',
        first_air_date: '2014-03-12',
        name: '73 Questions',
        vote_average: 8.7,
        vote_count: 3,
        character: 'Self',
        credit_id: '64b74cf0eee1860100ea715b',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/zu2vKWoIwdLN8raXNDASmTpawi6.jpg',
        genre_ids: [],
        id: 13667,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'MTV Movie & TV Awards',
        overview: '',
        popularity: 180.12,
        poster_path: '/77FuUQrJVO8GcyCpfHBZOICINwm.jpg',
        first_air_date: '1992-06-10',
        name: 'MTV Movie & TV Awards',
        vote_average: 7.7,
        vote_count: 11,
        character: 'Self / Presenter',
        credit_id: '64ebe05a839018011f8e15d4',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/xCdCsHCH7VCQqaDUPD5tG6omMsB.jpg',
        genre_ids: [
          10767,
          35
        ],
        id: 1489,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Jimmy Kimmel Live!',
        overview: '',
        popularity: 1238.934,
        poster_path: '/hWLCBGQ2RFpjXyaKRMbL5bGEEDT.jpg',
        first_air_date: '2003-01-26',
        name: 'Jimmy Kimmel Live!',
        vote_average: 5.4,
        vote_count: 137,
        character: 'Self',
        credit_id: '65530e4ad4fe0400c420b462',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/zYyIEC39ui14XWQ8zpNQicl17vb.jpg',
        genre_ids: [
          10767
        ],
        id: 105197,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Variety Studio: Actors on Actors',
        overview: '',
        popularity: 167.993,
        poster_path: '/tnlEfHXo5L7jOdeHiAFOAWW4WoO.jpg',
        first_air_date: '2014-12-21',
        name: 'Variety Studio: Actors on Actors',
        vote_average: 5,
        vote_count: 5,
        character: 'Self',
        credit_id: '657d65e30816c7078b09334a',
        episode_count: 3,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/ikgJMNExTNkLztZOUyyrSIrsYeU.jpg',
        genre_ids: [
          10767
        ],
        id: 239650,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Off Script with The Hollywood Reporter',
        overview: '',
        popularity: 12.235,
        poster_path: '/iM11nrgp0kcl3k68JZjV796T1T6.jpg',
        first_air_date: '2023-12-31',
        name: 'Off Script with The Hollywood Reporter',
        vote_average: 0,
        vote_count: 0,
        character: 'Self',
        credit_id: '6585eba8ea7b0e5f498f3823',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/dfX2UaHVE5c7kLBFbgmEZJuy4Ev.jpg',
        genre_ids: [
          10767,
          35
        ],
        id: 61818,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Late Night with Seth Meyers',
        overview: '',
        popularity: 1000.196,
        poster_path: '/x5asOuPOjW21e0Ykkvkuzu1TGEl.jpg',
        first_air_date: '2014-02-25',
        name: 'Late Night with Seth Meyers',
        vote_average: 5.5,
        vote_count: 76,
        character: 'Self',
        credit_id: '65a5df7c97a4e6012e4f4b6c',
        episode_count: 1,
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg',
        genre_ids: [
          35,
          10767
        ],
        id: 63770,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Late Show with Stephen Colbert',
        overview: '',
        popularity: 2783.85,
        poster_path: '/9jkThAGYj2yp8jsS6Nriy5mzKFT.jpg',
        first_air_date: '2015-09-08',
        name: 'The Late Show with Stephen Colbert',
        vote_average: 6.508,
        vote_count: 238,
        character: 'Self',
        credit_id: '65b518d91c635b01621306fa',
        episode_count: 1,
        media_type: 'tv'
      }
    ],
    crew: [
      {
        adult: false,
        backdrop_path: '/sx8dsHlsZAoT1BbWDwFGDgWAOlZ.jpg',
        genre_ids: [
          18,
          35
        ],
        id: 691422,
        original_language: 'en',
        original_title: 'When You Finish Saving the World',
        overview: 'Evelyn y su inconsciente hijo Ziggy buscan sustitutos el uno para el otro, ya que Evelyn trata desesperadamente de criar a un adolescente sin pretensiones en su refugio, mientras que Ziggy se desvive por una joven brillante en la escuela.',
        popularity: 24.112,
        poster_path: '/6piyB7y6glrXSgd2o5nB7RdpIxZ.jpg',
        release_date: '2023-01-20',
        title: 'Cuando termines de salvar el mundo',
        video: false,
        vote_average: 5.831,
        vote_count: 65,
        credit_id: '5e8f6026d35dea001173d0c4',
        department: 'Production',
        job: 'Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          35,
          28
        ],
        id: 799312,
        original_language: 'en',
        original_title: 'Little White Corvette',
        overview: '',
        popularity: 1.4,
        poster_path: null,
        release_date: '',
        title: 'Little White Corvette',
        video: false,
        vote_average: 0,
        vote_count: 0,
        credit_id: '6032ce375c3247003edec5e6',
        department: 'Production',
        job: 'Executive Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/kmuSGNlF9mfNHIDOEVEWPj6f3Ak.jpg',
        genre_ids: [
          35,
          80
        ],
        id: 337404,
        original_language: 'en',
        original_title: 'Cruella',
        overview: 'Ambientada en el Londres de los años 70, en plena revolución del punk rock, muestra a una joven estafadora llamada Estella, una chica inteligente y creativa, decidida a convertirse en una exitosa diseñadora de moda, que se asocia con un par de ladrones para sobrevivir en las calles de la capital británica. Pero cuando su talento para la moda llama la atención de la legendaria diseñadora, la Baronesa von Hellman, Estella cambia el rumbo de su vida hasta que una serie de acontecimientos y revelaciones que harán que Estella asuma su lado malvado y se convierta en la estridente, moderna y vengativa Cruella de Vil.',
        popularity: 99.234,
        poster_path: '/tNFBP5OTmKm7CTc5ptUwgmepd8G.jpg',
        release_date: '2021-05-26',
        title: 'Cruella',
        video: false,
        vote_average: 8,
        vote_count: 8836,
        credit_id: '60ef714f134d58005d52e2fa',
        department: 'Production',
        job: 'Executive Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/wAfLfqAYZ0Hc5z8LaNRQugLjFis.jpg',
        genre_ids: [
          35
        ],
        id: 852247,
        original_language: 'en',
        original_title: 'Problemista',
        overview: '',
        popularity: 26.17,
        poster_path: '/wDnqUnU657BLdaibGZqwCjV3yrC.jpg',
        release_date: '2024-03-01',
        title: 'Problemista',
        video: false,
        vote_average: 0,
        vote_count: 0,
        credit_id: '60f6354c8258fc005c1bd0bd',
        department: 'Production',
        job: 'Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/mhqaXKEr1ONiHnaXvEAj7lSMEUQ.jpg',
        genre_ids: [
          878,
          10749,
          35
        ],
        id: 792307,
        original_language: 'en',
        original_title: 'Poor Things',
        overview: 'Bella Baxter es una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender. Hambrienta de la mundanidad que le falta, Bella se escapa con Duncan Wedderburn, un sofisticado y perverso abogado, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella se vuelve firme en su propósito de defender la igualdad y la liberación.',
        popularity: 858.647,
        poster_path: '/xbfzQ7Q7qmDUf50eZH8C57Ygx6n.jpg',
        release_date: '2023-12-07',
        title: 'Pobres criaturas',
        video: false,
        vote_average: 8.103,
        vote_count: 1434,
        credit_id: '6132bbbdcede69002a11ef09',
        department: 'Production',
        job: 'Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [
          80,
          35
        ],
        id: 836454,
        original_language: 'en',
        original_title: 'Cruella 2',
        overview: "Secuela de la película de 2021 'Cruella'.",
        popularity: 14.297,
        poster_path: '/6aPwIABk9bhSxBcRQ9TUzKqdhBe.jpg',
        release_date: '',
        title: 'Cruella 2',
        video: false,
        vote_average: 0,
        vote_count: 0,
        credit_id: '6165f70e6728a800431e141f',
        department: 'Production',
        job: 'Executive Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/fViElUGfdoZjtnVxvSpJX8TwxY6.jpg',
        genre_ids: [
          35,
          18
        ],
        id: 1013850,
        original_language: 'en',
        original_title: 'A Real Pain',
        overview: '',
        popularity: 5.747,
        poster_path: '/lEv6H294o3JDM3y1PfJTlKGqHjf.jpg',
        release_date: '2024-01-20',
        title: 'A Real Pain',
        video: false,
        vote_average: 8,
        vote_count: 1,
        credit_id: '63005685bf31f2007de72a42',
        department: 'Production',
        job: 'Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/5BRjNDOxqQNpPL5Z2kO0SJH1aCx.jpg',
        genre_ids: [
          18,
          27
        ],
        id: 858017,
        original_language: 'en',
        original_title: 'I Saw the TV Glow',
        overview: '',
        popularity: 7.328,
        poster_path: '/68LPxvRQQihxgQjXw5MswTjBuR7.jpg',
        release_date: '2024-05-03',
        title: 'I Saw the TV Glow',
        video: false,
        vote_average: 0,
        vote_count: 0,
        credit_id: '65b707711089ba00c1f6ed72',
        department: 'Production',
        job: 'Producer',
        media_type: 'movie'
      },
      {
        adult: false,
        backdrop_path: '/t5Mf1lc2bBC0WoOkx89Fj8e7zYK.jpg',
        genre_ids: [
          35,
          18,
          10765
        ],
        id: 73411,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'Maniac',
        overview: 'Relata las aventuras fantásticas de un paciente (Jonah Hill) que escapa de su vida recreando un mundo de fantasía dentro de su mente',
        popularity: 54.774,
        poster_path: '/kCNl4QPstAqChFD0NnLpbDFG8ul.jpg',
        first_air_date: '2018-09-21',
        name: 'Maniac',
        vote_average: 7.387,
        vote_count: 742,
        credit_id: '5ba8e41a0e0a2635e1051501',
        department: 'Production',
        episode_count: 10,
        job: 'Executive Producer',
        media_type: 'tv'
      },
      {
        adult: false,
        backdrop_path: '/vi5RvXvMU1wT7bvNwQ69MPKyjCi.jpg',
        genre_ids: [
          35,
          18
        ],
        id: 114655,
        origin_country: [
          'US'
        ],
        original_language: 'en',
        original_name: 'The Curse',
        overview: 'Una supuesta maldición perturba la relación de una pareja de recién casados que intentan concebir un hijo mientras coprotagonizan su nuevo y problemático programa de HGTV.',
        popularity: 64.393,
        poster_path: '/k2qJPaGFdyFXEEJpwG5HrmeNpjv.jpg',
        first_air_date: '2023-11-12',
        name: 'La maldición',
        vote_average: 7,
        vote_count: 61,
        credit_id: '600e9413d70594003c2423d4',
        department: 'Production',
        episode_count: 10,
        job: 'Executive Producer',
        media_type: 'tv'
      }
    ]
  },
  images: {
    profiles: [
      {
        aspect_ratio: 0.667,
        height: 2100,
        iso_639_1: null,
        file_path: '/eWjkPYeXxPhE2F9J3Ui6E9OWVXy.jpg',
        vote_average: 5.416,
        vote_count: 36,
        width: 1401
      },
      {
        aspect_ratio: 0.667,
        height: 1500,
        iso_639_1: null,
        file_path: '/ltYgUCq2Y63wiyiPp0ROUV4QqDn.jpg',
        vote_average: 5.374,
        vote_count: 39,
        width: 1000
      },
      {
        aspect_ratio: 0.667,
        height: 1237,
        iso_639_1: null,
        file_path: '/3UaYw9KF4fEXRMRWhf25aGJpAW2.jpg',
        vote_average: 5.314,
        vote_count: 30,
        width: 825
      },
      {
        aspect_ratio: 0.667,
        height: 1237,
        iso_639_1: null,
        file_path: '/cZ8a3QvAnj2cgcgVL6g4XaqPzpL.jpg',
        vote_average: 5.278,
        vote_count: 104,
        width: 825
      },
      {
        aspect_ratio: 0.667,
        height: 1800,
        iso_639_1: null,
        file_path: '/6n3aRnB1tM7Bx42RGejqhNiSaAA.jpg',
        vote_average: 5.238,
        vote_count: 57,
        width: 1200
      },
      {
        aspect_ratio: 0.667,
        height: 1024,
        iso_639_1: null,
        file_path: '/wu3XRFnh7IPpVTi34W54fagRXeE.jpg',
        vote_average: 5.186,
        vote_count: 20,
        width: 683
      },
      {
        aspect_ratio: 0.667,
        height: 3000,
        iso_639_1: null,
        file_path: '/479f0sax0y2JYnVePMJw3l0yZ1n.jpg',
        vote_average: 5.146,
        vote_count: 10,
        width: 2000
      },
      {
        aspect_ratio: 0.667,
        height: 762,
        iso_639_1: null,
        file_path: '/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg',
        vote_average: 5.138,
        vote_count: 88,
        width: 508
      },
      {
        aspect_ratio: 0.666,
        height: 1952,
        iso_639_1: null,
        file_path: '/dkDHFn0a391dUzoNzvYZ7S4Mp6i.jpg',
        vote_average: 5.134,
        vote_count: 60,
        width: 1301
      },
      {
        aspect_ratio: 0.667,
        height: 2100,
        iso_639_1: null,
        file_path: '/aovYGvXPnhUQtAa7CkC6qlcPuvC.jpg',
        vote_average: 5.128,
        vote_count: 45,
        width: 1400
      },
      {
        aspect_ratio: 0.667,
        height: 3000,
        iso_639_1: null,
        file_path: '/wqEypkRUUZEcFmPV4O4JpZznmNk.jpg',
        vote_average: 5.1,
        vote_count: 13,
        width: 2000
      },
      {
        aspect_ratio: 0.667,
        height: 1620,
        iso_639_1: null,
        file_path: '/fskoy9QygLcqqlP0omG2Zm60PBS.jpg',
        vote_average: 5.078,
        vote_count: 20,
        width: 1080
      },
      {
        aspect_ratio: 0.667,
        height: 1500,
        iso_639_1: null,
        file_path: '/oIxd8aCMMjI5XBQtdt0Y1uDfHuf.jpg',
        vote_average: 5.068,
        vote_count: 29,
        width: 1000
      },
      {
        aspect_ratio: 0.667,
        height: 1080,
        iso_639_1: null,
        file_path: '/ox0XFS7fUZhlg90c99o6S9KQe15.jpg',
        vote_average: 5.068,
        vote_count: 7,
        width: 720
      },
      {
        aspect_ratio: 0.666,
        height: 950,
        iso_639_1: null,
        file_path: '/elDuP7PNuJTT0nmhzJz4jcrVR1R.jpg',
        vote_average: 5.06,
        vote_count: 60,
        width: 633
      },
      {
        aspect_ratio: 0.667,
        height: 900,
        iso_639_1: null,
        file_path: '/tWoSlj6TaZU5sfHYiXvexZUL5Nv.jpg',
        vote_average: 5.056,
        vote_count: 5,
        width: 600
      },
      {
        aspect_ratio: 0.667,
        height: 1500,
        iso_639_1: null,
        file_path: '/lhjnYohEn2HflqCEnWuuilcNUsj.jpg',
        vote_average: 5.018,
        vote_count: 39,
        width: 1000
      },
      {
        aspect_ratio: 0.667,
        height: 1800,
        iso_639_1: null,
        file_path: '/2uY2tddFGWpb7hg3L1BzYGCruyX.jpg',
        vote_average: 4.996,
        vote_count: 6,
        width: 1200
      },
      {
        aspect_ratio: 0.667,
        height: 1072,
        iso_639_1: null,
        file_path: '/dftbaSL2NebiWWQPcKzJy54Wsu7.jpg',
        vote_average: 4.92,
        vote_count: 21,
        width: 715
      },
      {
        aspect_ratio: 0.667,
        height: 2100,
        iso_639_1: null,
        file_path: '/cfuy05nekjGIGcFphgId1GazObM.jpg',
        vote_average: 4.714,
        vote_count: 16,
        width: 1400
      },
      {
        aspect_ratio: 0.667,
        height: 1440,
        iso_639_1: null,
        file_path: '/iQ3c0eDn9yjmQDRmKunoGxFoNGt.jpg',
        vote_average: 4.674,
        vote_count: 12,
        width: 960
      }
    ]
  }
}

const combined = [
  {
    adult: false,
    backdrop_path: '/7RKUNTLzTaQSA8XgDasl0BjKWqS.jpg',
    genre_ids: [
      35
    ],
    id: 37735,
    original_language: 'en',
    original_title: 'Easy A',
    overview: 'El guión, obra del dramaturgo Bert V. Royal, es una versión moderna y en clave estudiantil de “La letra escarlata”, la novela de Nathaniel Hawthorne. Narra la historia de una joven que decide fingir que lleva una vida promiscua, creyendo que así obtendrá algún tipo de beneficio. Sin embargo, las circunstancias se volverán en su contra.',
    popularity: 34.436,
    poster_path: '/vSK2jgl4Xg0wNi6OyVjBLVv70Mq.jpg',
    release_date: '2010-09-16',
    title: 'Rumores y mentiras',
    video: false,
    vote_average: 6.811,
    vote_count: 6640,
    character: 'Olive Penderghast',
    credit_id: '52fe466a9251416c91053ba9',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/wyvUmyzqGOBDyqLHRSukGDjI7bH.jpg',
    genre_ids: [
      18
    ],
    id: 50014,
    original_language: 'en',
    original_title: 'The Help',
    overview: 'Mississippi, años 60. Skeeter es una joven sureña que regresa de la universidad decidida a convertirse en escritora. Su llegada altera la vida de la ciudad e incluso la de sus amigos porque se ha propuesto entrevistar a las mujeres negras que se han pasado la vida al servicio de las grandes familias sufriendo todas las formas de discriminación racial.',
    popularity: 50.231,
    poster_path: '/7V5sfN6fNNXvDdr9BPIIIOtPWOp.jpg',
    release_date: '2011-08-09',
    title: 'Criadas y señoras',
    video: false,
    vote_average: 8.203,
    vote_count: 7784,
    character: 'Eugenia "Skeeter" Phelan',
    credit_id: '52fe47b5c3a36847f814403f',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/kjTGuAeMsTTRxiHFSzj2T1zyUwH.jpg',
    genre_ids: [
      35
    ],
    id: 87818,
    original_language: 'en',
    original_title: 'Movie 43',
    overview: 'Serie de sketches cómicos que cuentan 14 disparatadas historias, dirigidas entre otros por los Hermanos Farrelly y con un reparto coral espectacular, todas conectadas entre sí y cada cual más hilarante que la anterior. Desde cómo fracasa una cita de dos jóvenes cuando la chica se convierte en “mujer” hasta la cita rápida de un superhéroe.',
    popularity: 31.594,
    poster_path: '/rWvr31yNd9VZ1VVk6sd3iWw8mua.jpg',
    release_date: '2013-01-24',
    title: 'Movie 43',
    video: false,
    vote_average: 4.582,
    vote_count: 2201,
    character: 'Veronica (segment "Veronica")',
    credit_id: '52fe49d79251416c910ba9a9',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/wCHJuJwEfOrrykgDas8T4m79Bzs.jpg',
    genre_ids: [
      18,
      35,
      36
    ],
    id: 369192,
    original_language: 'en',
    original_title: 'Battle of the Sexes',
    overview: "Crónica de la rivalidad existente entre el extenista profesional, de 55 años, Bobby Riggs, y su oponente de 29 años de edad, la carismática tenista Billie Jean King, quienes se enfrentaron en un partido legendario en 1973. Entonces se quería conocer si una tenista profesional podía realmente vencer a un hombre (aunque éste ya se hubiese retirado de las pistas). El evento atrajo a más de 50 millones de estadounidenses y que se publicitó como 'La batalla de sexos'.",
    popularity: 14.007,
    poster_path: '/sixfgP0CaPT9GhUMZCyPkVVFp9R.jpg',
    release_date: '2017-09-22',
    title: 'La batalla de los sexos',
    video: false,
    vote_average: 6.776,
    vote_count: 1785,
    character: 'Billie Jean King',
    credit_id: '564d54b09251416de3005a66',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/kmuSGNlF9mfNHIDOEVEWPj6f3Ak.jpg',
    genre_ids: [
      35,
      80
    ],
    id: 337404,
    original_language: 'en',
    original_title: 'Cruella',
    overview: 'Ambientada en el Londres de los años 70, en plena revolución del punk rock, muestra a una joven estafadora llamada Estella, una chica inteligente y creativa, decidida a convertirse en una exitosa diseñadora de moda, que se asocia con un par de ladrones para sobrevivir en las calles de la capital británica. Pero cuando su talento para la moda llama la atención de la legendaria diseñadora, la Baronesa von Hellman, Estella cambia el rumbo de su vida hasta que una serie de acontecimientos y revelaciones que harán que Estella asuma su lado malvado y se convierta en la estridente, moderna y vengativa Cruella de Vil.',
    popularity: 86.656,
    poster_path: '/tNFBP5OTmKm7CTc5ptUwgmepd8G.jpg',
    release_date: '2021-05-26',
    title: 'Cruella',
    video: false,
    vote_average: 8.029,
    vote_count: 8848,
    character: 'Estella / Cruella',
    credit_id: '59a50d419251412f02004a64',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/dTBlaTqKYFrXX5BWKY96xKqiXs.jpg',
    genre_ids: [
      18,
      9648
    ],
    id: 747225,
    original_language: 'el',
    original_title: 'Βληχή',
    overview: '',
    popularity: 7.467,
    poster_path: '/svedmfoPt8JgdWOIA1vHQB0rNzG.jpg',
    release_date: '2022-05-06',
    title: 'Bleat (Vlihi)',
    video: false,
    vote_average: 5.8,
    vote_count: 3,
    character: 'Woman',
    credit_id: '60217c4f95c0af003e505428',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/lXkOMo50HEAmWVG1QecdPJ5vi6T.jpg',
    genre_ids: [
      16,
      35,
      10751
    ],
    id: 801876,
    original_language: 'en',
    original_title: "Dear Diary: World's First Pranks",
    overview: '',
    popularity: 2.524,
    poster_path: '/1zCHghX3Nmy55UerNxd8cFLNXzh.jpg',
    release_date: '2021-02-09',
    title: 'Querido diario: Las primeras bromas del mundo',
    video: false,
    vote_average: 5.7,
    vote_count: 10,
    character: 'Eep (voice)',
    credit_id: '60687da2d036b6003fb5831b',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      80,
      35
    ],
    id: 836454,
    original_language: 'en',
    original_title: 'Cruella 2',
    overview: "Secuela de la película de 2021 'Cruella'.",
    popularity: 15.073,
    poster_path: '/6aPwIABk9bhSxBcRQ9TUzKqdhBe.jpg',
    release_date: '',
    title: 'Cruella 2',
    video: false,
    vote_average: 0,
    vote_count: 0,
    character: 'Cruella de Vil',
    credit_id: '60babddaf5f1c5002a37311c',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      35
    ],
    id: 659809,
    original_language: 'en',
    original_title: 'iPhone Murder Apps',
    overview: '',
    popularity: 1.493,
    poster_path: '/wngwNEEOoWObkQnvZl78yaBEApR.jpg',
    release_date: '2010-07-28',
    title: 'iPhone Murder Apps',
    video: true,
    vote_average: 5,
    vote_count: 2,
    character: 'Herself',
    credit_id: '6216b9524284ea001ae5eaa0',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/o6e8Y0Q7RZIWi4qcJq4s5OYOVJs.jpg',
    genre_ids: [
      878,
      10749,
      35
    ],
    id: 792307,
    original_language: 'en',
    original_title: 'Poor Things',
    overview: 'Bella Baxter es una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter. Bajo la protección de Baxter, Bella está ansiosa por aprender. Hambrienta de la mundanidad que le falta, Bella se escapa con Duncan Wedderburn, un sofisticado y perverso abogado, en una aventura vertiginosa a través de los continentes. Libre de los prejuicios de su época, Bella se vuelve firme en su propósito de defender la igualdad y la liberación.',
    popularity: 1680.818,
    poster_path: '/xbfzQ7Q7qmDUf50eZH8C57Ygx6n.jpg',
    release_date: '2023-12-07',
    title: 'Pobres criaturas',
    video: false,
    vote_average: 8.032,
    vote_count: 1700,
    character: 'Bella Baxter',
    credit_id: '62eb08b38566d2005a484669',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      18,
      35
    ],
    id: 1029955,
    original_language: 'en',
    original_title: 'Kinds of Kindness',
    overview: '',
    popularity: 6.049,
    poster_path: '/iJ28sPYuNTIkEjUw2ZFq7KrKJpv.jpg',
    release_date: '',
    title: 'Kinds of Kindness',
    video: false,
    vote_average: 0,
    vote_count: 0,
    character: '',
    credit_id: '6335dee0cca7de007cd8fd3e',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      35,
      9648,
      37,
      27
    ],
    id: 648878,
    original_language: 'en',
    original_title: 'Eddington',
    overview: 'La produccion comenzara en marzo 2024',
    popularity: 4.972,
    poster_path: null,
    release_date: '',
    title: 'Eddington',
    video: false,
    vote_average: 0,
    vote_count: 0,
    character: 'Lindsay',
    credit_id: '654aec3467b61300e5dc3cc8',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      99
    ],
    id: 1204430,
    original_language: 'en',
    original_title: 'The Making of Easy A',
    overview: '',
    popularity: 0.932,
    poster_path: '/vMukQ6mUAX6sbhCuFaWycP0wRI9.jpg',
    release_date: '2010-12-21',
    title: 'The Making of Easy A',
    video: true,
    vote_average: 4,
    vote_count: 1,
    character: 'Self',
    credit_id: '6551b4e80816c700e0174c2e',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      53,
      35,
      878
    ],
    id: 701387,
    original_language: 'en',
    original_title: 'Save the Green Planet',
    overview: '',
    popularity: 4.03,
    poster_path: '/xWchrQHWhLsuZ008IknWQgE6fsQ.jpg',
    release_date: '',
    title: 'Save the Green Planet',
    video: false,
    vote_average: 0,
    vote_count: 0,
    character: '',
    credit_id: '65d4e0d4bbe1dd017d5fccbf',
    order: 0,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/zQ9riDbqJ2i6pUbLEZDEMubfQMU.jpg',
    genre_ids: [
      35,
      18
    ],
    id: 39414,
    original_language: 'en',
    original_title: 'Paper Man',
    overview: 'Paper Man es una comedia dramática que nos habla de un escritor que pasa por una mala racha creativa. Cuenta con la ayuda de su amigo imaginario, un superhéroe de aspecto verdaderamente pintoresco. Su esposa, preocupada por él, le lleva hasta su casa en el campo para que, en medio de la naturaleza, pueda reencontrarse con la inspiración perdida.',
    popularity: 9.934,
    poster_path: '/BKaXYV4lujFxmzhwpLrMLGsYx6.jpg',
    release_date: '2009-06-15',
    title: 'Paper Man',
    video: false,
    vote_average: 6.284,
    vote_count: 310,
    character: 'Abby',
    credit_id: '52fe47179251416c91069c5f',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/bNgqt819qpHcszjCzLCG5y16ldF.jpg',
    genre_ids: [
      16,
      12,
      10751,
      14,
      35,
      28
    ],
    id: 49519,
    original_language: 'en',
    original_title: 'The Croods',
    overview: 'La película está ambientada en la prehistoria, donde Crug lidera a su familia más allá de la comodidad de su hogar después de que este sea destruido por un gran terremoto. Mientras intentan viajar por el desconocido y aterrador mundo, se encuentran con un nómada que cautiva a su clan, en especial a su hermana mayor, con su mente moderna.',
    popularity: 45.331,
    poster_path: '/3X3qtBTgKt5mCB30RJwbIjgjzdw.jpg',
    release_date: '2013-03-15',
    title: 'Los Croods',
    video: false,
    vote_average: 6.9,
    vote_count: 6784,
    character: 'Eep Crood (voice)',
    credit_id: '52fe4799c3a36847f813e4fb',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/hDvqcbZhq9ux0euxYxCP9N6m1Rh.jpg',
    genre_ids: [
      28,
      12,
      878
    ],
    id: 102382,
    original_language: 'en',
    original_title: 'The Amazing Spider-Man 2',
    overview: 'Peter Parker lleva una vida muy ocupada, compaginando su tiempo entre su papel como Spider-Man, acabando con los malos, y en el instituto con la persona a la que quiere, Gwen. Peter no ve el momento de graduarse. No ha olvidado la promesa que le hizo al padre de Gwen de protegerla, manteniéndose lejos de ella, pero es una promesa que simplemente no puede cumplir. Las cosas cambiarán para Peter cuando aparece un nuevo villano, Electro, y un viejo amigo, Harry Osborn, regresa, al tiempo que descubre nuevas pistas sobre su pasado.',
    popularity: 86.026,
    poster_path: '/pyxjizLYG86Bxl4mntCWaWXZAko.jpg',
    release_date: '2014-04-16',
    title: 'The Amazing Spider-Man 2: El poder de Electro',
    video: false,
    vote_average: 6.508,
    vote_count: 12682,
    character: 'Gwen Stacy',
    credit_id: '52fe4a07c3a36847f81b4777',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/sxskOU71CO8LaNX2LOtjYFUtKv7.jpg',
    genre_ids: [
      28,
      12,
      878
    ],
    id: 1930,
    original_language: 'en',
    original_title: 'The Amazing Spider-Man',
    overview: 'Un estudiante de secundaria que fue abandonado por sus padres cuando era niño, dejándolo a cargo de su tío Ben (Martin Sheen) y su tía May (Sally Field). Como la mayoría de los adolescentes de su edad, Peter trata de averiguar quién es y qué quiere llegar a ser. Peter también está encontrando su camino con su primer amor de secundaria, Gwen Stacy (Emma Stone), y juntos luchan por su amor con compromiso. Cuando Peter descubre un misterioso maletín que perteneció a su padre, comienza la búsqueda para entender la desaparición de sus padres, una búsqueda que le lleva directamente a Oscorp, el laboratorio del Dr Curt Connors (Rhys Ifans), ex-compañero de trabajo de su padre. Mientras Spider-Man se encuentra en plena colisión con el alter-ego de Connors, el Lagarto, Peter hará elecciones que alterarán sus opciones para usar sus poderes y darán forma a un destino héroico.',
    popularity: 85.048,
    poster_path: '/9MsCANWyLJmz2MAEqiy9vKMpyc8.jpg',
    release_date: '2012-06-23',
    title: 'The Amazing Spider-Man',
    video: false,
    vote_average: 6.7,
    vote_count: 16722,
    character: 'Gwen Stacy',
    credit_id: '531325e8c3a36829ef003f5b',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/eIOLmLhRQPC44u5YyyPVw6BNhFZ.jpg',
    genre_ids: [
      35,
      18,
      10749
    ],
    id: 229297,
    original_language: 'en',
    original_title: 'Magic in the Moonlight',
    overview: 'En la Francia de los años 20, durante la época dorada del jazz, un mago inglés está decidido a desenmascarar a una falsa médium. Esto desencadenará una serie de hechos mágicos que sacudirán la vida de ambos.',
    popularity: 19.161,
    poster_path: '/xBcwa6DlVVojiT2C76KM8YjfTVQ.jpg',
    release_date: '2014-07-25',
    title: 'Magia a la luz de la luna',
    video: false,
    vote_average: 6.5,
    vote_count: 2005,
    character: 'Sophie Baker',
    credit_id: '52fe4eea9251416c75166c8d',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/pDqwUJJSaHIv2sxyRYfmYBFeU9C.jpg',
    genre_ids: [
      18,
      35
    ],
    id: 194662,
    original_language: 'en',
    original_title: 'Birdman or (The Unexpected Virtue of Ignorance)',
    overview: 'Después de hacerse famoso interpretando a un célebre superhéroe, un actor trata de darle un nuevo rumbo a su vida, recuperando a su familia y preparándose para el estreno de una obra teatral en Broadway.',
    popularity: 44.511,
    poster_path: '/lJxWFRrQIOphpD3oPjD0J0d9JYY.jpg',
    release_date: '2014-10-17',
    title: 'Birdman o (la inesperada virtud de la ignorancia)',
    video: false,
    vote_average: 7.467,
    vote_count: 12397,
    character: 'Sam Thomson',
    credit_id: '52fe4cf29251416c9110564b',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/1Z9wc3ZJpYTmUAEYi5PXhxup6kp.jpg',
    genre_ids: [
      18,
      35,
      10749
    ],
    id: 222936,
    original_language: 'en',
    original_title: 'Aloha',
    overview: 'Un contratista en materia de defensa, Brian Gilcrest (Bradley Cooper), supervisa el lanzamiento de un satélite desde Hawai junto a una piloto de las Fuerzas Aéreas, Allison Ng (Emma Stone), por la que comienza a sentir algo. Además en la isla se reencontrará con el viejo amor de su vida, Tracy Woodside (Rachel McAdams), ahora casada y con dos hijos.',
    popularity: 13.114,
    poster_path: '/AmTchyxSeCWc24vZAYT37cSL1pa.jpg',
    release_date: '2015-05-29',
    title: 'Aloha',
    video: false,
    vote_average: 5.492,
    vote_count: 1940,
    character: 'Captain Allison Ng',
    credit_id: '54cd44f99251414755001d5f',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/igTAlETp0TI24SbZdQxt8EM1bcA.jpg',
    genre_ids: [
      18,
      35,
      80
    ],
    id: 282984,
    original_language: 'en',
    original_title: 'Irrational Man',
    overview: 'Abe Lucas, un profesor de filosofía en plena crisis existencial, le encuentra de nuevo sentido a la vida al enamorarse de una de sus alumnas. Al poco de llegar a la universidad de una pequeña ciudad, se relaciona con dos mujeres: Rita Richards, una solitaria profesora que busca que la rescate de su infeliz matrimonio; y Jill Pollard, su mejor estudiante y muy pronto su amiga más cercana. Jill está enamorada de su novio, pero encuentra tan irresistible la personalidad atormentada de Abe que, incluso cuando el profesor muestra claros síntomas de desequilibrio mental, su fascinación por él no hace más que crecer.',
    popularity: 13.874,
    poster_path: '/ipAqhEWRzEuD6aXlAWIvEEF1KUe.jpg',
    release_date: '2015-07-17',
    title: 'Irrational Man',
    video: false,
    vote_average: 6.535,
    vote_count: 2296,
    character: 'Jill',
    credit_id: '53ccb96ec3a368777a002227',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/ph5fElfh4U7O3jwhFljxz2LDp1l.jpg',
    genre_ids: [
      18,
      35,
      53
    ],
    id: 375262,
    original_language: 'en',
    original_title: 'The Favourite',
    overview: 'Principios del siglo XVIII. Inglaterra está en guerra con los franceses. Una reina debilitada, Anne (Olivia Colman), ocupa el trono y su amiga Lady Sarah (Rachel Weisz) gobierna el país en su ausencia, debido a su estado de salud y a su carácter inestable. Cuando una nueva sirvienta aparece, Abigail (Emma Stone), su encanto seduce a Sarah. Sarah ayuda a Abigail y ésta ve una oportunidad para regresar a sus raíces aristocráticas. Como la política ocupa gran parte del tiempo de Sarah, Abigail empieza a acompañar con más frecuencia a la Reina. Desarrollarán una amistad que Abigail aprovechará para saciar sus ambiciones.',
    popularity: 32.007,
    poster_path: '/mirzwvOh7s5HN0vC7b7H6WMkO6X.jpg',
    release_date: '2018-11-23',
    title: 'La favorita',
    video: false,
    vote_average: 7.521,
    vote_count: 5140,
    character: 'Abigail',
    credit_id: '568645e0c3a368607501da1f',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/nlPCdZlHtRNcF6C9hzUH4ebmV1w.jpg',
    genre_ids: [
      35,
      18,
      10749,
      10402
    ],
    id: 313369,
    original_language: 'en',
    original_title: 'La La Land',
    overview: 'Mia, una joven aspirante a actriz que compagina los castings con su trabajo de camarera, y Sebastian, un pianista de jazz que se gana la vida tocando en sórdidos tugurios, se enamoran. Pero la gran ambición por llegar a la cima en sus carreras artísticas amenaza con separarlos.',
    popularity: 60.348,
    poster_path: '/7pFsAaJmiOppVHcldBzg8JKBHwe.jpg',
    release_date: '2016-11-29',
    title: 'La Ciudad De Las Estrellas (La La Land)',
    video: false,
    vote_average: 7.9,
    vote_count: 16055,
    character: 'Mia Dolan',
    credit_id: '575d52e3c3a3684516000671',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/ytTQoYkdpsgtfDWrNFCei8Mfbxu.jpg',
    genre_ids: [
      16,
      10751,
      12,
      14,
      35
    ],
    id: 529203,
    original_language: 'en',
    original_title: 'The Croods: A New Age',
    overview: 'Después de salir de su cueva, los Croods se encuentran con su mayor amenaza desde que se fueron: otra familia llamada Betterman, quienes afirman y demuestran ser mejores y evolucionados. Grug empieza a sospechar de los padres de Betterman, Phil y Hope, ya que planean en secreto separar a su hija Eep con su amado novio Guy para asegurarse de que su hija Dawn tenga un compañero amoroso e inteligente que la proteja.',
    popularity: 70.831,
    poster_path: '/5uMWKEmegf5aTJnp1u98JF4QerP.jpg',
    release_date: '2020-11-25',
    title: 'Los Croods: Una nueva era',
    video: false,
    vote_average: 7.496,
    vote_count: 3647,
    character: 'Eep Crood (voice)',
    credit_id: '5b3527699251413c8201d49f',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/dqXW5kXQeok9AOaAu6WzBW1DkB5.jpg',
    genre_ids: [
      35
    ],
    id: 612392,
    original_language: 'en',
    original_title: 'My Favorite Shapes by Julio Torres',
    overview: 'En este programa de comedia multimedia, Torres explora sus formas favoritas, que incluyen un cuadrado de plexiglás, un triángulo, un óvalo que desearía que fuera un círculo, un cactus consciente de sí mismo y un chocolate Ferrero Rocher con el que Julio está enojado porque dejó a su pequeño falda en casa Los objetos se presentan a través de una cinta transportadora industrial y sirven como punto de partida para historias fantásticas, anécdotas y chistes.',
    popularity: 9.102,
    poster_path: '/v1Bx5clsiLnAmHPOqRIMOnFmKrY.jpg',
    release_date: '2019-08-10',
    title: 'My Favorite Shapes by Julio Torres',
    video: false,
    vote_average: 7.1,
    vote_count: 14,
    character: 'Shoe (voice)',
    credit_id: '5d54e09ebc86576d952bed4c',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      99
    ],
    id: 478253,
    original_language: 'en',
    original_title: 'Rite of Passage: The Amazing Spider-Man Reborn',
    overview: '',
    popularity: 2.859,
    poster_path: '/n7qOW6GkspVb53G92CZMRSwk7Ed.jpg',
    release_date: '2012-11-09',
    title: 'Rite of Passage: The Amazing Spider-Man Reborn',
    video: true,
    vote_average: 7.5,
    vote_count: 12,
    character: 'Herself',
    credit_id: '5da85e15944a570013257ab5',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/tBB7adGGGMgh5pgsenHW8YLuK2s.jpg',
    genre_ids: [
      99,
      10770
    ],
    id: 426222,
    original_language: 'en',
    original_title: 'David Blaine: Beyond Magic',
    overview: '',
    popularity: 5.174,
    poster_path: '/tFdwMujvxiXmoXyngbeBsGVjSee.jpg',
    release_date: '2016-11-16',
    title: 'David Blaine: Beyond Magic',
    video: true,
    vote_average: 7,
    vote_count: 38,
    character: 'Self',
    credit_id: '5ffd8a0594d8a8004128fa3f',
    order: 1,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/vz6iY1MtETWRtZMn379JYZGVCX1.jpg',
    genre_ids: [
      10749,
      35
    ],
    id: 12620,
    original_language: 'en',
    original_title: 'The House Bunny',
    overview: 'Shelly (Anna Faris) es una conejita del Playboy que, tras ser expulsada de la famosa mansión Playboy, y sin sitio donde ir, entra a formar parte de la hermandad Zeta Tau Zeta del campus de la universidad. Allí tendrá mucho que enseñar a sus compañeras de estudios',
    popularity: 20.167,
    poster_path: '/jZL8cARZk08IR7XM4zawfSNjeDg.jpg',
    release_date: '2008-08-22',
    title: 'Una conejita en el campus',
    video: false,
    vote_average: 5.647,
    vote_count: 1827,
    character: 'Natalie',
    credit_id: '52fe45089251416c75049723',
    order: 2,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/oihWVx3imvRKujnGmSDYhfG1gI5.jpg',
    genre_ids: [
      35,
      27
    ],
    id: 19908,
    original_language: 'en',
    original_title: 'Zombieland',
    overview: 'En un mundo plagado de zombis, Columbus es un gallina, un joven que se encuentra aterrorizado por la situación, pero cuando te juegas el ser comido por los zombies, el miedo puede mantenerte vivo. De hecho su cobardía precisamente le ha permitido que sus sesos aún se mantengan en su cabeza. Entonces un día conoce a Tallahassse, un macarra caza zombies cuya única determinación en su vida es lograr el último Twinkie (dulce americano) en la tierra. Cuando ambos unen fuerzas con Wichita y Little Rock, que también han encontrado una manera original de sobrevivir en ese caos, tendrán que elegir qué es peor: si confiar los unos en los otros para sobrevivir o sucumbir ante los zombies.',
    popularity: 45.086,
    poster_path: '/fQAt6ltWR780GUoWXuuEUgxhbgU.jpg',
    release_date: '2009-10-07',
    title: 'Bienvenidos a Zombieland',
    video: false,
    vote_average: 7.261,
    vote_count: 11765,
    character: 'Wichita',
    credit_id: '52fe47f89251416c750ab95d',
    order: 2,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/e7tMI0zVKJB2TS74TaBifIZIkCp.jpg',
    genre_ids: [
      35,
      27
    ],
    id: 338967,
    original_language: 'en',
    original_title: 'Zombieland: Double Tap',
    overview: 'En esta secuela y empleando el característico sentido del humor del que hizo gala "Zombieland", el grupo de protagonistas tendrá que viajar desde la Casa Blanca hasta el corazón de los Estados Unidos, sobreviviendo a nuevas clases de muertos vivientes que han evolucionado desde lo sucedido hace algunos años, así como a algunos supervivientes humanos rezagados. Pero, por encima de todo, tendrán que tratar de soportar los inconvenientes de convivir entre ellos.',
    popularity: 38.227,
    poster_path: '/mIUGQ89isLNj4IRujDsXrZFIZCQ.jpg',
    release_date: '2019-10-09',
    title: 'Zombieland: Mata y remata',
    video: false,
    vote_average: 6.943,
    vote_count: 5375,
    character: 'Wichita',
    credit_id: '5ad39e7ac3a3685c4d0037ae',
    order: 2,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      99
    ],
    id: 638453,
    original_language: 'en',
    original_title: 'The Wages of Heroism: Making The Amazing Spider-Man 2',
    overview: '',
    popularity: 2.387,
    poster_path: '/z5nm4z5dCS06mptUKKJpVBIq1aX.jpg',
    release_date: '2014-08-19',
    title: 'The Wages of Heroism: Making The Amazing Spider-Man 2',
    video: true,
    vote_average: 7.375,
    vote_count: 4,
    character: 'Herself',
    credit_id: '5d9f48aff0647c0029ce99d9',
    order: 2,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/y6YSJ6TpXC1lbn7dF7CQ39g8l5H.jpg',
    genre_ids: [
      35,
      10402
    ],
    id: 10186,
    original_language: 'en',
    original_title: 'The Rocker',
    overview: 'Rob "Fish" Fishman es el baterista en la banda de hair metal de los 80 "Vesuvius". Cuando el grupo firma un contrato con una gran discográfica, lo despiden sin contemplaciones. Tras mantenerse 20 años apartado del mundillo de la música, recibe una segunda oportunidad con la banda de su sobrino.',
    popularity: 24.647,
    poster_path: '/cRWbXeOnqEt9ZIXY2cWXFk8OCGD.jpg',
    release_date: '2008-08-20',
    title: 'Un rockero de pelotas',
    video: false,
    vote_average: 6.015,
    vote_count: 556,
    character: 'Amelia',
    credit_id: '52fe433d9251416c75008d25',
    order: 3,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/cO3EwGUjy5lkDbKrAfJglxs2Acu.jpg',
    genre_ids: [
      10751,
      35
    ],
    id: 38579,
    original_language: 'en',
    original_title: 'Marmaduke',
    overview: "La historia versa sobre un travieso perro de raza Gran Danés que vive con la familia Winslow. Este perro apareció después en varios episodios animados de 'Heathcliff' (Isidoro) y 'Garfield and Friends'. La película mostrará cómo Marmaduke se encuentra tras mudarse de domicilio en medio de una lucha por el territorio entre chuchos callejeros y perros con Pedigree, además de que intentará conquistar a la perra de sus sueños",
    popularity: 15.61,
    poster_path: '/gg6lddIpfuE2zyn8fLn1lC9xUYV.jpg',
    release_date: '2010-06-03',
    title: 'Marmaduke',
    video: false,
    vote_average: 5.256,
    vote_count: 720,
    character: 'Mazie (voice)',
    credit_id: '52fe46c79251416c9105f6c9',
    order: 3,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/9J8dyrMfr0oK9awMjufLDY5L8v0.jpg',
    genre_ids: [
      35,
      18,
      10749
    ],
    id: 50646,
    original_language: 'en',
    original_title: 'Crazy, Stupid, Love.',
    overview: "La situación del cuarentón y puritano Cal Weaver es perfecta: tiene un buen trabajo, una bonita casa y unos hijos estupendos y está casado con el amor de su adolescencia. Sin embargo, cuando Cal se entera de que su esposa, Emily, le ha engañado y quiere divorciarse, su vida 'perfecta' se desmorona. Para colmo, en el actual mundo de los solteros, Cal, que no ha tenido una cita desde hace décadas, es el desastre en persona.",
    popularity: 50.158,
    poster_path: '/gBFzkVslmiHVuwwjJ8cl9JZGrmg.jpg',
    release_date: '2011-07-29',
    title: 'Crazy, Stupid, Love.',
    video: false,
    vote_average: 7.259,
    vote_count: 8066,
    character: 'Hannah Weaver',
    credit_id: '52fe47d0c3a36847f8149a1b',
    order: 3,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      99
    ],
    id: 562517,
    original_language: 'en',
    original_title: 'Birdman: All-Access (A View From the Wings)',
    overview: '',
    popularity: 2.303,
    poster_path: '/78gMxjXcUTbyD0L7c4bACEuSgyM.jpg',
    release_date: '2015-05-18',
    title: 'Birdman: All-Access (A View From the Wings)',
    video: true,
    vote_average: 7.2,
    vote_count: 4,
    character: 'Self',
    credit_id: '5bf051570e0a26266303ed92',
    order: 3,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/eBw5K3pmClsLO7N2FqgthuScKUx.jpg',
    genre_ids: [
      80,
      18,
      28,
      53
    ],
    id: 82682,
    original_language: 'en',
    original_title: 'Gangster Squad',
    overview: "Los Angeles, 1949. Mickey Cohen, originario de Brooklyn, se ha convertido en el gran jefe de la mafia que dirige la ciudad. Todos parece pasar por sus manos: drogas, armas, prostitutas, y cualquier material robado. Se encuentra absolutamente protegido por los miembros de su clan, que lo veneran como a su líder indiscutible, pero no solo eso, pues sus tentáculos van más allá de los bajos fondos: parte del cuerpo de policía y algunos miembros del sector político se encuentran bajo su influjo.  Sin embargo, todavía hay hombres dentro de la brigada policial que no se dejan amedrentar por la corrupción. Es el caso de los sargentos John O'Mara y Jerry Wooters, que contra todo y contra todos, intentarán destruir el imperio del todopoderoso Cohen.",
    popularity: 17.992,
    poster_path: '/1eW9kFSuTQfyMvZKtxlnwKRBvI.jpg',
    release_date: '2013-01-09',
    title: 'Gangster Squad: Brigada de élite',
    video: false,
    vote_average: 6.361,
    vote_count: 3882,
    character: 'Grace Faraday',
    credit_id: '52fe48689251416c9108b7d3',
    order: 4,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      10402
    ],
    id: 567104,
    original_language: 'xx',
    original_title: "Let's Dance",
    overview: '',
    popularity: 10.425,
    poster_path: '/2LlpkPEgW07GfekHxKQsHIJhZdq.jpg',
    release_date: '2018-12-06',
    title: "Let's Dance",
    video: true,
    vote_average: 6.222,
    vote_count: 9,
    character: 'Segment: "Coffee to Go"',
    credit_id: '5c09d294c3a368252003130f',
    order: 4,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/giYuvpmpZbwkT3NtX4WdNYqGhxw.jpg',
    genre_ids: [
      35
    ],
    id: 8363,
    original_language: 'en',
    original_title: 'Superbad',
    overview: 'En una de sus últimas noches como estudiantes del instituto, los amigos e inadaptados Evan y Seth experimentarán una legendaria odisea durante una tarde en la que intentan comprar bebida para una fiesta en la que estarán las chicas de sus sueños. En su peripecia les acompañará el indescriptible McLovin, otro amigo inadaptado que acaba de comprarse un carnet falso: su pasaporte para comprar el alcohol.',
    popularity: 51.473,
    poster_path: '/ftUDFRYywWzajElI2RT9NIno2PS.jpg',
    release_date: '2007-03-20',
    title: 'Supersalidos',
    video: false,
    vote_average: 7.239,
    vote_count: 6903,
    character: 'Jules',
    credit_id: '52fe44a2c3a36847f80a167f',
    order: 6,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/oy9Ox4WGPkOJ3656CNKasVjAnKS.jpg',
    genre_ids: [
      14,
      35,
      10749
    ],
    id: 12556,
    original_language: 'en',
    original_title: 'Ghosts of Girlfriends Past',
    overview: 'Connor Mead (Matthew McConaughey) es un conocido fotógrafo soltero, amante de la libertad e independencia, que es acosado por el fantasma de una novia del pasado en la boda de un hermano menor suyo.',
    popularity: 17.261,
    poster_path: '/qNsZv9ftfjsrymRalyjk9EWeHCC.jpg',
    release_date: '2009-05-01',
    title: 'Los fantasmas de mis exnovias',
    video: false,
    vote_average: 5.964,
    vote_count: 2214,
    character: 'Allison Vandermeersh',
    credit_id: '52fe44fa9251416c750478bd',
    order: 7,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/uvqdgaZLebhWmkFHyjO5XcdFUrd.jpg',
    genre_ids: [
      35,
      10770,
      99
    ],
    id: 992305,
    original_language: 'en',
    original_title: 'Bill Murray: The Kennedy Center Mark Twain Prize',
    overview: '',
    popularity: 1.224,
    poster_path: '/pFam50pISmOgRaPKH2sPMCMjaLR.jpg',
    release_date: '2016-10-28',
    title: 'Bill Murray: The Kennedy Center Mark Twain Prize',
    video: false,
    vote_average: 0,
    vote_count: 0,
    character: 'Self',
    credit_id: '62b7b7cf229ae20067064b88',
    order: 14,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      99
    ],
    id: 587877,
    original_language: 'en',
    original_title: 'The Amazing Spider-Man T4 Premiere Special',
    overview: '',
    popularity: 2.84,
    poster_path: null,
    release_date: '2012-06-30',
    title: 'The Amazing Spider-Man T4 Premiere Special',
    video: true,
    vote_average: 7.8,
    vote_count: 6,
    character: '',
    credit_id: '5c88ffae0e0a260428c1ec35',
    order: 15,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/wD0TCyFkRkol7JkLmO7gp7oZkib.jpg',
    genre_ids: [
      10749,
      35
    ],
    id: 50544,
    original_language: 'en',
    original_title: 'Friends with Benefits',
    overview: 'Narra cómo una relación entre dos jóvenes amigos, Dylan y Jamie, se complica cuando deciden involucrarse románticamente. Pensaban que seguir siendo amigos y tener sexo iba a ser fácil de llevar, pero pronto se darán cuenta de que no lo va a ser tanto.',
    popularity: 37.31,
    poster_path: '/fGPbQpNahUvixeS3l1s4NUoE3bj.jpg',
    release_date: '2011-07-21',
    title: 'Con derecho a roce',
    video: false,
    vote_average: 6.656,
    vote_count: 7613,
    character: 'Kayla',
    credit_id: '52fe47cbc3a36847f8148877',
    order: 16,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/tObVe1R7JnO3VXBvAOWTEPmmegu.jpg',
    genre_ids: [
      99
    ],
    id: 961651,
    original_language: 'en',
    original_title: 'Spider-Man: All Roads Lead to No Way Home',
    overview: 'Desde la trilogía original de Sam Raimi hasta las asombrosas películas de Marc Webb y el trío más reciente del director Jon Watts, llevaremos a los espectadores a través de las estrellas, las acrobacias y la acción, los villanos y los héroes y un homenaje a Stan Lee, junto con algunas sorpresas.',
    popularity: 32.715,
    poster_path: '/y3m8fNP6WnGemSPpEXRLyAaTSA1.jpg',
    release_date: '2022-05-03',
    title: 'Spider-Man: Todos los caminos conducen a No Way Home',
    video: false,
    vote_average: 6.9,
    vote_count: 60,
    character: 'Self (archive footage)',
    credit_id: '629bbdb1992fe60050b42ee2',
    order: 26,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/7SOUwC0hhq37MtcWLfXg5E5ZNXQ.jpg',
    genre_ids: [
      35,
      10402
    ],
    id: 341012,
    original_language: 'en',
    original_title: 'Popstar: Never Stop Never Stopping',
    overview: 'Tras dos años de exitosa gira mundial, Conner 4Real (Andy Samberg) es el nombre más reconocido de la música. Cuando su último disco es un fracaso, su popularidad entra en crisis y todos sus fans, aduladores y rivales, no saben qué hacer con él. Pero finalmente Conner, para levantarse, intentará volver a juntar a su ex-banda de música de cuando era joven.',
    popularity: 17.42,
    poster_path: '/1YFSd5HYNgFOE5UfTFEytP4OLrV.jpg',
    release_date: '2016-06-03',
    title: 'Popstar',
    video: false,
    vote_average: 6.627,
    vote_count: 1179,
    character: 'Claudia Cantrell',
    credit_id: '57572aa2925141123600001e',
    order: 37,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/3YKGMZQ0pwQXSBSASeKlfPlkso7.jpg',
    genre_ids: [
      28,
      35
    ],
    id: 228967,
    original_language: 'en',
    original_title: 'The Interview',
    overview: 'Dave Skylark, presentador de un conocido programa de entrevistas, y su productor, Aaron Rapoport, consiguen una entrevista exclusiva con Kim Jong-Un, dictador de Corea del Norte. Ante tal oportunidad, la CIA les pide un "favorcillo": asesinar a Kim. Pero lo cierto es que Dave y Aaron no son las personas más cualificadas para realizar un magnicidio.',
    popularity: 87.033,
    poster_path: '/bHkF3PQDqnKHdmi2KvdQiFtX8zI.jpg',
    release_date: '2014-12-25',
    title: 'The Interview',
    video: false,
    vote_average: 6.189,
    vote_count: 5513,
    character: 'Emma Stone (uncredited)',
    credit_id: '584677d392514167640202d8',
    order: 59,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      35,
      10770
    ],
    id: 1157462,
    original_language: 'en',
    original_title: 'Saturday Night Live: 40th Anniversary Special',
    overview: '',
    popularity: 4.956,
    poster_path: '/cda1A0SQ0C9511GSCVnEQ0821bh.jpg',
    release_date: '2015-02-15',
    title: 'Saturday Night Live: 40th Anniversary Special',
    video: false,
    vote_average: 8,
    vote_count: 2,
    character: 'Self / Roseanne Roseannadanna',
    credit_id: '64f38270caa50800ab730c2c',
    order: 70,
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/duCmqP1qub3aU5SpLwJlmOMCJ05.jpg',
    genre_ids: [
      35
    ],
    id: 4540,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Lucky Louie',
    overview: '',
    popularity: 26.509,
    poster_path: '/f9YSKUw3rlw2AU4N3FCzrJR4bCM.jpg',
    first_air_date: '2006-06-11',
    name: 'Lucky Louie',
    vote_average: 7.5,
    vote_count: 104,
    character: 'Shannon',
    credit_id: '52576eca760ee36aaa44b21b',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 27713,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The New Partridge Family',
    overview: '',
    popularity: 3.715,
    poster_path: null,
    first_air_date: '2005-01-22',
    name: 'The New Partridge Family',
    vote_average: 0,
    vote_count: 0,
    character: 'Laurie Partridge',
    credit_id: '525887fe760ee3466149bb1f',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/dVpAGo3TT2IjDyRuKwhNfe9E1A5.jpg',
    genre_ids: [
      80,
      18,
      9648,
      10765
    ],
    id: 36,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Medium',
    overview: 'Se inspira en la vida de la medium Allison Dubois. Patricia Arquette interpreta a una mujer casada y madre de tres hijas que intenta comprender sus dotes de medium y su capacidad para comunicarse con los muertos. Su marido (Jake Weber) es un hombre cariñoso que la apoya incondicionalmente. Ambos luchan para encontrar el equilibrio entre la vida familiar y el sobrenatural don de Allison. El fiscal Devalos (Miguel Sandoval) la contrata para utilizar sus poderes en la resolución de casos criminales. (FILMAFFINITY)',
    popularity: 378.236,
    poster_path: '/aqawO5mYblDRwEmHjMiLJa8LyIr.jpg',
    first_air_date: '2005-01-03',
    name: 'Medium',
    vote_average: 7.51,
    vote_count: 487,
    character: 'Cynthia McCallister',
    credit_id: '5253320419c295794001a92f',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/xCdCsHCH7VCQqaDUPD5tG6omMsB.jpg',
    genre_ids: [
      10767,
      35
    ],
    id: 1489,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Jimmy Kimmel Live!',
    overview: '',
    popularity: 1188.694,
    poster_path: '/hWLCBGQ2RFpjXyaKRMbL5bGEEDT.jpg',
    first_air_date: '2003-01-26',
    name: 'Jimmy Kimmel Live!',
    vote_average: 5.4,
    vote_count: 137,
    character: '',
    credit_id: '525707ea760ee3776a039ba1',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/uxida0VTUwvZ33gsnNHuAfH0Ots.jpg',
    genre_ids: [
      10759,
      18
    ],
    id: 2034,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Drive',
    overview: '',
    popularity: 18.505,
    poster_path: '/rNrb6s9WLSiy6CQCvcfrmZKHGM8.jpg',
    first_air_date: '2007-04-13',
    name: 'Drive',
    vote_average: 6.643,
    vote_count: 27,
    character: 'Violet Trimble',
    credit_id: '52571fbe19c295711411bcd9',
    episode_count: 6,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/1axH9IYz5fCHVUDNXLzivKEQObK.jpg',
    genre_ids: [
      10763,
      35
    ],
    id: 2224,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The Daily Show',
    overview: 'Presentado por el humorista Jon Stewart, es el formato de sátira política más popular de la televisión norteamericana. Ha estado en antena en Comedy Central desde 1996 y ha ganado 18 Primetime Emmys. Se autodefine como un programa de noticias falso y enfoca su particular punto de vista en la actualidad, las noticias, los personajes políticos y de los medios de comunicación fundamentalmente con el objetivo de hacer reír. Generalmente el show comienza con un monólogo de Jon Stewart relacionado con los principales titulares de la actualidad. Después de este monólogo da paso a sus numerosos corresponsales y finalmente suele acabar con una entrevista a un personaje conocido.',
    popularity: 4318.471,
    poster_path: '/ixcfyK7it6FjRM36Te4OdblAq4X.jpg',
    first_air_date: '1996-07-22',
    name: 'The Daily Show',
    vote_average: 6.3,
    vote_count: 485,
    character: 'Self',
    credit_id: '5419572cc3a3686d93001029',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/ysaA0BInz4071p3LKqAQnWKZCsK.jpg',
    genre_ids: [
      10751,
      35,
      18
    ],
    id: 2004,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Malcolm in the Middle',
    overview: 'Sitcom familiar que aborda los divertidos problemas y situaciones de una familia americana de clase media en la que el hijo Malcolm parece ser el único sensato... o al menos el único que da señales de cordura. La familia está compuesta por sus neuróticos padres Hal y Lois, el hermano mayor Francis y sus otros dos hermanos, Reese y Dewey.',
    popularity: 402.693,
    poster_path: '/sUjsvpfWQ0OuKWPpbsfFHZhLGiK.jpg',
    first_air_date: '2000-01-09',
    name: 'Malcolm',
    vote_average: 8.479,
    vote_count: 4069,
    character: 'Diane',
    credit_id: '52571eca19c295711410cd32',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/t5Mf1lc2bBC0WoOkx89Fj8e7zYK.jpg',
    genre_ids: [
      35,
      18,
      10765
    ],
    id: 73411,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Maniac',
    overview: 'Relata las aventuras fantásticas de un paciente (Jonah Hill) que escapa de su vida recreando un mundo de fantasía dentro de su mente',
    popularity: 34.402,
    poster_path: '/kCNl4QPstAqChFD0NnLpbDFG8ul.jpg',
    first_air_date: '2018-09-21',
    name: 'Maniac',
    vote_average: 7.389,
    vote_count: 740,
    character: 'Annie Landsberg',
    credit_id: '5999a7ae925141040f00274f',
    episode_count: 10,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/wPNBOUMxSWKysHxQW4Q1hC99L4k.jpg',
    genre_ids: [
      10767,
      35
    ],
    id: 66488,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Chelsea',
    overview: '',
    popularity: 238.773,
    poster_path: '/lDbyyKRDk5FmDY98eCc97gUEZod.jpg',
    first_air_date: '2016-05-11',
    name: 'Chelsea',
    vote_average: 5.164,
    vote_count: 59,
    character: 'Self',
    credit_id: '59c563399251415b8702eb8f',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/lWkfSWJstUFk7oqyo7MrMoXehoi.jpg',
    genre_ids: [
      10767,
      35
    ],
    id: 2518,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The Tonight Show with Jay Leno',
    overview: '',
    popularity: 591.896,
    poster_path: '/xAFMZ3wFIEXTISryRZD94AAvWng.jpg',
    first_air_date: '1992-05-25',
    name: 'The Tonight Show with Jay Leno',
    vote_average: 5.4,
    vote_count: 79,
    character: '',
    credit_id: '5b9b4a53c3a3686c1400f14a',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/70c2rCiA4eTyLs0vW9SwOHeomkC.jpg',
    genre_ids: [
      99
    ],
    id: 93514,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The Mind, Explained',
    overview: '¿Te intriga saber qué pasa dentro de tu cabeza? ¿Quieres saber el por qué de los sueños y trastornos de ansiedad? Esta reveladora serie arroja luz sobre esas inquietudes.',
    popularity: 29.423,
    poster_path: '/xpT3549LLOsS6oHFyGinFDDlA7m.jpg',
    first_air_date: '2019-09-12',
    name: 'La mente, en pocas palabras',
    vote_average: 7.432,
    vote_count: 97,
    character: 'Self - Narrator',
    credit_id: '5d7a12b7af43243b2196bd5e',
    episode_count: 10,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/bfg3COqQzmaZqqaqmCruKoyjk72.jpg',
    genre_ids: [
      35,
      10763
    ],
    id: 1667,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Saturday Night Live',
    overview: 'Saturday Night Live es un show televisivo nocturno estadounidense, emitido en vivo, que revolucionó la televisión en los años 70 con su combinación de sketches, comedia, variedad, actores, músicos, e invitados especiales. Ha sido una cantera generadora de talentos muy fuerte de varios guinistas, actores, escritores, productores y cantantes. Creado por Lorne Michaels y desarrollado por Dick Ebersol, el programa fue estrenado por la cadena de televisión NBC. Durante más de 30 años, el programa ha presentado personajes locos, situaciones humorísticamente extrañas, parodias de los presidentes y políticos de turno, sarcásticas burlas a celebridades contemporáneas de la música y del cine, y shows musicales en vivo. Su reparto se compone de miembros repertorios, también conocidos como The Not Ready for Prime-Time Players (el nombre del reparto original del programa, que viene a significar «La Compañía No Apta para las Horas de Máxima Audiencia»), y nuevos miembros quienes se conocen como The Featured Players («La Compañía Destacada»).',
    popularity: 691.178,
    poster_path: '/sHGuKFjIBisPk8cvtCZTDVktYfs.jpg',
    first_air_date: '1975-10-11',
    name: 'Saturday Night Live',
    vote_average: 6.9,
    vote_count: 391,
    character: '',
    credit_id: '5dc34b8b7d5db500199bee4a',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/2pJYis3LUEgFC3UErTQVgmUV1hN.jpg',
    genre_ids: [
      35,
      10767
    ],
    id: 1220,
    origin_country: [
      'GB'
    ],
    original_language: 'en',
    original_name: 'The Graham Norton Show',
    overview: '',
    popularity: 768.639,
    poster_path: '/vrbqaBXB8AALynQzpWz6JdCPEJS.jpg',
    first_air_date: '2007-02-22',
    name: 'The Graham Norton Show',
    vote_average: 7.1,
    vote_count: 232,
    character: 'Self',
    credit_id: '5de74a3d3faba00019135aa6',
    episode_count: 3,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/gpDkx5Mog0jISp5rI7YbxQPKnCK.jpg',
    genre_ids: [
      10767
    ],
    id: 63498,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Close Up with The Hollywood Reporter',
    overview: 'Ahondaremos en los actores del momento, las actrices más cotizadas, los directores que marcan tendencia y los responsables de las últimas películas más taquilleras. Un imprescindible para todos aquellos amantes del séptimo arte.',
    popularity: 120.106,
    poster_path: '/h7X59O3T4VWVAUzZ00LEpbwA3GP.jpg',
    first_air_date: '2015-08-02',
    name: 'Hollywood en primer plano',
    vote_average: 5.656,
    vote_count: 16,
    character: 'Self',
    credit_id: '5e40263a41465c0018cbf927',
    episode_count: 2,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/bJbh9BT53az3uWortxzfvVcigJG.jpg',
    genre_ids: [
      10763,
      10767,
      35
    ],
    id: 101214,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Some Good News',
    overview: '',
    popularity: 22.581,
    poster_path: '/8KrhN7Mx6uoxFnRAaZrzYRO5TVB.jpg',
    first_air_date: '2020-03-29',
    name: 'Some Good News',
    vote_average: 6.6,
    vote_count: 11,
    character: 'Weatherwoman',
    credit_id: '5eb9d0d4cc277c00206d7565',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/9NrFyl7VHQmjuohKz9h3dcZ8gyv.jpg',
    genre_ids: [
      35,
      10751,
      10762
    ],
    id: 4605,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The Suite Life of Zack & Cody',
    overview: 'Dos hermanos de 12 años que residen en un hotel lujoso y cansados de la monotonía causan todo tipo de líos para hacer de su vida y de su estadía en el hotel Tipton una experiencia divertida.',
    popularity: 137.896,
    poster_path: '/8vUeEQRKLjTT3CyTZGPTnIKDS5d.jpg',
    first_air_date: '2005-03-18',
    name: 'Hotel, dulce hotel: Las aventuras de Zack y Cody',
    vote_average: 7.7,
    vote_count: 604,
    character: 'Ivana Tipton (voice)',
    credit_id: '5f266d10dbbb420035e3ead0',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/vi5RvXvMU1wT7bvNwQ69MPKyjCi.jpg',
    genre_ids: [
      35,
      18
    ],
    id: 114655,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The Curse',
    overview: 'Una supuesta maldición perturba la relación de una pareja de recién casados que intentan concebir un hijo mientras coprotagonizan su nuevo y problemático programa de HGTV.',
    popularity: 64.593,
    poster_path: '/k2qJPaGFdyFXEEJpwG5HrmeNpjv.jpg',
    first_air_date: '2023-11-12',
    name: 'La maldición',
    vote_average: 7,
    vote_count: 63,
    character: 'Whitney Siegel',
    credit_id: '5fd7a5d73344c6003daed365',
    episode_count: 10,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg',
    genre_ids: [
      35,
      10767
    ],
    id: 59941,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The Tonight Show Starring Jimmy Fallon',
    overview: 'Después del segundo retiro de Jay Leno del programa, Jimmy Fallon intervino como su reemplazo permanente. Después de 42 años en Los Ángeles, el programa regresó a Nueva York.',
    popularity: 6414.926,
    poster_path: '/g4amxJvtpnY79J77xeamnAEUO8r.jpg',
    first_air_date: '2014-02-17',
    name: 'The Tonight Show Starring Jimmy Fallon',
    vote_average: 5.887,
    vote_count: 291,
    character: '',
    credit_id: '5fe680dce74146003d35cbef',
    episode_count: 3,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/jO803koX4pYjGuxjOkLytCusuJm.jpg',
    genre_ids: [
      10767,
      35,
      10763
    ],
    id: 32415,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Conan',
    overview: "Conan es un programa de conversación nocturno tipo late night talk show que se emite de lunes a jueves en la señal TBS de Estados Unidos, a las 11:00 pm, hora del este. El programa, de una hora de duración, fue estrenado el 8 de noviembre de 2010. Está conducido por el escritor, presentador y comediante Conan O'Brien, quien fue conductor del programa de la NBC Late Night with Conan O'Brien por 16 años, y también de The Tonight Show with Conan O'Brien, show que duró sólo siete meses al aire y que provocó la renuncia de O'Brien a la cadena transmisora, la NBC, debido a conflictos por los horarios de salida del programa.3​ El 14 de mayo de 2014, TBS renovó a Conan, por lo menos hasta el 2018.",
    popularity: 1677.418,
    poster_path: '/oQxrvUhP3ycwnlxIrIMQ9Z3kleq.jpg',
    first_air_date: '2010-11-08',
    name: 'Conan',
    vote_average: 7,
    vote_count: 211,
    character: 'Self',
    credit_id: '5fe7b49bc9dbf9003e474a36',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/4ZPA42RwiJ82nP6bQmWxq1bMAgH.jpg',
    genre_ids: [
      10767
    ],
    id: 1900,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'LIVE with Kelly and Mark',
    overview: '',
    popularity: 823.359,
    poster_path: '/y2HYxNrammqTk4GFq5jetYO7UW5.jpg',
    first_air_date: '1988-09-05',
    name: 'LIVE with Kelly and Mark',
    vote_average: 5.4,
    vote_count: 37,
    character: 'Self - Guest',
    credit_id: '60accbb907e2810027afa2b9',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/zi5B3468QjH6jM7D8gQYzPgvMQZ.jpg',
    genre_ids: [
      10767,
      35
    ],
    id: 131659,
    origin_country: [
      'KR'
    ],
    original_language: 'ko',
    original_name: '제시의 쇼!터뷰',
    overview: '',
    popularity: 83.543,
    poster_path: '/jhrwzMvVLwJo9uWhHS9m3IV8tIi.jpg',
    first_air_date: '2020-06-11',
    name: '제시의 쇼!터뷰',
    vote_average: 7,
    vote_count: 2,
    character: 'Herself (virtual)',
    credit_id: '6120b622fcf90700469586cc',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/1yguthn0tBF7XzmAbX9kwtW3I9J.jpg',
    genre_ids: [
      35,
      10762
    ],
    id: 5371,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'iCarly',
    overview: 'Carly es una estrella cibernética de 13 años que se dio a conocer a través de la página web que creó con unos amigos. La joven, a pesar de su popularidad, intenta aprender a llevar una vida normal.',
    popularity: 393.378,
    poster_path: '/zswxst53aM8g2LysdVbtQNJAiKM.jpg',
    first_air_date: '2007-09-08',
    name: 'iCarly',
    vote_average: 7.979,
    vote_count: 1382,
    character: 'Heather',
    credit_id: '6125083e4a52f80045b8bda9',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/ugYUSzs75Rm2syRuCrBSJAh09lJ.jpg',
    genre_ids: [],
    id: 23521,
    origin_country: [
      'DE'
    ],
    original_language: 'en',
    original_name: "Kids' Choice Awards",
    overview: '',
    popularity: 94.196,
    poster_path: '/7P0uk5BmadKP878JhPrK6KbZDh.jpg',
    first_air_date: '1987-01-18',
    name: "Kids' Choice Awards",
    vote_average: 9,
    vote_count: 11,
    character: 'Self',
    credit_id: '618dabbf2cde980042562ee9',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/qBffzkYHN5BkwMQMzobtf3TrqtF.jpg',
    genre_ids: [
      99
    ],
    id: 80480,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Trailblazer Honors',
    overview: '',
    popularity: 20.353,
    poster_path: '/podaRYWoAmSGW7GNjcmKYSJyMLD.jpg',
    first_air_date: '2014-06-27',
    name: 'Trailblazer Honors',
    vote_average: 7.5,
    vote_count: 2,
    character: 'Presenter',
    credit_id: '62ff40eed6819b007a96a84f',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/mofoDq8K1tvhSKE00NrlLkS7Mrg.jpg',
    genre_ids: [
      35,
      16
    ],
    id: 709,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Robot Chicken',
    overview: 'Popular serie americana de animación stop-motion, que parodia películas, videojuegos o personalidades de todo el mundo a través de humor mordaz.',
    popularity: 311.377,
    poster_path: '/lMZv3mJC9QRolgzflM3ajtB3o2U.jpg',
    first_air_date: '2005-02-20',
    name: 'Robot Chicken',
    vote_average: 7.6,
    vote_count: 453,
    character: 'Lois Lane, Bridget von Hammersmark (voice)',
    credit_id: '63cd63b109dda400959223db',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/cGQmSoB0e0bpuNJky5xj6U61erq.jpg',
    genre_ids: [
      35
    ],
    id: 4608,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: '30 Rock',
    overview: 'Liz Lemon (Tina Fey), la principal guionista de un show de televisión que consiste en sketches cómicos, debe enfrentarse todos los días a su arrogante nuevo jefe (Alec Baldwin) y a la estrella del programa, al tiempo que trata de conducirlo y conseguir el éxito televisivo sin perder los nervios...',
    popularity: 348.276,
    poster_path: '/eYYQWACx7ttUzRwTNYuo6zveqpE.jpg',
    first_air_date: '2006-10-11',
    name: 'Rockefeller Plaza',
    vote_average: 7.417,
    vote_count: 624,
    character: 'Emma Stone',
    credit_id: '63cd657cd363e5009d6888e6',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/9Lsus3eIlPwtXoJIk5IGM7DWwO8.jpg',
    genre_ids: [
      35,
      10767
    ],
    id: 66623,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Maya & Marty',
    overview: '',
    popularity: 7.593,
    poster_path: '/u6wbOsArJoWoEukj1tdS4zuQ3Py.jpg',
    first_air_date: '2016-05-31',
    name: 'Maya & Marty',
    vote_average: 6,
    vote_count: 10,
    character: 'Various',
    credit_id: '63cd660309dda4009592249a',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/qB0ajoSfmaQWAdmWOoSku08PhsP.jpg',
    genre_ids: [
      35,
      16
    ],
    id: 138600,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Saturday Morning All Star Hits!',
    overview: '',
    popularity: 18.643,
    poster_path: '/vHB2sMGWVjknajaKYhRPutJyQDd.jpg',
    first_air_date: '2021-12-10',
    name: 'Saturday Morning All Star Hits!',
    vote_average: 5.733,
    vote_count: 15,
    character: 'Heather (voice)',
    credit_id: '63cd66976d97e6007c9dfc41',
    episode_count: 5,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/wjrLhvRxOxvfxPmU76Lh98EiWUZ.jpg',
    genre_ids: [
      10767
    ],
    id: 105200,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: '73 Questions',
    overview: '',
    popularity: 115.223,
    poster_path: '/6kxjUczylN29tmikUuet08uODQ2.jpg',
    first_air_date: '2014-03-12',
    name: '73 preguntas',
    vote_average: 8.7,
    vote_count: 3,
    character: 'Self',
    credit_id: '64b74cf0eee1860100ea715b',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/zu2vKWoIwdLN8raXNDASmTpawi6.jpg',
    genre_ids: [],
    id: 13667,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'MTV Movie & TV Awards',
    overview: '',
    popularity: 139.915,
    poster_path: '/77FuUQrJVO8GcyCpfHBZOICINwm.jpg',
    first_air_date: '1992-06-10',
    name: 'MTV Movie & TV Awards',
    vote_average: 7.7,
    vote_count: 11,
    character: 'Self / Presenter',
    credit_id: '64ebe05a839018011f8e15d4',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/zYyIEC39ui14XWQ8zpNQicl17vb.jpg',
    genre_ids: [
      10767
    ],
    id: 105197,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Variety Studio: Actors on Actors',
    overview: '',
    popularity: 186.351,
    poster_path: '/tnlEfHXo5L7jOdeHiAFOAWW4WoO.jpg',
    first_air_date: '2014-12-21',
    name: 'Variety Studio: Actors on Actors',
    vote_average: 5,
    vote_count: 5,
    character: 'Self',
    credit_id: '657d65e30816c7078b09334a',
    episode_count: 3,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/ikgJMNExTNkLztZOUyyrSIrsYeU.jpg',
    genre_ids: [
      10767
    ],
    id: 239650,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Off Script with The Hollywood Reporter',
    overview: '',
    popularity: 12.374,
    poster_path: '/iM11nrgp0kcl3k68JZjV796T1T6.jpg',
    first_air_date: '2023-12-31',
    name: 'Off Script with The Hollywood Reporter',
    vote_average: 0,
    vote_count: 0,
    character: 'Self',
    credit_id: '6585eba8ea7b0e5f498f3823',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/5AkPhazx8F0Ht74CUdJU03vNzBi.jpg',
    genre_ids: [
      10767,
      35
    ],
    id: 61818,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'Late Night with Seth Meyers',
    overview: '',
    popularity: 1308.996,
    poster_path: '/x5asOuPOjW21e0Ykkvkuzu1TGEl.jpg',
    first_air_date: '2014-02-25',
    name: 'Late Night with Seth Meyers',
    vote_average: 5.5,
    vote_count: 76,
    character: 'Self',
    credit_id: '65a5df7c97a4e6012e4f4b6c',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg',
    genre_ids: [
      35,
      10767
    ],
    id: 63770,
    origin_country: [
      'US'
    ],
    original_language: 'en',
    original_name: 'The Late Show with Stephen Colbert',
    overview: '',
    popularity: 4111.545,
    poster_path: '/9jkThAGYj2yp8jsS6Nriy5mzKFT.jpg',
    first_air_date: '2015-09-08',
    name: 'The Late Show with Stephen Colbert',
    vote_average: 6.5,
    vote_count: 242,
    character: 'Self',
    credit_id: '65b518d91c635b01621306fa',
    episode_count: 1,
    media_type: 'tv'
  },
  {
    adult: false,
    backdrop_path: '/sx8dsHlsZAoT1BbWDwFGDgWAOlZ.jpg',
    genre_ids: [
      18,
      35
    ],
    id: 691422,
    original_language: 'en',
    original_title: 'When You Finish Saving the World',
    overview: 'Evelyn y su inconsciente hijo Ziggy buscan sustitutos el uno para el otro, ya que Evelyn trata desesperadamente de criar a un adolescente sin pretensiones en su refugio, mientras que Ziggy se desvive por una joven brillante en la escuela.',
    popularity: 15.655,
    poster_path: '/6piyB7y6glrXSgd2o5nB7RdpIxZ.jpg',
    release_date: '2023-01-20',
    title: 'Cuando termines de salvar el mundo',
    video: false,
    vote_average: 5.791,
    vote_count: 67,
    credit_id: '5e8f6026d35dea001173d0c4',
    department: 'Production',
    job: 'Producer',
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [
      35,
      28
    ],
    id: 799312,
    original_language: 'en',
    original_title: 'Little White Corvette',
    overview: '',
    popularity: 1.4,
    poster_path: null,
    release_date: '',
    title: 'Little White Corvette',
    video: false,
    vote_average: 0,
    vote_count: 0,
    credit_id: '6032ce375c3247003edec5e6',
    department: 'Production',
    job: 'Executive Producer',
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/wAfLfqAYZ0Hc5z8LaNRQugLjFis.jpg',
    genre_ids: [
      35
    ],
    id: 852247,
    original_language: 'en',
    original_title: 'Problemista',
    overview: '',
    popularity: 19.215,
    poster_path: '/wDnqUnU657BLdaibGZqwCjV3yrC.jpg',
    release_date: '2024-03-01',
    title: 'Problemista',
    video: false,
    vote_average: 0,
    vote_count: 0,
    credit_id: '60f6354c8258fc005c1bd0bd',
    department: 'Production',
    job: 'Producer',
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/fViElUGfdoZjtnVxvSpJX8TwxY6.jpg',
    genre_ids: [
      35,
      18
    ],
    id: 1013850,
    original_language: 'en',
    original_title: 'A Real Pain',
    overview: '',
    popularity: 11.619,
    poster_path: '/lEv6H294o3JDM3y1PfJTlKGqHjf.jpg',
    release_date: '2024-01-20',
    title: 'A Real Pain',
    video: false,
    vote_average: 8,
    vote_count: 1,
    credit_id: '63005685bf31f2007de72a42',
    department: 'Production',
    job: 'Producer',
    media_type: 'movie'
  },
  {
    adult: false,
    backdrop_path: '/5BRjNDOxqQNpPL5Z2kO0SJH1aCx.jpg',
    genre_ids: [
      18,
      27
    ],
    id: 858017,
    original_language: 'en',
    original_title: 'I Saw the TV Glow',
    overview: '',
    popularity: 11.514,
    poster_path: '/hS4GYkYpN1rfl4GIxyc02sCyfAj.jpg',
    release_date: '2024-05-03',
    title: 'I Saw the TV Glow',
    video: false,
    vote_average: 0,
    vote_count: 0,
    credit_id: '65b707711089ba00c1f6ed72',
    department: 'Production',
    job: 'Producer',
    media_type: 'movie'
  }
]
