export default function Colapsible ({ title, subtitle, children, className = '' }) {
  return (
    <details className={'pt-2 px-4 open:py-2 open:px-4 group ' + className}>
      <summary className='font-semibold cursor-pointer -mt-2 -mx-4 py-2 px-4 group-open:mb-2 group-open:border-b-1 border-neutral-700/50'>
        <div>{title}
          {subtitle &&
            <span className='font-normal text-neutral-500'> &bull; {subtitle}</span>}
        </div>
      </summary>
      {children}
    </details>
  )
}
