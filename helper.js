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
        overview: 'El multimillonario fabricante de armas Tony Stark debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en 'El hombre de hierro' para combatir el mal a escala global.',
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
  overview: ''Guardianes de la galaxia' es una película de superhéroes estadounidense de 2014 basada en el equipo de superhéroes del comics homónimo de Marvel, producido por Marvel Studios y distribuido por Walt Disney Studios Motion Pictures. Es la décima película en el Universo Cineamatográfico de Marvel. La película fue dirigida por James Gunn, quien escribió el guión con Nicole Perlman, y cuenta con un elenco formado por Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper, Lee Pace, Michael Rooker, Karen Gillan, Djimon Hounsou, John C. Reilly, Glenn Close y Benicio del Toro. En el 2017 se estreno la segunda película, titulada Guardianes de la galaxia Vol.2 y esta programado completar la trilogía en el 2023 con  Guardianes de la galaxia Vol. 3.',
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
        character: 'Eugenia 'Skeeter' Phelan',
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
        character: 'Veronica (segment 'Veronica')',
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
        overview: 'Crónica de la rivalidad existente entre el extenista profesional, de 55 años, Bobby Riggs, y su oponente de 29 años de edad, la carismática tenista Billie Jean King, quienes se enfrentaron en un partido legendario en 1973. Entonces se quería conocer si una tenista profesional podía realmente vencer a un hombre (aunque éste ya se hubiese retirado de las pistas). El evento atrajo a más de 50 millones de estadounidenses y que se publicitó como 'La batalla de sexos'.',
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
        original_title: 'Dear Diary: World's First Pranks',
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
        overview: 'Secuela de la película de 2021 'Cruella'.',
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
        overview: 'En esta secuela y empleando el característico sentido del humor del que hizo gala 'Zombieland', el grupo de protagonistas tendrá que viajar desde la Casa Blanca hasta el corazón de los Estados Unidos, sobreviviendo a nuevas clases de muertos vivientes que han evolucionado desde lo sucedido hace algunos años, así como a algunos supervivientes humanos rezagados. Pero, por encima de todo, tendrán que tratar de soportar los inconvenientes de convivir entre ellos.',
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
        overview: 'Rob 'Fish' Fishman es el baterista en la banda de hair metal de los 80 'Vesuvius'. Cuando el grupo firma un contrato con una gran discográfica, lo despiden sin contemplaciones. Tras mantenerse 20 años apartado del mundillo de la música, recibe una segunda oportunidad con la banda de su sobrino.',
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
        overview: 'La historia versa sobre un travieso perro de raza Gran Danés que vive con la familia Winslow. Este perro apareció después en varios episodios animados de 'Heathcliff' (Isidoro) y 'Garfield and Friends'. La película mostrará cómo Marmaduke se encuentra tras mudarse de domicilio en medio de una lucha por el territorio entre chuchos callejeros y perros con Pedigree, además de que intentará conquistar a la perra de sus sueños',
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
        overview: 'La situación del cuarentón y puritano Cal Weaver es perfecta: tiene un buen trabajo, una bonita casa y unos hijos estupendos y está casado con el amor de su adolescencia. Sin embargo, cuando Cal se entera de que su esposa, Emily, le ha engañado y quiere divorciarse, su vida 'perfecta' se desmorona. Para colmo, en el actual mundo de los solteros, Cal, que no ha tenido una cita desde hace décadas, es el desastre en persona.',
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
        overview: 'Los Angeles, 1949. Mickey Cohen, originario de Brooklyn, se ha convertido en el gran jefe de la mafia que dirige la ciudad. Todos parece pasar por sus manos: drogas, armas, prostitutas, y cualquier material robado. Se encuentra absolutamente protegido por los miembros de su clan, que lo veneran como a su líder indiscutible, pero no solo eso, pues sus tentáculos van más allá de los bajos fondos: parte del cuerpo de policía y algunos miembros del sector político se encuentran bajo su influjo.  Sin embargo, todavía hay hombres dentro de la brigada policial que no se dejan amedrentar por la corrupción. Es el caso de los sargentos John O'Mara y Jerry Wooters, que contra todo y contra todos, intentarán destruir el imperio del todopoderoso Cohen.',
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
        original_title: 'Let's Dance',
        overview: '',
        popularity: 14.756,
        poster_path: '/2LlpkPEgW07GfekHxKQsHIJhZdq.jpg',
        release_date: '2018-12-06',
        title: 'Let's Dance',
        video: true,
        vote_average: 6.222,
        vote_count: 9,
        character: 'Segment: 'Coffee to Go'',
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
        overview: 'Dave Skylark, presentador de un conocido programa de entrevistas, y su productor, Aaron Rapoport, consiguen una entrevista exclusiva con Kim Jong-Un, dictador de Corea del Norte. Ante tal oportunidad, la CIA les pide un 'favorcillo': asesinar a Kim. Pero lo cierto es que Dave y Aaron no son las personas más cualificadas para realizar un magnicidio.',
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
        overview: 'Conan es un programa de conversación nocturno tipo late night talk show que se emite de lunes a jueves en la señal TBS de Estados Unidos, a las 11:00 pm, hora del este. El programa, de una hora de duración, fue estrenado el 8 de noviembre de 2010. Está conducido por el escritor, presentador y comediante Conan O'Brien, quien fue conductor del programa de la NBC Late Night with Conan O'Brien por 16 años, y también de The Tonight Show with Conan O'Brien, show que duró sólo siete meses al aire y que provocó la renuncia de O'Brien a la cadena transmisora, la NBC, debido a conflictos por los horarios de salida del programa.3​ El 14 de mayo de 2014, TBS renovó a Conan, por lo menos hasta el 2018.',
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
        original_name: 'Kids' Choice Awards',
        overview: '',
        popularity: 113.783,
        poster_path: '/7P0uk5BmadKP878JhPrK6KbZDh.jpg',
        first_air_date: '1987-01-18',
        name: 'Kids' Choice Awards',
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
        overview: 'Secuela de la película de 2021 'Cruella'.',
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
    character: 'Eugenia 'Skeeter' Phelan',
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
    character: 'Veronica (segment 'Veronica')',
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
    overview: 'Crónica de la rivalidad existente entre el extenista profesional, de 55 años, Bobby Riggs, y su oponente de 29 años de edad, la carismática tenista Billie Jean King, quienes se enfrentaron en un partido legendario en 1973. Entonces se quería conocer si una tenista profesional podía realmente vencer a un hombre (aunque éste ya se hubiese retirado de las pistas). El evento atrajo a más de 50 millones de estadounidenses y que se publicitó como 'La batalla de sexos'.',
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
    original_title: 'Dear Diary: World's First Pranks',
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
    overview: 'Secuela de la película de 2021 'Cruella'.',
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
    overview: 'En esta secuela y empleando el característico sentido del humor del que hizo gala 'Zombieland', el grupo de protagonistas tendrá que viajar desde la Casa Blanca hasta el corazón de los Estados Unidos, sobreviviendo a nuevas clases de muertos vivientes que han evolucionado desde lo sucedido hace algunos años, así como a algunos supervivientes humanos rezagados. Pero, por encima de todo, tendrán que tratar de soportar los inconvenientes de convivir entre ellos.',
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
    overview: 'Rob 'Fish' Fishman es el baterista en la banda de hair metal de los 80 'Vesuvius'. Cuando el grupo firma un contrato con una gran discográfica, lo despiden sin contemplaciones. Tras mantenerse 20 años apartado del mundillo de la música, recibe una segunda oportunidad con la banda de su sobrino.',
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
    overview: 'La historia versa sobre un travieso perro de raza Gran Danés que vive con la familia Winslow. Este perro apareció después en varios episodios animados de 'Heathcliff' (Isidoro) y 'Garfield and Friends'. La película mostrará cómo Marmaduke se encuentra tras mudarse de domicilio en medio de una lucha por el territorio entre chuchos callejeros y perros con Pedigree, además de que intentará conquistar a la perra de sus sueños',
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
    overview: 'La situación del cuarentón y puritano Cal Weaver es perfecta: tiene un buen trabajo, una bonita casa y unos hijos estupendos y está casado con el amor de su adolescencia. Sin embargo, cuando Cal se entera de que su esposa, Emily, le ha engañado y quiere divorciarse, su vida 'perfecta' se desmorona. Para colmo, en el actual mundo de los solteros, Cal, que no ha tenido una cita desde hace décadas, es el desastre en persona.',
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
    overview: 'Los Angeles, 1949. Mickey Cohen, originario de Brooklyn, se ha convertido en el gran jefe de la mafia que dirige la ciudad. Todos parece pasar por sus manos: drogas, armas, prostitutas, y cualquier material robado. Se encuentra absolutamente protegido por los miembros de su clan, que lo veneran como a su líder indiscutible, pero no solo eso, pues sus tentáculos van más allá de los bajos fondos: parte del cuerpo de policía y algunos miembros del sector político se encuentran bajo su influjo.  Sin embargo, todavía hay hombres dentro de la brigada policial que no se dejan amedrentar por la corrupción. Es el caso de los sargentos John O'Mara y Jerry Wooters, que contra todo y contra todos, intentarán destruir el imperio del todopoderoso Cohen.',
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
    original_title: 'Let's Dance',
    overview: '',
    popularity: 10.425,
    poster_path: '/2LlpkPEgW07GfekHxKQsHIJhZdq.jpg',
    release_date: '2018-12-06',
    title: 'Let's Dance',
    video: true,
    vote_average: 6.222,
    vote_count: 9,
    character: 'Segment: 'Coffee to Go'',
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
    overview: 'Dave Skylark, presentador de un conocido programa de entrevistas, y su productor, Aaron Rapoport, consiguen una entrevista exclusiva con Kim Jong-Un, dictador de Corea del Norte. Ante tal oportunidad, la CIA les pide un 'favorcillo': asesinar a Kim. Pero lo cierto es que Dave y Aaron no son las personas más cualificadas para realizar un magnicidio.',
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
    overview: 'Conan es un programa de conversación nocturno tipo late night talk show que se emite de lunes a jueves en la señal TBS de Estados Unidos, a las 11:00 pm, hora del este. El programa, de una hora de duración, fue estrenado el 8 de noviembre de 2010. Está conducido por el escritor, presentador y comediante Conan O'Brien, quien fue conductor del programa de la NBC Late Night with Conan O'Brien por 16 años, y también de The Tonight Show with Conan O'Brien, show que duró sólo siete meses al aire y que provocó la renuncia de O'Brien a la cadena transmisora, la NBC, debido a conflictos por los horarios de salida del programa.3​ El 14 de mayo de 2014, TBS renovó a Conan, por lo menos hasta el 2018.',
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
    original_name: 'Kids' Choice Awards',
    overview: '',
    popularity: 94.196,
    poster_path: '/7P0uk5BmadKP878JhPrK6KbZDh.jpg',
    first_air_date: '1987-01-18',
    name: 'Kids' Choice Awards',
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

const tv = {
  adult: false,
  backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
  created_by: [
    {
      id: 1179419,
      credit_id: '57599b0e925141378a002c87',
      name: 'Matt Duffer',
      gender: 2,
      profile_path: '/kXO5CnSxC0znMAICGxnPeuGP73U.jpg'
    },
    {
      id: 1179422,
      credit_id: '57599b039251410a99001cce',
      name: 'Ross Duffer',
      gender: 2,
      profile_path: '/kN1HdFViQkcJOQlNcvvFJIx9Uju.jpg'
    }
  ],
  episode_run_time: [],
  first_air_date: '2016-07-15',
  genres: [
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10765,
      name: 'Sci-Fi & Fantasy'
    },
    {
      id: 9648,
      name: 'Misterio'
    }
  ],
  homepage: 'https://www.netflix.com/title/80057281',
  id: 66732,
  in_production: true,
  languages: [
    'en'
  ],
  last_air_date: '2022-07-01',
  last_episode_to_air: {
    id: 3325045,
    name: 'El plan',
    overview: 'Acompañados por el sonido atronador del metal, los héroes lo dan todo y luchan desde cada rincón del campo de batalla para salvar Hawkins... y el mundo entero.',
    vote_average: 8.6,
    vote_count: 147,
    air_date: '2022-07-01',
    episode_number: 9,
    episode_type: 'finale',
    production_code: '',
    runtime: 143,
    season_number: 4,
    show_id: 66732,
    still_path: '/fvoa0Hosu4yK7TUiHglV8TvjMUB.jpg'
  },
  name: 'Stranger Things',
  next_episode_to_air: null,
  networks: [
    {
      id: 213,
      logo_path: '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
      name: 'Netflix',
      origin_country: ''
    }
  ],
  number_of_episodes: 34,
  number_of_seasons: 4,
  origin_country: [
    'US'
  ],
  original_language: 'en',
  original_name: 'Stranger Things',
  overview: 'A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.',
  popularity: 336.053,
  poster_path: '/wHhjZMlYGT9yUEyGpP9jmR6Jq3I.jpg',
  production_companies: [
    {
      id: 2575,
      logo_path: '/9YJrHYlcfHtwtulkFMAies3aFEl.png',
      name: '21 Laps Entertainment',
      origin_country: 'US'
    },
    {
      id: 170090,
      logo_path: null,
      name: 'Monkey Massacre Productions',
      origin_country: 'US'
    },
    {
      id: 184664,
      logo_path: null,
      name: 'Upside Down Pictures',
      origin_country: 'US'
    }
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America'
    }
  ],
  seasons: [
    {
      air_date: '2016-07-17',
      episode_count: 8,
      id: 77680,
      name: 'Temporada 1',
      overview: 'En Hawkins (Indiana) ocurren cosas extrañas. La desaparición de un niño saca a la luz a una niña con poderes sobrenaturales.',
      poster_path: '/1huQPqu92eebDgPCR2DZhKM7NPg.jpg',
      season_number: 1,
      vote_average: 8.4
    },
    {
      air_date: '2017-10-29',
      episode_count: 9,
      id: 83248,
      name: 'Temporada 2',
      overview: 'Ha pasado casi un año desde la misteriosa desaparición de Will. Pero la vida no ha vuelto a la normalidad en Hawkins. Ni por asomo.',
      poster_path: '/kAEa067rfQOM77MgpMon6g2gnjA.jpg',
      season_number: 2,
      vote_average: 8.1
    },
    {
      air_date: '2019-07-04',
      episode_count: 8,
      id: 115216,
      name: 'Temporada 3',
      overview: '“Es 1985 en Hawkins, Indiana, y el verano se está calentando. Fuera de la escuela, hay un nuevo centro comercial en la ciudad, y el grupo Hawkins está creciendo. El romance florece y complica la dinámica del grupo, y tendrán que encontrar la manera de crecer sin separarse. Mientras tanto, el peligro se avecina. Cuando la ciudad está amenazada por enemigos viejos y nuevos, Eleven y sus amigos recuerdan que el mal nunca termina; evoluciona. Ahora tendrán que unirse para sobrevivir, y recordar que la amistad siempre es más fuerte que el miedo”.',
      poster_path: '/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
      season_number: 3,
      vote_average: 8
    },
    {
      air_date: '2022-05-27',
      episode_count: 9,
      id: 163313,
      name: 'Temporada 4',
      overview: 'La historia se retoma seis meses después de la batalla en el centro comercial Starcourt, que trajo terror y destrucción a Hawkins. Luchando contra las secuelas, nuestro grupo de amigos está separado por primera vez y tiene que afrontar las complejidades del instituto, lo que no les pone las cosas nada fáciles. En este momento, el más vulnerable de todos, surge una nueva y terrorífica amenaza sobrenatural que representa un nuevo y horrible misterio que, si consiguen resolver, podría poner fin a los horrores del Upside Down.',
      poster_path: '/wHhjZMlYGT9yUEyGpP9jmR6Jq3I.jpg',
      season_number: 4,
      vote_average: 8.5
    }
  ],
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English'
    }
  ],
  status: 'Returning Series',
  tagline: 'Un verano puede cambiarlo todo.',
  type: 'Scripted',
  vote_average: 8.614,
  vote_count: 16769,
  aggregate_credits: {
    cast: [
      {
        adult: false,
        gender: 1,
        id: 1356210,
        known_for_department: 'Acting',
        name: 'Millie Bobby Brown',
        original_name: 'Millie Bobby Brown',
        popularity: 50.764,
        profile_path: '/tyV387sK2ix8UTjv4gihNkC7J9n.jpg',
        roles: [
          {
            credit_id: '579f8d3092514178bf003120',
            character: 'Jane 'Eleven' Hopper',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 0
      },
      {
        adult: false,
        gender: 2,
        id: 1442069,
        known_for_department: 'Acting',
        name: 'Finn Wolfhard',
        original_name: 'Finn Wolfhard',
        popularity: 22.151,
        profile_path: '/9uoEc9p5fPMSjZgW5hMxPK6L2eX.jpg',
        roles: [
          {
            credit_id: '5759b9909251416bab0002c4',
            character: 'Mike Wheeler',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 1
      },
      {
        adult: false,
        gender: 2,
        id: 1653291,
        known_for_department: 'Acting',
        name: 'Gaten Matarazzo',
        original_name: 'Gaten Matarazzo',
        popularity: 18.893,
        profile_path: '/yanRypHyaFRgTn31fwq8xzcfSHg.jpg',
        roles: [
          {
            credit_id: '57a49317c3a36865ed000ee2',
            character: 'Dustin Henderson',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 2
      },
      {
        adult: false,
        gender: 2,
        id: 1474123,
        known_for_department: 'Acting',
        name: 'Caleb McLaughlin',
        original_name: 'Caleb McLaughlin',
        popularity: 30.241,
        profile_path: '/xKXJtSOcgGmzSXExU6kz2FXAysC.jpg',
        roles: [
          {
            credit_id: '57a4932f9251411765000c50',
            character: 'Lucas Sinclair',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 3
      },
      {
        adult: false,
        gender: 2,
        id: 35029,
        known_for_department: 'Acting',
        name: 'David Harbour',
        original_name: 'David Harbour',
        popularity: 19.249,
        profile_path: '/chPekukMF5SNnW6b22NbYPqAStr.jpg',
        roles: [
          {
            credit_id: '5759b986c3a3683e7c003967',
            character: 'Jim Hopper',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 5
      },
      {
        adult: false,
        gender: 1,
        id: 1920,
        known_for_department: 'Acting',
        name: 'Winona Ryder',
        original_name: 'Winona Ryder',
        popularity: 70.152,
        profile_path: '/dlffgYbqr1BllWacVLhAFw23nLl.jpg',
        roles: [
          {
            credit_id: '5759b97bc3a3684ea90029c1',
            character: 'Joyce Byers',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 6
      },
      {
        adult: false,
        gender: 1,
        id: 1039011,
        known_for_department: 'Acting',
        name: 'Natalia Dyer',
        original_name: 'Natalia Dyer',
        popularity: 27.469,
        profile_path: '/tzC5fcHLbKsT5we8rn5Az0eulEk.jpg',
        roles: [
          {
            credit_id: '5759b9a8c3a3683e9d0037d3',
            character: 'Nancy Wheeler',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 7
      },
      {
        adult: false,
        gender: 2,
        id: 1448222,
        known_for_department: 'Acting',
        name: 'Charlie Heaton',
        original_name: 'Charlie Heaton',
        popularity: 20.625,
        profile_path: '/8Se6WZuvRmoB990bT29OPgVAyBo.jpg',
        roles: [
          {
            credit_id: '5759b9b8c3a3684ea90029cf',
            character: 'Jonathan Byers',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 8
      },
      {
        adult: false,
        gender: 2,
        id: 1467219,
        known_for_department: 'Acting',
        name: 'Joe Keery',
        original_name: 'Joe Keery',
        popularity: 26.889,
        profile_path: '/ayIAVLMfZGEGIFwAo3pPnY7p59.jpg',
        roles: [
          {
            credit_id: '5759b9d89251410a9900213e',
            character: 'Steve Harrington',
            episode_count: 34
          }
        ],
        total_episode_count: 34,
        order: 9
      },
      {
        adult: false,
        gender: 2,
        id: 1393177,
        known_for_department: 'Acting',
        name: 'Noah Schnapp',
        original_name: 'Noah Schnapp',
        popularity: 14.194,
        profile_path: '/3GSWWrqQjio6G8L42ugGBGNks37.jpg',
        roles: [
          {
            credit_id: '5759b99a9251416b530002a5',
            character: 'Will Byers',
            episode_count: 33
          }
        ],
        total_episode_count: 33,
        order: 4
      },
      {
        adult: false,
        gender: 1,
        id: 20047,
        known_for_department: 'Acting',
        name: 'Cara Buono',
        original_name: 'Cara Buono',
        popularity: 24.598,
        profile_path: '/8nK8PSGTfDr3GtqdgUcWwbSlyJX.jpg',
        roles: [
          {
            credit_id: '5d2572b3a698cf0010ab272b',
            character: 'Karen Wheeler',
            episode_count: 29
          }
        ],
        total_episode_count: 29,
        order: 11
      },
      {
        adult: false,
        gender: 1,
        id: 1590797,
        known_for_department: 'Acting',
        name: 'Sadie Sink',
        original_name: 'Sadie Sink',
        popularity: 32.012,
        profile_path: '/vo5x9GRs2vT47LNb1HZvKUEsk8C.jpg',
        roles: [
          {
            credit_id: '5a036004c3a3686391020cb3',
            character: 'Max Mayfield',
            episode_count: 26
          }
        ],
        total_episode_count: 26,
        order: 10
      },
      {
        adult: false,
        gender: 1,
        id: 2029806,
        known_for_department: 'Acting',
        name: 'Priah Ferguson',
        original_name: 'Priah Ferguson',
        popularity: 4.6,
        profile_path: '/wkVKPGdtqNQxr7zlKPpBFY63Rbv.jpg',
        roles: [
          {
            credit_id: '5d268d58dc86470012a56065',
            character: 'Erica Sinclair',
            episode_count: 21
          }
        ],
        total_episode_count: 21,
        order: 14
      },
      {
        adult: false,
        gender: 2,
        id: 8654,
        known_for_department: 'Acting',
        name: 'Matthew Modine',
        original_name: 'Matthew Modine',
        popularity: 27.275,
        profile_path: '/z974QEHL12qUvLyk6hlWGAmDgom.jpg',
        roles: [
          {
            credit_id: '5759b9c4c3a3683e7c003977',
            character: 'Martin Brenner',
            episode_count: 20
          }
        ],
        total_episode_count: 20,
        order: 12
      },
      {
        adult: false,
        gender: 2,
        id: 781,
        known_for_department: 'Acting',
        name: 'Paul Reiser',
        original_name: 'Paul Reiser',
        popularity: 18.145,
        profile_path: '/rGryzG00uSk8LsidacSBXVgo3iv.jpg',
        roles: [
          {
            credit_id: '5d25a3a969d2802c6e006eb3',
            character: 'Sam Owens',
            episode_count: 19
          }
        ],
        total_episode_count: 19,
        order: 15
      },
      {
        adult: false,
        gender: 2,
        id: 1525047,
        known_for_department: 'Acting',
        name: 'Dacre Montgomery',
        original_name: 'Dacre Montgomery',
        popularity: 12.258,
        profile_path: '/38jnyqD2HCQVs4zNHktxA2Ko8KN.jpg',
        roles: [
          {
            credit_id: '5a0899fc925141783b0020a9',
            character: 'Billy Hargrove',
            episode_count: 18
          },
          {
            credit_id: '62c1f49f924ce6129b5b1fc4',
            character: 'Billy Hargrove (archive footage) (uncredited)',
            episode_count: 1
          }
        ],
        total_episode_count: 19,
        order: 258
      },
      {
        adult: false,
        gender: 2,
        id: 141762,
        known_for_department: 'Acting',
        name: 'Joe Chrest',
        original_name: 'Joe Chrest',
        popularity: 21.71,
        profile_path: '/7mcsJGnqRoVPTtxAUZEKt2dZnlw.jpg',
        roles: [
          {
            credit_id: '5d267e6774645700126c239a',
            character: 'Ted Wheeler',
            episode_count: 19
          }
        ],
        total_episode_count: 19,
        order: 696
      },
      {
        adult: false,
        gender: 1,
        id: 1903874,
        known_for_department: 'Acting',
        name: 'Maya Hawke',
        original_name: 'Maya Hawke',
        popularity: 19.807,
        profile_path: '/evjbbHM1bzA6Ma5Ptjwa4WkYkkj.jpg',
        roles: [
          {
            credit_id: '5a9c029092514128be030605',
            character: 'Robin Buckley',
            episode_count: 17
          }
        ],
        total_episode_count: 17,
        order: 11
      },
      {
        adult: false,
        gender: 2,
        id: 224197,
        known_for_department: 'Acting',
        name: 'Brett Gelman',
        original_name: 'Brett Gelman',
        popularity: 14.29,
        profile_path: '/ub2IuMWFNQGYghHTPq0lpmn2Ue0.jpg',
        roles: [
          {
            credit_id: '5d257896e24e3a00112be743',
            character: 'Murray Bauman',
            episode_count: 16
          }
        ],
        total_episode_count: 16,
        order: 13
      },
      {
        adult: false,
        gender: 2,
        id: 1281250,
        known_for_department: 'Acting',
        name: 'Rob Morgan',
        original_name: 'Rob Morgan',
        popularity: 16.3,
        profile_path: '/ps6wR3JZnk6MY9tbtOLORgadqs6.jpg',
        roles: [
          {
            credit_id: '5d26171ea698cf52eba6bfae',
            character: 'Calvin Powell',
            episode_count: 16
          }
        ],
        total_episode_count: 16,
        order: 685
      },
      {
        adult: false,
        gender: 2,
        id: 1674830,
        known_for_department: 'Acting',
        name: 'John Reynolds',
        original_name: 'John Reynolds',
        popularity: 10.664,
        profile_path: '/1yzDTZqIeFQaI4i8eGC0TB1UfZg.jpg',
        roles: [
          {
            credit_id: '5d26185f37b3a96a3452a8a9',
            character: 'Phil Callahan',
            episode_count: 15
          }
        ],
        total_episode_count: 15,
        order: 692
      },
      {
        adult: false,
        gender: 2,
        id: 1328,
        known_for_department: 'Acting',
        name: 'Sean Astin',
        original_name: 'Sean Astin',
        popularity: 46.197,
        profile_path: '/5oJzy6Ra0tuMEV7mfxjtqye5qUX.jpg',
        roles: [
          {
            credit_id: '5cf2c05ac3a368735b233f11',
            character: 'Bob Newby',
            episode_count: 11
          }
        ],
        total_episode_count: 11,
        order: 17
      },
      {
        adult: false,
        gender: 2,
        id: 1381393,
        known_for_department: 'Acting',
        name: 'Randy Havens',
        original_name: 'Randy Havens',
        popularity: 11.489,
        profile_path: '/7Lh5eGcXZUoPJcTWaUw369R706E.jpg',
        roles: [
          {
            credit_id: '5d2578ada698cf0010ab31cb',
            character: 'Scott Clarke',
            episode_count: 11
          }
        ],
        total_episode_count: 11,
        order: 604
      },
      {
        adult: false,
        gender: 1,
        id: 205808,
        known_for_department: 'Acting',
        name: 'Catherine Curtin',
        original_name: 'Catherine Curtin',
        popularity: 10.944,
        profile_path: '/giB5pkibdukMBHAE0yLGs1JsPOH.jpg',
        roles: [
          {
            credit_id: '5d25787669d2801be0036fc0',
            character: 'Claudia Henderson',
            episode_count: 9
          }
        ],
        total_episode_count: 9,
        order: 642
      },
      {
        adult: false,
        gender: 2,
        id: 83356,
        known_for_department: 'Acting',
        name: 'Jamie Campbell Bower',
        original_name: 'Jamie Campbell Bower',
        popularity: 10.297,
        profile_path: '/iZH92YbneNjbY4QfwVQAkeaFc2r.jpg',
        roles: [
          {
            credit_id: '63f396435249780096432ede',
            character: 'Friendly Orderly',
            episode_count: 5
          },
          {
            credit_id: '63f397e715376c007819421a',
            character: 'Vecna',
            episode_count: 4
          }
        ],
        total_episode_count: 9,
        order: 754
      },
      {
        adult: false,
        gender: 1,
        id: 1916844,
        known_for_department: 'Acting',
        name: 'Susan Shalhoub Larkin',
        original_name: 'Susan Shalhoub Larkin',
        popularity: 5.959,
        profile_path: '/pLAwhYAHjYyxMZrfCCgLBqLcmcU.jpg',
        roles: [
          {
            credit_id: '59fca93b92514113bb02ef2b',
            character: 'Florence',
            episode_count: 8
          }
        ],
        total_episode_count: 8,
        order: 599
      },
      {
        adult: false,
        gender: 1,
        id: 1033252,
        known_for_department: 'Acting',
        name: 'Aimee Mullins',
        original_name: 'Aimee Mullins',
        popularity: 5.818,
        profile_path: '/A4H8dBREovAels6YFAw8wrprE8R.jpg',
        roles: [
          {
            credit_id: '5d2578c937b3a94927529915',
            character: 'Terry Ives',
            episode_count: 8
          }
        ],
        total_episode_count: 8,
        order: 690
      },
      {
        adult: false,
        gender: 2,
        id: 52639,
        known_for_department: 'Acting',
        name: 'Tom Wlaschiha',
        original_name: 'Tom Wlaschiha',
        popularity: 26.944,
        profile_path: '/pWQEHReAOnjNF2N0s5TsQ12Qwyq.jpg',
        roles: [
          {
            credit_id: '6291161e00508a005041733c',
            character: 'Dmitri Antonov',
            episode_count: 8
          }
        ],
        total_episode_count: 8,
        order: 702
      },
      {
        adult: false,
        gender: 2,
        id: 1271473,
        known_for_department: 'Acting',
        name: 'Mason Dye',
        original_name: 'Mason Dye',
        popularity: 17.139,
        profile_path: '/c6zw5WiITbB4lKfBe0xiKq14sV2.jpg',
        roles: [
          {
            credit_id: '62911535209f1812c567d3b9',
            character: 'Jason Carver',
            episode_count: 7
          }
        ],
        total_episode_count: 7,
        order: 698
      },
      {
        adult: false,
        gender: 1,
        id: 1916843,
        known_for_department: 'Acting',
        name: 'Tinsley Price',
        original_name: 'Tinsley Price',
        popularity: 2.667,
        profile_path: '/y76Z7ewNyvPOvPudCNrHSFIuTth.jpg',
        roles: [
          {
            credit_id: '59fca91cc3a3681adf02ccbd',
            character: 'Holly Wheeler',
            episode_count: 7
          }
        ],
        total_episode_count: 7,
        order: 746
      },
      {
        adult: false,
        gender: 2,
        id: 1694082,
        known_for_department: 'Acting',
        name: 'Chester Rushing',
        original_name: 'Chester Rushing',
        popularity: 7.459,
        profile_path: '/34YpCnyxCgxlq5PYJqiro7losWy.jpg',
        roles: [
          {
            credit_id: '5d257ea9e24e3a00132bf3ff',
            character: 'Tommy H.',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 570
      },
      {
        adult: false,
        gender: 2,
        id: 1008235,
        known_for_department: 'Acting',
        name: 'Andrey Ivchenko',
        original_name: 'Andrey Ivchenko',
        popularity: 6.636,
        profile_path: '/iwzi9EbTjZfflzXtmnvOpIf7Bn.jpg',
        roles: [
          {
            credit_id: '5d228860ef4889000fe96c25',
            character: 'Grigori',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 602
      },
      {
        adult: false,
        gender: 1,
        id: 1688664,
        known_for_department: 'Acting',
        name: 'Francesca Reale',
        original_name: 'Francesca Reale',
        popularity: 8.982,
        profile_path: '/9qqCNZUR1rYzwP81NzXOw3ecGeV.jpg',
        roles: [
          {
            credit_id: '5d2681c2caab6d0014954c71',
            character: 'Heather Holloway',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 606
      },
      {
        adult: false,
        gender: 2,
        id: 92309,
        known_for_department: 'Acting',
        name: 'Sherman Augustus',
        original_name: 'Sherman Augustus',
        popularity: 9.197,
        profile_path: '/iLJyjsRdsip0djQ2wLJL0x7Xtjt.jpg',
        roles: [
          {
            credit_id: '629114e3df86a8762410d3d4',
            character: 'Lt. Col. Jack Sullivan',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 697
      },
      {
        adult: false,
        gender: 2,
        id: 111058,
        known_for_department: 'Acting',
        name: 'Nikola Đuričko',
        original_name: 'Nikola Đuričko',
        popularity: 10.289,
        profile_path: '/l4DVpaIFJDJ6SJRXEPeFCz0KTCh.jpg',
        roles: [
          {
            credit_id: '62911a13fd6300006631b9fd',
            character: 'Yuri Ismaylov',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 700
      },
      {
        adult: false,
        gender: 1,
        id: 1572103,
        known_for_department: 'Acting',
        name: 'Chelsea Talmadge',
        original_name: 'Chelsea Talmadge',
        popularity: 4.75,
        profile_path: '/cxH53B64fEjbI6u7uLTMjJFpAe2.jpg',
        roles: [
          {
            credit_id: '629dcd667d5db5086be91ed4',
            character: 'Carol Perkins',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 707
      },
      {
        adult: false,
        gender: 2,
        id: 2076048,
        known_for_department: 'Acting',
        name: 'Clayton Royal Johnson',
        original_name: 'Clayton Royal Johnson',
        popularity: 1.981,
        profile_path: null,
        roles: [
          {
            credit_id: '62910ed6df86a87625b8d7cd',
            character: 'Andy',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 744
      },
      {
        adult: false,
        gender: 1,
        id: 565342,
        known_for_department: 'Acting',
        name: 'Jennifer L. Marshall',
        original_name: 'Jennifer L. Marshall',
        popularity: 4.992,
        profile_path: '/ixePOGabSZhJ8bfDSfrkSBglBFc.jpg',
        roles: [
          {
            credit_id: '5bdba9afc3a3684038002d35',
            character: 'Susan Hargrove',
            episode_count: 6
          }
        ],
        total_episode_count: 6,
        order: 747
      },
      {
        adult: false,
        gender: 2,
        id: 1668667,
        known_for_department: 'Acting',
        name: 'Peyton Wich',
        original_name: 'Peyton Wich',
        popularity: 4.527,
        profile_path: '/52101r7ph1aiJtlZ2pIXD5L7BKV.jpg',
        roles: [
          {
            credit_id: '5bc10b8e92514179ba020982',
            character: 'Troy',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 520
      },
      {
        adult: false,
        gender: 1,
        id: 1753911,
        known_for_department: 'Acting',
        name: 'Shannon Purser',
        original_name: 'Shannon Purser',
        popularity: 8.233,
        profile_path: '/zI5C3e0Rk5GjIdP7S4Dfde8R12N.jpg',
        roles: [
          {
            credit_id: '59f6602c925141428202220d',
            character: 'Barbara “Barb” Holland',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 552
      },
      {
        adult: false,
        gender: 2,
        id: 28410,
        known_for_department: 'Acting',
        name: 'Jake Busey',
        original_name: 'Jake Busey',
        popularity: 29.892,
        profile_path: '/3WknfRePAvwFJfrbYVvfYXTQCh9.jpg',
        roles: [
          {
            credit_id: '5c9ac19f0e0a264cc6c65cd0',
            character: 'Bruce',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 600
      },
      {
        adult: false,
        gender: 2,
        id: 2130,
        known_for_department: 'Acting',
        name: 'Cary Elwes',
        original_name: 'Cary Elwes',
        popularity: 31.066,
        profile_path: '/9P0JD0LC4j3Y43s6TGM8rOqmbwb.jpg',
        roles: [
          {
            credit_id: '5d1e60e1a13533000f0ad112',
            character: 'Mayor Larry Kline',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 601
      },
      {
        adult: false,
        gender: 2,
        id: 1196960,
        known_for_department: 'Acting',
        name: 'Alec Utgoff',
        original_name: 'Alec Utgoff',
        popularity: 10.252,
        profile_path: '/zYtPKsXbeUg8kR2UqADdgKDfvJ1.jpg',
        roles: [
          {
            credit_id: '5d268121b974420010afab17',
            character: 'Alexei',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 605
      },
      {
        adult: false,
        gender: 2,
        id: 1070349,
        known_for_department: 'Acting',
        name: 'Michael Park',
        original_name: 'Michael Park',
        popularity: 6.097,
        profile_path: '/lqQtaxVcvrYgczY4DLGT0XobyU9.jpg',
        roles: [
          {
            credit_id: '5d26828bb974420010afaf1c',
            character: 'Tom Holloway',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 607
      },
      {
        adult: false,
        gender: 2,
        id: 1230922,
        known_for_department: 'Acting',
        name: 'Kendrick Cross',
        original_name: 'Kendrick Cross',
        popularity: 11.437,
        profile_path: '/tYaCFGV5EuxZpj2NOh2oDJ0yDyZ.jpg',
        roles: [
          {
            credit_id: '62963c531e9225006417f0f8',
            character: 'Agent Wallace',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 687
      },
      {
        adult: false,
        gender: 1,
        id: 1377994,
        known_for_department: 'Acting',
        name: 'Karen Ceesay',
        original_name: 'Karen Ceesay',
        popularity: 6.832,
        profile_path: '/j7EKFC2RZa0gBMcJJTRhhydONEX.jpg',
        roles: [
          {
            credit_id: '5b1f12950e0a264f9b010eba',
            character: 'Sue Sinclair',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 689
      },
      {
        adult: false,
        gender: 1,
        id: 3566312,
        known_for_department: 'Acting',
        name: 'Martie Marie Blair',
        original_name: 'Martie Marie Blair',
        popularity: 2.051,
        profile_path: '/h3Nu9wDNGaGbybitZvLphZnAIIl.jpg',
        roles: [
          {
            credit_id: '62910bed209f1812c4ac140f',
            character: 'Young Eleven',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 701
      },
      {
        adult: false,
        gender: 2,
        id: 1832660,
        known_for_department: 'Acting',
        name: 'Tristan Spohn',
        original_name: 'Tristan Spohn',
        popularity: 2.012,
        profile_path: '/2Fi1T6BHNXrriNDTYe2UmAmpIvS.jpg',
        roles: [
          {
            credit_id: '62910c0f76eecf0065258e41',
            character: 'Two',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 709
      },
      {
        adult: false,
        gender: 1,
        id: 2044224,
        known_for_department: 'Acting',
        name: 'Paris Benjamin',
        original_name: 'Paris Benjamin',
        popularity: 4.375,
        profile_path: '/xDQyGetUDUehJvZquY2gbFb7Lks.jpg',
        roles: [
          {
            credit_id: '62963b61cddbbc130d18d39d',
            character: 'Agent Stinson',
            episode_count: 5
          }
        ],
        total_episode_count: 5,
        order: 741
      },
      {
        adult: false,
        gender: 1,
        id: 995451,
        known_for_department: 'Acting',
        name: 'Cynthia Barrett',
        original_name: 'Cynthia Barrett',
        popularity: 4.563,
        profile_path: '/tWd0Yr3uIkHxnJevJ5gFtsKp0LU.jpg',
        roles: [
          {
            credit_id: '59fca73bc3a3681acd02f597',
            character: 'Marsha Holland',
            episode_count: 4
          }
        ],
        total_episode_count: 4,
        order: 534
      },
      {
        adult: false,
        gender: 2,
        id: 114850,
        known_for_department: 'Acting',
        name: 'Tony Vaughn',
        original_name: 'Tony Vaughn',
        popularity: 4.365,
        profile_path: '/m99yAF6psRJSOslZkxPY8i7u7NR.jpg',
        roles: [
          {
            credit_id: '59fca957c3a3681a6402d7da',
            character: 'Principal Coleman',
            episode_count: 4
          }
        ],
        total_episode_count: 4,
        order: 539
      },
      {
        adult: false,
        gender: 2,
        id: 1052211,
        known_for_department: 'Acting',
        name: 'Mark Steger',
        original_name: 'Mark Steger',
        popularity: 8.801,
        profile_path: '/3EeztYq3OfdeHsqjYSwRuNHrvnk.jpg',
        roles: [
          {
            credit_id: '5b36ede80e0a26400a03468e',
            character: 'The Monster',
            episode_count: 4
          }
        ],
        total_episode_count: 4,
        order: 558
      },
      {
        adult: false,
        gender: 1,
        id: 31716,
        known_for_department: 'Acting',
        name: 'Peggy Miley',
        original_name: 'Peggy Miley',
        popularity: 13.166,
        profile_path: '/t8xVgQMJvFDgadTaO2TrKdf9SI1.jpg',
        roles: [
          {
            credit_id: '5d22887a20e6a50010a09dd6',
            character: 'Mrs. Driscoll',
            episode_count: 4
          }
        ],
        total_episode_count: 4,
        order: 603
      },
      {
        adult: false,
        gender: 2,
        id: 1748948,
        known_for_department: 'Acting',
        name: 'Myles Truitt',
        original_name: 'Myles Truitt',
        popularity: 10.256,
        profile_path: '/jfRNEoY8Pj7STBUV6amnMs7GTuw.jpg',
        roles: [
          {
            credit_id: '62910c2876eecf009a1fcce6',
            character: 'Patrick McKinney',
            episode_count: 4
          }
        ],
        total_episode_count: 4,
        order: 641
      },
      {
        adult: false,
        gender: 1,
        id: 1724092,
        known_for_department: 'Acting',
        name: 'Gabriella Pizzolo',
        original_name: 'Gabriella Pizzolo',
        popularity: 2.754,
        profile_path: '/xB8mIUdRlTfoMVwajllMeumJLtG.jpg',
        roles: [
          {
            credit_id: '5d267feddc86470010a52401',
            character: 'Suzie',
            episode_count: 4
          }
        ],
        total_episode_count: 4,
        order: 643
      },
      {
        adult: false,
        gender: 2,
        id: 3119212,
        known_for_department: 'Acting',
        name: 'Raphael Luce',
        original_name: 'Raphael Luce',
        popularity: 5.418,
        profile_path: '/68OEaQZYvgGKbzzQHi9PQE8Gnt9.jpg',
        roles: [
          {
            credit_id: '629715187e12f00099194413',
            character: 'Young Henry Creel',
            episode_count: 4
          }
        ],
        total_episode_count: 4,
        order: 749
      },
      {
        adult: false,
        gender: 2,
        id: 1944274,
        known_for_department: 'Acting',
        name: 'Drew Scheid',
        original_name: 'Drew Scheid',
        popularity: 18.483,
        profile_path: '/ztj1zSSOLe5WtpvNVVIP1ir4xqa.jpg',
        roles: [
          {
            credit_id: '5bc10dc40e0a266e640220ca',
            character: 'Sweaty Teen Boy / Drunk Teen #2',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 521
      },
      {
        adult: false,
        gender: 2,
        id: 1643635,
        known_for_department: 'Acting',
        name: 'Charles Lawlor',
        original_name: 'Charles Lawlor',
        popularity: 7.699,
        profile_path: '/yui3L3ugmNd8sYn9fJxGmzkTCxp.jpg',
        roles: [
          {
            credit_id: '577a9f2492514174bb000db9',
            character: 'Donald Melvald',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 522
      },
      {
        adult: false,
        gender: 1,
        id: 1616155,
        known_for_department: 'Acting',
        name: 'Linnea Berthelsen',
        original_name: 'Linnea Berthelsen',
        popularity: 2.825,
        profile_path: '/u2UOvGHI4IoVfJmtP1I8F68VR50.jpg',
        roles: [
          {
            credit_id: '5bdba8630e0a26333a002cb2',
            character: 'Eight / Kali',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 524
      },
      {
        adult: false,
        gender: 2,
        id: 2358366,
        known_for_department: 'Acting',
        name: 'Cade Jones',
        original_name: 'Cade Jones',
        popularity: 3.129,
        profile_path: '/kZEnpoPn3gIYkiURtx5UiUlllql.jpg',
        roles: [
          {
            credit_id: '5d257df6e24e3a00102bf53b',
            character: 'James',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 536
      },
      {
        adult: false,
        gender: 1,
        id: 139150,
        known_for_department: 'Acting',
        name: 'Amy Seimetz',
        original_name: 'Amy Seimetz',
        popularity: 11.475,
        profile_path: '/qa7vCi7TViddGjuYEszLdi8DRqN.jpg',
        roles: [
          {
            credit_id: '5d2579b8a698cf0010ab33dd',
            character: 'Becky Ives',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 540
      },
      {
        adult: false,
        gender: 2,
        id: 979412,
        known_for_department: 'Acting',
        name: 'Matthew Cardarople',
        original_name: 'Matthew Cardarople',
        popularity: 9.012,
        profile_path: '/xhKO4iMPnwQS1GeDiY8vOyLFa8x.jpg',
        roles: [
          {
            credit_id: '59fca77fc3a3681aa5032936',
            character: 'Keith',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 578
      },
      {
        adult: false,
        gender: 1,
        id: 1735583,
        known_for_department: 'Acting',
        name: 'Chantell D. Christopher',
        original_name: 'Chantell D. Christopher',
        popularity: 4.431,
        profile_path: '/tOaRqciyyiMkEcfv2AFhNji0Wk9.jpg',
        roles: [
          {
            credit_id: '5d2681f0b974420010afad24',
            character: 'Hospital Receptionist',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 592
      },
      {
        adult: false,
        gender: 2,
        id: 1723574,
        known_for_department: 'Acting',
        name: 'Anthony Belevtsov',
        original_name: 'Anthony Belevtsov',
        popularity: 2.961,
        profile_path: '/8oghqsjK6Pyvc1r9Zndilgl3EOV.jpg',
        roles: [
          {
            credit_id: '5d26804774645700136c2720',
            character: 'Lynx Security Guard #1',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 594
      },
      {
        adult: false,
        gender: 1,
        id: 1757689,
        known_for_department: 'Acting',
        name: 'Holly Morris',
        original_name: 'Holly Morris',
        popularity: 8.916,
        profile_path: null,
        roles: [
          {
            credit_id: '5d2682e6caab6d0011955511',
            character: 'Janet',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 596
      },
      {
        adult: false,
        gender: 2,
        id: 1615330,
        known_for_department: 'Acting',
        name: 'Logan Riley Bruner',
        original_name: 'Logan Riley Bruner',
        popularity: 4.365,
        profile_path: '/mOit5elzpOLPav6xSdmNBwsg3ee.jpg',
        roles: [
          {
            credit_id: '62911507209f1812c649ed92',
            character: 'Fred Benson',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 644
      },
      {
        adult: false,
        gender: 1,
        id: 3566390,
        known_for_department: 'Acting',
        name: 'Elodie Grace Orkin',
        original_name: 'Elodie Grace Orkin',
        popularity: 3.815,
        profile_path: '/63Z601MKLjSuE7GyTbizlLH7GW8.jpg',
        roles: [
          {
            credit_id: '629115c39a643500aa06e2ca',
            character: 'Angela',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 645
      },
      {
        adult: false,
        gender: 2,
        id: 2076147,
        known_for_department: 'Acting',
        name: 'Logan Allen',
        original_name: 'Logan Allen',
        popularity: 5.483,
        profile_path: '/hUnSsqtSf0gHnRYUdjRYUjldZdS.jpg',
        roles: [
          {
            credit_id: '62910c5e7d5db510a51fd333',
            character: 'Jake',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 681
      },
      {
        adult: false,
        gender: 0,
        id: 2218449,
        known_for_department: 'Acting',
        name: 'Ira Amyx',
        original_name: 'Ira Amyx',
        popularity: 3.671,
        profile_path: '/1ZbEurTpaEoJmhUK98US1pyWpve.jpg',
        roles: [
          {
            credit_id: '62963b49a44d090067bc6d85',
            character: 'Agent Harmon',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 684
      },
      {
        adult: false,
        gender: 2,
        id: 181521,
        known_for_department: 'Acting',
        name: 'Arnell Powell',
        original_name: 'Arnell Powell',
        popularity: 5.237,
        profile_path: '/m7Zl9av9H9CX76AxPyaYhHYIJWi.jpg',
        roles: [
          {
            credit_id: '5d25897269d28024d0045105',
            character: 'Charles Sinclair',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 691
      },
      {
        adult: false,
        gender: 1,
        id: 1780007,
        known_for_department: 'Acting',
        name: 'Amybeth McNulty',
        original_name: 'Amybeth McNulty',
        popularity: 16.653,
        profile_path: '/4fXgRoQhCWUe79U1J6uEcxpxPgj.jpg',
        roles: [
          {
            credit_id: '6296fcb63faba00066389b29',
            character: 'Vickie',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 703
      },
      {
        adult: false,
        gender: 0,
        id: 3566316,
        known_for_department: 'Acting',
        name: 'Chloe Adona',
        original_name: 'Chloe Adona',
        popularity: 1.728,
        profile_path: null,
        roles: [
          {
            credit_id: '62910c4edf86a8762410b163',
            character: 'Nine',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 711
      },
      {
        adult: false,
        gender: 0,
        id: 3566324,
        known_for_department: 'Acting',
        name: 'Jeremiah Friedlander',
        original_name: 'Jeremiah Friedlander',
        popularity: 1.62,
        profile_path: null,
        roles: [
          {
            credit_id: '62910d92d48cee0f2ab5672c',
            character: 'Fourteen',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 717
      },
      {
        adult: false,
        gender: 2,
        id: 1886542,
        known_for_department: 'Acting',
        name: 'Morgan Gao',
        original_name: 'Morgan Gao',
        popularity: 3.796,
        profile_path: '/z0EBXKAU0f4IWOXHCk4SqaFUwky.jpg',
        roles: [
          {
            credit_id: '62910daa00508a0050415380',
            character: 'Three',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 718
      },
      {
        adult: false,
        gender: 0,
        id: 3566329,
        known_for_department: 'Acting',
        name: 'Ethan Green',
        original_name: 'Ethan Green',
        popularity: 1.474,
        profile_path: null,
        roles: [
          {
            credit_id: '62910e4800508a005041562b',
            character: 'Sixteen',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 719
      },
      {
        adult: false,
        gender: 0,
        id: 3566330,
        known_for_department: 'Acting',
        name: 'Oliver Green',
        original_name: 'Oliver Green',
        popularity: 1.246,
        profile_path: null,
        roles: [
          {
            credit_id: '62910e5d7d5db510a72d8646',
            character: 'Seventeen',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 720
      },
      {
        adult: false,
        gender: 2,
        id: 2101012,
        known_for_department: 'Acting',
        name: 'David Alexander Kaplan',
        original_name: 'David Alexander Kaplan',
        popularity: 5.848,
        profile_path: '/9TcsDzwifQ1yZ2AAghv32z4lgLp.jpg',
        roles: [
          {
            credit_id: '62910ee9fd63000099d0b5b4',
            character: 'Twelve',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 724
      },
      {
        adult: false,
        gender: 0,
        id: 3566335,
        known_for_department: 'Acting',
        name: 'Jessica Arden Napier',
        original_name: 'Jessica Arden Napier',
        popularity: 1.4,
        profile_path: null,
        roles: [
          {
            credit_id: '62910fc989b5610066a7d72f',
            character: 'Five',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 729
      },
      {
        adult: false,
        gender: 0,
        id: 2129985,
        known_for_department: 'Acting',
        name: 'Sparrow Nicole',
        original_name: 'Sparrow Nicole',
        popularity: 2.607,
        profile_path: '/5xvwLcWljbLmP5ByNynBMdRJ8eY.jpg',
        roles: [
          {
            credit_id: '62910feb89b5610066a7d827',
            character: 'Four',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 730
      },
      {
        adult: false,
        gender: 0,
        id: 1330569,
        known_for_department: 'Acting',
        name: 'Vaidotas Martinaitis',
        original_name: 'Vaidotas Martinaitis',
        popularity: 4.137,
        profile_path: '/xcIaYaZ9GxZdWedrMdG8pTe8fbW.jpg',
        roles: [
          {
            credit_id: '629115535a46900067bf0c7b',
            character: 'Warden Melnikov',
            episode_count: 3
          }
        ],
        total_episode_count: 3,
        order: 738
      },
      {
        adult: false,
        gender: 2,
        id: 1170659,
        known_for_department: 'Acting',
        name: 'James Landry Hébert',
        original_name: 'James Landry Hébert',
        popularity: 10.346,
        profile_path: '/1WC4pv2BWJGNqqoo3CnCelXmGEE.jpg',
        roles: [
          {
            credit_id: '5a008e90925141471d06aadd',
            character: 'Axel',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 509
      },
      {
        adult: false,
        gender: 1,
        id: 1371456,
        known_for_department: 'Acting',
        name: 'Abigail Cowen',
        original_name: 'Abigail Cowen',
        popularity: 30.632,
        profile_path: '/ovv8pAF4eEKikyjXWxB56B98kJe.jpg',
        roles: [
          {
            credit_id: '5a2fe0fec3a3680b881798db',
            character: 'Vicki',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 510
      },
      {
        adult: false,
        gender: 2,
        id: 2274739,
        known_for_department: 'Acting',
        name: 'Dakota James Alden Lane',
        original_name: 'Dakota James Alden Lane',
        popularity: 4.546,
        profile_path: '/tLxcsfXt1adHJU1oBcUu2h65i76.jpg',
        roles: [
          {
            credit_id: '5c9ac1d4c3a36877e63ef3e0',
            character: 'Lifeguard / Mall Goer',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 523
      },
      {
        adult: false,
        gender: 0,
        id: 98191,
        known_for_department: 'Acting',
        name: 'Joe Davison',
        original_name: 'Joe Davison',
        popularity: 5.083,
        profile_path: null,
        roles: [
          {
            credit_id: '59fca7f1c3a3681a8302d62d',
            character: 'Nerdy Tech',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 528
      },
      {
        adult: false,
        gender: 1,
        id: 1372293,
        known_for_department: 'Acting',
        name: 'Helen LeRoy',
        original_name: 'Helen LeRoy',
        popularity: 6.703,
        profile_path: '/mNy6ibVs7yHk4mwsL3daHL3nRL8.jpg',
        roles: [
          {
            credit_id: '5d25791ca698cf59f5a76dc9',
            character: 'Radar Tech',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 529
      },
      {
        adult: false,
        gender: 2,
        id: 3201,
        known_for_department: 'Acting',
        name: 'Pruitt Taylor Vince',
        original_name: 'Pruitt Taylor Vince',
        popularity: 29.025,
        profile_path: '/jqC1v8tF92QcmkQycnaLSuJiQfl.jpg',
        roles: [
          {
            credit_id: '5d25799ae24e3a00132be88d',
            character: 'Ray',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 530
      },
      {
        adult: false,
        gender: 1,
        id: 1330503,
        known_for_department: 'Acting',
        name: 'Glennellen Anderson',
        original_name: 'Glennellen Anderson',
        popularity: 2.395,
        profile_path: null,
        roles: [
          {
            credit_id: '59fca70ec3a3681a6402d505',
            character: 'Nicole',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 533
      },
      {
        adult: false,
        gender: 2,
        id: 45396,
        known_for_department: 'Acting',
        name: 'Ross Partridge',
        original_name: 'Ross Partridge',
        popularity: 10.606,
        profile_path: '/4GCbT5B0WeoDkl5gor8NuAvy4mV.jpg',
        roles: [
          {
            credit_id: '5d25801937b3a9747d52a53f',
            character: 'Lonnie Byers',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 541
      },
      {
        adult: false,
        gender: 2,
        id: 1371000,
        known_for_department: 'Acting',
        name: 'Pete Burris',
        original_name: 'Pete Burris',
        popularity: 3.984,
        profile_path: '/9FfIl5oggZOkQNzXakbBqAHXSam.jpg',
        roles: [
          {
            credit_id: '5b36ee249251413c9b030fb9',
            character: 'Hawkins Head of Security',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 549
      },
      {
        adult: false,
        gender: 2,
        id: 951643,
        known_for_department: 'Acting',
        name: 'Tobias Jelinek',
        original_name: 'Tobias Jelinek',
        popularity: 16.466,
        profile_path: '/rGHghEJ13ez2uvTQ3SNPB7LoW75.jpg',
        roles: [
          {
            credit_id: '5b36ee3cc3a368530e03754f',
            character: 'Lead Agent',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 550
      },
      {
        adult: false,
        gender: 2,
        id: 1916834,
        known_for_department: 'Acting',
        name: 'Alan Boell',
        original_name: 'Alan Boell',
        popularity: 5.448,
        profile_path: '/vOgcUW3NqhI2IBvTaTBCJ8NX5pc.jpg',
        roles: [
          {
            credit_id: '59fca754925141137f030700',
            character: 'Adams',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 559
      },
      {
        adult: false,
        gender: 2,
        id: 1893361,
        known_for_department: 'Acting',
        name: 'Brian Brightman',
        original_name: 'Brian Brightman',
        popularity: 3.718,
        profile_path: '/pUZ7ShLvzMF2MpzcjcKor2bP7GL.jpg',
        roles: [
          {
            credit_id: '5d2587d369d28054b700c7ed',
            character: 'M.P. Guard #1',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 566
      },
      {
        adult: false,
        gender: 2,
        id: 1921106,
        known_for_department: 'Acting',
        name: 'Kristopher Charles',
        original_name: 'Kristopher Charles',
        popularity: 1.978,
        profile_path: '/Ldwt2UlS7IGNIFKeWELpJJr0S4.jpg',
        roles: [
          {
            credit_id: '5d2587ebe24e3a00122c0aa7',
            character: 'M.P. Guard #2',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 567
      },
      {
        adult: false,
        gender: 1,
        id: 1502198,
        known_for_department: 'Acting',
        name: 'Jerri Tubbs',
        original_name: 'Jerri Tubbs',
        popularity: 8.865,
        profile_path: '/3oT4Og3EnTb9KsrCrV2MsG53Ung.jpg',
        roles: [
          {
            credit_id: '5d2582d1a698cf0fa7a849ce',
            character: 'Diane Hopper',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 575
      },
      {
        adult: false,
        gender: 2,
        id: 87927,
        known_for_department: 'Acting',
        name: 'Will Chase',
        original_name: 'Will Chase',
        popularity: 5.69,
        profile_path: '/2HqBRqcSKiG7Szq8mTjtNuAuYBR.jpg',
        roles: [
          {
            credit_id: '5bdba985925141783c002b3e',
            character: 'Neil Hargrove',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 583
      },
      {
        adult: false,
        gender: 1,
        id: 1263931,
        known_for_department: 'Acting',
        name: 'Allyssa Brooke',
        original_name: 'Allyssa Brooke',
        popularity: 3.654,
        profile_path: '/mmDYlBOybeUzGdSgf4PvG9XAAP1.jpg',
        roles: [
          {
            credit_id: '5d2683c7caab6d001395528b',
            character: 'Mayor Kline's Secretary',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 608
      },
      {
        adult: false,
        gender: 1,
        id: 1745109,
        known_for_department: 'Acting',
        name: 'Erika Coleman',
        original_name: 'Erika Coleman',
        popularity: 2.645,
        profile_path: '/9IRG2bMQA946uMLuP4GmEK7B1OD.jpg',
        roles: [
          {
            credit_id: '5d2684eedc86470010a5350f',
            character: 'Anna Jacobi',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 609
      },
      {
        adult: false,
        gender: 2,
        id: 1396312,
        known_for_department: 'Acting',
        name: 'Dave MacDonald',
        original_name: 'Dave MacDonald',
        popularity: 3.923,
        profile_path: '/xqLpO30JWCyKkCQfuIBxIVSslpp.jpg',
        roles: [
          {
            credit_id: '5ec64d016c8492001f293ed6',
            character: 'Flamethrower Soldier',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 614
      },
      {
        adult: false,
        gender: 1,
        id: 2134661,
        known_for_department: 'Acting',
        name: 'Sydney Bullock',
        original_name: 'Sydney Bullock',
        popularity: 6.859,
        profile_path: '/kH01VhaMPf4czUPl1XZ0TrNMu4O.jpg',
        roles: [
          {
            credit_id: '5f024da48ec4ab00334017c2',
            character: 'Stacey',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 615
      },
      {
        adult: false,
        gender: 1,
        id: 1243099,
        known_for_department: 'Acting',
        name: 'Grace Van Dien',
        original_name: 'Grace Van Dien',
        popularity: 10.838,
        profile_path: '/ryy1FNdFJmX96wXGtrk4KQuKhvW.jpg',
        roles: [
          {
            credit_id: '62926638f10a1a0051a5bbe6',
            character: 'Chrissy Cunningham',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 650
      },
      {
        adult: false,
        gender: 0,
        id: 2489902,
        known_for_department: 'Acting',
        name: 'Jayden Griffin',
        original_name: 'Jayden Griffin',
        popularity: 1.826,
        profile_path: null,
        roles: [
          {
            credit_id: '62910e73ecbde90b5ff48601',
            character: 'Freshman Teammate',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 656
      },
      {
        adult: false,
        gender: 0,
        id: 3566331,
        known_for_department: 'Acting',
        name: 'Scout Hamrick',
        original_name: 'Scout Hamrick',
        popularity: 1.96,
        profile_path: null,
        roles: [
          {
            credit_id: '62910eb0fb834600506dd69d',
            character: 'Candace',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 658
      },
      {
        adult: false,
        gender: 0,
        id: 3566339,
        known_for_department: 'Acting',
        name: 'Hunter Romanillos',
        original_name: 'Hunter Romanillos',
        popularity: 2.227,
        profile_path: '/jSpm49P14GpWEFQzPUlc3XDnsQV.jpg',
        roles: [
          {
            credit_id: '6291108acddbbc0e191206e8',
            character: 'Teammate',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 671
      },
      {
        adult: false,
        gender: 1,
        id: 2388184,
        known_for_department: 'Acting',
        name: 'Gabriella Surodjawan',
        original_name: 'Gabriella Surodjawan',
        popularity: 1.849,
        profile_path: '/8lqhkUTeHKjzaMPM4ehIqfqt8qA.jpg',
        roles: [
          {
            credit_id: '62911147ed2ac216ba113bf0',
            character: 'Mean Girl',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 674
      },
      {
        adult: false,
        gender: 2,
        id: 1650124,
        known_for_department: 'Acting',
        name: 'Alexander Wagenman',
        original_name: 'Alexander Wagenman',
        popularity: 4.241,
        profile_path: null,
        roles: [
          {
            credit_id: '6291119cfd63000099d0c0ab',
            character: 'Mean Boy',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 675
      },
      {
        adult: false,
        gender: 2,
        id: 2707619,
        known_for_department: 'Acting',
        name: 'Trey Best',
        original_name: 'Trey Best',
        popularity: 3.204,
        profile_path: '/1FyRazDDMfludUG44nz6PoW5Hsi.jpg',
        roles: [
          {
            credit_id: '62910cd4fb834600506dcfc8',
            character: 'Jeff',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 678
      },
      {
        adult: false,
        gender: 1,
        id: 1613974,
        known_for_department: 'Acting',
        name: 'Regina Ting Chen',
        original_name: 'Regina Ting Chen',
        popularity: 6.789,
        profile_path: '/7Lqwq6UYbZd7XyMujUKUVUHGSIb.jpg',
        roles: [
          {
            credit_id: '62910d1600508a00a0815103',
            character: 'Ms. Kelly',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 683
      },
      {
        adult: false,
        gender: 2,
        id: 1519173,
        known_for_department: 'Acting',
        name: 'Christian Ganiere',
        original_name: 'Christian Ganiere',
        popularity: 4.915,
        profile_path: '/egqObfSAnDPKFx9ZB4GC8vhsTwi.jpg',
        roles: [
          {
            credit_id: '62910bffd48cee0f2914287c',
            character: 'Ten',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 686
      },
      {
        adult: false,
        gender: 2,
        id: 155978,
        known_for_department: 'Acting',
        name: 'Joel Stoffer',
        original_name: 'Joel Stoffer',
        popularity: 10.435,
        profile_path: '/fePhj3rc4CHCSVuLZIFsTV6lLvz.jpg',
        roles: [
          {
            credit_id: '629115ef209f1812c4ac3f01',
            character: 'Wayne Munson',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 699
      },
      {
        adult: false,
        gender: 1,
        id: 2686442,
        known_for_department: 'Acting',
        name: 'Livi Birch',
        original_name: 'Livi Birch',
        popularity: 5.383,
        profile_path: '/rcmCysWi6CWD7Om6YtFnpbDvZsA.jpg',
        roles: [
          {
            credit_id: '629714d8ca83541355d0a4d3',
            character: 'Alice Creel',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 704
      },
      {
        adult: false,
        gender: 2,
        id: 1098577,
        known_for_department: 'Acting',
        name: 'Kevin L. Johnson',
        original_name: 'Kevin L. Johnson',
        popularity: 5.902,
        profile_path: '/8YnbMp7uvZipkTIhVypp6RPj5Rn.jpg',
        roles: [
          {
            credit_id: '6297150bd71fb4005193eb25',
            character: 'Young Victor Creel',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 705
      },
      {
        adult: false,
        gender: 1,
        id: 2163724,
        known_for_department: 'Acting',
        name: 'Tyner Rushing',
        original_name: 'Tyner Rushing',
        popularity: 18.021,
        profile_path: '/ieovRA9s1yhMi4rkKpInCbUajUd.jpg',
        roles: [
          {
            credit_id: '62971535a44d095275e400bd',
            character: 'Virginia Creel',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 706
      },
      {
        adult: false,
        gender: 1,
        id: 1354257,
        known_for_department: 'Acting',
        name: 'Cindy Hogan',
        original_name: 'Cindy Hogan',
        popularity: 3.009,
        profile_path: null,
        roles: [
          {
            credit_id: '6296340176eecf17201cda37',
            character: 'Annoyed Neighbor',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 722
      },
      {
        adult: false,
        gender: 1,
        id: 2089306,
        known_for_department: 'Acting',
        name: 'Olivia Sembra',
        original_name: 'Olivia Sembra',
        popularity: 1.423,
        profile_path: '/jgUlrh0BrUPnvmJAMrCH0RxaI51.jpg',
        roles: [
          {
            credit_id: '629110f7d48cee0f29143d1c',
            character: 'Eighteen',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 731
      },
      {
        adult: false,
        gender: 0,
        id: 2698885,
        known_for_department: 'Acting',
        name: 'Lana Jean Turner',
        original_name: 'Lana Jean Turner',
        popularity: 4.156,
        profile_path: '/kPRGSHdgw5U7rCvyacXLjc9AZd0.jpg',
        roles: [
          {
            credit_id: '629111859a643500aa06cf77',
            character: 'Seven',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 734
      },
      {
        adult: false,
        gender: 0,
        id: 3566346,
        known_for_department: 'Acting',
        name: 'Bentley Williams',
        original_name: 'Bentley Williams',
        popularity: 1.128,
        profile_path: null,
        roles: [
          {
            credit_id: '629111c289b5610066a7df2b',
            character: 'Fifteen',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 736
      },
      {
        adult: false,
        gender: 1,
        id: 2341451,
        known_for_department: 'Acting',
        name: 'Hendrix Yancey',
        original_name: 'Hendrix Yancey',
        popularity: 2.706,
        profile_path: '/jl7FFIdIvp1A9bv3qeLTALfne4t.jpg',
        roles: [
          {
            credit_id: '629111e1fd63000099d0c23a',
            character: 'Thirteen',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 737
      },
      {
        adult: false,
        gender: 1,
        id: 2264087,
        known_for_department: 'Acting',
        name: 'Anniston Price',
        original_name: 'Anniston Price',
        popularity: 2.102,
        profile_path: '/35hG4HtWsxT7HLrtAeMQfusfPB9.jpg',
        roles: [
          {
            credit_id: '5d25825a37b3a9747d52ab65',
            character: 'Holly Wheeler',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 748
      },
      {
        adult: false,
        gender: 1,
        id: 2680313,
        known_for_department: 'Acting',
        name: 'Greta Glenn',
        original_name: 'Greta Glenn',
        popularity: 2.492,
        profile_path: '/txFvSRUAWJGg7yakRXtoSAmijvL.jpg',
        roles: [
          {
            credit_id: '631cf41c0d2f53007c6b8083',
            character: 'Secretary #2',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 752
      },
      {
        adult: false,
        gender: 2,
        id: 2926273,
        known_for_department: 'Acting',
        name: 'Sam Ashby',
        original_name: 'Sam Ashby',
        popularity: 4.861,
        profile_path: '/87Ij1Tu3E7mzSu2Chib7t9Jb4m5.jpg',
        roles: [
          {
            credit_id: '652992f00cb33516f746c233',
            character: 'Werewolf',
            episode_count: 2
          }
        ],
        total_episode_count: 2,
        order: 757
      },
      {
        adult: false,
        gender: 0,
        id: 1772398,
        known_for_department: 'Acting',
        name: 'Christi Waldon',
        original_name: 'Christi Waldon',
        popularity: 1.96,
        profile_path: '/8KZh1ombwUA4z5s6c1hHasEiYTu.jpg',
        roles: [
          {
            credit_id: '58c03ecac3a3683a91000df5',
            character: 'Marissa',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 500
      },
      {
        adult: false,
        gender: 2,
        id: 168873,
        known_for_department: 'Acting',
        name: 'Gilbert Glenn Brown',
        original_name: 'Gilbert Glenn Brown',
        popularity: 8.189,
        profile_path: '/ht7bT1bu3MHh8mRIFXuGIWaX8KH.jpg',
        roles: [
          {
            credit_id: '59fca76d92514113bf02ecaa',
            character: 'Cop #4',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 501
      },
      {
        adult: false,
        gender: 1,
        id: 1642789,
        known_for_department: 'Acting',
        name: 'Madelyn Cline',
        original_name: 'Madelyn Cline',
        popularity: 34.068,
        profile_path: '/zJd4MWHdhtDGUu281NNzlBeoHRu.jpg',
        roles: [
          {
            credit_id: '59fca794925141137f030762',
            character: 'Tina',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 502
      },
      {
        adult: false,
        gender: 2,
        id: 146020,
        known_for_department: 'Acting',
        name: 'Brian F. Durkin',
        original_name: 'Brian F. Durkin',
        popularity: 8.952,
        profile_path: '/e512f73OO7sx9e7WjIcqCKqLXqN.jpg',
        roles: [
          {
            credit_id: '59fca7d0c3a3681abb02f31c',
            character: 'Cop #1',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 503
      },
      {
        adult: false,
        gender: 1,
        id: 1916840,
        known_for_department: 'Acting',
        name: 'Lauren Halperin',
        original_name: 'Lauren Halperin',
        popularity: 4.442,
        profile_path: '/qoBipKI23xiuYuCVMNuRCCREDRU.jpg',
        roles: [
          {
            credit_id: '59fca82ac3a3681a6402d669',
            character: 'Dr. Owens' Assistant',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 504
      },
      {
        adult: false,
        gender: 0,
        id: 1349052,
        known_for_department: 'Acting',
        name: 'Christopher Johnson',
        original_name: 'Christopher Johnson',
        popularity: 1.22,
        profile_path: null,
        roles: [
          {
            credit_id: '59fca851c3a3681a1b03188e',
            character: 'Cop #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 505
      },
      {
        adult: false,
        gender: 2,
        id: 187683,
        known_for_department: 'Acting',
        name: 'Fenton Lawless',
        original_name: 'Fenton Lawless',
        popularity: 5.361,
        profile_path: '/w43Cq1bDAPKTWfBuXr5kaJbr1P7.jpg',
        roles: [
          {
            credit_id: '59fca87d925141138b030e17',
            character: 'Merril',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 506
      },
      {
        adult: false,
        gender: 2,
        id: 1001687,
        known_for_department: 'Acting',
        name: 'Aaron Munoz',
        original_name: 'Aaron Munoz',
        popularity: 4.49,
        profile_path: '/szkmjJfm7pWk5aCX1RbLtsBrhzG.jpg',
        roles: [
          {
            credit_id: '59fca8d292514113a602deaa',
            character: 'Mr. Holland',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 507
      },
      {
        adult: false,
        gender: 2,
        id: 1916845,
        known_for_department: 'Acting',
        name: 'Ricardo Miguel Young',
        original_name: 'Ricardo Miguel Young',
        popularity: 1.432,
        profile_path: null,
        roles: [
          {
            credit_id: '59fca97692514113bb02ef89',
            character: 'TV Reporter',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 508
      },
      {
        adult: false,
        gender: 2,
        id: 1787406,
        known_for_department: 'Acting',
        name: 'Apollo GT',
        original_name: 'Apollo GT',
        popularity: 3.338,
        profile_path: '/fw6pIImSmsw6ywXuJzdhszULxkO.jpg',
        roles: [
          {
            credit_id: '5af87759c3a36845df001204',
            character: 'Pedestrian',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 511
      },
      {
        adult: false,
        gender: 2,
        id: 111693,
        known_for_department: 'Acting',
        name: 'Adam Boyer',
        original_name: 'Adam Boyer',
        popularity: 9.808,
        profile_path: '/lxqVHfVnMxExCSzJLal5gFHeVW8.jpg',
        roles: [
          {
            credit_id: '5afdfff792514178c2000da9',
            character: 'Hunting Store Owner',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 512
      },
      {
        adult: false,
        gender: 1,
        id: 1001775,
        known_for_department: 'Acting',
        name: 'Tonya Bludsworth',
        original_name: 'Tonya Bludsworth',
        popularity: 2.715,
        profile_path: '/6z68gggGbrY1uidDU9tgk8TSS27.jpg',
        roles: [
          {
            credit_id: '5b1f1288c3a36808a3013cad',
            character: 'Government Agent #1',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 513
      },
      {
        adult: false,
        gender: 2,
        id: 1223403,
        known_for_department: 'Acting',
        name: 'Jim E. Chandler',
        original_name: 'Jim E. Chandler',
        popularity: 4.679,
        profile_path: '/aqapPNP4axZI9roXrlfdwf0shgo.jpg',
        roles: [
          {
            credit_id: '5b1f12a1c3a36808a600e345',
            character: 'Government Agent #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 514
      },
      {
        adult: false,
        gender: 2,
        id: 1391125,
        known_for_department: 'Acting',
        name: 'Al Mitchell',
        original_name: 'Al Mitchell',
        popularity: 6.857,
        profile_path: '/126oqauePaHdnMObEVb02ounBbo.jpg',
        roles: [
          {
            credit_id: '5b1f12ad0e0a264faa01279d',
            character: 'Eugene',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 515
      },
      {
        adult: false,
        gender: 0,
        id: 2021938,
        known_for_department: 'Acting',
        name: 'Cody Pressley',
        original_name: 'Cody Pressley',
        popularity: 1.708,
        profile_path: null,
        roles: [
          {
            credit_id: '5b1f12ba0e0a264fbb011b7d',
            character: 'Drunk Teen #1 (as Cody Land Pressley)',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 516
      },
      {
        adult: false,
        gender: 2,
        id: 1635144,
        known_for_department: 'Acting',
        name: 'Trey McGriff',
        original_name: 'Trey McGriff',
        popularity: 3.633,
        profile_path: '/iuGh6AGdnfLdPEB93bQxnGiq48W.jpg',
        roles: [
          {
            credit_id: '5b1f12c7c3a368088f0114f8',
            character: 'Hawkins PD (uncredited)',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 517
      },
      {
        adult: false,
        gender: 0,
        id: 1932326,
        known_for_department: 'Acting',
        name: 'Parker Allen',
        original_name: 'Parker Allen',
        popularity: 2.185,
        profile_path: null,
        roles: [
          {
            credit_id: '5b1f12e20e0a264fb901239f',
            character: 'Rift Soldier (uncredited)',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 518
      },
      {
        adult: false,
        gender: 2,
        id: 1217651,
        known_for_department: 'Acting',
        name: 'Andrew Benator',
        original_name: 'Andrew Benator',
        popularity: 5.506,
        profile_path: '/nlBSUWmZPEtEiwCxG4lx1u9U4Z6.jpg',
        roles: [
          {
            credit_id: '5b36ee080e0a264016035465',
            character: 'Elevator Scientist',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 519
      },
      {
        adult: false,
        gender: 2,
        id: 1448783,
        known_for_department: 'Acting',
        name: 'Kai Greene',
        original_name: 'Kai Greene',
        popularity: 1.47,
        profile_path: null,
        roles: [
          {
            credit_id: '5d257959a698cf3087a752d7',
            character: 'Funshine',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 525
      },
      {
        adult: false,
        gender: 1,
        id: 1107177,
        known_for_department: 'Acting',
        name: 'Anna Jacoby-Heron',
        original_name: 'Anna Jacoby-Heron',
        popularity: 4.248,
        profile_path: '/wNpKJBDDnFquT8NpGQtVUPQ12e2.jpg',
        roles: [
          {
            credit_id: '5d257969e24e3a00122be860',
            character: 'Dottie',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 526
      },
      {
        adult: false,
        gender: 1,
        id: 2358347,
        known_for_department: 'Acting',
        name: 'Gabrielle Maiden',
        original_name: 'Gabrielle Maiden',
        popularity: 4,
        profile_path: '/k6PaEqlyVsCJt5lIbKjAFLsXGw9.jpg',
        roles: [
          {
            credit_id: '5d25797937b3a94927529afd',
            character: 'Mick',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 527
      },
      {
        adult: false,
        gender: 2,
        id: 1293892,
        known_for_department: 'Acting',
        name: 'Chris Sullivan',
        original_name: 'Chris Sullivan',
        popularity: 14.528,
        profile_path: '/gKZ9xSFrDzUPv27iAkMpH6Qf0Sk.jpg',
        roles: [
          {
            credit_id: '5d257da9a698cf0fa7a83b45',
            character: 'Benny Hammond',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 531
      },
      {
        adult: false,
        gender: 1,
        id: 1254367,
        known_for_department: 'Acting',
        name: 'Bethany Anne Lind',
        original_name: 'Bethany Anne Lind',
        popularity: 6.544,
        profile_path: '/d0FjeKbWYhbTzFSimCnC9K1Maza.jpg',
        roles: [
          {
            credit_id: '5d257ebae24e3a00122bf46d',
            character: 'Sandra',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 532
      },
      {
        adult: false,
        gender: 0,
        id: 2358375,
        known_for_department: 'Acting',
        name: 'Sierra Rae',
        original_name: 'Sierra Rae',
        popularity: 2.18,
        profile_path: null,
        roles: [
          {
            credit_id: '5d257f9569d2801be00381f5',
            character: 'Ally',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 535
      },
      {
        adult: false,
        gender: 2,
        id: 160351,
        known_for_department: 'Acting',
        name: 'Mark Withers',
        original_name: 'Mark Withers',
        popularity: 5.92,
        profile_path: '/8qxeiJ0iyku2UQQUz3GAzjvHwjb.jpg',
        roles: [
          {
            credit_id: '5d257fefa698cf0fa7a8428d',
            character: 'Gary',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 537
      },
      {
        adult: false,
        gender: 0,
        id: 1747720,
        known_for_department: 'Acting',
        name: 'Marianne Fraulo',
        original_name: 'Marianne Fraulo',
        popularity: 1.728,
        profile_path: '/9gqy2qmlSUmRaIyVejoYCnmHZd5.jpg',
        roles: [
          {
            credit_id: '5d258006a698cf59f5a77f87',
            character: 'Patty',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 538
      },
      {
        adult: false,
        gender: 0,
        id: 2358385,
        known_for_department: 'Acting',
        name: 'Linda Kang',
        original_name: 'Linda Kang',
        popularity: 0.6,
        profile_path: null,
        roles: [
          {
            credit_id: '5d258132e24e3a00112bfe3b',
            character: 'Female Clerk',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 542
      },
      {
        adult: false,
        gender: 2,
        id: 1874945,
        known_for_department: 'Acting',
        name: 'Kevin Patrick Murphy',
        original_name: 'Kevin Patrick Murphy',
        popularity: 4.921,
        profile_path: '/fCDieb3E8tqnKYceMmA4UsxSXwp.jpg',
        roles: [
          {
            credit_id: '5d258146a698cf0010ab480a',
            character: 'Grocery Store Manager',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 543
      },
      {
        adult: false,
        gender: 2,
        id: 1579625,
        known_for_department: 'Acting',
        name: 'Robert Walker Branchaud',
        original_name: 'Robert Walker Branchaud',
        popularity: 7,
        profile_path: '/gD7Te0niYEmfC0BDf4Xb2dHISDG.jpg',
        roles: [
          {
            credit_id: '5d258188e24e3a00112bff21',
            character: 'Agent Repairman',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 544
      },
      {
        adult: false,
        gender: 0,
        id: 2358394,
        known_for_department: 'Acting',
        name: 'Shae Britt',
        original_name: 'Shae Britt',
        popularity: 1.22,
        profile_path: null,
        roles: [
          {
            credit_id: '5d2581d969d28024d0043e2a',
            character: 'Mary Mack Girl #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 545
      },
      {
        adult: false,
        gender: 1,
        id: 1510263,
        known_for_department: 'Acting',
        name: 'Jackie Dallas',
        original_name: 'Jackie Dallas',
        popularity: 2.659,
        profile_path: '/qgi2NIFFeDyRgSodxn8UZFpzugx.jpg',
        roles: [
          {
            credit_id: '5d2581e9e24e3a00132bfca9',
            character: 'Jen',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 546
      },
      {
        adult: false,
        gender: 0,
        id: 2358396,
        known_for_department: 'Acting',
        name: 'Abigail Whitlock',
        original_name: 'Abigail Whitlock',
        popularity: 1.22,
        profile_path: null,
        roles: [
          {
            credit_id: '5d258223e24e3a00122bfd6a',
            character: 'Mary Mack Girl #1',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 547
      },
      {
        adult: false,
        gender: 1,
        id: 155965,
        known_for_department: 'Acting',
        name: 'Amy Parrish',
        original_name: 'Amy Parrish',
        popularity: 11.081,
        profile_path: '/ueQFClINI5RNrnKQkM3sv8MQkzg.jpg',
        roles: [
          {
            credit_id: '5d25827169d28024d0043fa9',
            character: 'Troy's Mom',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 548
      },
      {
        adult: false,
        gender: 1,
        id: 1511922,
        known_for_department: 'Acting',
        name: 'Elle Graham',
        original_name: 'Elle Graham',
        popularity: 8.176,
        profile_path: '/eLsnIfOxENO2JsHCnlrnERdZ9fM.jpg',
        roles: [
          {
            credit_id: '5d25830469d2802c6e002254',
            character: 'Sara Hopper',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 551
      },
      {
        adult: false,
        gender: 2,
        id: 930994,
        known_for_department: 'Acting',
        name: 'Lucius Baston',
        original_name: 'Lucius Baston',
        popularity: 3.679,
        profile_path: '/b1E5U0OfLmc6V35Xl8nwDxLIYXW.jpg',
        roles: [
          {
            credit_id: '5d25833569d2801be0038b41',
            character: 'Technician',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 553
      },
      {
        adult: false,
        gender: 1,
        id: 1493882,
        known_for_department: 'Acting',
        name: 'Lynne Ashe',
        original_name: 'Lynne Ashe',
        popularity: 4.061,
        profile_path: '/cUfEMdv3aQz2L17rnnSSmRpyhXC.jpg',
        roles: [
          {
            credit_id: '5d25838aa698cf59f5a7882d',
            character: 'Happy Homeowner',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 554
      },
      {
        adult: false,
        gender: 0,
        id: 1386350,
        known_for_department: 'Acting',
        name: 'Donna Wright',
        original_name: 'Donna Wright',
        popularity: 1.534,
        profile_path: null,
        roles: [
          {
            credit_id: '5d2583d637b3a90011530ef6',
            character: 'Elderly Math Teacher',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 555
      },
      {
        adult: false,
        gender: 2,
        id: 21084,
        known_for_department: 'Acting',
        name: 'David Dwyer',
        original_name: 'David Dwyer',
        popularity: 16.317,
        profile_path: '/kMTtoYRHltlJI9YzWPKe56gK99h.jpg',
        roles: [
          {
            credit_id: '5d258723a698cf59f5a78feb',
            character: 'Earl',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 556
      },
      {
        adult: false,
        gender: 1,
        id: 1895872,
        known_for_department: 'Acting',
        name: 'Salem Murphy',
        original_name: 'Salem Murphy',
        popularity: 4.35,
        profile_path: '/43zUWawBYErN7PuG7EBytxo8Xdq.jpg',
        roles: [
          {
            credit_id: '5d25874169d28054b700c6e7',
            character: 'High School Principal',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 557
      },
      {
        adult: false,
        gender: 1,
        id: 168703,
        known_for_department: 'Acting',
        name: 'Avis-Marie Barnes',
        original_name: 'Avis-Marie Barnes',
        popularity: 7.985,
        profile_path: '/fhlBsenWqADTTVOAlyo0FnKHzWE.jpg',
        roles: [
          {
            credit_id: '5d25882537b3a90011531750',
            character: 'Elderly Woman',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 560
      },
      {
        adult: false,
        gender: 0,
        id: 2253135,
        known_for_department: 'Acting',
        name: 'PJ McDonnell',
        original_name: 'PJ McDonnell',
        popularity: 0.622,
        profile_path: '/piKrDN7scVFt30FtxRtyfDm1XB1.jpg',
        roles: [
          {
            credit_id: '5d25883fa698cf0fa7a856ee',
            character: 'Mentally Ill Man',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 561
      },
      {
        adult: false,
        gender: 2,
        id: 1156146,
        known_for_department: 'Acting',
        name: 'Keith Brooks',
        original_name: 'Keith Brooks',
        popularity: 5.682,
        profile_path: null,
        roles: [
          {
            credit_id: '5d258865a698cf3087a776c0',
            character: 'Gas Station Clerk',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 562
      },
      {
        adult: false,
        gender: 1,
        id: 1217862,
        known_for_department: 'Acting',
        name: 'Mary Kraft',
        original_name: 'Mary Kraft',
        popularity: 3.353,
        profile_path: '/tBjDa5g4E0PllqIg3KHUGDKJGU7.jpg',
        roles: [
          {
            credit_id: '5d25889269d2802c6e003033',
            character: 'ER Doctor',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 563
      },
      {
        adult: false,
        gender: 0,
        id: 1714699,
        known_for_department: 'Acting',
        name: 'Sheena Kharazmi',
        original_name: 'Sheena Kharazmi',
        popularity: 2.744,
        profile_path: null,
        roles: [
          {
            credit_id: '5d2588a1e24e3a00102c123e',
            character: 'Exam Room Nurse',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 564
      },
      {
        adult: false,
        gender: 2,
        id: 223022,
        known_for_department: 'Acting',
        name: 'Brandon O'Dell',
        original_name: 'Brandon O'Dell',
        popularity: 4.409,
        profile_path: '/mquFOZsnuUPpnrDRz6ie9FFnoXf.jpg',
        roles: [
          {
            credit_id: '5d2588d9a698cf3087a77789',
            character: 'Neurologist',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 565
      },
      {
        adult: false,
        gender: 2,
        id: 1661269,
        known_for_department: 'Acting',
        name: 'Cory Chapman',
        original_name: 'Cory Chapman',
        popularity: 5.113,
        profile_path: '/clioIIwHWDs7C0BbkfE9gLtU08m.jpg',
        roles: [
          {
            credit_id: '5d25895fe24e3a00132c0ea6',
            character: 'Lab Technician',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 568
      },
      {
        adult: false,
        gender: 2,
        id: 97446,
        known_for_department: 'Acting',
        name: 'James DuMont',
        original_name: 'James DuMont',
        popularity: 15.697,
        profile_path: '/8DLNFj3a4SJWdtw5daPBQm0qrOO.jpg',
        roles: [
          {
            credit_id: '5d25899a37b3a902ce52bfa4',
            character: 'Middle-Aged Man',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 569
      },
      {
        adult: false,
        gender: 0,
        id: 2358416,
        known_for_department: 'Acting',
        name: 'Olivia De Paux',
        original_name: 'Olivia De Paux',
        popularity: 1.708,
        profile_path: null,
        roles: [
          {
            credit_id: '5d2589eea698cf0fa7a85a9e',
            character: 'Park Goer',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 571
      },
      {
        adult: false,
        gender: 0,
        id: 2358417,
        known_for_department: 'Acting',
        name: 'Camden Ella Brown',
        original_name: 'Camden Ella Brown',
        popularity: 1.62,
        profile_path: null,
        roles: [
          {
            credit_id: '5d258a2c37b3a9492752c254',
            character: 'Middle School Girl',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 572
      },
      {
        adult: false,
        gender: 0,
        id: 2126967,
        known_for_department: 'Acting',
        name: 'Judy McGee Burley',
        original_name: 'Judy McGee Burley',
        popularity: 0.694,
        profile_path: null,
        roles: [
          {
            credit_id: '5d258a3d37b3a9492752c283',
            character: 'Cafeteria Worker',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 573
      },
      {
        adult: false,
        gender: 2,
        id: 2011382,
        known_for_department: 'Acting',
        name: 'Bradford Haynes',
        original_name: 'Bradford Haynes',
        popularity: 2.644,
        profile_path: null,
        roles: [
          {
            credit_id: '5d258a4ea698cf0fa7a85af7',
            character: 'Charles Sinclair',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 574
      },
      {
        adult: false,
        gender: 0,
        id: 1808566,
        known_for_department: 'Acting',
        name: 'Bill Eudaly',
        original_name: 'Bill Eudaly',
        popularity: 2.908,
        profile_path: '/19Yd2quxUTCTQ9mW3TL9qYzIc87.jpg',
        roles: [
          {
            credit_id: '5d258a8c69d2802c6e0033f7',
            character: 'Pastor Charles',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 576
      },
      {
        adult: false,
        gender: 0,
        id: 2358419,
        known_for_department: 'Acting',
        name: 'Kaylee Glover',
        original_name: 'Kaylee Glover',
        popularity: 1.617,
        profile_path: null,
        roles: [
          {
            credit_id: '5d258ac137b3a9492752c361',
            character: 'Jennifer Hayes',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 577
      },
      {
        adult: false,
        gender: 2,
        id: 1450767,
        known_for_department: 'Acting',
        name: 'Mo Anouti',
        original_name: 'Mo Anouti',
        popularity: 2.658,
        profile_path: '/sxFM9bhKAWpJ8hvHpueBVkTHwPf.jpg',
        roles: [
          {
            credit_id: '5d268020caab6d0013954291',
            character: 'Russian Prisoner',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 579
      },
      {
        adult: false,
        gender: 2,
        id: 1584840,
        known_for_department: 'Acting',
        name: 'Nikita Bogolyubov',
        original_name: 'Nikita Bogolyubov',
        popularity: 5.409,
        profile_path: '/wpoiVdZqPJb3Kr7rAd2nKCEtPMR.jpg',
        roles: [
          {
            credit_id: '5d26805ab974420010afa8e0',
            character: 'Russian Guard',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 580
      },
      {
        adult: false,
        gender: 2,
        id: 2359019,
        known_for_department: 'Acting',
        name: 'Yevgeniy Kartashov',
        original_name: 'Yevgeniy Kartashov',
        popularity: 3.014,
        profile_path: '/mKokxUIO6Iccz7CRYFbjJWEHoFp.jpg',
        roles: [
          {
            credit_id: '5d26806ccaab6d0012954c34',
            character: 'Officer',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 581
      },
      {
        adult: false,
        gender: 2,
        id: 1585751,
        known_for_department: 'Acting',
        name: 'Zack Sayenko',
        original_name: 'Zack Sayenko',
        popularity: 2.588,
        profile_path: '/7oDpH8pZPDbaimaE7xTQPK3UcK7.jpg',
        roles: [
          {
            credit_id: '5d268087b974420011afaa9d',
            character: 'Nervous Guard',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 582
      },
      {
        adult: false,
        gender: 2,
        id: 188758,
        known_for_department: 'Acting',
        name: 'Arthur Darbinyan',
        original_name: 'Arthur Darbinyan',
        popularity: 3.223,
        profile_path: '/iwl8jHiDFWDGMDN6VWSmPZh4Ktb.jpg',
        roles: [
          {
            credit_id: '5d26816dcaab6d0011954fe8',
            character: 'Doctor Zharkov',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 584
      },
      {
        adult: false,
        gender: 2,
        id: 1255887,
        known_for_department: 'Acting',
        name: 'Misha Kuznetsov',
        original_name: 'Misha Kuznetsov',
        popularity: 9.272,
        profile_path: '/ysCbZvcCKvmN957xkKRjs9Gio0E.jpg',
        roles: [
          {
            credit_id: '5d26819fb97442000fafac45',
            character: 'Ozerov',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 585
      },
      {
        adult: false,
        gender: 1,
        id: 46928,
        known_for_department: 'Acting',
        name: 'Beth Riesgraf',
        original_name: 'Beth Riesgraf',
        popularity: 9.424,
        profile_path: '/hFCMloGRDOJng6F1L41PTO3CBuE.jpg',
        roles: [
          {
            credit_id: '5d2681dcdc86470010a52ab5',
            character: 'Billy's Mother',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 586
      },
      {
        adult: false,
        gender: 0,
        id: 2359020,
        known_for_department: 'Acting',
        name: 'Pat Gallaher',
        original_name: 'Pat Gallaher',
        popularity: 0.636,
        profile_path: null,
        roles: [
          {
            credit_id: '5d268204dc86470012a52fc1',
            character: 'Government Man',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 587
      },
      {
        adult: false,
        gender: 2,
        id: 223023,
        known_for_department: 'Acting',
        name: 'Dan Triandiflou',
        original_name: 'Dan Triandiflou',
        popularity: 4.028,
        profile_path: '/vna4dkKcA74T6Rk3GkBFXHPRWmQ.jpg',
        roles: [
          {
            credit_id: '5d2682f8dc86470011a52f58',
            character: 'Rich Douchebag Todd',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 588
      },
      {
        adult: false,
        gender: 2,
        id: 1604191,
        known_for_department: 'Acting',
        name: 'Serge Levin',
        original_name: 'Serge Levin',
        popularity: 3.947,
        profile_path: '/lBwEsR1GHOtiOgXmsO1VJvbaoO9.jpg',
        roles: [
          {
            credit_id: '5d268309b974420011afb39c',
            character: 'Mechanic',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 589
      },
      {
        adult: false,
        gender: 0,
        id: 2359021,
        known_for_department: 'Acting',
        name: 'Michael Silvio Fortino',
        original_name: 'Michael Silvio Fortino',
        popularity: 2.188,
        profile_path: null,
        roles: [
          {
            credit_id: '5d26832edc86470013a52f43',
            character: 'Gas Station Cashier',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 590
      },
      {
        adult: false,
        gender: 1,
        id: 1890583,
        known_for_department: 'Acting',
        name: 'Caroline Arapoglou',
        original_name: 'Caroline Arapoglou',
        popularity: 7.981,
        profile_path: null,
        roles: [
          {
            credit_id: '5d2683afb974420012afbb35',
            character: 'Winnie Kline',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 591
      },
      {
        adult: false,
        gender: 0,
        id: 2359022,
        known_for_department: 'Acting',
        name: 'John Mullins',
        original_name: 'John Mullins',
        popularity: 0.833,
        profile_path: null,
        roles: [
          {
            credit_id: '5d26841db974420012afbc64',
            character: 'Gross Hairy Man',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 593
      },
      {
        adult: false,
        gender: 1,
        id: 1337049,
        known_for_department: 'Acting',
        name: 'Megan Hayes',
        original_name: 'Megan Hayes',
        popularity: 7.801,
        profile_path: '/9ooOAAbsKCNEOdKVJNoqBQ81OqK.jpg',
        roles: [
          {
            credit_id: '5d268506b974420012afc149',
            character: 'Jazzercise Lady',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 595
      },
      {
        adult: false,
        gender: 2,
        id: 1853907,
        known_for_department: 'Acting',
        name: 'Sean Michael Weber',
        original_name: 'Sean Michael Weber',
        popularity: 4.76,
        profile_path: '/l2bKrRYygyUMYwLITRKwQSEnDIQ.jpg',
        roles: [
          {
            credit_id: '5d268534caab6d0011955e6b',
            character: 'Pool Manager',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 597
      },
      {
        adult: false,
        gender: 0,
        id: 1673071,
        known_for_department: 'Acting',
        name: 'Daryn Kahn',
        original_name: 'Daryn Kahn',
        popularity: 3.855,
        profile_path: '/bTvqkOHbzgpAZBra38ZlThmL6c0.jpg',
        roles: [
          {
            credit_id: '5d268555caab6d0014955d8f',
            character: 'Delivery Man',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 598
      },
      {
        adult: false,
        gender: 0,
        id: 2344156,
        known_for_department: 'Acting',
        name: 'John Vodka',
        original_name: 'John Vodka',
        popularity: 1.984,
        profile_path: null,
        roles: [
          {
            credit_id: '5d268a64caab6d0013956e48',
            character: 'Major General Stepanov',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 610
      },
      {
        adult: false,
        gender: 2,
        id: 2359056,
        known_for_department: 'Acting',
        name: 'Samuel Goergen',
        original_name: 'Samuel Goergen',
        popularity: 4.173,
        profile_path: '/28UudgWXKlHaoqOyuD7tohzAlth.jpg',
        roles: [
          {
            credit_id: '5d269145b974420010afec1d',
            character: 'Fireworks Kid',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 611
      },
      {
        adult: false,
        gender: 1,
        id: 2433620,
        known_for_department: 'Acting',
        name: 'Jacey Sink',
        original_name: 'Jacey Sink',
        popularity: 5.682,
        profile_path: null,
        roles: [
          {
            credit_id: '5da68e91e6d3cc0018ac54cd',
            character: 'Young Max',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 612
      },
      {
        adult: false,
        gender: 2,
        id: 2623723,
        known_for_department: 'Acting',
        name: 'Gage Lawson',
        original_name: 'Gage Lawson',
        popularity: 5.295,
        profile_path: '/gYowFnKxGAEaPfNvHZMK2pVLEEP.jpg',
        roles: [
          {
            credit_id: '5eae892ecdbaff0021b17301',
            character: 'Middle School Student (uncredited)',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 613
      },
      {
        adult: false,
        gender: 0,
        id: 3566319,
        known_for_department: 'Acting',
        name: 'Hayley Baron',
        original_name: 'Hayley Baron',
        popularity: 2.327,
        profile_path: null,
        roles: [
          {
            credit_id: '62910ca076eecf0065259034',
            character: 'Friendly Girl #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 616
      },
      {
        adult: false,
        gender: 1,
        id: 1455812,
        known_for_department: 'Acting',
        name: 'Elizabeth Becka',
        original_name: 'Elizabeth Becka',
        popularity: 7.913,
        profile_path: '/1Ew2isbKKLdnK3DvKX01QELrgET.jpg',
        roles: [
          {
            credit_id: '62910cc100508a0050414f97',
            character: 'Dr. Ellis',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 617
      },
      {
        adult: false,
        gender: 0,
        id: 1392835,
        known_for_department: 'Acting',
        name: 'Todd D'Amour',
        original_name: 'Todd D'Amour',
        popularity: 2.252,
        profile_path: null,
        roles: [
          {
            credit_id: '62910d2a7d5db510a65f8a9f',
            character: 'Coach',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 618
      },
      {
        adult: false,
        gender: 0,
        id: 2076149,
        known_for_department: 'Acting',
        name: 'Anna Grace Davidson',
        original_name: 'Anna Grace Davidson',
        popularity: 1.4,
        profile_path: null,
        roles: [
          {
            credit_id: '62910d3e7d5db510a65f8b11',
            character: 'Drama Kid',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 619
      },
      {
        adult: false,
        gender: 0,
        id: 2080003,
        known_for_department: 'Acting',
        name: 'Elise Falanga',
        original_name: 'Elise Falanga',
        popularity: 2.597,
        profile_path: '/ofxuhLCpN2Myx20luhNkMtsNLvo.jpg',
        roles: [
          {
            credit_id: '62910d5f9a64350065be689e',
            character: 'Lenora Neighbor',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 620
      },
      {
        adult: false,
        gender: 2,
        id: 2305430,
        known_for_department: 'Acting',
        name: 'David Gibson',
        original_name: 'David Gibson',
        popularity: 4.43,
        profile_path: '/erQQp4lU9pOcFClh6O4pDF8ICrY.jpg',
        roles: [
          {
            credit_id: '62910df3ed2ac216b8e85b77',
            character: 'Friendly Mailman',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 621
      },
      {
        adult: false,
        gender: 0,
        id: 2076050,
        known_for_department: 'Acting',
        name: 'Sophie Elizabeth Gonzalez',
        original_name: 'Sophie Elizabeth Gonzalez',
        popularity: 1.611,
        profile_path: null,
        roles: [
          {
            credit_id: '62910e05fd63000099d0b194',
            character: 'Art Kid',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 622
      },
      {
        adult: false,
        gender: 2,
        id: 1110284,
        known_for_department: 'Acting',
        name: 'Grant Goodman',
        original_name: 'Grant Goodman',
        popularity: 1.897,
        profile_path: null,
        roles: [
          {
            credit_id: '62910e1809ed8f0050fcecb2',
            character: 'Freak #1',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 623
      },
      {
        adult: false,
        gender: 2,
        id: 1792415,
        known_for_department: 'Acting',
        name: 'Haroon Khan',
        original_name: 'Haroon Khan',
        popularity: 3.656,
        profile_path: '/g9ZENRcx0xdlqkzp3z0sopqDzXi.jpg',
        roles: [
          {
            credit_id: '62910f00ecbde90b6197c106',
            character: 'Chess kid',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 624
      },
      {
        adult: false,
        gender: 2,
        id: 1460925,
        known_for_department: 'Acting',
        name: 'Gregory Konow',
        original_name: 'Gregory Konow',
        popularity: 4.829,
        profile_path: '/k3Zu0epkGox4kaWOTq8dQccab3w.jpg',
        roles: [
          {
            credit_id: '62910f13fd63000099d0b652',
            character: 'Announcer',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 625
      },
      {
        adult: false,
        gender: 0,
        id: 2746108,
        known_for_department: 'Acting',
        name: 'Gwydion Lashlee-Walton',
        original_name: 'Gwydion Lashlee-Walton',
        popularity: 1.4,
        profile_path: null,
        roles: [
          {
            credit_id: '62910f2c209f1812c4ac22cd',
            character: 'Gareth',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 626
      },
      {
        adult: false,
        gender: 2,
        id: 2648199,
        known_for_department: 'Acting',
        name: 'Shane Donovan Lewis',
        original_name: 'Shane Donovan Lewis',
        popularity: 1.765,
        profile_path: '/fEjeq5Q774MwUbxaM2zohXym5DF.jpg',
        roles: [
          {
            credit_id: '62910f7fecbde90b5ff48ab2',
            character: 'Math Kid',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 627
      },
      {
        adult: false,
        gender: 0,
        id: 2388192,
        known_for_department: 'Acting',
        name: 'Lucinda Marker',
        original_name: 'Lucinda Marker',
        popularity: 2.231,
        profile_path: '/287o3d2qq4irG0szDwz98saw4wD.jpg',
        roles: [
          {
            credit_id: '62910f9300508a006616f812',
            character: 'Math Teacher',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 628
      },
      {
        adult: false,
        gender: 1,
        id: 202660,
        known_for_department: 'Acting',
        name: 'Laura Niemi',
        original_name: 'Laura Niemi',
        popularity: 12.536,
        profile_path: '/cQPfzY6b7yiO5LBt2awI8Gt2YCd.jpg',
        roles: [
          {
            credit_id: '62911008fd63000066318bfa',
            character: 'Mrs. Gracey',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 629
      },
      {
        adult: false,
        gender: 0,
        id: 3566337,
        known_for_department: 'Acting',
        name: 'Tristan Peters',
        original_name: 'Tristan Peters',
        popularity: 2.744,
        profile_path: null,
        roles: [
          {
            credit_id: '6291102f7d5db510a72d8d85',
            character: 'Chess Kid #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 630
      },
      {
        adult: false,
        gender: 0,
        id: 3550295,
        known_for_department: 'Acting',
        name: 'Shawnee Pourier',
        original_name: 'Shawnee Pourier',
        popularity: 1.4,
        profile_path: '/gB1Mz8UMPF5lkoVHWysgPllcDbB.jpg',
        roles: [
          {
            credit_id: '629110429a64350050a90006',
            character: 'Cute Girl',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 631
      },
      {
        adult: false,
        gender: 0,
        id: 1930891,
        known_for_department: 'Acting',
        name: 'Julia Reilly',
        original_name: 'Julia Reilly',
        popularity: 4.518,
        profile_path: '/w93nJskkwVQsfsrd85aGe3HRTdN.jpg',
        roles: [
          {
            credit_id: '6291106f7d5db510a72d8e47',
            character: 'Tammy Thompson',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 632
      },
      {
        adult: false,
        gender: 1,
        id: 171525,
        known_for_department: 'Acting',
        name: 'Candice Rose',
        original_name: 'Candice Rose',
        popularity: 2.715,
        profile_path: '/zIkqdb4EzZNh1bdPnPQO4oL71N5.jpg',
        roles: [
          {
            credit_id: '6291109e9a64350050a9015f',
            character: 'Chrissy's Mom',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 633
      },
      {
        adult: false,
        gender: 0,
        id: 2463872,
        known_for_department: 'Acting',
        name: 'Sam Salary',
        original_name: 'Sam Salary',
        popularity: 1.896,
        profile_path: '/z4Nn7dAEf98kRAVviQnnkNpQRow.jpg',
        roles: [
          {
            credit_id: '629110c900508a0050415ee0',
            character: 'Stern Orderly',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 634
      },
      {
        adult: false,
        gender: 0,
        id: 3566340,
        known_for_department: 'Acting',
        name: 'Maximo Salas',
        original_name: 'Maximo Salas',
        popularity: 1.179,
        profile_path: null,
        roles: [
          {
            credit_id: '629110e5fd63000099d0bd2f',
            character: 'Wrestler Teen',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 635
      },
      {
        adult: false,
        gender: 1,
        id: 2034230,
        known_for_department: 'Acting',
        name: 'Brook Sill',
        original_name: 'Brook Sill',
        popularity: 2.483,
        profile_path: '/xjmxmEuwxubce1yaEECLySyu4P4.jpg',
        roles: [
          {
            credit_id: '6291110a209f1812c4ac2b9c',
            character: 'Brenda',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 636
      },
      {
        adult: false,
        gender: 0,
        id: 3566342,
        known_for_department: 'Acting',
        name: 'Christopher Strand',
        original_name: 'Christopher Strand',
        popularity: 1.4,
        profile_path: null,
        roles: [
          {
            credit_id: '6291112689b5610066a7dc3e',
            character: 'Chrissy's Dad',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 637
      },
      {
        adult: false,
        gender: 0,
        id: 3566344,
        known_for_department: 'Acting',
        name: 'Abigail R. Townsend',
        original_name: 'Abigail R. Townsend',
        popularity: 2.061,
        profile_path: null,
        roles: [
          {
            credit_id: '62911177fcb8cc006629fc24',
            character: 'Friendly Girl',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 638
      },
      {
        adult: false,
        gender: 2,
        id: 2184808,
        known_for_department: 'Acting',
        name: 'De'Jon Watts',
        original_name: 'De'Jon Watts',
        popularity: 2.779,
        profile_path: '/huET3BOarwibapramM5D3I4v94R.jpg',
        roles: [
          {
            credit_id: '629111b0fd63000099d0c173',
            character: 'Six',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 639
      },
      {
        adult: false,
        gender: 2,
        id: 1320114,
        known_for_department: 'Acting',
        name: 'Ed Amatrudo',
        original_name: 'Ed Amatrudo',
        popularity: 5.124,
        profile_path: '/425tSvu0USMcnjLiXnKr4XoeexF.jpg',
        roles: [
          {
            credit_id: '629119ead48cee0f29146110',
            character: 'Director Hatch',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 640
      },
      {
        adult: false,
        gender: 2,
        id: 5139,
        known_for_department: 'Acting',
        name: 'Robert Englund',
        original_name: 'Robert Englund',
        popularity: 40.445,
        profile_path: '/cjGEkiavinHa1dnetDvnEhlD2Wm.jpg',
        roles: [
          {
            credit_id: '6291233ddf86a87625b9291f',
            character: 'Victor Creel',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 646
      },
      {
        adult: false,
        gender: 0,
        id: 2261610,
        known_for_department: 'Acting',
        name: 'Saulius Bareikis',
        original_name: 'Saulius Bareikis',
        popularity: 1.708,
        profile_path: '/9alHD12XmS78vMPPiNa6xxhJnMa.jpg',
        roles: [
          {
            credit_id: '6296332f09ed8f125556c61f',
            character: 'Russian Doctor',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 647
      },
      {
        adult: false,
        gender: 1,
        id: 2391877,
        known_for_department: 'Acting',
        name: 'Larkin Bell',
        original_name: 'Larkin Bell',
        popularity: 2.931,
        profile_path: '/9W5yQNKUi92fFshyiO2n8uUUiwB.jpg',
        roles: [
          {
            credit_id: '629633465507e914925ba256',
            character: 'Rink-o-Mania Employee',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 648
      },
      {
        adult: false,
        gender: 0,
        id: 3571074,
        known_for_department: 'Acting',
        name: 'Michelle Bowman',
        original_name: 'Michelle Bowman',
        popularity: 1.346,
        profile_path: null,
        roles: [
          {
            credit_id: '6296335c1e9225009cdbbbe0',
            character: 'Teen Skater #4',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 649
      },
      {
        adult: false,
        gender: 0,
        id: 1926984,
        known_for_department: 'Acting',
        name: 'Sarah Bowman',
        original_name: 'Sarah Bowman',
        popularity: 1.715,
        profile_path: null,
        roles: [
          {
            credit_id: '6296336d1e9225004f79b4b4',
            character: 'Teen Skater #3',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 651
      },
      {
        adult: false,
        gender: 0,
        id: 3571076,
        known_for_department: 'Acting',
        name: 'Ethan Dennis',
        original_name: 'Ethan Dennis',
        popularity: 1.108,
        profile_path: null,
        roles: [
          {
            credit_id: '62963387df86a834e198b007',
            character: 'Teen Skater #1',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 652
      },
      {
        adult: false,
        gender: 2,
        id: 1023673,
        known_for_department: 'Acting',
        name: 'Cuyle Carvin',
        original_name: 'Cuyle Carvin',
        popularity: 7.423,
        profile_path: '/6TFz6bsOAdMkcN17IyAg41uNAzd.jpg',
        roles: [
          {
            credit_id: '62963396d71fb4005190ec9c',
            character: 'Soldier',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 653
      },
      {
        adult: false,
        gender: 0,
        id: 2035560,
        known_for_department: 'Acting',
        name: 'Leedy Corbin',
        original_name: 'Leedy Corbin',
        popularity: 2.759,
        profile_path: '/bImwM9qdpb88r3JRyNPjNWJ5Yl1.jpg',
        roles: [
          {
            credit_id: '629633a8d71fb4005190ecb8',
            character: 'Annoyed Girl',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 654
      },
      {
        adult: false,
        gender: 0,
        id: 3240886,
        known_for_department: 'Acting',
        name: 'Karyn Greer',
        original_name: 'Karyn Greer',
        popularity: 1.67,
        profile_path: null,
        roles: [
          {
            credit_id: '629633b709ed8f12547ee384',
            character: 'Beverly Moss',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 655
      },
      {
        adult: false,
        gender: 2,
        id: 1146942,
        known_for_department: 'Acting',
        name: 'Joe Grisaffi',
        original_name: 'Joe Grisaffi',
        popularity: 2.682,
        profile_path: '/AvHHBuuMZExckAVtshKDgLlhbqK.jpg',
        roles: [
          {
            credit_id: '629633e0d48cee0d7071b116',
            character: 'Army Medical Examineer',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 657
      },
      {
        adult: false,
        gender: 0,
        id: 3571083,
        known_for_department: 'Acting',
        name: 'Elizabeth Howlett',
        original_name: 'Elizabeth Howlett',
        popularity: 2.113,
        profile_path: null,
        roles: [
          {
            credit_id: '629634115a469072f666da8f',
            character: 'Young Girl',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 659
      },
      {
        adult: false,
        gender: 0,
        id: 2033547,
        known_for_department: 'Acting',
        name: 'Karolis Kasperavičius',
        original_name: 'Karolis Kasperavičius',
        popularity: 3.275,
        profile_path: '/yaaUYPnMNplDcQjQ68ApP7EiW8S.jpg',
        roles: [
          {
            credit_id: '62963434ca83541353b2b9b8',
            character: 'Smirking Russian Guard',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 660
      },
      {
        adult: false,
        gender: 0,
        id: 3512548,
        known_for_department: 'Acting',
        name: 'Gabe Kessler',
        original_name: 'Gabe Kessler',
        popularity: 1.388,
        profile_path: null,
        roles: [
          {
            credit_id: '62963447d48cee0d6f675ff2',
            character: 'Rink-o-Mania DJ',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 661
      },
      {
        adult: false,
        gender: 0,
        id: 3571088,
        known_for_department: 'Acting',
        name: 'Mark Lawley',
        original_name: 'Mark Lawley',
        popularity: 1.135,
        profile_path: null,
        roles: [
          {
            credit_id: '6296345af8e9820067ec48f2',
            character: 'Shrugging Neighbor',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 662
      },
      {
        adult: false,
        gender: 0,
        id: 1377068,
        known_for_department: 'Acting',
        name: 'Stacy Melich',
        original_name: 'Stacy Melich',
        popularity: 2.188,
        profile_path: null,
        roles: [
          {
            credit_id: '6296347aa44d090051132cf5',
            character: 'Paranoid Neighbor',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 663
      },
      {
        adult: false,
        gender: 0,
        id: 3571093,
        known_for_department: 'Acting',
        name: 'Margaret Murphy',
        original_name: 'Margaret Murphy',
        popularity: 1.571,
        profile_path: null,
        roles: [
          {
            credit_id: '62963495f8e982009acd2bcc',
            character: 'Monstrous Mourner #3',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 664
      },
      {
        adult: false,
        gender: 0,
        id: 3571095,
        known_for_department: 'Acting',
        name: 'Natalie Otano',
        original_name: 'Natalie Otano',
        popularity: 1.564,
        profile_path: null,
        roles: [
          {
            credit_id: '629634a6df86a834e0b49742',
            character: 'Cute College Girl',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 665
      },
      {
        adult: false,
        gender: 2,
        id: 3433788,
        known_for_department: 'Acting',
        name: 'Alex Parkinson',
        original_name: 'Alex Parkinson',
        popularity: 2.112,
        profile_path: null,
        roles: [
          {
            credit_id: '629634b576eecf1722f5a8bf',
            character: 'Monstrous Mourner #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 666
      },
      {
        adult: false,
        gender: 2,
        id: 231869,
        known_for_department: 'Acting',
        name: 'Andrius Paulavičius',
        original_name: 'Andrius Paulavičius',
        popularity: 3.354,
        profile_path: null,
        roles: [
          {
            credit_id: '629634c6a44d090067bc5cb5',
            character: 'Lead Interrogator',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 667
      },
      {
        adult: false,
        gender: 0,
        id: 2986831,
        known_for_department: 'Acting',
        name: 'Ryan Paynter',
        original_name: 'Ryan Paynter',
        popularity: 1.96,
        profile_path: '/u9VuXJh30XytljBC04E5t3Dw0gH.jpg',
        roles: [
          {
            credit_id: '629634d57e403d009e82e0e3',
            character: 'Dying Teen',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 668
      },
      {
        adult: false,
        gender: 0,
        id: 3571097,
        known_for_department: 'Acting',
        name: 'Glory Quintana',
        original_name: 'Glory Quintana',
        popularity: 1.173,
        profile_path: null,
        roles: [
          {
            credit_id: '629634e6cddbbc130d18be18',
            character: 'Teen Skater #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 669
      },
      {
        adult: false,
        gender: 1,
        id: 3571099,
        known_for_department: 'Acting',
        name: 'Agnieška Ravdo',
        original_name: 'Agnieška Ravdo',
        popularity: 2.551,
        profile_path: null,
        roles: [
          {
            credit_id: '629634fdcddbbc130d18be63',
            character: 'Annoyed Woman',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 670
      },
      {
        adult: false,
        gender: 0,
        id: 2056520,
        known_for_department: 'Acting',
        name: 'Jeff Sprauve',
        original_name: 'Jeff Sprauve',
        popularity: 2.373,
        profile_path: null,
        roles: [
          {
            credit_id: '6296351f5a469072f7bd8dcf',
            character: 'Officer Glenn Daniels',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 672
      },
      {
        adult: false,
        gender: 2,
        id: 1939684,
        known_for_department: 'Acting',
        name: 'Fedor Steer',
        original_name: 'Fedor Steer',
        popularity: 3.275,
        profile_path: '/yLWpuAgEmitslvQLm9h8tyB8KnK.jpg',
        roles: [
          {
            credit_id: '6296352a5a469072f5f0164a',
            character: 'Monstrous Mourner #1',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 673
      },
      {
        adult: false,
        gender: 2,
        id: 1025090,
        known_for_department: 'Crew',
        name: 'Jim Wilkey',
        original_name: 'Jim Wilkey',
        popularity: 7.154,
        profile_path: null,
        roles: [
          {
            credit_id: '629635575a469072f666de17',
            character: 'Taxi Driver',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 676
      },
      {
        adult: false,
        gender: 2,
        id: 1945396,
        known_for_department: 'Acting',
        name: 'Tomas Žaibus',
        original_name: 'Tomas Žaibus',
        popularity: 4.218,
        profile_path: null,
        roles: [
          {
            credit_id: '629635665a469072f7bd8eb5',
            character: 'Russian Guard',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 677
      },
      {
        adult: false,
        gender: 0,
        id: 240971,
        known_for_department: 'Acting',
        name: 'Christine Kellogg-Darrin',
        original_name: 'Christine Kellogg-Darrin',
        popularity: 1.198,
        profile_path: '/8I9UawqSRfdsj9OntIPJhO1bOdU.jpg',
        roles: [
          {
            credit_id: '62963a96a44d090051134134',
            character: 'Cathy Owens',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 679
      },
      {
        adult: false,
        gender: 1,
        id: 1737508,
        known_for_department: 'Acting',
        name: 'Alexandra Ficken',
        original_name: 'Alexandra Ficken',
        popularity: 2.335,
        profile_path: '/3m9g50FzTsNQ6mCQi0gYMwxVck1.jpg',
        roles: [
          {
            credit_id: '62963abf7e403d0050239cbd',
            character: 'Stewardess',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 680
      },
      {
        adult: false,
        gender: 0,
        id: 1194142,
        known_for_department: 'Acting',
        name: 'Mikael Ayele',
        original_name: 'Mikael Ayele',
        popularity: 1.971,
        profile_path: null,
        roles: [
          {
            credit_id: '62963b25d48cee0d6f677992',
            character: 'Paramedic',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 682
      },
      {
        adult: false,
        gender: 0,
        id: 3361181,
        known_for_department: 'Acting',
        name: 'Audrey Holcomb',
        original_name: 'Audrey Holcomb',
        popularity: 1.395,
        profile_path: null,
        roles: [
          {
            credit_id: '6296fbf8ca835413546f6384',
            character: 'Eden',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 688
      },
      {
        adult: false,
        gender: 0,
        id: 3571753,
        known_for_department: 'Acting',
        name: 'Pahsa Lychnikoff',
        original_name: 'Pahsa Lychnikoff',
        popularity: 1.708,
        profile_path: null,
        roles: [
          {
            credit_id: '6296ffe3d48cee2c44bf41da',
            character: 'Oleg',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 693
      },
      {
        adult: false,
        gender: 0,
        id: 1945262,
        known_for_department: 'Acting',
        name: 'Ben Bladon',
        original_name: 'Ben Bladon',
        popularity: 2.628,
        profile_path: null,
        roles: [
          {
            credit_id: '629714e0d48cee2c45c332b0',
            character: 'Muttering Prisoner',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 694
      },
      {
        adult: false,
        gender: 0,
        id: 2211582,
        known_for_department: 'Acting',
        name: 'Derek Hedlund',
        original_name: 'Derek Hedlund',
        popularity: 3.316,
        profile_path: '/kiLmIgLW6ZBqfQaaV9IYGjBwBVJ.jpg',
        roles: [
          {
            credit_id: '629714f3a44d095276ded420',
            character: 'Corporal Meyers',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 695
      },
      {
        adult: false,
        gender: 2,
        id: 1238110,
        known_for_department: 'Acting',
        name: 'Nikolai Nikolaeff',
        original_name: 'Nikolai Nikolaeff',
        popularity: 12.673,
        profile_path: '/nNXhasub1J9IikQx53oKgnyEBYH.jpg',
        roles: [
          {
            credit_id: '62bf512c681888007c8c5caa',
            character: 'Ivan',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 708
      },
      {
        adult: false,
        gender: 0,
        id: 1763912,
        known_for_department: 'Acting',
        name: 'J.R. Adduci',
        original_name: 'J.R. Adduci',
        popularity: 2.953,
        profile_path: '/spkjjqSl1aFv107nuuUdKHcQFev.jpg',
        roles: [
          {
            credit_id: '62bf515628723c004c808ea2',
            character: 'Soldier',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 710
      },
      {
        adult: false,
        gender: 2,
        id: 238352,
        known_for_department: 'Acting',
        name: 'Sasha Andreev',
        original_name: 'Sasha Andreev',
        popularity: 3.122,
        profile_path: '/3MpVjRjNcGAOgdawY7ZmLDzREtx.jpg',
        roles: [
          {
            credit_id: '62bf51701e6489004f18b0c8',
            character: 'Control Room Technician',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 712
      },
      {
        adult: false,
        gender: 0,
        id: 2895510,
        known_for_department: 'Acting',
        name: 'Nick Bardin',
        original_name: 'Nick Bardin',
        popularity: 1.288,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf517f22e4800495def680',
            character: 'Tall Guard',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 713
      },
      {
        adult: false,
        gender: 2,
        id: 81367,
        known_for_department: 'Acting',
        name: 'Jason Coviello',
        original_name: 'Jason Coviello',
        popularity: 2.39,
        profile_path: '/nkD5pJjnMABNohzbv5lIfXtol53.jpg',
        roles: [
          {
            credit_id: '62bf51a812197e007f04387a',
            character: 'Helicopter Sniper Pilot',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 714
      },
      {
        adult: false,
        gender: 0,
        id: 3608265,
        known_for_department: 'Acting',
        name: 'Eddie Craddock',
        original_name: 'Eddie Craddock',
        popularity: 1.545,
        profile_path: '/lF9zwezhXEZlu6Mje0izI336WZP.jpg',
        roles: [
          {
            credit_id: '62bf51c2325a5100c25e2054',
            character: 'Annoyed Neighbor #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 715
      },
      {
        adult: false,
        gender: 2,
        id: 1406674,
        known_for_department: 'Acting',
        name: 'Rob Franco',
        original_name: 'Rob Franco',
        popularity: 4.135,
        profile_path: '/ebUWvpZNqnosj0TL2Ru8zljX9K4.jpg',
        roles: [
          {
            credit_id: '62bf51d36a300b004baaee96',
            character: 'Explosives Specialist',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 716
      },
      {
        adult: false,
        gender: 0,
        id: 2188167,
        known_for_department: 'Acting',
        name: 'Charity Hitchcock',
        original_name: 'Charity Hitchcock',
        popularity: 2.568,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf521c325a5100c25e2079',
            character: 'Scientist #3',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 721
      },
      {
        adult: false,
        gender: 0,
        id: 3529517,
        known_for_department: 'Acting',
        name: 'Roger Ivens',
        original_name: 'Roger Ivens',
        popularity: 2.062,
        profile_path: '/eZJyk2BHoFpKc6D8LZOi8qcx7ex.jpg',
        roles: [
          {
            credit_id: '62bf5238681888004cbeb270',
            character: 'Helicopter Sniper',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 723
      },
      {
        adult: false,
        gender: 0,
        id: 1284346,
        known_for_department: 'Acting',
        name: 'Euguen Leon',
        original_name: 'Euguen Leon',
        popularity: 1.286,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf5268202e11004cd1bdc9',
            character: 'Control Room Guard',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 725
      },
      {
        adult: false,
        gender: 0,
        id: 2942224,
        known_for_department: 'Acting',
        name: 'James Logan',
        original_name: 'James Logan',
        popularity: 2.517,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf5285325a5100c3a416cb',
            character: 'Gun Counter Clerk',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 726
      },
      {
        adult: false,
        gender: 0,
        id: 3608272,
        known_for_department: 'Acting',
        name: 'Aleksandr Krasnopolskiy',
        original_name: 'Aleksandr Krasnopolskiy',
        popularity: 1.96,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf52b4e640d6004ed00cb2',
            character: 'Control Room Scientist',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 727
      },
      {
        adult: false,
        gender: 2,
        id: 3250317,
        known_for_department: 'Acting',
        name: 'Mason Mecartea',
        original_name: 'Mason Mecartea',
        popularity: 2.503,
        profile_path: '/r9NdsyQb0ea9MDm0COmxqdFLUyA.jpg',
        roles: [
          {
            credit_id: '62bf52c76a300b007d76ce3f',
            character: 'Dan Shelter',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 728
      },
      {
        adult: false,
        gender: 2,
        id: 175895,
        known_for_department: 'Acting',
        name: 'Steve Stafford',
        original_name: 'Steve Stafford',
        popularity: 5.648,
        profile_path: '/5SpB8ZwHio6pSVkcBnYOvkcKgwB.jpg',
        roles: [
          {
            credit_id: '62bf5303202e110059dab454',
            character: 'Helicopter Pilot',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 732
      },
      {
        adult: false,
        gender: 2,
        id: 2034769,
        known_for_department: 'Acting',
        name: 'Artur Svorobovich',
        original_name: 'Artur Svorobovich',
        popularity: 2.81,
        profile_path: '/eAERrVoNgiDk4Jw8v2MnNu7MdYG.jpg',
        roles: [
          {
            credit_id: '62bf5316af6e94046b3e797d',
            character: 'Prison Booth Guard #1',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 733
      },
      {
        adult: false,
        gender: 2,
        id: 1019097,
        known_for_department: 'Acting',
        name: 'Jason Vail',
        original_name: 'Jason Vail',
        popularity: 3.262,
        profile_path: '/vxvjwfe2GxlyBeDTd8ubyAJWYF.jpg',
        roles: [
          {
            credit_id: '62bf533312197e004fb12cd5',
            character: 'Lead Lab Guard',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 735
      },
      {
        adult: false,
        gender: 2,
        id: 1567589,
        known_for_department: 'Acting',
        name: 'John Atwood',
        original_name: 'John Atwood',
        popularity: 3.604,
        profile_path: '/zbmnPnV7HEuJnkAO0T7BCNzADZg.jpg',
        roles: [
          {
            credit_id: '62bf5483af6e94046b3e79d3',
            character: 'TV Reporter',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 739
      },
      {
        adult: false,
        gender: 1,
        id: 1786725,
        known_for_department: 'Acting',
        name: 'Zele Avradopoulos',
        original_name: 'Zele Avradopoulos',
        popularity: 3.465,
        profile_path: '/kLNxsFxEtVU5xC1GHhmmIizQ1jT.jpg',
        roles: [
          {
            credit_id: '62bf54936818880059b0e56c',
            character: 'Volunteer #2',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 740
      },
      {
        adult: false,
        gender: 0,
        id: 2828485,
        known_for_department: 'Camera',
        name: 'Andrés Figueroa',
        original_name: 'Andrés Figueroa',
        popularity: 1.591,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf54bacf4a64007b1dc5a3',
            character: 'Argyle 2.0',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 742
      },
      {
        adult: false,
        gender: 0,
        id: 3170680,
        known_for_department: 'Acting',
        name: 'Belle Henry',
        original_name: 'Belle Henry',
        popularity: 2.306,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf54c96818880059b0e577',
            character: 'Young Max',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 743
      },
      {
        adult: false,
        gender: 2,
        id: 1291693,
        known_for_department: 'Acting',
        name: 'Jack Justice',
        original_name: 'Jack Justice',
        popularity: 6.107,
        profile_path: '/jDryubh0KOehgdtXnxCflaBnCAY.jpg',
        roles: [
          {
            credit_id: '62bf54e822e4800495def79d',
            character: 'Older Skater',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 745
      },
      {
        adult: false,
        gender: 0,
        id: 3072775,
        known_for_department: 'Acting',
        name: 'Elizabeth Youman',
        original_name: 'Elizabeth Youman',
        popularity: 1.96,
        profile_path: null,
        roles: [
          {
            credit_id: '62bf5538105611005b5e8ff7',
            character: 'Friendly Volunteer',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 750
      },
      {
        adult: false,
        gender: 2,
        id: 17825,
        known_for_department: 'Directing',
        name: 'Shawn Levy',
        original_name: 'Shawn Levy',
        popularity: 25.945,
        profile_path: '/b1ulkCHz8biG87LjLQQiMCebEZo.jpg',
        roles: [
          {
            credit_id: '63e3c017fac502007c5a020e',
            character: 'Morgue Worker',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 753
      },
      {
        adult: false,
        gender: 2,
        id: 2077864,
        known_for_department: 'Acting',
        name: 'Chase Stokes',
        original_name: 'Chase Stokes',
        popularity: 10.906,
        profile_path: '/okoMZYMICceGRrca6jhCVkDxVxi.jpg',
        roles: [
          {
            credit_id: '64c27eff1cfe3a0eb30c78f3',
            character: 'Reed',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 756
      },
      {
        adult: false,
        gender: 1,
        id: 4457171,
        known_for_department: 'Acting',
        name: 'Jamieson Deacy',
        original_name: 'Jamieson Deacy',
        popularity: 1.48,
        profile_path: '/c1BAyqqNvyWJY2L57KBCWVJW3PR.jpg',
        roles: [
          {
            credit_id: '65914f8157176f6a957fd2a5',
            character: 'Erica’s friend',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 758
      },
      {
        adult: false,
        gender: 2,
        id: 4542122,
        known_for_department: 'Acting',
        name: 'Alexander Chernyshev',
        original_name: 'Alexander Chernyshev',
        popularity: 2.606,
        profile_path: '/aZHCBtwFrXHnyyrZmUL3SEz14OP.jpg',
        roles: [
          {
            credit_id: '65d0f5e4fcb8cc017b458c18',
            character: 'Russian Scientist',
            episode_count: 1
          }
        ],
        total_episode_count: 1,
        order: 759
      }
    ],
    crew: [
      {
        adult: false,
        gender: 1,
        id: 1285825,
        known_for_department: 'Art',
        name: 'Jess Royal',
        original_name: 'Jess Royal',
        popularity: 2.74,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac21a9251410bfc000043',
            job: 'Set Decoration',
            episode_count: 34
          }
        ],
        department: 'Art',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 966560,
        known_for_department: 'Art',
        name: 'Chris Trujillo',
        original_name: 'Chris Trujillo',
        popularity: 3.402,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac1fb9251410d63000029',
            job: 'Production Design',
            episode_count: 34
          }
        ],
        department: 'Art',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 0,
        id: 1423257,
        known_for_department: 'Art',
        name: 'Sean Brennan',
        original_name: 'Sean Brennan',
        popularity: 1.788,
        profile_path: null,
        jobs: [
          {
            credit_id: '629762d6f8e98225613cc364',
            job: 'Art Direction',
            episode_count: 26
          }
        ],
        department: 'Art',
        total_episode_count: 26
      },
      {
        adult: false,
        gender: 0,
        id: 2028802,
        known_for_department: 'Art',
        name: 'John Snow',
        original_name: 'John Snow',
        popularity: 2.564,
        profile_path: null,
        jobs: [
          {
            credit_id: '62938a5c5a46900067c805f3',
            job: 'Art Direction',
            episode_count: 9
          }
        ],
        department: 'Art',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 933506,
        known_for_department: 'Art',
        name: 'William G. Davis',
        original_name: 'William G. Davis',
        popularity: 1.96,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac20c9251410db600001c',
            job: 'Art Direction',
            episode_count: 8
          }
        ],
        department: 'Art',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 1485876,
        known_for_department: 'Camera',
        name: 'Tim Ives',
        original_name: 'Tim Ives',
        popularity: 2.709,
        profile_path: '/cgQkPbS2akrEZlawCi5DN0AkPqs.jpg',
        jobs: [
          {
            credit_id: '60a81c446ee3d70029419e54',
            job: 'Director of Photography',
            episode_count: 19
          }
        ],
        department: 'Camera',
        total_episode_count: 19
      },
      {
        adult: false,
        gender: 2,
        id: 1830362,
        known_for_department: 'Camera',
        name: 'Caleb Heymann',
        original_name: 'Caleb Heymann',
        popularity: 1.4,
        profile_path: null,
        jobs: [
          {
            credit_id: '625b02c20e29a20067666b01',
            job: 'Director of Photography',
            episode_count: 7
          }
        ],
        department: 'Camera',
        total_episode_count: 7
      },
      {
        adult: false,
        gender: 2,
        id: 1122452,
        known_for_department: 'Camera',
        name: 'Lachlan Milne',
        original_name: 'Lachlan Milne',
        popularity: 2.766,
        profile_path: '/m0WJrEKHWfjN18npXbPFMSCV9xM.jpg',
        jobs: [
          {
            credit_id: '60a81ce8501cf20078c51192',
            job: 'Director of Photography',
            episode_count: 5
          }
        ],
        department: 'Camera',
        total_episode_count: 5
      },
      {
        adult: false,
        gender: 2,
        id: 1580138,
        known_for_department: 'Camera',
        name: 'Tod Campbell',
        original_name: 'Tod Campbell',
        popularity: 2.916,
        profile_path: '/897Bl0aU94N0otv4Ab1gCr29yDV.jpg',
        jobs: [
          {
            credit_id: '60a81c4dbbd0b0002b40b3f3',
            job: 'Director of Photography',
            episode_count: 4
          }
        ],
        department: 'Camera',
        total_episode_count: 4
      },
      {
        adult: false,
        gender: 2,
        id: 993751,
        known_for_department: 'Camera',
        name: 'Brett Jutkiewicz',
        original_name: 'Brett Jutkiewicz',
        popularity: 3.205,
        profile_path: '/oG4TfazKcYypAiKr8KQwxl6wIgU.jpg',
        jobs: [
          {
            credit_id: '625b02dc17505100a017bc62',
            job: 'Director of Photography',
            episode_count: 2
          }
        ],
        department: 'Camera',
        total_episode_count: 2
      },
      {
        adult: false,
        gender: 1,
        id: 1533587,
        known_for_department: 'Costume & Make-Up',
        name: 'Sarah Hindsgaul',
        original_name: 'Sarah Hindsgaul',
        popularity: 1.388,
        profile_path: '/mBiQtZV33h0BW98ERjQpwXuEJ40.jpg',
        jobs: [
          {
            credit_id: '6297639ed48cee2c45c3bb68',
            job: 'Hairstylist',
            episode_count: 34
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 0,
        id: 1448743,
        known_for_department: 'Costume & Make-Up',
        name: 'Amy L. Forsythe',
        original_name: 'Amy L. Forsythe',
        popularity: 1.715,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac2469251410d5f000059',
            job: 'Makeup Artist',
            episode_count: 34
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 0,
        id: 2025119,
        known_for_department: 'Costume & Make-Up',
        name: 'Amy Parris',
        original_name: 'Amy Parris',
        popularity: 2.244,
        profile_path: null,
        jobs: [
          {
            credit_id: '629764b3a44d095274c3e4a8',
            job: 'Costume Design',
            episode_count: 17
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 17
      },
      {
        adult: false,
        gender: 1,
        id: 1153001,
        known_for_department: 'Costume & Make-Up',
        name: 'Kim Wilcox',
        original_name: 'Kim Wilcox',
        popularity: 3.291,
        profile_path: null,
        jobs: [
          {
            credit_id: '629762b03faba00050904333',
            job: 'Costume Design',
            episode_count: 9
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1228626,
        known_for_department: 'Acting',
        name: 'Kimora Lee Simmons',
        original_name: 'Kimora Lee Simmons',
        popularity: 2.114,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac2a8c3a36813b300007d',
            job: 'Hairstylist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 109129,
        known_for_department: 'Costume & Make-Up',
        name: 'Myke Michaels',
        original_name: 'Myke Michaels',
        popularity: 7.643,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac289c3a36813b3000072',
            job: 'Makeup Artist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1573037,
        known_for_department: 'Costume & Make-Up',
        name: 'Suzanna Boykin',
        original_name: 'Suzanna Boykin',
        popularity: 3.276,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac29c9251410bfc00006a',
            job: 'Hairstylist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1547655,
        known_for_department: 'Costume & Make-Up',
        name: 'Teresa Vest',
        original_name: 'Teresa Vest',
        popularity: 1.062,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac27bc3a36803d7000389',
            job: 'Makeup Artist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1685633,
        known_for_department: 'Costume & Make-Up',
        name: 'Cass McClure',
        original_name: 'Cass McClure',
        popularity: 1.65,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac2dcc3a36803d70003a9',
            job: 'Makeup Artist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1179273,
        known_for_department: 'Costume & Make-Up',
        name: 'Malgosia Turzanska',
        original_name: 'Malgosia Turzanska',
        popularity: 2.093,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac22a9251417e8f000328',
            job: 'Costume Design',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 1,
        id: 1685631,
        known_for_department: 'Costume & Make-Up',
        name: 'Evelyn Roach',
        original_name: 'Evelyn Roach',
        popularity: 1.306,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac26d9251417e8a0003d3',
            job: 'Hairstylist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1685632,
        known_for_department: 'Costume & Make-Up',
        name: 'Julie Hill-Parker',
        original_name: 'Julie Hill-Parker',
        popularity: 0.766,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac2b29251410d6600007e',
            job: 'Makeup Artist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 1,
        id: 587803,
        known_for_department: 'Costume & Make-Up',
        name: 'Kimberly Adams',
        original_name: 'Kimberly Adams',
        popularity: 3.17,
        profile_path: '/hf94FYY3ggQiCi1gDuxOlx3zlA4.jpg',
        jobs: [
          {
            credit_id: '57eac235c3a36803e1000300',
            job: 'Costume Design',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1332524,
        known_for_department: 'Costume & Make-Up',
        name: 'Ren Rohling',
        original_name: 'Ren Rohling',
        popularity: 2.888,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac2929251410bfc000066',
            job: 'Makeup Artist',
            episode_count: 8
          }
        ],
        department: 'Costume & Make-Up',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 2256001,
        known_for_department: 'Crew',
        name: 'Maciej Kubica',
        original_name: 'Maciej Kubica',
        popularity: 2.588,
        profile_path: '/cikpIcudWdwprIl7qT1mQ3kCg1y.jpg',
        jobs: [
          {
            credit_id: '65a1d912d4fe0401223c551f',
            job: 'Stunt Coordinator',
            episode_count: 9
          }
        ],
        department: 'Crew',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1685634,
        known_for_department: 'Crew',
        name: 'Joshua Kohl Hegmann',
        original_name: 'Joshua Kohl Hegmann',
        popularity: 1.22,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac2f19251417e8a000404',
            job: 'Post Production Supervisor',
            episode_count: 8
          }
        ],
        department: 'Crew',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 155416,
        known_for_department: 'Acting',
        name: 'Kevin Kirkpatrick',
        original_name: 'Kevin Kirkpatrick',
        popularity: 5.768,
        profile_path: '/2xyYPajozspKyrEqguoXWAUOD0K.jpg',
        jobs: [
          {
            credit_id: '57eac2c69251410d63000061',
            job: 'Makeup Effects',
            episode_count: 8
          }
        ],
        department: 'Crew',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 1179422,
        known_for_department: 'Writing',
        name: 'Ross Duffer',
        original_name: 'Ross Duffer',
        popularity: 10.302,
        profile_path: '/kN1HdFViQkcJOQlNcvvFJIx9Uju.jpg',
        jobs: [
          {
            credit_id: '57b20174c3a3686a54000afa',
            job: 'Director',
            episode_count: 19
          }
        ],
        department: 'Directing',
        total_episode_count: 19
      },
      {
        adult: false,
        gender: 2,
        id: 1179419,
        known_for_department: 'Writing',
        name: 'Matt Duffer',
        original_name: 'Matt Duffer',
        popularity: 7.833,
        profile_path: '/kXO5CnSxC0znMAICGxnPeuGP73U.jpg',
        jobs: [
          {
            credit_id: '57b20164c3a36869e5000ba5',
            job: 'Director',
            episode_count: 19
          }
        ],
        department: 'Directing',
        total_episode_count: 19
      },
      {
        adult: false,
        gender: 2,
        id: 17825,
        known_for_department: 'Directing',
        name: 'Shawn Levy',
        original_name: 'Shawn Levy',
        popularity: 25.945,
        profile_path: '/b1ulkCHz8biG87LjLQQiMCebEZo.jpg',
        jobs: [
          {
            credit_id: '57b201e6c3a368019a003110',
            job: 'Director',
            episode_count: 8
          }
        ],
        department: 'Directing',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 41671,
        known_for_department: 'Directing',
        name: 'Nimród Antal',
        original_name: 'Nimród Antal',
        popularity: 4.685,
        profile_path: '/x0fSNFKlhcAbbuvFPHPuTSUvOBY.jpg',
        jobs: [
          {
            credit_id: '625b0384229ae20051fc236c',
            job: 'Director',
            episode_count: 2
          }
        ],
        department: 'Directing',
        total_episode_count: 2
      },
      {
        adult: false,
        gender: 2,
        id: 7,
        known_for_department: 'Writing',
        name: 'Andrew Stanton',
        original_name: 'Andrew Stanton',
        popularity: 26.465,
        profile_path: '/tRwWuo06aN9vuXAPaswMN42x2ii.jpg',
        jobs: [
          {
            credit_id: '59fbe8b592514113a6020823',
            job: 'Director',
            episode_count: 2
          }
        ],
        department: 'Directing',
        total_episode_count: 2
      },
      {
        adult: false,
        gender: 1,
        id: 51853,
        known_for_department: 'Directing',
        name: 'Uta Briesewitz',
        original_name: 'Uta Briesewitz',
        popularity: 6.92,
        profile_path: '/4sIx2ojAeGjGB4FzxhbAL15DeFy.jpg',
        jobs: [
          {
            credit_id: '5c2b777392514122b86c9661',
            job: 'Director',
            episode_count: 2
          }
        ],
        department: 'Directing',
        total_episode_count: 2
      },
      {
        adult: false,
        gender: 1,
        id: 936974,
        known_for_department: 'Directing',
        name: 'Rebecca Thomas',
        original_name: 'Rebecca Thomas',
        popularity: 3.913,
        profile_path: '/oBEuF3C430rN277VbP64csrwRwC.jpg',
        jobs: [
          {
            credit_id: '60a81edf66e469002cf0c9ed',
            job: 'Director',
            episode_count: 1
          }
        ],
        department: 'Directing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 0,
        id: 1228522,
        known_for_department: 'Directing',
        name: 'Richard Denault',
        original_name: 'Richard Denault',
        popularity: 3.725,
        profile_path: null,
        jobs: [
          {
            credit_id: '59fcaa62925141138b0310b3',
            job: 'First Assistant Director',
            episode_count: 1
          }
        ],
        department: 'Directing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 0,
        id: 1916849,
        known_for_department: 'Directing',
        name: 'Simeon Jones',
        original_name: 'Simeon Jones',
        popularity: 1.616,
        profile_path: null,
        jobs: [
          {
            credit_id: '59fcaa83925141138b0310ed',
            job: 'Second Assistant Director',
            episode_count: 1
          }
        ],
        department: 'Directing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 2,
        id: 54271,
        known_for_department: 'Editing',
        name: 'Dean Zimmerman',
        original_name: 'Dean Zimmerman',
        popularity: 3.366,
        profile_path: '/6mKK4thSO0CthmhygO2spWyVjcv.jpg',
        jobs: [
          {
            credit_id: '57eac1dfc3a368141f000024',
            job: 'Editor',
            episode_count: 9
          }
        ],
        department: 'Editing',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 2,
        id: 37003,
        known_for_department: 'Editing',
        name: 'Kevin D. Ross',
        original_name: 'Kevin D. Ross',
        popularity: 3.265,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac1d19251410bfc000027',
            job: 'Editor',
            episode_count: 8
          }
        ],
        department: 'Editing',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 3608275,
        known_for_department: 'Editing',
        name: 'Kat Naranjo',
        original_name: 'Kat Naranjo',
        popularity: 1.564,
        profile_path: null,
        jobs: [
          {
            credit_id: '62bf538df1b571004cf5ea98',
            job: 'Editor',
            episode_count: 2
          }
        ],
        department: 'Editing',
        total_episode_count: 2
      },
      {
        adult: false,
        gender: 1,
        id: 51922,
        known_for_department: 'Production',
        name: 'Carmen Cuba',
        original_name: 'Carmen Cuba',
        popularity: 7.109,
        profile_path: '/994fHTwOhrpvO8mnroGaGHZ2s11.jpg',
        jobs: [
          {
            credit_id: '57eac1ed9251410d6600003e',
            job: 'Casting',
            episode_count: 34
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 1179422,
        known_for_department: 'Writing',
        name: 'Ross Duffer',
        original_name: 'Ross Duffer',
        popularity: 10.302,
        profile_path: '/kN1HdFViQkcJOQlNcvvFJIx9Uju.jpg',
        jobs: [
          {
            credit_id: '59fcad9bc3a3681a3f02c2a4',
            job: 'Executive Producer',
            episode_count: 34
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 17825,
        known_for_department: 'Directing',
        name: 'Shawn Levy',
        original_name: 'Shawn Levy',
        popularity: 25.945,
        profile_path: '/b1ulkCHz8biG87LjLQQiMCebEZo.jpg',
        jobs: [
          {
            credit_id: '59fcae48c3a3681a1b032109',
            job: 'Executive Producer',
            episode_count: 34
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 1,
        id: 230436,
        known_for_department: 'Production',
        name: 'Barbara Harris',
        original_name: 'Barbara Harris',
        popularity: 11.257,
        profile_path: '/d1BGeZT2b81Wa9gCOPdrXGWUtmR.jpg',
        jobs: [
          {
            credit_id: '6463608ba672540185894a9e',
            job: 'ADR Voice Casting',
            episode_count: 34
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 1718785,
        known_for_department: 'Production',
        name: 'Dan Cohen',
        original_name: 'Dan Cohen',
        popularity: 1.96,
        profile_path: null,
        jobs: [
          {
            credit_id: '62975f53d48cee2c45c3b031',
            job: 'Executive Producer',
            episode_count: 34
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 64723,
        known_for_department: 'Production',
        name: 'Iain Paterson',
        original_name: 'Iain Paterson',
        popularity: 2.744,
        profile_path: null,
        jobs: [
          {
            credit_id: '644d8b4a6eecee04e800d7c7',
            job: 'Co-Executive Producer',
            episode_count: 8
          },
          {
            credit_id: '644d8baf9affc00546df9556',
            job: 'Executive Producer',
            episode_count: 26
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 1179419,
        known_for_department: 'Writing',
        name: 'Matt Duffer',
        original_name: 'Matt Duffer',
        popularity: 7.833,
        profile_path: '/kXO5CnSxC0znMAICGxnPeuGP73U.jpg',
        jobs: [
          {
            credit_id: '59fcac1992514113a602e2f6',
            job: 'Executive Producer',
            episode_count: 34
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 3025043,
        known_for_department: 'Production',
        name: 'Rand Geiger',
        original_name: 'Rand Geiger',
        popularity: 2.445,
        profile_path: null,
        jobs: [
          {
            credit_id: '59fca6afc3a3681aa5032812',
            job: 'Producer',
            episode_count: 34
          }
        ],
        department: 'Production',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 1,
        id: 2387486,
        known_for_department: 'Production',
        name: 'Emily Morris',
        original_name: 'Emily Morris',
        popularity: 3.628,
        profile_path: null,
        jobs: [
          {
            credit_id: '629765961e9225009cdf851f',
            job: 'Co-Producer',
            episode_count: 9
          },
          {
            credit_id: '62976194a44d095274c3db1a',
            job: 'Associate Producer',
            episode_count: 17
          }
        ],
        department: 'Production',
        total_episode_count: 26
      },
      {
        adult: false,
        gender: 2,
        id: 1729244,
        known_for_department: 'Production',
        name: 'Diego Garzon',
        original_name: 'Diego Garzon',
        popularity: 1.4,
        profile_path: null,
        jobs: [
          {
            credit_id: '59553f6ac3a368382e037222',
            job: 'Assistant Production Coordinator',
            episode_count: 25
          }
        ],
        department: 'Production',
        total_episode_count: 25
      },
      {
        adult: false,
        gender: 1,
        id: 1887703,
        known_for_department: 'Production',
        name: 'Paula Kramer',
        original_name: 'Paula Kramer',
        popularity: 1.4,
        profile_path: null,
        jobs: [
          {
            credit_id: '59fcaa9fc3a3681a8302d9e5',
            job: 'Production Supervisor',
            episode_count: 1
          },
          {
            credit_id: '6297605acddbbc130cc3e27e',
            job: 'Co-Producer',
            episode_count: 17
          }
        ],
        department: 'Production',
        total_episode_count: 18
      },
      {
        adult: false,
        gender: 2,
        id: 937878,
        known_for_department: 'Writing',
        name: 'Curtis Gwinn',
        original_name: 'Curtis Gwinn',
        popularity: 3.63,
        profile_path: '/1jciurTIeGHlkHZt3qAU89JU4ld.jpg',
        jobs: [
          {
            credit_id: '62975f42d48cee2c4633a379',
            job: 'Executive Producer',
            episode_count: 9
          },
          {
            credit_id: '62976046a44d095276df51a7',
            job: 'Co-Executive Producer',
            episode_count: 8
          }
        ],
        department: 'Production',
        total_episode_count: 17
      },
      {
        adult: false,
        gender: 2,
        id: 1685635,
        known_for_department: 'Directing',
        name: 'Timothy J. Lonsdale',
        original_name: 'Timothy J. Lonsdale',
        popularity: 1.788,
        profile_path: null,
        jobs: [
          {
            credit_id: '57eac2fd9251417e970003a3',
            job: 'Unit Production Manager',
            episode_count: 17
          }
        ],
        department: 'Production',
        total_episode_count: 17
      },
      {
        adult: false,
        gender: 0,
        id: 1228522,
        known_for_department: 'Directing',
        name: 'Richard Denault',
        original_name: 'Richard Denault',
        popularity: 3.725,
        profile_path: null,
        jobs: [
          {
            credit_id: '62976585ca83541354701911',
            job: 'Co-Producer',
            episode_count: 9
          }
        ],
        department: 'Production',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1113659,
        known_for_department: 'Production',
        name: 'Iddo Lampton Enochs Jr.',
        original_name: 'Iddo Lampton Enochs Jr.',
        popularity: 1.96,
        profile_path: null,
        jobs: [
          {
            credit_id: '62976552cddbbc130eef3df0',
            job: 'Producer',
            episode_count: 9
          }
        ],
        department: 'Production',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 2,
        id: 1301304,
        known_for_department: 'Writing',
        name: 'Justin Doble',
        original_name: 'Justin Doble',
        popularity: 2.193,
        profile_path: '/7bTwDKXb8BsvI5b1b4UeKQhBCCN.jpg',
        jobs: [
          {
            credit_id: '62976185df86a834e23776b9',
            job: 'Producer',
            episode_count: 9
          }
        ],
        department: 'Production',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1762796,
        known_for_department: 'Directing',
        name: 'Tudor Jones',
        original_name: 'Tudor Jones',
        popularity: 2.916,
        profile_path: null,
        jobs: [
          {
            credit_id: '6297656e1e9225004f7d875b',
            job: 'Co-Producer',
            episode_count: 9
          }
        ],
        department: 'Production',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1685634,
        known_for_department: 'Crew',
        name: 'Joshua Kohl Hegmann',
        original_name: 'Joshua Kohl Hegmann',
        popularity: 1.22,
        profile_path: null,
        jobs: [
          {
            credit_id: '629765c9a44d095276df5f3e',
            job: 'Associate Producer',
            episode_count: 9
          }
        ],
        department: 'Production',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 2,
        id: 1695622,
        known_for_department: 'Production',
        name: 'Brian Wright',
        original_name: 'Brian Wright',
        popularity: 2.232,
        profile_path: null,
        jobs: [
          {
            credit_id: '5803e79a9251411aae0046b9',
            job: 'Executive Producer',
            episode_count: 8
          }
        ],
        department: 'Production',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 99411,
        known_for_department: 'Writing',
        name: 'Karl Gajdusek',
        original_name: 'Karl Gajdusek',
        popularity: 5.541,
        profile_path: '/oeZTXdtTbqiW9uWoxFw35jbjsD0.jpg',
        jobs: [
          {
            credit_id: '644d8a02f90b19061613183f',
            job: 'Executive Producer',
            episode_count: 8
          }
        ],
        department: 'Production',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 1,
        id: 1562492,
        known_for_department: 'Writing',
        name: 'Jessica Mecklenburg',
        original_name: 'Jessica Mecklenburg',
        popularity: 1.62,
        profile_path: null,
        jobs: [
          {
            credit_id: '644d8ac8be4b360a9b546dc0',
            job: 'Co-Executive Producer',
            episode_count: 8
          }
        ],
        department: 'Production',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 1,
        id: 1458687,
        known_for_department: 'Production',
        name: 'Cindy Holland',
        original_name: 'Cindy Holland',
        popularity: 1.651,
        profile_path: null,
        jobs: [
          {
            credit_id: '644d8ae34d23dd070992be6d',
            job: 'Executive Producer',
            episode_count: 8
          }
        ],
        department: 'Production',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 2,
        id: 1161919,
        known_for_department: 'Writing',
        name: 'William Bridges',
        original_name: 'William Bridges',
        popularity: 5.231,
        profile_path: '/yumpeLMGCWiSJdLPM42WPllnIuJ.jpg',
        jobs: [
          {
            credit_id: '62976082cddbbc130eef309b',
            job: 'Co-Producer',
            episode_count: 8
          }
        ],
        department: 'Production',
        total_episode_count: 8
      },
      {
        adult: true,
        gender: 2,
        id: 1685626,
        known_for_department: 'Sound',
        name: 'Kyle Dixon',
        original_name: 'Kyle Dixon',
        popularity: 1.284,
        profile_path: null,
        jobs: [
          {
            credit_id: '60a81e185541fa006df080d3',
            job: 'Original Music Composer',
            episode_count: 34
          }
        ],
        department: 'Sound',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 2,
        id: 2225636,
        known_for_department: 'Sound',
        name: 'Michael Stein',
        original_name: 'Michael Stein',
        popularity: 0.704,
        profile_path: null,
        jobs: [
          {
            credit_id: '60a81e21d55e4d003f146125',
            job: 'Original Music Composer',
            episode_count: 34
          }
        ],
        department: 'Sound',
        total_episode_count: 34
      },
      {
        adult: false,
        gender: 1,
        id: 1824567,
        known_for_department: 'Sound',
        name: 'Nora Felder',
        original_name: 'Nora Felder',
        popularity: 1.985,
        profile_path: null,
        jobs: [
          {
            credit_id: '629764fda44d095276df5d09',
            job: 'Music Supervisor',
            episode_count: 17
          }
        ],
        department: 'Sound',
        total_episode_count: 17
      },
      {
        adult: false,
        gender: 0,
        id: 1373432,
        known_for_department: 'Visual Effects',
        name: 'Christina Graff',
        original_name: 'Christina Graff',
        popularity: 3.142,
        profile_path: null,
        jobs: [
          {
            credit_id: '629763345507e9149384ed37',
            job: 'Visual Effects Producer',
            episode_count: 9
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1373433,
        known_for_department: 'Visual Effects',
        name: 'Paul Graff',
        original_name: 'Paul Graff',
        popularity: 3.751,
        profile_path: null,
        jobs: [
          {
            credit_id: '62976320df86a834e0b896fc',
            job: 'Visual Effects Supervisor',
            episode_count: 9
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1708858,
        known_for_department: 'Visual Effects',
        name: 'Terron Pratt',
        original_name: 'Terron Pratt',
        popularity: 1.62,
        profile_path: null,
        jobs: [
          {
            credit_id: '6297663c1e9225009cdf86a0',
            job: 'Visual Effects Producer',
            episode_count: 9
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 2,
        id: 3153656,
        known_for_department: 'Art',
        name: 'Mike Maher',
        original_name: 'Mike Maher',
        popularity: 1.216,
        profile_path: null,
        jobs: [
          {
            credit_id: '6297660a5507e914925ed80e',
            job: 'Visual Effects Supervisor',
            episode_count: 9
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 573297,
        known_for_department: 'Crew',
        name: 'Lea Prainsack',
        original_name: 'Lea Prainsack',
        popularity: 2.188,
        profile_path: null,
        jobs: [
          {
            credit_id: '629766455507e914925ed871',
            job: 'Visual Effects Producer',
            episode_count: 9
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 9
      },
      {
        adult: false,
        gender: 0,
        id: 1419605,
        known_for_department: 'Visual Effects',
        name: 'Brooke Lyndon-Stanford',
        original_name: 'Brooke Lyndon-Stanford',
        popularity: 4.101,
        profile_path: null,
        jobs: [
          {
            credit_id: '61f013eb9e45860107328cb9',
            job: 'Visual Effects Supervisor',
            episode_count: 8
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1392906,
        known_for_department: 'Visual Effects',
        name: 'Gayle Busby',
        original_name: 'Gayle Busby',
        popularity: 1.989,
        profile_path: null,
        jobs: [
          {
            credit_id: '62976413ca83541353b6a85d',
            job: 'Visual Effects Producer',
            episode_count: 8
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 113130,
        known_for_department: 'Visual Effects',
        name: 'Thomas F. Ford IV',
        original_name: 'Thomas F. Ford IV',
        popularity: 3.011,
        profile_path: null,
        jobs: [
          {
            credit_id: '629764471e9225009cdf81e7',
            job: 'Visual Effects Producer',
            episode_count: 8
          }
        ],
        department: 'Visual Effects',
        total_episode_count: 8
      },
      {
        adult: false,
        gender: 0,
        id: 1666688,
        known_for_department: 'Writing',
        name: 'Jessie Nickson-Lopez',
        original_name: 'Jessie Nickson-Lopez',
        popularity: 2.744,
        profile_path: '/nheqrMWbfgsc1uq69hcfU8CbCTA.jpg',
        jobs: [
          {
            credit_id: '59fca9bfc3a3681a8302d87b',
            job: 'Story Editor',
            episode_count: 1
          },
          {
            credit_id: '6297624aa44d095275e46f8b',
            job: 'Executive Story Editor',
            episode_count: 9
          },
          {
            credit_id: '57b202d092514147840030b7',
            job: 'Writer',
            episode_count: 2
          }
        ],
        department: 'Writing',
        total_episode_count: 12
      },
      {
        adult: false,
        gender: 2,
        id: 1666689,
        known_for_department: 'Writing',
        name: 'Paul Dichter',
        original_name: 'Paul Dichter',
        popularity: 2.158,
        profile_path: null,
        jobs: [
          {
            credit_id: '59fcaa00c3a3681adf02cdf1',
            job: 'Writer',
            episode_count: 4
          },
          {
            credit_id: '586e9e63925141294e00a1b5',
            job: 'Story',
            episode_count: 1
          }
        ],
        department: 'Writing',
        total_episode_count: 5
      },
      {
        adult: false,
        gender: 1,
        id: 1916848,
        known_for_department: 'Writing',
        name: 'Kate Trefry',
        original_name: 'Kate Trefry',
        popularity: 1.398,
        profile_path: '/RYoRQPYeGhSQP6y0X5x6LG8THM.jpg',
        jobs: [
          {
            credit_id: '59fcaa1d925141138b031070',
            job: 'Writer',
            episode_count: 4
          }
        ],
        department: 'Writing',
        total_episode_count: 4
      },
      {
        adult: false,
        gender: 2,
        id: 1301304,
        known_for_department: 'Writing',
        name: 'Justin Doble',
        original_name: 'Justin Doble',
        popularity: 2.193,
        profile_path: '/7bTwDKXb8BsvI5b1b4UeKQhBCCN.jpg',
        jobs: [
          {
            credit_id: '57b203009251411a45000bb8',
            job: 'Writer',
            episode_count: 3
          }
        ],
        department: 'Writing',
        total_episode_count: 3
      },
      {
        adult: false,
        gender: 2,
        id: 937878,
        known_for_department: 'Writing',
        name: 'Curtis Gwinn',
        original_name: 'Curtis Gwinn',
        popularity: 3.63,
        profile_path: '/1jciurTIeGHlkHZt3qAU89JU4ld.jpg',
        jobs: [
          {
            credit_id: '5d1fa439a4f03c000e64ea7a',
            job: 'Writer',
            episode_count: 2
          }
        ],
        department: 'Writing',
        total_episode_count: 2
      },
      {
        adult: false,
        gender: 2,
        id: 1179422,
        known_for_department: 'Writing',
        name: 'Ross Duffer',
        original_name: 'Ross Duffer',
        popularity: 10.302,
        profile_path: '/kN1HdFViQkcJOQlNcvvFJIx9Uju.jpg',
        jobs: [
          {
            credit_id: '586e9e54c3a3683b6900948c',
            job: 'Teleplay',
            episode_count: 1
          }
        ],
        department: 'Writing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 0,
        id: 3566405,
        known_for_department: 'Writing',
        name: 'Caitlin Schneiderhan',
        original_name: 'Caitlin Schneiderhan',
        popularity: 1.4,
        profile_path: null,
        jobs: [
          {
            credit_id: '629116ed5a46900067bf12b2',
            job: 'Writer',
            episode_count: 1
          }
        ],
        department: 'Writing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 2,
        id: 1161919,
        known_for_department: 'Writing',
        name: 'William Bridges',
        original_name: 'William Bridges',
        popularity: 5.231,
        profile_path: '/yumpeLMGCWiSJdLPM42WPllnIuJ.jpg',
        jobs: [
          {
            credit_id: '5d1f9f2515c6360010f4fd8c',
            job: 'Writer',
            episode_count: 1
          }
        ],
        department: 'Writing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 1,
        id: 1825196,
        known_for_department: 'Writing',
        name: 'Alison Tatlock',
        original_name: 'Alison Tatlock',
        popularity: 3.567,
        profile_path: '/ecwoedjgH2x5IecaR1oWcaujrD0.jpg',
        jobs: [
          {
            credit_id: '5dd479182634620012b65360',
            job: 'Writer',
            episode_count: 1
          }
        ],
        department: 'Writing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 2,
        id: 1179419,
        known_for_department: 'Writing',
        name: 'Matt Duffer',
        original_name: 'Matt Duffer',
        popularity: 7.833,
        profile_path: '/kXO5CnSxC0znMAICGxnPeuGP73U.jpg',
        jobs: [
          {
            credit_id: '586e9e43c3a3683b6900947e',
            job: 'Teleplay',
            episode_count: 1
          }
        ],
        department: 'Writing',
        total_episode_count: 1
      },
      {
        adult: false,
        gender: 1,
        id: 1562492,
        known_for_department: 'Writing',
        name: 'Jessica Mecklenburg',
        original_name: 'Jessica Mecklenburg',
        popularity: 1.62,
        profile_path: null,
        jobs: [
          {
            credit_id: '57b2022ac3a36869e5000bf3',
            job: 'Writer',
            episode_count: 1
          }
        ],
        department: 'Writing',
        total_episode_count: 1
      }
    ]
  },
  content_ratings: {
    results: [
      {
        descriptors: [],
        iso_3166_1: 'GB',
        rating: '15'
      },
      {
        descriptors: [],
        iso_3166_1: 'FR',
        rating: '16'
      },
      {
        descriptors: [],
        iso_3166_1: 'US',
        rating: 'TV-MA'
      },
      {
        descriptors: [],
        iso_3166_1: 'CA',
        rating: '14+'
      },
      {
        descriptors: [],
        iso_3166_1: 'AU',
        rating: 'MA15+'
      },
      {
        descriptors: [],
        iso_3166_1: 'RU',
        rating: '16+'
      },
      {
        descriptors: [],
        iso_3166_1: 'DE',
        rating: '16'
      },
      {
        descriptors: [],
        iso_3166_1: 'KR',
        rating: '15'
      },
      {
        descriptors: [],
        iso_3166_1: 'BR',
        rating: '16'
      },
      {
        descriptors: [],
        iso_3166_1: 'NL',
        rating: '16'
      },
      {
        descriptors: [],
        iso_3166_1: 'PT',
        rating: '16'
      },
      {
        descriptors: [],
        iso_3166_1: 'ES',
        rating: '16'
      },
      {
        descriptors: [],
        iso_3166_1: 'SG',
        rating: 'NC16'
      },
      {
        descriptors: [],
        iso_3166_1: 'IN',
        rating: 'U/A 16+'
      },
      {
        descriptors: [],
        iso_3166_1: 'MX',
        rating: 'B'
      },
      {
        descriptors: [],
        iso_3166_1: 'GR',
        rating: '16'
      },
      {
        descriptors: [],
        iso_3166_1: 'PR',
        rating: 'TV-14'
      },
      {
        descriptors: [],
        iso_3166_1: 'VI',
        rating: 'TV-14'
      },
      {
        descriptors: [],
        iso_3166_1: 'PT',
        rating: 'NR'
      },
      {
        descriptors: [],
        iso_3166_1: 'AU',
        rating: 'M'
      }
    ]
  },
  external_ids: {
    imdb_id: 'tt4574334',
    freebase_mid: null,
    freebase_id: null,
    tvdb_id: 305288,
    tvrage_id: 48493,
    wikidata_id: 'Q19798734',
    facebook_id: 'StrangerThingsTV',
    instagram_id: 'strangerthingstv',
    twitter_id: 'Stranger_Things'
  },
  images: {
    backdrops: [],
    logos: [],
    posters: []
  },
  keywords: {
    results: [
      {
        name: 'love triangle',
        id: 128
      },
      {
        name: 'skateboarding',
        id: 390
      },
      {
        name: 'sheriff',
        id: 798
      },
      {
        name: 'monster',
        id: 1299
      },
      {
        name: 'small town',
        id: 1415
      },
      {
        name: 'experiment',
        id: 1706
      },
      {
        name: 'halloween',
        id: 3335
      },
      {
        name: 'telekinesis',
        id: 5086
      },
      {
        name: 'nostalgia',
        id: 5609
      },
      {
        name: 'friendship',
        id: 6054
      },
      {
        name: 'supernatural',
        id: 6152
      },
      {
        name: 'drug scene',
        id: 6691
      },
      {
        name: 'coming of age',
        id: 10683
      },
      {
        name: 'female protagonist',
        id: 11322
      },
      {
        name: 'redemption',
        id: 11436
      },
      {
        name: 'cheerleading',
        id: 11672
      },
      {
        name: 'evil corporation',
        id: 11738
      },
      {
        name: 'psychological thriller',
        id: 12565
      },
      {
        name: 'single mother',
        id: 14768
      },
      {
        name: 'parallel world',
        id: 33465
      },
      {
        name: 'super power',
        id: 33637
      },
      {
        name: 'missing person',
        id: 156091
      },
      {
        name: 'missing child',
        id: 156948
      },
      {
        name: 'computer nerd',
        id: 168153
      },
      {
        name: 'government conspiracy',
        id: 181635
      },
      {
        name: 'chief of police',
        id: 185644
      },
      {
        name: 'family tension',
        id: 190491
      },
      {
        name: 'superhero kids',
        id: 191219
      },
      {
        name: 'teen drama',
        id: 193400
      },
      {
        name: '1980s',
        id: 208289
      },
      {
        name: '80s throwback',
        id: 243262
      },
      {
        name: 'supernatural horror',
        id: 256183
      },
      {
        name: 'teen romance',
        id: 265577
      },
      {
        name: 'horror',
        id: 315058
      }
    ]
  },
  recommendations: {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/n6vVs6z8obNbExdD3QHTr4Utu1Z.jpg',
        id: 76479,
        name: 'The Boys',
        original_language: 'en',
        original_name: 'The Boys',
        overview: 'La serie tiene lugar en un mundo en el que los superhéroes representan el lado oscuro de la celebridad y la fama. Un grupo de vigilantes que se hacen llamar 'The Boys' decide hacer todo lo posible por frenar a los superhéroes que están perjudicando a la sociedad, independientemente de los riesgos que ello conlleva.',
        poster_path: '/cSAN6ofLRwRiuwOHYD81p4k6Yks.jpg',
        media_type: 'tv',
        genre_ids: [
          10765,
          10759
        ],
        popularity: 317.918,
        first_air_date: '2019-07-25',
        vote_average: 8.5,
        vote_count: 9225,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg',
        id: 1399,
        name: 'Juego de tronos',
        original_language: 'en',
        original_name: 'Game of Thrones',
        overview: 'En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los reinos, la sangrienta batalla por el trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece 'Juego de tronos'.',
        poster_path: '/z9gCSwIObDOD2BEtmUwfasar3xs.jpg',
        media_type: 'tv',
        genre_ids: [
          10765,
          18,
          10759
        ],
        popularity: 1263.04,
        first_air_date: '2011-04-17',
        vote_average: 8.4,
        vote_count: 22747,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/7sqFEDDmK1hG5m92upolcfQxy7R.jpg',
        id: 75006,
        name: 'The Umbrella Academy',
        original_language: 'en',
        original_name: 'The Umbrella Academy',
        overview: 'Un grupo disuelto de superhéroes se reúne después de que su padre adoptivo, quien los entrenó para salvar el mundo, muere.',
        poster_path: '/4njlmokGMXZhzioCZyeS2nrcvmk.jpg',
        media_type: 'tv',
        genre_ids: [
          10759,
          10765,
          18
        ],
        popularity: 136.317,
        first_air_date: '2019-02-15',
        vote_average: 8.583,
        vote_count: 9076,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
        id: 1396,
        name: 'Breaking Bad',
        original_language: 'en',
        original_name: 'Breaking Bad',
        overview: 'Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn) y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno (Aaron Paul), fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.',
        poster_path: '/9VwacBsm73cH6Yj8PuIpHc7LuMr.jpg',
        media_type: 'tv',
        genre_ids: [
          18,
          80
        ],
        popularity: 653.994,
        first_air_date: '2008-01-20',
        vote_average: 8.9,
        vote_count: 13210,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg',
        id: 71446,
        name: 'La Casa de Papel',
        original_language: 'es',
        original_name: 'La Casa de Papel',
        overview: 'Un enigmático personaje llamado el Profesor planea algo grande: llevar a cabo el mayor atraco de la historia. Para ello recluta una banda de ocho personas que reúnen un único requisito, ninguno tiene nada que perder. Cinco meses de reclusión memorizando cada paso, cada detalle, cada probabilidad… y por fin, once días de encierro en la Fábrica Nacional de Moneda, rodeados de cuerpos de policía y con decenas de rehenes en su poder para saber si su apuesta suicida será todo o nada.',
        poster_path: '/z01Dc0Ly2GmCpLe6Scx4d3dPP1S.jpg',
        media_type: 'tv',
        genre_ids: [
          80,
          18
        ],
        popularity: 160.415,
        first_air_date: '2017-05-02',
        vote_average: 8.251,
        vote_count: 18159,
        origin_country: [
          'ES'
        ]
      },
      {
        adult: false,
        backdrop_path: '/wZMY9X8jtSS5GXFue2lvhgaJkii.jpg',
        id: 42009,
        name: 'Black Mirror',
        original_language: 'en',
        original_name: 'Black Mirror',
        overview: 'Black Mirror es una serie de televisión británica creada por Charlie Brooker que muestra el lado oscuro de la vida y la tecnología. La serie es producida por Zeppotron para Endemol. En cuanto al contenido del programa y la estructura, Brooker ha señalado que 'cada episodio tiene un tono diferente, un entorno diferente, incluso una realidad diferente, pero todos son acerca de la forma en que vivimos ahora - y la forma en que podríamos estar viviendo en 10 minutos si somos torpes'.',
        poster_path: '/6nDRo824oyBwg1prOZHc8UtonVB.jpg',
        media_type: 'tv',
        genre_ids: [
          10765,
          18,
          9648
        ],
        popularity: 401.474,
        first_air_date: '2011-12-04',
        vote_average: 8.294,
        vote_count: 4678,
        origin_country: [
          'GB'
        ]
      },
      {
        adult: false,
        backdrop_path: '/yGNnjoIGOdQy3douq60tULY8teK.jpg',
        id: 63247,
        name: 'Westworld',
        original_language: 'en',
        original_name: 'Westworld',
        overview: 'Westworld está ambientada en un parque de atracciones futurista dirigido por el Doctor Robert Ford. Las instalaciones cuentan con androides cuya apariencia física es humana, y gracias a ellos los visitantes pueden introducirse en cualquier tipo de fantasía, por muy oscura que sea...',
        poster_path: '/vRAFOKQ2JxOagiJZaGQxmqTY1yl.jpg',
        media_type: 'tv',
        genre_ids: [
          10765,
          37
        ],
        popularity: 380.128,
        first_air_date: '2016-10-02',
        vote_average: 8.061,
        vote_count: 5183,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/soQgquPkLmUu9eKLJJzuA4KZDyi.jpg',
        id: 69050,
        name: 'Riverdale',
        original_language: 'en',
        original_name: 'Riverdale',
        overview: 'Archie y sus amigos de Riverdale se verán envueltos en un siniestro misterio al tiempo que lidian con las complicaciones del sexo, el amor, los estudios y la familia.',
        poster_path: '/jSaOxEhgjg6OFX6OYqsRRYN4PtN.jpg',
        media_type: 'tv',
        genre_ids: [
          80,
          18,
          9648
        ],
        popularity: 431.117,
        first_air_date: '2017-01-26',
        vote_average: 8.463,
        vote_count: 13285,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/75HgaphatW0PDI3XIHQWZUpbhn6.jpg',
        id: 70523,
        name: 'Dark',
        original_language: 'de',
        original_name: 'Dark',
        overview: 'Tras la desaparición de un niño, cuatro familias desesperadas tratan de entender lo ocurrido a medida que van desvelando un retorcido misterio que abarca tres décadas.',
        poster_path: '/hRP7N2uI0pokxnkcMFONoOZnxbv.jpg',
        media_type: 'tv',
        genre_ids: [
          80,
          18,
          10765,
          9648
        ],
        popularity: 166.308,
        first_air_date: '2017-12-01',
        vote_average: 8.427,
        vote_count: 6299,
        origin_country: [
          'DE'
        ]
      },
      {
        adult: false,
        backdrop_path: '/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg',
        id: 60625,
        name: 'Rick y Morty',
        original_language: 'en',
        original_name: 'Rick and Morty',
        overview: 'Comedia animada que narra las aventuras de un científico loco Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.',
        poster_path: '/5Yiep9EwcQgLolg013ETBVqHxuD.jpg',
        media_type: 'tv',
        genre_ids: [
          16,
          35,
          10765,
          10759
        ],
        popularity: 728.757,
        first_air_date: '2013-12-02',
        vote_average: 8.702,
        vote_count: 9211,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/aDBRtunw49UF4XmqfyNuD9nlYIu.jpg',
        id: 63174,
        name: 'Lucifer',
        original_language: 'en',
        original_name: 'Lucifer',
        overview: 'La serie se centrará en Lucifer (Tom Ellis) quien, aburrido e infeliz como el Señor del Infierno, dimite de su trono y abandona su reino para trasladarse a la ciudad de Los Angeles y abrir un lujoso piano-bar llamado Lux. Una vez allí ayudará a la policía a castigar a los más peligrosos criminales de la ciudad.',
        poster_path: '/wQh2ytX0f8IfC3b2mKpDGOpGTXS.jpg',
        media_type: 'tv',
        genre_ids: [
          80,
          10765
        ],
        popularity: 620.1,
        first_air_date: '2016-01-25',
        vote_average: 8.5,
        vote_count: 14226,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/kfUWupX3phYp7AleZA2U1dmVcjX.jpg',
        id: 60574,
        name: 'Peaky Blinders',
        original_language: 'en',
        original_name: 'Peaky Blinders',
        overview: 'Una familia de pandilleros asentada en Birmingham, Reino Unido, tras la Primera Guerra Mundial (1914-1918), dirige un local de apuestas hípicas. Las actividades del ambicioso jefe de la banda llaman la atención del Inspector jefe Chester Campbell, un detective de la Real Policía Irlandesa que es enviado desde Belfast para limpiar la ciudad y acabar con la banda.',
        poster_path: '/tNjutGgaJpP30xUhfHihbcDgQUu.jpg',
        media_type: 'tv',
        genre_ids: [
          18,
          80
        ],
        popularity: 506.253,
        first_air_date: '2013-09-12',
        vote_average: 8.539,
        vote_count: 9342,
        origin_country: [
          'GB'
        ]
      },
      {
        adult: false,
        backdrop_path: '/4q6TBkY0Ilx7WtV5LX8HRqNHr5J.jpg',
        id: 19885,
        name: 'Sherlock',
        original_language: 'en',
        original_name: 'Sherlock',
        overview: 'En esta renovada versión de las historias de misterio de Arthur Conan Doyle, el excéntrico detective merodea por las calles del Londres de hoy en día en busca de pistas.',
        poster_path: '/iyfSdeZeAqj2farduoh5bvnZC5k.jpg',
        media_type: 'tv',
        genre_ids: [
          80,
          18,
          9648
        ],
        popularity: 161.199,
        first_air_date: '2010-07-25',
        vote_average: 8.525,
        vote_count: 5017,
        origin_country: [
          'GB'
        ]
      },
      {
        adult: false,
        backdrop_path: '/27b1gTpwjZiwGafp8n4XnZRYGEV.jpg',
        id: 81356,
        name: 'Sex Education',
        original_language: 'en',
        original_name: 'Sex Education',
        overview: 'Como el inseguro de Otis tiene respuesta para cualquier duda sobre sexo gracias a que su madre es sexóloga, una compañera lo anima a abrir una 'clínica' en el instituto.',
        poster_path: '/oOEOg8rawAtc1nRbgGkf5fYcMB4.jpg',
        media_type: 'tv',
        genre_ids: [
          35,
          18
        ],
        popularity: 165.472,
        first_air_date: '2019-01-11',
        vote_average: 8.277,
        vote_count: 6974,
        origin_country: [
          'GB'
        ]
      },
      {
        adult: false,
        backdrop_path: '/20eIP9o5ebArmu2HxJutaBjhLf4.jpg',
        id: 87108,
        name: 'Chernobyl',
        original_language: 'en',
        original_name: 'Chernobyl',
        overview: 'En Abril de 1986, la Central Nuclear de Chernóbil en Ucrania (en aquel entonces, la Unión Soviética), sufrió una explosión masiva que liberó material radioactivo en Bielorrusia, Rusia, Ucrania, así como en zonas de Escandinavia y Europa Central. La serie relata lo que aconteció en 1986, en uno de los mayores desastres provocados por el hombre en la historia reciente, así como los sacrificios realizados para salvar al continente de un desastre sin precedentes.',
        poster_path: '/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg',
        media_type: 'tv',
        genre_ids: [
          18
        ],
        popularity: 108.864,
        first_air_date: '2019-05-06',
        vote_average: 8.659,
        vote_count: 5771,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/2meX1nMdScFOoV4370rqHWKmXhY.jpg',
        id: 93405,
        name: 'El juego del calamar',
        original_language: 'ko',
        original_name: '오징어 게임',
        overview: 'Cientos de personas con problemas de dinero aceptan una invitación rarísima para competir en juegos infantiles. Dentro los esperan un tentador premio y desafíos letales.',
        poster_path: '/74qMRUy0lwkBBi39vsQVerIDkHj.jpg',
        media_type: 'tv',
        genre_ids: [
          10759,
          9648,
          18
        ],
        popularity: 142.455,
        first_air_date: '2021-09-17',
        vote_average: 7.832,
        vote_count: 13454,
        origin_country: [
          'KR'
        ]
      },
      {
        adult: false,
        backdrop_path: '/x4salpjB11umlUOltfNvSSrjSXm.jpg',
        id: 1402,
        name: 'The Walking Dead',
        original_language: 'en',
        original_name: 'The Walking Dead',
        overview: ''The Walking Dead' está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta. La serie, explora las dificultades de los protagonistas para sobrevivir en un mundo poblado por el horror, así como las relaciones personales que se establecen entre ellos, en ocasiones también una amenaza para su supervivencia.',
        poster_path: '/hUblG1KZCTRpHc3wqqoU0DW98Q3.jpg',
        media_type: 'tv',
        genre_ids: [
          10759,
          18,
          10765
        ],
        popularity: 545.547,
        first_air_date: '2010-10-31',
        vote_average: 8.1,
        vote_count: 15867,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',
        id: 119051,
        name: 'Miércoles',
        original_language: 'en',
        original_name: 'Wednesday',
        overview: 'Miércoles Addams, lista, sarcástica y un poco muerta por dentro, investiga una oleada de asesinatos mientras hace amigos —y enemigos— en la Academia Nunca Más.',
        poster_path: '/AeG9sp5Buuy9oDZpSdCJzvyyh6a.jpg',
        media_type: 'tv',
        genre_ids: [
          10765,
          9648,
          35
        ],
        popularity: 188.797,
        first_air_date: '2022-11-23',
        vote_average: 8.501,
        vote_count: 8024,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg',
        id: 1668,
        name: 'Friends',
        original_language: 'en',
        original_name: 'Friends',
        overview: 'Las aventuras de seis jóvenes neoyorquinos unidos por una divertida amistad. Entre el amor, el trabajo y la familia, comparten sus alegrías y preocupaciones en el Central Perk, su café favorito.',
        poster_path: '/rkKCSlr8OH5tbKEdgwtzvEiemrl.jpg',
        media_type: 'tv',
        genre_ids: [
          35
        ],
        popularity: 576.34,
        first_air_date: '1994-09-22',
        vote_average: 8.442,
        vote_count: 7564,
        origin_country: [
          'US'
        ]
      },
      {
        adult: false,
        backdrop_path: '/tl0mg7lOnS6tP8ngH0QwgMLQdpV.jpg',
        id: 76669,
        name: 'Élite',
        original_language: 'es',
        original_name: 'Élite',
        overview: 'Las Encinas, un exclusivo colegio privado al que la élite social del país envía a sus hijos. Pero en el centro son admitidos tres adolescentes de familias humildes después de que un terremoto destruyera el colegio público en el que estudiaban. El choque de clases genera diversos problemas que se agravan hasta que, de repente, se produce un asesinato.',
        poster_path: '/huNXLixx8W5DLrmlhDeoNy4w7Az.jpg',
        media_type: 'tv',
        genre_ids: [
          80,
          9648,
          18
        ],
        popularity: 215.745,
        first_air_date: '2018-10-05',
        vote_average: 8.052,
        vote_count: 8958,
        origin_country: [
          'ES'
        ]
      },
      {
        adult: false,
        backdrop_path: '/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',
        id: 82856,
        name: 'The Mandalorian',
        original_language: 'en',
        original_name: 'The Mandalorian',
        overview: 'En el anárquico período tras el hundimiento del Imperio Galáctico, un cazarrecompensas con armadura conocido solo como El Mandaloriano emprende una misión bien remunerada aunque enigmática.',
        poster_path: '/iLg3DzrwCDsHNovNaWx5JnQAsiV.jpg',
        media_type: 'tv',
        genre_ids: [
          10765,
          10759,
          18
        ],
        popularity: 224.153,
        first_air_date: '2019-11-12',
        vote_average: 8.445,
        vote_count: 9652,
        origin_country: [
          'US'
        ]
      }
    ],
    total_pages: 2,
    total_results: 40
  },
  lists: {
    page: 1,
    results: [
      {
        description: '',
        favorite_count: 0,
        id: 7067809,
        item_count: 87,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series favoritas',
        poster_path: null
      },
      {
        description: 'Llista de series vistes',
        favorite_count: 0,
        id: 125800,
        item_count: 83,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series Vistes',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 7112367,
        item_count: 64,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Anime/Serie Abandonadas',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8282212,
        item_count: 288,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series Vistas',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 145018,
        item_count: 455,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series Jaume',
        poster_path: null
      },
      {
        description: 'Todas las series y películas que ha visto Paoly',
        favorite_count: 0,
        id: 8276005,
        item_count: 432,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Watchlist de Paoly',
        poster_path: null
      },
      {
        description: 'Todas las series y películas que ha visto Diego',
        favorite_count: 0,
        id: 8276006,
        item_count: 351,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Watchlist de Diego',
        poster_path: null
      },
      {
        description: 'Valoracion Propia del 1 al 10',
        favorite_count: 0,
        id: 8247122,
        item_count: 133,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series Vistas',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8269408,
        item_count: 60,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8223954,
        item_count: 30,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'SERIES TV ',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8258240,
        item_count: 28,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series que tengo que ver',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8275504,
        item_count: 602,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Peliculas&Series',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8284926,
        item_count: 23,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Visionadas',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8286264,
        item_count: 9,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Best Series✨⭐️',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8285731,
        item_count: 23,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Serie',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 125801,
        item_count: 37,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series per Veure',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8207140,
        item_count: 344,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Vistas',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 127516,
        item_count: 1010,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'radarr',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 106767,
        item_count: 20,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series',
        poster_path: null
      },
      {
        description: '',
        favorite_count: 0,
        id: 8262299,
        item_count: 41,
        iso_639_1: 'es',
        iso_3166_1: 'ES',
        name: 'Series',
        poster_path: null
      }
    ],
    total_pages: 4,
    total_results: 77
  },
  reviews: {
    page: 1,
    results: [
      {
        author: 'evaesqmor',
        author_details: {
          name: '',
          username: 'evaesqmor',
          avatar_path: '/n7MIUqUKlciODnsstcrKEg8naR7.jpg',
          rating: 10
        },
        content: 'Es genial.',
        created_at: '2020-09-01T15:57:37.783Z',
        id: '5f4e6f71b2681f0031e49e1b',
        updated_at: '2021-06-23T15:58:43.816Z',
        url: 'https://www.themoviedb.org/review/5f4e6f71b2681f0031e49e1b'
      }
    ],
    total_pages: 1,
    total_results: 1
  },
  videos: {
    results: []
  },
  'watch/providers': {
    results: {
      AD: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=AD',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      AE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=AE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      AG: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=AG',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      AL: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=AL',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      AR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=AR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      AT: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=AT',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      AU: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=AU',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 57
          }
        ]
      },
      BA: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BA',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      BB: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BB',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      BE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      BG: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BG',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      BH: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BH',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      BM: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BM',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      BO: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BO',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      BR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 2
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 60
          }
        ]
      },
      BS: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=BS',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      CA: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CA',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 111
          }
        ]
      },
      CH: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CH',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      CI: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CI',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      CL: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CL',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      CO: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CO',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      CR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      CV: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CV',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      CZ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=CZ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      DE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=DE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 111
          }
        ]
      },
      DK: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=DK',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      DO: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=DO',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      DZ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=DZ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      EC: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=EC',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      EE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=EE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      EG: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=EG',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      ES: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=ES',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 2
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 65
          }
        ]
      },
      FI: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=FI',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      FJ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=FJ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      FR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=FR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 79
          }
        ]
      },
      GB: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GB',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          },
          {
            logo_path: '/1UrT2H9x6DuQ9ytNhsSCUFtTUwS.jpg',
            provider_id: 29,
            provider_name: 'Sky Go',
            display_priority: 9
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 109
          }
        ]
      },
      GF: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GF',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      GG: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GG',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      GH: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GH',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      GI: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GI',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      GQ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GQ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      GR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      GT: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=GT',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      HK: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=HK',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      HN: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=HN',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      HR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=HR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      HU: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=HU',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      ID: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=ID',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      IE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=IE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          },
          {
            logo_path: '/1UrT2H9x6DuQ9ytNhsSCUFtTUwS.jpg',
            provider_id: 29,
            provider_name: 'Sky Go',
            display_priority: 8
          }
        ]
      },
      IL: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=IL',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      IN: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=IN',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      IQ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=IQ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      IS: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=IS',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      IT: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=IT',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 67
          }
        ]
      },
      JM: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=JM',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      JO: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=JO',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      JP: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=JP',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          },
          {
            logo_path: '/a5T7vNaGvoeckYO6rQkHolvyYf4.jpg',
            provider_id: 84,
            provider_name: 'U-NEXT',
            display_priority: 4
          },
          {
            logo_path: '/dQeAar5H991VYporEjUspolDarG.jpg',
            provider_id: 9,
            provider_name: 'Amazon Prime Video',
            display_priority: 5
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 30
          }
        ]
      },
      KE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=KE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      KR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=KR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 30
          }
        ],
        rent: [
          {
            logo_path: '/crFbxg6jkiKc14gpIGMkre9Y3mu.jpg',
            provider_id: 96,
            provider_name: 'Naver Store',
            display_priority: 6
          }
        ]
      },
      KW: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=KW',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      LB: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=LB',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      LC: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=LC',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      LI: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=LI',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      LT: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=LT',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      LV: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=LV',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      LY: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=LY',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      MA: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MA',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      MC: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MC',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      MD: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MD',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      MK: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MK',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      MT: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MT',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      MU: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MU',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      MX: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MX',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 54
          }
        ]
      },
      MY: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MY',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      MZ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=MZ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      NE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=NE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      NG: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=NG',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      NI: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=NI',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 12
          }
        ]
      },
      NL: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=NL',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 3
          }
        ]
      },
      NO: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=NO',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      NZ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=NZ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      OM: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=OM',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      PA: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PA',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      PE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      PF: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PF',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      PH: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PH',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      PK: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PK',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      PL: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PL',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      PS: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PS',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      PT: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PT',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      PY: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=PY',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      QA: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=QA',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      RO: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=RO',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      RS: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=RS',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      SA: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SA',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      SC: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SC',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      SE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      SG: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SG',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      SI: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SI',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      SK: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SK',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      SM: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SM',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      SN: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SN',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      SV: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=SV',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      TC: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=TC',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      TH: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=TH',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      TN: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=TN',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      TR: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=TR',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 1
          }
        ]
      },
      TT: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=TT',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      TW: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=TW',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      TZ: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=TZ',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      UG: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=UG',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      US: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=US',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          },
          {
            logo_path: '/kICQccvOh8AIBMHGkBXJ047xeHN.jpg',
            provider_id: 1796,
            provider_name: 'Netflix basic with Ads',
            display_priority: 207
          }
        ]
      },
      UY: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=UY',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      VE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=VE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      YE: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=YE',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      ZA: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=ZA',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      },
      ZM: {
        link: 'https://www.themoviedb.org/tv/66732-stranger-things/watch?locale=ZM',
        flatrate: [
          {
            logo_path: '/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg',
            provider_id: 8,
            provider_name: 'Netflix',
            display_priority: 0
          }
        ]
      }
    }
  }
}

const list = {
  'average_rating': 6.7,
  'backdrop_path': '/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
  'results': [
    {
      'adult': false,
      'backdrop_path': '/hFtJz4TvoiJJcw2ZOMdhK22aU9P.jpg',
      'id': 617127,
      'title': 'Blade',
      'original_language': 'en',
      'original_title': 'Blade',
      'overview': 'Película protagonizada por Mahershala Ali, encarnando a Blade, el famoso cazavampiros de Marvel Comics, creado por el escritor Marv Wolfman y el dibujante Gene Colan, su primera aparición fue en el comic book La tumba de Drácula número 10 (julio de 1973) como un personaje secundario.',
      'poster_path': '/fKqA4rgVJwrM7Gb3tQ9TGHnu8Tr.jpg',
      'media_type': 'movie',
      'runtime': null,
      'revenue': 0,
      'genre_ids': [
        14
      ],
      'popularity': 44.675,
      'release_date': '2025-11-05',
      'video': false,
      'vote_average': 0,
      'vote_count': 0
    },
    {
      'adult': false,
      'backdrop_path': '/vzVojqW0zF9QrXVGuj8PwhxWACD.jpg',
      'id': 986056,
      'title': 'Thunderbolts*',
      'original_language': 'en',
      'original_title': 'Thunderbolts*',
      'overview': 'Un grupo de supervillanos y antihéroes van en misiones para el gobierno. Basado en la serie de cómics del mismo nombre.',
      'poster_path': '/dHhniU1vz1C0j27AFdcsPmq6xu.jpg',
      'media_type': 'movie',
      'runtime': null,
      'revenue': 0,
      'genre_ids': [
        28,
        12
      ],
      'popularity': 8.261,
      'release_date': '2025-05-01',
      'video': false,
      'vote_average': 0,
      'vote_count': 0
    },
    {
      'adult': false,
      'backdrop_path': '/qYvpc3qLb0LpGOBS7JOq5RxYt0x.jpg',
      'id': 822119,
      'title': 'Capitán América: Un nuevo mundo',
      'original_language': 'en',
      'original_title': 'Captain America: Brave New World',
      'overview': 'Cuarta entrega de la saga 'Capitán América' incluida en el Universo Cinematográfico MARVEL.',
      'poster_path': '/ghkjPyaPGMfDufOa4D2A51DFGWr.jpg',
      'media_type': 'movie',
      'runtime': null,
      'revenue': 0,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 13.086,
      'release_date': '2025-02-12',
      'video': false,
      'vote_average': 0,
      'vote_count': 0
    },
    {
      'adult': false,
      'backdrop_path': '/nbq3LfgLXnL5ixZ1Q74jTJmhmTS.jpg',
      'id': 533535,
      'title': 'Deadpool y Lobezno',
      'original_language': 'en',
      'original_title': 'Deadpool & Wolverine',
      'overview': 'Tercera entrega del mercenario bocazas.',
      'poster_path': '/vzYui9pAXeUb6OKrRnqGEsGbp2o.jpg',
      'media_type': 'movie',
      'runtime': null,
      'revenue': 0,
      'genre_ids': [
        35,
        878,
        12
      ],
      'popularity': 111.196,
      'release_date': '2024-07-24',
      'video': false,
      'vote_average': 0,
      'vote_count': 0
    },
    {
      'adult': false,
      'backdrop_path': '/w4pRLYYbhHn3sh9kqRgPZM6GjyS.jpg',
      'id': 609681,
      'title': 'The Marvels',
      'original_language': 'en',
      'original_title': 'The Marvels',
      'overview': 'Cuando sus obligaciones la envían a un agujero de gusano vinculado a un revolucionario kree, los poderes de Carol Danvers, la capitana Marvel, se entremezclan con los de Kamala Khan, también conocida como la Sra. Marvel y la sobrina de Carol, ahora astronauta de S.A.B.E.R., Monica Rambeau. Juntas, deberán salvar el universo como \'The Marvels\'.',
      'poster_path': '/vpuuFM032yiX8tox4L84Wl9MGjG.jpg',
      'media_type': 'movie',
      'runtime': 105,
      'revenue': 207089999,
      'genre_ids': [
        878,
        12,
        28
      ],
      'popularity': 283.176,
      'release_date': '2023-11-08',
      'video': false,
      'vote_average': 6.195,
      'vote_count': 2168
    },
    {
      'adult': false,
      'backdrop_path': '/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
      'id': 447365,
      'title': 'Guardianes de la Galaxia: Volumen 3',
      'original_language': 'en',
      'original_title': 'Guardians of the Galaxy Vol. 3',
      'overview': 'La querida banda de los Guardianes se instala en Knowhere. Pero sus vidas no tardan en verse alteradas por los ecos del turbulento pasado de Rocket. Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en una peligrosa misión para salvar la vida de Rocket, una misión que, si no se completa con éxito, podría muy posiblemente conducir al final de los Guardianes tal y como los conocemos.',
      'poster_path': '/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg',
      'media_type': 'movie',
      'runtime': 150,
      'revenue': 845600000,
      'genre_ids': [
        878,
        12,
        28
      ],
      'popularity': 153.098,
      'release_date': '2023-05-03',
      'video': false,
      'vote_average': 7.976,
      'vote_count': 6147
    },
    {
      'adult': false,
      'backdrop_path': '/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg',
      'id': 640146,
      'title': 'Ant-Man y la Avispa: Quantumanía',
      'original_language': 'en',
      'original_title': 'Ant-Man and the Wasp: Quantumania',
      'overview': 'La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.',
      'poster_path': '/lKHy0ntGPdQeFwvNq8gK1D0anEr.jpg',
      'media_type': 'movie',
      'runtime': 125,
      'revenue': 476071180,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 88.218,
      'release_date': '2023-02-15',
      'video': false,
      'vote_average': 6.355,
      'vote_count': 4615
    },
    {
      'adult': false,
      'backdrop_path': '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
      'id': 505642,
      'title': 'Black Panther: Wakanda Forever',
      'original_language': 'en',
      'original_title': 'Black Panther: Wakanda Forever',
      'overview': 'La reina Ramonda, Shuri, M’Baku, Okoye y las Dora Milaje, luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia y Everett Ross, y forzar un nuevo destino para el reino de Wakanda.',
      'poster_path': '/mYpT2R7639KvKZ668uoQGS2QNFp.jpg',
      'media_type': 'movie',
      'runtime': 162,
      'revenue': 859102154,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 115.913,
      'release_date': '2022-11-09',
      'video': false,
      'vote_average': 7.139,
      'vote_count': 6052
    },
    {
      'adult': false,
      'backdrop_path': '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
      'id': 616037,
      'title': 'Thor: Love and Thunder',
      'original_language': 'en',
      'original_title': 'Thor: Love and Thunder',
      'overview': 'El Dios del Trueno emprende un viaje que no se parece en nada a lo que se ha enfrentado hasta ahora: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses. Para hacer frente a la amenaza, Thor solicita la ayuda de Valkiria, de Korg y de su ex novia Jane Foster que, para sorpresa de Thor, empuña su martillo mágico, Mjolnir, como la Poderosa Thor. Juntos, se embarcan en una aventura cósmica en la que tendrán que descubrir el misterio de la venganza del Carnicero de Dioses y detenerlo antes de que sea demasiado tarde.',
      'poster_path': '/z9ajF6E39Hg2pXUofmUYgZHvdX.jpg',
      'media_type': 'movie',
      'runtime': 119,
      'revenue': 760900000,
      'genre_ids': [
        14,
        28,
        35
      ],
      'popularity': 95.917,
      'release_date': '2022-07-06',
      'video': false,
      'vote_average': 6.475,
      'vote_count': 7057
    },
    {
      'adult': false,
      'backdrop_path': '/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg',
      'id': 453395,
      'title': 'Doctor Strange en el multiverso de la locura',
      'original_language': 'en',
      'original_title': 'Doctor Strange in the Multiverse of Madness',
      'overview': 'Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.',
      'poster_path': '/9VZO30aIAhQoiiP3qsRd5jd7UvQ.jpg',
      'media_type': 'movie',
      'runtime': 126,
      'revenue': 955775804,
      'genre_ids': [
        14,
        28,
        12
      ],
      'popularity': 89.633,
      'release_date': '2022-05-04',
      'video': false,
      'vote_average': 7.314,
      'vote_count': 8542
    },
    {
      'adult': false,
      'backdrop_path': '/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
      'id': 634649,
      'title': 'Spider-Man: No Way Home',
      'original_language': 'en',
      'original_title': 'Spider-Man: No Way Home',
      'overview': 'Peter Parker es desenmascarado y por tanto no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un súper héroe. Cuando pide ayuda a Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser Spider-Man.',
      'poster_path': '/miZFgV81xG324rpUknQX8dtXuBl.jpg',
      'media_type': 'movie',
      'runtime': 148,
      'revenue': 1921847111,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 226.654,
      'release_date': '2021-12-15',
      'video': false,
      'vote_average': 8,
      'vote_count': 19249
    },
    {
      'adult': false,
      'backdrop_path': '/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg',
      'id': 524434,
      'title': 'Eternals',
      'original_language': 'en',
      'original_title': 'Eternals',
      'overview': 'Hace millones de años, los seres cósmicos conocidos como los Celestiales comenzaron a experimentar genéticamente con los humanos. Su intención era crear individuos superpoderosos que hicieran únicamente el bien, pero algo salió mal y aparecieron los Desviantes, destruyendo y creando el caos a su paso. Ambas razas se han enfrentado en una eterna lucha de poder a lo largo de la historia. En medio de esta guerra, Ikaris y Sersi tratarán de vivir su propia historia de amor.',
      'poster_path': '/zp85WEn9YKM3Cajk4m4ZDcbCHpp.jpg',
      'media_type': 'movie',
      'runtime': 156,
      'revenue': 402064899,
      'genre_ids': [
        878,
        28,
        12
      ],
      'popularity': 70.55,
      'release_date': '2021-11-03',
      'video': false,
      'vote_average': 6.885,
      'vote_count': 7891
    },
    {
      'adult': false,
      'backdrop_path': '/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg',
      'id': 566525,
      'title': 'Shang-Chi y la leyenda de los Diez Anillos',
      'original_language': 'en',
      'original_title': 'Shang-Chi and the Legend of the Ten Rings',
      'overview': 'Adaptación cinematográfica del héroe creado por Steve Englehart y Jim Starlin en 1973, un personaje mitad chino, mitad americano, cuyo característico estilo de combate mezclaba kung-fu, nunchacos y armas de fuego.',
      'poster_path': '/3j7u3lqe2WJOlh9tEKHcbSMCBmW.jpg',
      'media_type': 'movie',
      'runtime': 132,
      'revenue': 432243292,
      'genre_ids': [
        28,
        12,
        14
      ],
      'popularity': 143.682,
      'release_date': '2021-09-01',
      'video': false,
      'vote_average': 7.561,
      'vote_count': 8941
    },
    {
      'adult': false,
      'backdrop_path': '/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg',
      'id': 497698,
      'title': 'Viuda negra',
      'original_language': 'en',
      'original_title': 'Black Widow',
      'overview': 'Natasha Romanoff, alias Viuda Negra, se enfrenta a las partes más oscuras de su historia cuando surge una peligrosa conspiración con vínculos con su pasado. Perseguida por una fuerza que no se detendrá ante nada para acabar con ella, Natasha debe enfrentarse a su historia como espía y a las relaciones rotas que dejó a su paso mucho antes de convertirse en una Vengadora.',
      'poster_path': '/oggEsESyLjVGD7jbIdBfa2hFUrx.jpg',
      'media_type': 'movie',
      'runtime': 134,
      'revenue': 379751131,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 85.54,
      'release_date': '2021-07-07',
      'video': false,
      'vote_average': 7.261,
      'vote_count': 9730
    },
    {
      'adult': false,
      'backdrop_path': '/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg',
      'id': 429617,
      'title': 'Spider-Man. Lejos de casa',
      'original_language': 'en',
      'original_title': 'Spider-Man: Far From Home',
      'overview': 'Peter Parker decide irse junto a Michelle Jones, Ned y el resto de sus amigos a pasar unas vacaciones a Europa después de los eventos ocurridos en Vengadores: EndGame. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuándo es reclutado por Nick Fury para unirse a Mysterio (un humano que proviene de la Tierra 833, una dimensión del multiverso, que tuvo su primera aparición en Doctor Strange) para luchar contra los elementales (cuatro entes inmortales que vienen de la misma dimensión y que dominan los cuatro elementos de la naturaleza, el fuego, el agua, el aire y la tierra) . En ese momento, Parker vuelve a ponerse el traje de Spider-Man para cumplir con  su labor.',
      'poster_path': '/iKVR1ba3W1wCm9bVCcpnNvxQUWX.jpg',
      'media_type': 'movie',
      'runtime': 135,
      'revenue': 1131927996,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 80.234,
      'release_date': '2019-06-28',
      'video': false,
      'vote_average': 7.432,
      'vote_count': 15049
    },
    {
      'adult': false,
      'backdrop_path': '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      'id': 299534,
      'title': 'Vengadores: Endgame',
      'original_language': 'en',
      'original_title': 'Avengers: Endgame',
      'overview': 'Después de los eventos devastadores de 'Vengadores: Infinity War', el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga \'Vengadores\'.',
      'poster_path': '/br6krBFpaYmCSglLBWRuhui7tPc.jpg',
      'media_type': 'movie',
      'runtime': 181,
      'revenue': 2800000000,
      'genre_ids': [
        12,
        878,
        28
      ],
      'popularity': 125.985,
      'release_date': '2019-04-24',
      'video': false,
      'vote_average': 8.256,
      'vote_count': 24717
    },
    {
      'adult': false,
      'backdrop_path': '/qAzYK4YPSWDc7aa4R43LcwRIAyb.jpg',
      'id': 299537,
      'title': 'Capitana Marvel',
      'original_language': 'en',
      'original_title': 'Captain Marvel',
      'overview': 'La historia sigue a Carol Danvers mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, 'Capitana Marvel' es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel.',
      'poster_path': '/5SPa7dZ85p54xa7E9tHRmfKq5ce.jpg',
      'media_type': 'movie',
      'runtime': 125,
      'revenue': 1131416446,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 115.44,
      'release_date': '2019-03-06',
      'video': false,
      'vote_average': 6.827,
      'vote_count': 15178
    },
    {
      'adult': false,
      'backdrop_path': '/iYdgEUE2W2aJkgqfSjf1x3gFfuV.jpg',
      'id': 363088,
      'title': 'Ant-Man y la Avispa',
      'original_language': 'en',
      'original_title': 'Ant-Man and the Wasp',
      'overview': 'Mientras Scott Lang se convierte en un súper héroe y en un padre, Hope van Dyne y el Dr. Hank Pym presentan una nueva misión urgente que encuentra a Ant-Man luchando junto a The Wasp para descubrir secretos de su pasado.',
      'poster_path': '/lwmCdtTvjnJZK79JKYkzkb0MFOP.jpg',
      'media_type': 'movie',
      'runtime': 118,
      'revenue': 622674139,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 39.529,
      'release_date': '2018-07-04',
      'video': false,
      'vote_average': 6.942,
      'vote_count': 12870
    },
    {
      'adult': false,
      'backdrop_path': '/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
      'id': 299536,
      'title': 'Vengadores: Infinity War',
      'original_language': 'en',
      'original_title': 'Avengers: Infinity War',
      'overview': 'El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?',
      'poster_path': '/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg',
      'media_type': 'movie',
      'runtime': 156,
      'revenue': 2052415039,
      'genre_ids': [
        12,
        28,
        878
      ],
      'popularity': 227.209,
      'release_date': '2018-04-25',
      'video': false,
      'vote_average': 8.248,
      'vote_count': 28730
    },
    {
      'adult': false,
      'backdrop_path': '/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg',
      'id': 284054,
      'title': 'Black Panther',
      'original_language': 'en',
      'original_title': 'Black Panther',
      'overview': 'Después de los acontecimientos de \'Capitán América: Civil War\', T'Challa vuelve a casa, la nación aislada y muy avanzada tecnológicamente de Wakanda, para ser proclamado Rey. Pero la reaparición de un viejo enemigo pone a prueba el temple de T'Challa como Rey y Black Panther ya que se ve arrastrado a un conflicto que pone en peligro todo el destino de Wakanda y del mundo.',
      'poster_path': '/lAPzezdc5E6DFnttJwCWXZ9A9C6.jpg',
      'media_type': 'movie',
      'runtime': 134,
      'revenue': 1349926083,
      'genre_ids': [
        28,
        12,
        878
      ],
      'popularity': 102.216,
      'release_date': '2018-02-13',
      'video': false,
      'vote_average': 7.386,
      'vote_count': 21562
    }
  ],
  'comments': {
    'movie:617127': null,
    'movie:986056': null,
    'movie:822119': null,
    'movie:533535': null,
    'movie:609681': null,
    'movie:447365': null,
    'movie:640146': null,
    'movie:505642': null,
    'movie:616037': null,
    'movie:453395': null,
    'movie:634649': null,
    'movie:524434': null,
    'movie:566525': null,
    'movie:497698': null,
    'movie:429617': null,
    'movie:299534': null,
    'movie:299537': null,
    'movie:363088': null,
    'movie:299536': null,
    'movie:284054': null
  },
  'created_by': {
    'avatar_path': '/xy44UvpbTgzs9kWmp4C3fEaCl5h.png',
    'gravatar_hash': 'c9e9fc152ee756a900db85757c29815d',
    'id': '4bc8892a017a3c0f92000002',
    'name': 'Travis Bell',
    'username': 'travisbell'
  },
  'description': 'The idea behind this list is to collect the live action comic book movies from within the Marvel franchise.',
  'id': 1,
  'iso_3166_1': 'US',
  'iso_639_1': 'en',
  'item_count': 69,
  'name': 'The Marvel Universe',
  'object_ids': {},
  'page': 1,
  'poster_path': '/coJVIUEOToAEGViuhclM7pXC75R.jpg',
  'public': true,
  'revenue': 40672159319,
  'runtime': 8070,
  'sort_by': 'primary_release_date.desc',
  'total_pages': 4,
  'total_results': 69
}