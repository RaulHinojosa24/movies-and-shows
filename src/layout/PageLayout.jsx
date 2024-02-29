import DefaultPoster from '../assets/default-poster.png'

export default function PageLayout ({ backdrop, poster, header, smallHeader, aside, smallAside, main, smallMain }) {
  const { left, right } = header
  // const { left: smallLeft, right: smallRight } = smallHeader

  const posterImg = poster
    ? 'https://image.tmdb.org/t/p/w342' + poster
    : DefaultPoster

  return (
    <>
      {header &&
        <header
          style={{
            backgroundImage: `
            linear-gradient(to bottom, rgba(200,200,200,0.15), 40%, rgb(10,10,10)),
            url("https://image.tmdb.org/t/p/w1280${backdrop}")
            /* -webkit-image-set(
              url("https://image.tmdb.org/t/p/w300${backdrop}") 0.5x,
              url("https://image.tmdb.org/t/p/w780${backdrop}") 1x,
              url("https://image.tmdb.org/t/p/w1280${backdrop}") 2x) */
              `
          }}
          className='bg-no-repeat bg-cover py-8'
        >
          <div className='mx-auto w-11/12 flex flex-col md:flex-row gap-8 items-end'>
            <section className='w-32 md:w-40 lg:w-48 xl:w-56 shrink-0 rounded overflow-hidden shadow-xl shadow-neutral-950'>
              <img className='aspect-[2/3] w-full object-contain' src={posterImg} alt='Poster de la pelicula' />
              {left}
            </section>
            <section className='flex-grow'>{right}</section>
          </div>
        </header>}
      <main className='mx-auto w-11/12 flex flex-col md:flex-row gap-8'>
        {aside &&
          <aside className='shrink-0 w-32 md:w-40 lg:w-48 xl:w-56'>{aside}</aside>}
        <section className={`${aside ? 'col-span-4' : 'col-span-full'}`}>{main}</section>
      </main>
    </>
  )
}
