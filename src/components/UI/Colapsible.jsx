export default function Colapsible ({ title, subtitle, children, className = '' }) {
  return (
    <details className={'pt-2 px-4 open:py-2 open:px-4 group shadow shadow-colors rounded ' + className}>
      <summary className='font-semibold cursor-pointer -mt-2 -mx-4 py-2 px-4 group-open:mb-2 group-open:border-b-1 dark:border-dark-2 border-light-3'>
        <div>{title}
          {subtitle &&
            <span className='font-normal text-medium'> &bull; {subtitle}</span>}
        </div>
      </summary>
      <div className='space-y-2'>{children}</div>
    </details>
  )
}
