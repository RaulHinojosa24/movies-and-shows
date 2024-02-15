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
