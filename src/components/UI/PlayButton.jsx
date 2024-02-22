export default function PlayButton () {
  return (
    <span
      className='relative w-16 aspect-square rounded-full bg-neutral-900 bg-opacity-95 text-white hover:text-yellow-400 transition-all cursor-pointer'

    >
      <svg className='absolute w-1/3 left-1/2 top-1/2 -translate-x-[40%] -translate-y-1/2' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='4 2 19 20'>
        <path d='M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z' fill='currentColor' />
      </svg>
    </span>
  )
}
